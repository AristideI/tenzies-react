import { useState } from "react";
export default function Dice(props) {
  let styles = {
    backgroundColor: props.isHeld ? "#a78bfa" : "#ede9fe",
    border: props.isHeld ? "2px solid #7c3aed" : "2px solid #a78bfa",
  };

  return (
    <button
      style={styles}
      id={props.id}
      value={props.val}
      onClick={props.hold}
      className="h-20 font-semibold text-3xl rounded-xl shadow-xl shadow-violet-300 font-serif grid place-content-center"
    >
      {props.value}
    </button>
  );
}
