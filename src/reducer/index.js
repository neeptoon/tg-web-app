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
    default:
        return state;
    }
}