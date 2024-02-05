import React, {useState} from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Input from "../Input";
import GuessResults from "../GuessResults";
import Guess from "../Guess";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessData, setGuessData] = useState([]);
  return <>
    <GuessResults guessData={guessData}/>
    <Input setGuessData={setGuessData}/>
  </>;
}

export default Game;
