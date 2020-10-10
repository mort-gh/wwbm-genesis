// libraries
import React from 'react';
import { Link } from 'react-router-dom';

// services
import route from '../../../routes/routes';
import { formatMoney } from '../../../shared/utils';
import GameOverPropTypes from '../types/GameOver.types';

// images
import likeSvgPath from '../../../static/svgs/like.svg';

const GameOver = ({ score, restartGame }) => {
   const buttonHandler = () => {
      restartGame();
   };

   const renderErnedMoney = () => {
      const total = formatMoney(score);
      return `$${total} earned`;
   };

   return (
      <div className="gameover">
         <img className="gameover__img" src={likeSvgPath} alt="" />
         <div className="gameover__block">
            <h1 className="gameover__title">
               <span className="gameover__subtitle">Total score:</span>
               {renderErnedMoney()}
            </h1>
            <Link to={route.Game} className="gameover__btn_link">
               <button onClick={buttonHandler} className="btn gameover__btn" type="button">
                  <span className="btn-text">Try again</span>
               </button>
            </Link>
         </div>
      </div>
   );
};

export default GameOver;

GameOver.propTypes = GameOverPropTypes;
