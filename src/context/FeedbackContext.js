import { createContext, useState, useEffect } from "react";
// import FeedbackData from "../data/FeedbackData";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("/feedback");
    const data = await response.json();
    setFeedback(data);
    setIsLoading(false);
  };

  const handleDelete = async (id) => {
    await fetch(`/feedback/${id}`, {
      method: "DELETE",
    });
    setFeedback(feedback.filter((i) => i.id !== id));
  };

  const handleEdit = (item) => {
    setFeedbackEdit({ item, edit: true });
  };

  const addFeedback = async (obj) => {
    const response = await fetch("/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    });

    setFeedback([...feedback, await response.json()]);
  };

  const updateFeedback = async (id, obj) => {
    const response = await fetch(`/feedback/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    });
    const data = await response.json();
    setFeedback(
      feedback.map((i) =>
        i.id === id ? { id, rating: data.rating, text: data.text } : i
      )
    );
    setFeedbackEdit({ item: {}, edit: false });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        handleDelete,
        addFeedback,
        handleEdit,
        feedbackEdit,
        updateFeedback,
        isLoading,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
