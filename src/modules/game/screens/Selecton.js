// libraries
import React from 'react';

// services
import route from '../../../routes/routes';
import SelectonPropTypes from '../types/Selection.types';

// images
import { ReactComponent as OptionSvg } from '../../../static/svgs/option.svg';

const Selecton = (props) => {
   const { question, questionNumber, totalQuestions, saveScore, nextQuestionHandler } = props;

   const buttonHandler = async (event) => {
      const { history } = props; // access to history
      const { name } = event.currentTarget; // name of the button pressed (selected answer option)
      const { correctOptions, win } = question; // correct answer, win
      const isOptionCorrect = correctOptions.includes(name); // check if the selected answer is among the correct ones
      const node = document.querySelector(`[name="${name}"]`); // access to the button node to change the class name
      const timeout = 1000; // timeout between choosing an answer and loading the next question

      // (1) - check if the option is correct:
      if (isOptionCorrect) {
         node.className = 'correct';

         setTimeout(() => {
            // (2) - check if this is not the last question:
            if (questionNumber < totalQuestions) {
               nextQuestionHandler(questionNumber, win);
            } else {
               saveScore(win);
               history.push(route.GameOver);
            }

            node.className = 'inactive';
         }, timeout);
      } else {
         node.className = 'wrong';

         setTimeout(() => {
            node.className = 'inactive';
            history.push(route.GameOver);
         }, timeout);
      }
   };

   const htmlSelectorBlock = (option) => {
      const key = Object.keys(option)[0]; // get the answer option
      const value = Object.values(option)[0]; // get the text of the answer option

      // return button's html:
      return (
         <button className="inactive" type="button" onClick={buttonHandler} key={key} name={key}>
            <OptionSvg />
            <p className="question__options_text">
               <span className="question__options_key">{key}</span>
               <span className="question__options_value">{value}</span>
            </p>
         </button>
      );
   };

   return <div className="question__options_list">{question.options.map((option) => htmlSelectorBlock(option))}</div>;
};

export default Selecton;

Selecton.propTypes = SelectonPropTypes;
