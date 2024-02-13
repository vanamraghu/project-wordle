import React from 'react';

export function Letters({letter, guessResults}) {
    const data = [
        {
            "letter": "H",
            "status": "misplaced"
        },
        {
            "letter": "E",
            "status": "incorrect"
        },
        {
            "letter": "L",
            "status": "misplaced"
        },
        {
            "letter": "L",
            "status": "incorrect"
        },
        {
            "letter": "O",
            "status": "incorrect"
        }
    ]

  return (
      <>
        <div className={`letter ${status(letter, guessResults)}`}>
            {letter}
        </div>
      </>
  )
}

export function  status(smallCase, guessResults) {
    for (const key in guessResults) {
        if (smallCase === guessResults[key].letter) {
            return guessResults[key].status
        }
    }
}


