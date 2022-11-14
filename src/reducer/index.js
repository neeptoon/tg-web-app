import {ACTION} from '../const';

export function reducer(state, {type, payload}) {
    switch (type) {
    case ACTION.SET_ERROR:
        return {
            ...state,
            error: payload
        };
    case ACTION.CLEAR_ERROR:
        return {
            ...state,
            error: {}
        };
    case ACTION.SET_ANSWER:
        return {
            ...state,
            answer: payload
        };
    default:
        return state;
    }
}