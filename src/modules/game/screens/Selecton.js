// libraries
import React from 'react';

// services
import route from '../../../routes/routes';
import SelectonPropTypes from '../types/Selection.types';

const Selecton = (props) => {
   const { question, questionNumber, totalQuestions, saveScore, nextQuestionHandler } = props;

   const buttonHandler = (event) => {
      const { history } = props;
      const { correctOptions } = question;
      const selectedOption = event.target.name;
      const isOptionCorrect = correctOptions.includes(selectedOption);

      if (isOptionCorrect) {
         const { win } = question;

         if (questionNumber < totalQuestions) {
            nextQuestionHandler(questionNumber, win);
         } else {
            saveScore(win);
            history.push(route.GameOver);
         }
      } else {
         history.push(route.GameOver);
      }
   };

   const htmlSelectorBlock = (option) => {
      const key = Object.keys(option)[0];
      const value = Object.values(option)[0];

      return (
         <button onClick={buttonHandler} key={key} type="button" name={key}>
            {value}
         </button>
      );
   };

   return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
         {question.options.map((option) => htmlSelectorBlock(option))}
      </div>
   );
};

export default Selecton;

Selecton.propTypes = SelectonPropTypes;
