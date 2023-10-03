import { useState, useEffect } from "react";
import "./App.css";
import Dice from "./components/Dice";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

function App() {
  let [arr, setArr] = useState(newDice());
  let [goal, setGoal] = useState(false);

  console.log(arr);

  function generate() {
    return {
      value: Math.ceil(Math.random() * 9),
      isHeld: false,
      id: nanoid(),
    };
  }
  function newDice() {
    const newarr = [];
    for (let i = 0; i < 10; i++) {
      newarr.push(generate());
    }

    return newarr;
  }

  function handleRoll() {
    if (goal) {
      setArr(newDice());
      setGoal(false);
    } else {
      setArr((arr) => {
        return arr.map((elt) => {
          if (elt.isHeld) {
            return elt;
          } else {
            return generate();
          }
        });
      });
    }
  }

  function HoldDice(id) {
    setArr((arr) => {
      return arr.map((elt) => {
        if (elt.id === id) {
          return { ...elt, isHeld: !elt.isHeld };
        } else {
          return elt;
        }
      });
    });
  }

  useEffect(() => {
    const pro = arr[0].value;
    if (arr.every((elt) => elt.isHeld && elt.value == pro)) {
      setGoal(true);
    }
  }, [arr]);

  return (
    <article className="flex flex-col justify-center items-center h-screen gap-16">
      {goal && <Confetti />}
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
        {arr.map((elt) => (
          <Dice
            key={elt.id}
            value={elt.value}
            isHeld={elt.isHeld}
            hold={() => HoldDice(elt.id)}
          />
        ))}
      </section>
      <button
        onClick={handleRoll}
        className="font-semibold text-2xl border-2 border-violet-400 bg-violet-300 px-12 py-2 rounded-xl"
      >
        {goal ? "New Game" : "Roll"}
      </button>
    </article>
  );
}

export default App;
