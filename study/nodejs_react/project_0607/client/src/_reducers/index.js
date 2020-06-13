import {combineReducers} from 'redux';
import user from './user_reducer';


const rootRedux = combineReducers({
    user
})

export default rootRedux;
