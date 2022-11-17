import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {AppRoute} from '../const';

export const useFetching = (cb) => {
    const [isLoading, setLoading] = useState(false);
    const navigate = useNavigate();

    const fetching = async () => {
        try {
            setLoading(true);
            await cb();
        } catch (err) {
            navigate(AppRoute.Error, {state: err.response.data.status});
        } finally {
            setLoading(false);
        }
    };
    return [fetching, isLoading];
};