import {combineReducers} from 'redux';

//reducers imported
import auth from "./reducer_auth"

const rootReducer = combineReducers({
    auth
});

export default rootReducer;