// libraries
import React from 'react';

// services
import route from '../../../routes/routes';
import SelectonPropTypes from '../types/Selection.types';

// images
import { ReactComponent as OptionSvg } from '../../../static/svgs/option.svg';

const Selecton = (props) => {
   // export all props used in the component:
   const { question, questionNumber, totalQuestions, disable, saveScore, nextQuestionHandler, disableButtons } = props;

   // reset all effects that have been applied to buttons:
   const resetButtonsEffects = (name, redirect) => {
      const node = document.querySelector(`[name="${name}"]`); // access to the button node to change the class name
      const { history } = props; // access to history

      node.className = 'inactive'; // (1) - returns the default button class
      disableButtons(false); // (2) - activates all buttons
      if (redirect) history.push(route.GameOver); // (3) - if the answer is incorrect or the last question, redirect GameOver module
   };

   // selected button handler:
   const buttonHandler = async (event) => {
      const { name } = event.currentTarget; // name of the button pressed (selected answer option)
      const { correctOptions, win } = question; // correct answer, win
      const isOptionCorrect = correctOptions.includes(name); // check if the selected answer is among the correct ones
      const node = document.querySelector(`[name="${name}"]`); // access to the button node to change the class name
      const timeout = 1000; // timeout between choosing an answer and loading the next question

      disableButtons(true); // disables all buttons while processing the selected answer option

      if (isOptionCorrect) {
         // if the option is correct:
         node.className = 'correct'; // changes the button color to green

         setTimeout(() => {
            if (questionNumber < totalQuestions) {
               // if this is not the last question:
               nextQuestionHandler(questionNumber, win);
               resetButtonsEffects(name, false);
            } else {
               // if this is the last question:
               saveScore(win);
               resetButtonsEffects(name, true);
            }
         }, timeout);
      } else {
         // if the option is not correct:
         node.className = 'wrong'; // changes the button color to red

         setTimeout(() => {
            resetButtonsEffects(name, true);
         }, timeout);
      }
   };

   // returns html markup for each answer option button:
   const htmlSelectorBlock = (option) => {
      const key = Object.keys(option)[0]; // get the answer option
      const value = Object.values(option)[0]; // get the text of the answer option
      const disableStatus = disable ? 'disable' : '';

      // return button's html:
      return (
         <button
            disabled={disableStatus}
            className="inactive"
            type="button"
            onClick={buttonHandler}
            key={key}
            name={key}
         >
            <OptionSvg />
            <p className="question__options_text">
               <span className="question__options_key">{key}</span>
               <span className="question__options_value">{value}</span>
            </p>
         </button>
      );
   };

   return (
      <div className="selection">
         <p className="question__text">{question.text}</p>

         <div className="question__options_list">{question.options.map((option) => htmlSelectorBlock(option))}</div>
      </div>
   );
};

export default Selecton;

Selecton.propTypes = SelectonPropTypes;
