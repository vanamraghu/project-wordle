import React, {useState} from 'react';

function Input({setGuessData}) {
    const [guess, setGuess] = useState("")
  return (
      <form className="guess-input-wrapper" onSubmit={(event) => {
          event.preventDefault();
          const guessedValue = {
              guess: guess,
              id: crypto.randomUUID()
          }
          console.log(guessedValue);
          setGuessData((prev) => [...prev, guessedValue.guess])
          setGuess("");
      }}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input value={guess} id="guess-input"
               type="text"
               onChange={(event) => {
           const newValue = event.target.value;
           setGuess(newValue.toUpperCase());
        }} pattern={"[A-Za-z]{1,5}"}/>
      </form>
  )
}

export default Input;
