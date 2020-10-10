// libraries
import React from 'react';

// services
import { formatMoney } from '../../../shared/utils';
import ScorePropTypes from '../types/Score.types';

// images
import { ReactComponent as ScoreSvg } from '../../../static/svgs/score.svg';

const Score = ({ questions, score }) => {
   const colorText = (win) => {
      if (win === score) return '#ff8b37';
      if (win < score) return '#d0d0d8';
      return '#1c1c21';
   };

   const colorStroke = (win) => {
      if (win === score) return '#ff8b37';
      return '#d0d0d8';
   };

   const htmlCurrentWin = (value) => {
      const valueToCurrecy = `$${formatMoney(+value)}`;

      return (
         <li className="score__list_item" key={value}>
            <div className="score__list_block">
               <ScoreSvg stroke={colorStroke(+value)} className="score__list_svg" />
               <span className="score__list_text" style={{ color: colorText(+value) }}>
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
