import React from 'react';

const HangingDude = ({ numberOfFailedGuesses }) => {
  let figureNumber = numberOfFailedGuesses + 1;
  if (figureNumber > 6) figureNumber = 6;
  return (
    <img
      alt="hangman dude"
      src={`../dist/imgs/figure${figureNumber}.png`}
    />
  );
};

export default HangingDude;
