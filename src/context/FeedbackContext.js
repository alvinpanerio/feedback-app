import { createContext, useState } from "react";
import FeedbackData from "../data/FeedbackData";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(FeedbackData);
  const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false });

  const handleDelete = (id) => setFeedback(feedback.filter((i) => i.id !== id));

  const handleEdit = (item) => {
    setFeedbackEdit({ item, edit: true });
  };

  const addFeedback = (obj) => {
    setFeedback([...feedback, obj]);
  };

  const updateFeedback = (id, obj) => {
    setFeedback(
      feedback.map((i) =>
        i.id === id ? { id, rating: obj.rating, text: obj.text } : i
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
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
