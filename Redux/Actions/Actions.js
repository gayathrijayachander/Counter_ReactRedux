import {INCREASE,DECREASE} from './ActionTypes';


export const inc = count => {
    return{
        type:INCREASE,
        payload:count
    }
}

export const dec = count => {
    return{
        type:DECREASE,
        payload:count
    }
}