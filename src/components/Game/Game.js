import React, {useState} from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Input from "../Input";
import GuessResults from "../GuessResults";
import Guess from "../Guess";
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";
import guess from "../Guess";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

  const [guessData, setGuessData] = useState([]);
  const [num, setNum] = useState(0);

  console.log("Guess data is & number is  ", guessData, num);
  return <>
    <GuessResults guessData={guessData} answer={answer}/>
    <Input setGuessData={setGuessData} num={num} setNum={setNum} answer={answer} guessData={guessData}/>
    {
      guessData.includes(answer) ? <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>{num} guesses</strong>.
        </p>
      </div> : NUM_OF_GUESSES_ALLOWED === num ? <div className="sad banner">
        <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      </div> : null

    }

  </>;
}

export default Game;
