/* eslint-disable jsx-a11y/label-has-associated-control */

// libraries
import React from 'react';

// services
import GamePropTypes from '../types/Game.types';

// modules
import Score from '../containers/Score.container';
import Selection from '../containers/Selection.container';

const Game = () => {
   const burgerMenu = (children) => {
      return (
         <div className="burger-menu">
            <input id="menu__toggle" type="checkbox" />
            <label className="menu__btn" htmlFor="menu__toggle">
               <span> </span>
            </label>
            {children}
         </div>
      );
   };
   return (
      <div className="game">
         <Selection />
         {burgerMenu(<Score />)}
      </div>
   );
};

export default Game;

Game.propTypes = GamePropTypes;
