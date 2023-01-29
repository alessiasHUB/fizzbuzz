import { useState } from "react";
import { fizzBuzz } from "./utils/fizzBuzz";

function App(): JSX.Element {
  const [inputNum, setInputNum] = useState<string>("");
  const [fizzBuzzResult, setFizzBuzzResult] = useState<string>();

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
      {fizzBuzzResult && <p>{fizzBuzzResult}</p>}
      {isNaN(Number(inputNum)) && inputNum !== "" && <p>That's not a number</p>}
    </>
  );
}

export default App;
