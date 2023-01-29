import { useState } from "react";
import { fizzBuzz, TFizzBuzzArr } from "./utils/fizzBuzz";

function App(): JSX.Element {
  const [inputNum, setInputNum] = useState<string>();
  const [fizzBuzzResult, setFizzBuzzResult] = useState<TFizzBuzzArr>([]);

  const handleFizzBuzzBtn = () => {
    if (inputNum) {
      setFizzBuzzResult(fizzBuzz(Number(inputNum)));
    }
  };

  return (
    <>
      <h1>A FizzBuzz App</h1>
      <input
        placeholder="input number"
        value={inputNum}
        onChange={(e) => setInputNum(e.target.value)}
      />
      <button onClick={handleFizzBuzzBtn}>FIZZBUZZ</button>
      <br />
      {fizzBuzzResult &&
        fizzBuzzResult.map((el, i) => <span key={i}>{el} </span>)}
      {isNaN(Number(inputNum)) && <p>That's not a number</p>}
    </>
  );
}

export default App;
