// libraries
import React from 'react';

// services
import { formatMoney } from '../../../shared/utils';
import ScorePropTypes from '../types/Score.types';

// images
import { ReactComponent as ScoreSvg } from '../../../static/svgs/score.svg';
import { ReactComponent as ScoreSvgMin } from '../../../static/svgs/score-min.svg';

const Score = ({ questions, score }) => {
   const colors = {
      // used colors in the module:
      orange100: '#ff8b37',
      black40: '#d0d0d8',
      black100: '#1c1c21',
   };

   // dynamic text color change:
   const textColor = (win) => {
      if (win === score) return colors.orange100;
      if (win < score) return colors.black40;
      return colors.black100;
   };

   // dynamic stroke color change:
   const strokeColor = (win) => {
      if (win === score) return colors.orange100;
      return colors.black40;
   };

   const className = (win) => {
      if (win === score) return 'score__list_item item_win';
      return 'score__list_item';
   };

   // select size of the SVG image depending on the screen size:
   const renderSvgAsComponent = (value) => {
      const mediaQuery = window.matchMedia('(min-width: 1440px)');
      const stroke = strokeColor(+value); // get current stroke color for each items

      if (mediaQuery.matches) return <ScoreSvg stroke={stroke} />; // svg for big width screens
      return <ScoreSvgMin stroke={stroke} />; // svg for little width screens
   };

   // html winning table element markup:
   const htmlCurrentWin = (value) => {
      const valueToCurrecy = `$${formatMoney(+value)}`;

      return (
         <li className={className(+value)} key={value}>
            <div className="score__list_block table">
               {renderSvgAsComponent(+value)}

               <span className="score__list_text" style={{ color: textColor(+value) }}>
                  {valueToCurrecy}
               </span>
            </div>
         </li>
      );
   };

   return (
      <div className="score">
         <ul className="score__list">{questions.map(({ win }) => htmlCurrentWin(win))}</ul>
      </div>
   );
};

export default Score;

Score.propTypes = ScorePropTypes;
