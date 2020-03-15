import {
    NOTSET,
    NUM1OROPERATORSTATE,
    NUM2STATE,
    COMMANDS,
    CLEAR,
    EQUALTO,
    OPERATORS,
    SUBSTRACT,
    ADD,
    MULTIPLY,
    MODULUS,
    DIVIDE,
    SIGN_CHANGE,
    DECIMALPOINT,
    NUMBERS,
    initialState
} from './constants';

export function calculate(state, input) {
    if (COMMANDS.indexOf(input) > -1) {
        // process commands
        return processCommand(state, input);
    } else if (OPERATORS.indexOf(input) > -1) {
        // process operators
        return processOperator(state, input);
    } else if (NUMBERS.indexOf(input) > -1) {
        // process numbers
        return processNumberInput(state, input);
    }
    return state;
}

function processNumberInput(state, input) {
    const newState = Object.assign({}, state);
    if (newState.expectedState === NUM1OROPERATORSTATE) {
        if (input !== DECIMALPOINT || !newState.num1Float) {
            newState.num1 += input;
        }
        if (input === DECIMALPOINT) {
            newState.num1Float = true;
        }
    } else if (newState.expectedState === NUM2STATE) {
        if (input !== DECIMALPOINT || !newState.num2Float) {
            newState.num2 += input;
        }
        if (input === DECIMALPOINT) {
            newState.num2Float = true;
        }
    }
    return newState;
}

function processOperator(state, input) {
    const newState = Object.assign({}, state);
    if (input === SIGN_CHANGE) {
        if (newState.expectedState === NUM1OROPERATORSTATE && newState.num1 !== NOTSET) {
            newState.num1 *= -1;
        } else if (newState.expectedState === NUM2STATE && newState.num2 !== NOTSET) {
            newState.num2 *= -1;
        }
    } else if (OPERATORS.indexOf(input) > -1) {
        if (newState.expectedState === NUM1OROPERATORSTATE && newState.num1 === NOTSET) {
            return newState;
        }
        newState.operator = input;
        newState.expectedState = NUM2STATE;
    }
    return newState;
}

function processCommand(state, input) {
    const newState = Object.assign({}, initialState)
    if (input === CLEAR) {
        // we already have a new state
    } else if (input === EQUALTO) {
        newState.result = calculateResult(state);
        newState.num1 = '' + newState.result;
    }
    return newState;
}

function calculateResult(state) {
    const num1parsed = state.num1 === NOTSET ? 0 : state.num1;
    if (state.operator === NOTSET) {
        return num1parsed;
    }
    if (state.num2 === NOTSET) {
        return num1parsed;
    }
    const num2parsed = state.num2;
    const num1 = state.num1Float ? parseFloat(num1parsed) : num1parsed;
    const num2 = state.num2Float ? parseFloat(num2parsed) : num2parsed;
    const operator = state.operator;
    let result = 0;
    if (operator === MULTIPLY) {
        result = num1 * num2;
    } else if (operator === DIVIDE) {
        if (num2 == 0) {
            result = 'NOT DIVISIBLE BY 0';
        } else {
            result = num1 / num2;
        }
    } else if (operator === ADD) {
        result = '' + (+num1 + +num2);
    } else if (operator === SUBSTRACT) {
        result = num1 - num2;
    } else if (operator === MODULUS) {
        if (num2 == 0) {
            result = 'NOT DIVISIBLE BY 0';
        } else {
            result = num1 % num2;
        }
    }
    return result;
}