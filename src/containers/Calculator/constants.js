// actions
const preFix = 'Calculator/';
export const DEFAULT_ACTION = `${preFix}DEFAULT_ACTION`;
export const BTN_CLICKED = `${preFix}BTN_CLICKED`;

export const NUM1OROPERATORSTATE = 'NUM_1_OR_OPERATOR_STATE';
export const NUM2STATE = 'NUM_2_STATE';
export const NOTSET = '';

// commands
export const CLEAR = 'C';
export const EQUALTO = '=';
export const COMMANDS = [CLEAR, EQUALTO];

// operators
export const SIGN_CHANGE = '+/-';
export const MULTIPLY = '*';
export const DIVIDE = '/';
export const ADD = '+';
export const MODULUS = '%';
export const SUBSTRACT = '-';
export const OPERATORS = [SIGN_CHANGE, MULTIPLY, DIVIDE, ADD, SUBSTRACT, MODULUS];

// numbers
export const DECIMALPOINT = '.';
export const NUMBERS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', DECIMALPOINT]

export const initialState = {
    num1: NOTSET,
    num2: NOTSET,
    num1Float: false,
    num2Float: false,
    operator: NOTSET,
    result: 0,
    expectedState: NUM1OROPERATORSTATE,
}