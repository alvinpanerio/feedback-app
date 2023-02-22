import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";

function FeedbackForm({ addFeedback }) {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const handleText = (e) => {
    if (text.trim().length < 10) {
      setBtnDisabled(true);
      setMessage("Text must be at least 10 characters");
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      addFeedback({
        id: uuidv4(),
        rating,
        text,
      });
    }
    setText(10);
    setText("");
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate our service with us?</h2>
        <RatingSelect
          select={(rating) => {
            setRating(rating);
          }}
        />
        <div className="input-group">
          <input
            onChange={handleText}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
      </form>
      {message && <div className="message">{message}</div>}
    </Card>
  );
}

export default FeedbackForm;
