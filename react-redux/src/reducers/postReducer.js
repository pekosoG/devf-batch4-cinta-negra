import {FETCH_POST, NEW_POST} from '../actions/types';

const initialState={
    items:[],
    item:{}
}

export default function(state = initialState, action){
    switch(action.type){
        case FETCH_POST:
            return{
                ...state,
                items:action.payload
            }
            break;
        case NEW_POST:
            console.log(action);
            break;
        default:
            console.log('default');
            return state;
    }
}