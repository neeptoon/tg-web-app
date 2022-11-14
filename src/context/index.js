import {createContext, useReducer} from 'react';

import {reducer} from '../reducer';
import {ACTION} from '../const';

const initialState = {
    error: {},
    answer: '',
};

export const AppContext = createContext();
AppContext.displayName = 'AppContext';

export const ContextProvider = ({children}) => {
    const [value, dispatch] = useReducer(reducer, initialState);

    value.setError = (error) => {
        dispatch({type: ACTION.SET_ERROR, payload: error});
    };

    value.clearError = () => {
        dispatch({type: ACTION.CLEAR_ERROR});
    };

    value.setAnswer = (answer) => {
        dispatch({type: ACTION.SET_ANSWER, payload: answer});
    };



    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>;
};