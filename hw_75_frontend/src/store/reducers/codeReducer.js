import {
    CODE_FAILURE,
    CODE_REQUEST,
    CODE_SUCCESS_DECODE,
    CODE_SUCCESS_ENCODE, TEXT
} from "../actions/actionTypes";


const initialState = {
    encode: '',
    decode: '',
    password: '',
    loading: false,
    error: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TEXT :
            return {
                ...state,
                [action.input.type]: action.input.text
            };
        case CODE_REQUEST:
            return {
                ...state,
                loading: true
            };
        case CODE_SUCCESS_ENCODE:
            return {
                ...state,
                encode: action.response,
                decode: '',
                password: '',
                loading: false
            };
        case CODE_SUCCESS_DECODE:
            return {
                ...state,
                encode: '',
                decode: action.response,
                password: '',
                loading: false
            };
        case CODE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
};

export default reducer;