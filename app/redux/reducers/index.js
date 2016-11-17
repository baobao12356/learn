import {combineReducers} from 'redux'; 
import { reducer as formReducer } from 'redux-form';
import environment from './reducer'; 
// import formReducer from './reduxFormReducer';

const reducers={
	environment,
    form:formReducer,
}


const rootReducer = combineReducers(reducers);

export default rootReducer;