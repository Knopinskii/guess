import { useState } from "react";

function App() {
  let randomNum = Math.floor(Math.random() * 21) + 1;
  const [guess, setGuess] = useState("");
  const [count, setCount] = useState(10);
  const [random, setRandom] = useState(randomNum);
  const [message, setMessage] = useState("Start guessing...");
  const [showRandom, setShowRandom] = useState(false);

  function handleInputChange(e) {
    setGuess(e.target.value);
  }
  function handleSubmitButton(e) {
    e.preventDefault();

    setCount(count - 1);

    if (Number(random) === Number(guess)) {
      setRandom("");
      setCount("");
      setGuess("");
      setMessage("You won!!!");
    } else if (Number(random) > Number(guess)) {
      setMessage("Too low...");
      setGuess("");
    } else {
      setMessage("Too high...");
      setGuess("");
    }

    if (Number(count) <= 1) {
      setMessage("You lost");
      setRandom("");

      setGuess("");
    }
    if (Number(guess) > 20) {
      setMessage("Type a number no more than 20");
    }
  }

  function HandleRestart() {
    const newRandomNum = Math.floor(Math.random() * 20) + 1;

    setRandom(newRandomNum);
    setCount(10);
    setGuess("");
    setMessage("Start guessing...");
    setShowRandom(false);
  }

  return (
    <div>
      <div className="flex justify-center items-center font-sans">
        <h1 className="text-6xl pt-[5rem] uppercase">Guess My Number!</h1>
      </div>
      <div className="flex justify-center items-center py-5">
        <h3>from 1 to 20</h3>
      </div>
      <div className="text-center text-4xl py-5">
        {showRandom ? <h1>{random}</h1> : <span>❓</span>}
      </div>
      <div className="flex flex-col justify-center items-center py-10">
        {random === guess ? (
          ""
        ) : (
          <form className="">
            <input
              type="text"
              placeholder="type a number"
              className="bg-black text-white p-4 "
              value={guess}
              onChange={handleInputChange}
            />
            <button
              className="bg-black text-white p-4 "
              onClick={handleSubmitButton}
            >
              Check!
            </button>
          </form>
        )}

        <div className="py-5">{count}</div>
        <div className="py-5">
          <p>{message}</p>
        </div>
        <div className="p-2 bg-black text-white">
          <button onClick={HandleRestart}>Restart</button>
        </div>
      </div>
    </div>
  );
}

export default App;
