import FeedbackItem from "./FeedbackItem";
import PropTypes from "prop-types";

function FeedbackList({ feedback, handleDelete }) {
  if (!feedback.length) {
    return <p>No feedback</p>;
  }

  return (
    <>
      <div className="feedback-list">
        {feedback.map((i) => (
          <FeedbackItem key={i.id} item={i} handleDelete={handleDelete} />
        ))}
      </div>
    </>
  );
}

FeedbackList.propTypes = {
  feedback: PropTypes.array,
};

export default FeedbackList;
