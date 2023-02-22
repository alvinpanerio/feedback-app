import { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  return (
    <>
      <Header />

      <div className="container">
        <FeedbackForm
          addFeedback={(obj) => {
            setFeedback([...feedback, obj]);
          }}
        />
        <FeedbackStats feedback={feedback} />
        <FeedbackList
          feedback={feedback}
          handleDelete={(id) =>
            setFeedback(feedback.filter((i) => i.id !== id))
          }
        />
      </div>
    </>
  );
}

export default App;
