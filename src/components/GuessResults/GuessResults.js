import React from 'react';
import Guess from "../Guess";
import {range} from "../../utils";
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";

function GuessResults({guessData, answer}) {
  console.log(guessData);
  return <>
    <div className="guess-results">
      {
        range(0, NUM_OF_GUESSES_ALLOWED).map((num) => {
          return (
              <Guess key={num} guess={guessData[num]} answer={answer}/>
          )
        })

      }
    </div>
  </>;
}

export default GuessResults;
