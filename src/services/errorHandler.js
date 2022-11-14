import request from 'axios';

import {HTTP_CODE} from '../const';

export const errorHandler = (error) => {
    if(!request.isAxiosError(error)) {
        throw error;
    }

    const handleError = () => {
        
    };

    const {response} = error;

    if(response) {
        switch (response.status) {
        case HTTP_CODE.BAD_REQUEST:
            handleError();
            break;
        }
    }
};