import { Reducer, combineReducers } from "@reduxjs/toolkit";
import { 
    INCREMENT, 
    DECREMENT 
} from "../actions/actions";

const initialState : IncrementState =  {
    type: 'InitialState',
    number: 0
}
const incrementReducer : Reducer<IncrementState,IndexActions> = (
    state: IncrementState = initialState,
    action: IndexActions 
): IncrementState => {
    switch (action.type) {
        case INCREMENT:
            return {...state, type: INCREMENT, number: state.number + 1}
        case DECREMENT:
            return {...state, type: DECREMENT, number: state.number - 1}
    }
    return state
}


export const indexReducers = combineReducers({
    incrementReducer
})