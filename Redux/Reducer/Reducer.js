import {INCREASE,DECREASE} from '../Actions/ActionTypes';

const initialState ={count:0};

 const Reducer = (state=initialState,action) => {
    console.log(action)
    switch(action.type){
        case INCREASE:
            return{...state,count:state.count+1}
       case DECREASE:
            return{...state,count:state.count-1}
    }
    return state
}

export default Reducer;
