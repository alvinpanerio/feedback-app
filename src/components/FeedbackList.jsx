import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import FeedbackItem from "./FeedbackItem";

function FeedbackList({ feedback, handleDelete }) {
  if (!feedback.length) {
    return <p>No feedback</p>;
  }

  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((i) => (
          <motion.div
            key={i.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem key={i.id} item={i} handleDelete={handleDelete} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );

  // return (
  //     <div className="feedback-list">
  //       {feedback.map((i) => (
  //         <FeedbackItem key={i.id} item={i} handleDelete={handleDelete} />
  //       ))}
  //     </div>
  // );
}

FeedbackList.propTypes = {
  feedback: PropTypes.array,
};

export default FeedbackList;
