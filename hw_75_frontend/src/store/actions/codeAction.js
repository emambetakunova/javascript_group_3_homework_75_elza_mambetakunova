import axios from '../../axios-code';
import {CODE_REQUEST, CODE_SUCCESS_ENCODE, CODE_SUCCESS_DECODE, CODE_FAILURE, TEXT} from "./actionTypes";

export const codeRequest = () => ({type: CODE_REQUEST});

export const codeSuccessEncode = response => ({type: CODE_SUCCESS_ENCODE, response});

export const codeSuccessDecode = response => ({type: CODE_SUCCESS_DECODE, response});

export const codeFailure = error => ({type: CODE_FAILURE, error});

export const textHandler = input => ({type: TEXT, input});


export const fetchEncode = data => {
    return dispatch => {
        dispatch(codeRequest());
        axios.post('/encode', data).then(response => {
            dispatch(codeSuccessEncode(response.data));
        }, error => {
            dispatch(codeFailure(error));
        });
    }
};

export const fetchDecode = data => {
    return dispatch => {
        dispatch(codeRequest());
        axios.post('/decode', data).then(response => {
            dispatch(codeSuccessDecode(response.data));
        }, error => {
            dispatch(codeFailure(error));
        });
    }
};