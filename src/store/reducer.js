import {combineReducers} from "redux-immutable";
import headerReducer from '../common/Header/store/reducer';

const reducer =  combineReducers({
    header: headerReducer
});

export default reducer;