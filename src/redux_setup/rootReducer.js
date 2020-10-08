import { combineReducers } from 'redux';

// reducers
import home from '../modules/home/redux/homeReducer';

const rootReducer = combineReducers({ home });

export default rootReducer;
