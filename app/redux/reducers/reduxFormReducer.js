import * as types from '../constants/ActionTypes';
import {reducer as formReducer} from 'redux-form';

const errorMsg=(state, action)=>{
	switch(action.type) {
		case types.CHANGE_ERROR: 
			return Object.assign({}, state, {
				_error: action.error
			}); 
		case 'redux-form/CHANGE': 
			return Object.assign({}, state, { 
				_error: null,
				[action.field]:{
					value:action.value.replace?action.value.replace(/(^\s*)|(\s*$)/g,''):action.value
				}
			});
		default:
			return state;
	}
}

const dynamiceErrorMsg=(state, action)=>{
	switch(action.type) {
		case types.DYNAMIC_FORM_CHANGE_ERROR: 
			return Object.assign({}, state, {
				errors: {name:'创建数据已存在'}
			});
		case 'redux-form/CHANGE': 
			return Object.assign({}, state, { 
				_error: null,
				[action.field]:{
					value:action.value.replace?action.value.replace(/(^\s*)|(\s*$)/g,''):action.value
				}
			});
		default:
			return state;
	}
}


export default formReducer.plugin({
	announcementForm:errorMsg,
	loginForm: errorMsg,
	registerForm:errorMsg,
	// dynamic_form_approve:dynamiceErrorMsg,
	dynamic_form:dynamiceErrorMsg
})
