import * as types from '../constants/ActionTypes';



export function environment(value){
    return dispatch => {
        dispatch({
            type: types.CHANGE_INIT_VALUE,
            'value':value
        })
    }
}