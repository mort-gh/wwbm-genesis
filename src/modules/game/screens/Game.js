// libraries
import React from 'react';

// services
import GamePropTypes from '../types/Game.types';

// modules
import Score from '../containers/Score.container';
import Selection from '../containers/Selection.container';

const Game = ({ question }) => {
   return (
      <div className="game">
         <p className="question__text">{question.text}</p>

         <Selection />
         <Score />
      </div>
   );
};

export default Game;

Game.propTypes = GamePropTypes;
