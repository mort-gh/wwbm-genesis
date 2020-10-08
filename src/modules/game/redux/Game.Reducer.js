import initialState from './Game.store';
import { SAVE_SCORE, GET_NEXT_QUESTION_DATA, SAVE_QUESTION_NUMBER, RESTART_GAME } from '../../../redux_setup/types';

const handlers = {
   [SAVE_SCORE]: (state, { payload }) => {
      return { ...state, score: payload };
   },

   [SAVE_QUESTION_NUMBER]: (state, { payload }) => {
      return { ...state, questionNumber: payload };
   },

   [GET_NEXT_QUESTION_DATA]: (state, { payload }) => {
      return { ...state, question: payload };
   },

   [RESTART_GAME]: (state) => {
      return { ...state, ...initialState };
   },

   DEFAULT: (state) => state,
};

const game = (state = initialState, action) => {
   const handler = handlers[action.type] || handlers.DEFAULT;

   return handler(state, action);
};

export default game;
