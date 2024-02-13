import React from 'react';
import {Letters} from "../Letters";
import {checkGuess} from "../../game-helpers";

function KeyBoard({guessData, answer, num}) {
  const firstRowData = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const secondRowData = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const thirdRowData = ["Z", "X", "C", "V", "B", "N", "M"];
  const guessResults = checkGuess(guessData[num], answer);
  console.log("Guess results are ", guessResults);
  return <>
    <section className={"column"}>
      <section className="first-row">
        {
          firstRowData.map((letter, index) => {
              return <Letters letter={letter} key={index} guessResults={guessResults}/>
          })
        }
      </section>
      <section className="second-row">
        {
          secondRowData.map((letter, index) => {
              return <Letters letter={letter} key={index} guessResults={guessResults}/>
          })
        }
      </section>
      <section className="third-row">
        {
          thirdRowData.map((letter, index) => {
              return <Letters letter={letter} key={index} guessResults={guessResults}/>
          })
        }
      </section>
    </section>
  </>
}

export default KeyBoard;
