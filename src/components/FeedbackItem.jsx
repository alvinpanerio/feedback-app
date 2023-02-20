// import { useState } from "react";
import Card from "./shared/Card";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";

function FeedbackItem({ item, handleDelete }) {
  //   const [rating, setRating] = useState(7);
  //   const [text, setText] = useState("Lorem ipsum dolor sit amet.");
  //   const plus = () => {
  //     setRating(rating + 1);
  //   };
  return (
    <Card reverse={false}>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => handleDelete(item.id)}>
        <FaTimes color="purple"></FaTimes>
      </button>
      <div className="text-display">{item.text}</div>
      {/* <button onClick={plus}>click</button> */}
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object,
};

export default FeedbackItem;
