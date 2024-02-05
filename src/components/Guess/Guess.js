import React from 'react';
import GuessResults from "../GuessResults";
import {range} from "../../utils";

function Guess({guess}) {
  return(<p className="guess">
    {guess ? guess.split("").map((letter, index) => {
      return (
          <span key={index} className="cell">
              {letter}
            </span>
      )

    }) : range(0, 5).map((i) => <span key={i} className="cell"></span>) }

  </p>)
}

export default Guess;
