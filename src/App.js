import Header from "./components/Header";
import { useState } from "react";
import "./index.css";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  return (
    <>
      <Header />

      <div className="container">
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
