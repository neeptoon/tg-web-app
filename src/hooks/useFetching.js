import {useContext} from 'react';
import {useState} from 'react';

import {AppContext} from '../context';

export const useFetching = (cb) => {
    const {setError} = useContext(AppContext);
    const [isLoading, setLoading] = useState(false);

    const fetching = async () => {
        try {
            setLoading(true);
            await cb();
        } catch (err) {
            setError(err.response.data);
        } finally {
            setLoading(false);
        }
    };
    return [fetching, isLoading];
};