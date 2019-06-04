import * as actionTypes from './constants';
import axios from 'axios';
import {CHANGE_LIST} from "./constants";
import {fromJS} from "immutable";
import {CHANGE_MOUSEIN} from "./constants";

export const switchPage=(page)=> ({
    type: actionTypes.SWITCH_PAGE,
    page,
});


export const changeMouseLeave =()=> {
    return {
        type: actionTypes.CHANGE_MOUSEOUT,
    }
};


export const changeMouseIn = ()=> {
    return {
        type: CHANGE_MOUSEIN
    }
};


const changeList =(data)=>{
    return {
        type: CHANGE_LIST,
        data: fromJS(data),
        totalPage: Math.ceil(data.length / 5),
    }
};

export const getList =()=> {
    return (dispatch)=>{
        axios.get('/api/headerList.json').then((result)=>{
            const data = result.data;
            dispatch(changeList(data));
        }).catch(()=>{
            console.log('error');
        })
    }
};


export const searchFocus =()=>{
    return {
        type: actionTypes.SEARCH_FOCUS
    }
};
export const blurFocus =()=>{
    return {
        type: actionTypes.BLUR_FOCUS
    }
};




