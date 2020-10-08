// libraries
import React from 'react';

// services
import { formatMoney } from '../../../shared/utils';
import ScorePropTypes from '../types/Score.types';

const Score = ({ questions, score }) => {
   const getItemColor = (itemScore) => {
      let color;
      if (itemScore === score) {
         color = 'red';
      } else if (itemScore < score) {
         color = 'grey';
      } else {
         color = 'black';
      }
      return color;
   };

   return (
      <div className="score">
         <ul style={{ display: 'flex', flexDirection: 'column-reverse' }}>
            {questions.map(({ win }) => {
               return <li style={{ color: getItemColor(+win) }} key={win}>{`$${formatMoney(+win)}`}</li>;
            })}
         </ul>
      </div>
   );
};

export default Score;

Score.propTypes = ScorePropTypes;
