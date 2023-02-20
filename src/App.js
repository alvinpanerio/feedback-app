import Header from "./components/Header";
import { useState } from "react";
import "./index.css";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  return (
    <>
      <Header />
      <div className="container">
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
