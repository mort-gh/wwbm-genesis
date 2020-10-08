import { combineReducers } from 'redux';

// reducers
import game from '../modules/game/redux/Game.Reducer';

const rootReducer = combineReducers({ game });

export default rootReducer;
