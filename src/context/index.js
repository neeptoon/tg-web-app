import {createContext} from 'react';

export const AppContext = createContext({});
AppContext.displayName = 'AppContext';

export const ContextProvider = ({children}) => {
    const value = {
        error: {},
        answer: '',
        isLoading: false
    };
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>;
};