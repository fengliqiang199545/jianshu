import * as actionTypes from './constants';
import {fromJS} from 'immutable';
const defaultState = fromJS({
    focused: false,
});

const reducer =(state = defaultState,action)=>{
    if (action.type === actionTypes.SEARCH_FOCUS) {
        return state.set('focused',true);
    }
    if (action.type === actionTypes.BLUR_FOCUS) {
        return state.set('focused',false);
    }
    return state;
};

export default reducer;