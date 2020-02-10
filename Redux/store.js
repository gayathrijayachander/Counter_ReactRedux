import {createStore} from 'redux';
import RootReducer from './Reducer/RootReducer';
import Reducer from './Reducer/Reducer';


const store= createStore(RootReducer);

export default store;