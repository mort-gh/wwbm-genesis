import { GET_NEXT_QUESTION_DATA, SAVE_SCORE, SAVE_QUESTION_NUMBER, RESTART_GAME } from '../../../redux_setup/types';
import questions from '../../../db/questions.json';

export function saveQuestionNumber(number) {
   return {
      type: SAVE_QUESTION_NUMBER,
      payload: number,
   };
}

export function saveScore(score) {
   return {
      type: SAVE_SCORE,
      payload: +score,
   };
}

export function getNextQuestionData(number) {
   return {
      type: GET_NEXT_QUESTION_DATA,
      payload: questions[number],
   };
}

export function nextQuestionHandler(number, score) {
   return (dispatch) => {
      const nextQuestionNumber = number + 1;

      dispatch(saveQuestionNumber(nextQuestionNumber));
      dispatch(saveScore(score));
      dispatch(getNextQuestionData(number));
   };
}

export function restartGame() {
   return {
      type: RESTART_GAME,
   };
}
