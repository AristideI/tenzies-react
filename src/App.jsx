import { useState, useEffect } from "react";
import "./App.css";
import Dice from "./components/Dice";
import { nanoid } from "nanoid";

function App() {
  let [start, setStart] = useState(1);
  let [arr, setArr] = useState([]);
  let [goal, setGoal] = useState("None");
  useEffect(() => {
    let newArr = [...arr];
    for (let i = 0; i < 10; i++) {
      newArr.push(Math.floor(Math.random() * 9));
    }
    setArr(newArr);
  }, [start]);

  function goals(elt) {
    setGoal(elt);
  }

  function handleRoll() {
    setArr([
      ...arr.map((elt) => {
        if (elt != goal) {
          return Math.floor(Math.random() * 9);
        } else {
          return elt;
        }
      }),
    ]);
  }

  return (
    <article className="flex flex-col justify-center items-center h-screen gap-16">
      <section>
        <p className="font-bold font-serif text-5xl text-center">
          Tenzies Game
        </p>
        <p className="text-center font-serif text-xl mt-4">
          Roll until all dices are the same. Click Each die to freeze it at its
          current value between rolls
        </p>
      </section>
      <section className="w-2/5 grid grid-cols-5 gap-6">
        {arr.map((elt, ind) => (
          <Dice
            val={elt}
            checked={false}
            key={nanoid()}
            id={ind}
            goal={goal}
            setgoal={goals}
          />
        ))}
      </section>
      <button
        onClick={handleRoll}
        className="font-semibold text-2xl border-2 border-violet-400 bg-violet-300 px-12 py-2 rounded-xl"
      >
        Roll
      </button>
    </article>
  );
}

export default App;
