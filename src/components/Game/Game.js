import React, {useState} from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Input from "../Input";
import GuessResults from "../GuessResults";
import Guess from "../Guess";
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";
import guess from "../Guess";
import KeyBoard from "../KeyBoard";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

  const [guessData, setGuessData] = useState([]);
  const [num, setNum] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(answer);

  const resetAll = () => {
    setGuessData([]);
    setNum(0);
    setCorrectAnswer(sample(WORDS));
  }

  console.log("Guess data is & number is  ", guessData, num);
  return <>
    <GuessResults guessData={guessData} answer={correctAnswer}/>
    <Input setGuessData={setGuessData} num={num} setNum={setNum} answer={correctAnswer} guessData={guessData}/>
    {
      guessData.includes(correctAnswer) ?
          <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>{num} guesses</strong>.
        </p>
            <button className={"btn"} onClick={resetAll}>RESTART BUTTON</button>
      </div> : NUM_OF_GUESSES_ALLOWED === num ? <div className="sad banner">
            <p>Sorry, the correct answer is <strong>{correctAnswer}</strong>.</p>
            <button className={"btn"} onClick={resetAll}>RESTART BUTTON</button>
          </div> : null
    }
    <KeyBoard guessData={guessData} answer={correctAnswer} num={num-1}/>
  </>;
}

export default Game;
