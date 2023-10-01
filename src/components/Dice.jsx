import { useState } from "react";
export default function Dice(props) {
  let [check, setCheck] = useState(props.checker);

  let styles = {
    backgroundColor: check ? "#a78bfa" : "#ede9fe",
    border: check ? "2px solid #7c3aed" : "2px solid #a78bfa",
  };

  function handleClick(e) {
    if (props.goal === "None") {
      props.setgoal(e.target.value);
    } else {
      if (e.target.value === props.goal) {
        setCheck(!check);
      }
    }
  }
  return (
    <button
      style={styles}
      onClick={handleClick}
      id={props.id}
      value={props.val}
      className="h-20 font-semibold text-3xl rounded-xl shadow-xl shadow-violet-300 font-serif grid place-content-center"
    >
      {props.val}
    </button>
  );
}
