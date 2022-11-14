import {useState} from 'react';

export const useFetching = (cb) => {
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetching = async () => {
        try {
            setLoading(true);
            await cb();
        } catch (err) {
            console.log(err.response);
            setError(err.response);

        } finally {
            setLoading(false);
        }
    };

    return [fetching, isLoading, error];
};