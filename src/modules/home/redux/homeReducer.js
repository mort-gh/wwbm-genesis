import initialState from './homeStore';
import { SMTH } from '../../../redux_setup/types';

const handlers = {
   [SMTH]: (state) => {
      return { ...state };
   },

   DEFAULT: (state) => state,
};

const home = (state = initialState, action) => {
   const handler = handlers[action.type] || handlers.DEFAULT;

   return handler(state, action);
};

export default home;
