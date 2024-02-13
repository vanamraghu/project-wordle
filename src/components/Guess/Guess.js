import React from 'react';
import GuessResults from "../GuessResults";
import {range} from "../../utils";
import {checkGuess} from "../../game-helpers";

function Guess({guess, answer}) {
  const guessResults = checkGuess(guess, answer);
  console.log(guessResults)
  return(<p className="guess">
    {guess ? guessResults.map((result, index) => {
      return (
          <span key={index} className={`cell ${result.status}`}>
              {guess[index]}
            </span>
      )

    }) : range(0, 5).map((i) => <span key={i} className="cell"></span>) }

  </p>)
}

export default Guess;
