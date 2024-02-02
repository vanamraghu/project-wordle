import React from 'react';

function GuessResults({guessData}) {
  console.log(guessData);
  return <div className={"guess-results"}>
    {
        guessData.map((guess, index) => {
            return (<p key={index} className={"guess"}>{guess}</p>)
        })
    }
  </div>;
}

export default GuessResults;
