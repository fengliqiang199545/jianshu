import * as actionTypes from './constants';
import {fromJS} from 'immutable';
const defaultState = fromJS({
    focused: false,
    list:[],
    mouseIn: false,
    page: 1,
    totalPage: 1,
});

const reducer =(state = defaultState,action)=>{
    if (action.type === actionTypes.SEARCH_FOCUS) {
        return state.set('focused',true);
    }
    if (action.type === actionTypes.BLUR_FOCUS) {
        return state.set('focused',false);
    }
    if (action.type === actionTypes.CHANGE_LIST){
        return state.set('list',action.data).set('totalPage',action.totalPage);
    }
    if (action.type === actionTypes.CHANGE_MOUSEIN) {
        return state.set('mouseIn',true);
    }
    if (action.type === actionTypes.CHANGE_MOUSEOUT) {
        return state.set('mouseIn',false);
    }
    if (action.type === actionTypes.SWITCH_PAGE) {
        return state.set('page',action.page);
    }
    return state;
};

export default reducer;