import React, {useState} from 'react';
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";

function Input({setGuessData, num, setNum, answer, guessData}) {
    const [guess, setGuess] = useState("");
  return (
      <form className="guess-input-wrapper" onSubmit={(event) => {
          event.preventDefault();
          const guessedValue = {
              guess: guess,
              id: crypto.randomUUID()
          }
          console.log(guessedValue);
          setGuessData((prev) => [...prev, guessedValue.guess])
          setNum(prev => prev + 1);
          setGuess("");
      }}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input disabled={NUM_OF_GUESSES_ALLOWED === num || guessData.includes(answer)} value={guess} id="guess-input"
               type="text"
               onChange={(event) => {
           const newValue = event.target.value;
           setGuess(newValue.toUpperCase());
        }} pattern={"[A-Za-z]{1,5}"}/>
      </form>
  )
}

export default Input;
