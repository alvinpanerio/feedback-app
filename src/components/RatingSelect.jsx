import { useState } from "react";

function RatingSelect({ select }) {
  const [selected, setSelected] = useState(10);

  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleChange = (e) => {
    setSelected(e);
    select(e);
  };

  return (
    <ul className="rating">
      {array.map((i) => {
        return (
          <li key={`rating${i}`}>
            <input
              type="radio"
              id={`rating${i}`}
              checked={selected === i}
              onChange={() => {
                handleChange(i);
              }}
            />
            <label htmlFor={`rating${i}`}>{i}</label>
          </li>
        );
      })}
    </ul>
  );
}

export default RatingSelect;
