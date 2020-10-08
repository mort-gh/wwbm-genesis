// libraries
import React from 'react';
import { Link } from 'react-router-dom';

// services
import route from '../../../routes/routes';
import { formatMoney } from '../../../shared/utils';
import GameOverPropTypes from '../types/GameOver.types';

const GameOver = ({ score, restartGame }) => {
   const buttonHandler = () => {
      restartGame();
   };

   return (
      <div className="gameover">
         <p>Total score:</p>
         <h1>{`$${formatMoney(score)} earned`}</h1>
         <Link to={route.Game}>
            <button onClick={buttonHandler} type="button">
               Try again
            </button>
         </Link>
      </div>
   );
};

export default GameOver;

GameOver.propTypes = GameOverPropTypes;
