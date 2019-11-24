import React from 'react';

const HangViewer = ({ hang, numFailedGuesses }) => (
  <div className="hangviewer">
    <h5>Words from the hangman</h5>
    {/* hang is an array of messages that gets progressively
        worse as incorrect guesses increases */}
    {hang[numFailedGuesses]}
  </div>
);

export default HangViewer;
