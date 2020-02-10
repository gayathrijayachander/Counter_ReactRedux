import {combineReducers} from 'redux';
import Reducer from './Reducer';

const RootReducer = combineReducers({
    root:Reducer
});

export default RootReducer;