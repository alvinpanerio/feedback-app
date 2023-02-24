// import { useState } from "react";
import { FaTimes, FaEdit } from "react-icons/fa";
import { useContext } from "react";
import Card from "./shared/Card";
import PropTypes from "prop-types";
import FeedbackProvider from "../context/FeedbackContext";

function FeedbackItem({ item }) {
  //   const [rating, setRating] = useState(7);
  //   const [text, setText] = useState("Lorem ipsum dolor sit amet.");
  //   const plus = () => {
  //     setRating(rating + 1);
  //   };
  const { handleDelete, handleEdit } = useContext(FeedbackProvider);

  return (
    <Card reverse={false}>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => handleDelete(item.id)}>
        <FaTimes color="purple"></FaTimes>
      </button>
      <button className="edit" onClick={() => handleEdit(item)}>
        <FaEdit color="purple"></FaEdit>
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
