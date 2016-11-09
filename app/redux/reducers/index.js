import {combineReducers} from 'redux'; 

import environment from './reducer'; 

const rootReducer = combineReducers({ 
    environment
});

export default rootReducer;