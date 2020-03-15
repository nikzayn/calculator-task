//reducers
import { initialState, DEFAULT_ACTION, BTN_CLICKED } from './constants'
import { calculate } from './calculate';

function calculatorReducer(state = initialState, action) {
    switch (action.type) {
        case DEFAULT_ACTION:
            return state;
        case BTN_CLICKED:
            const newState = calculate(state, action.input);
            return newState;
        default:
            return state;
    }
}

export default calculatorReducer;