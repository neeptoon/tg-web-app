import axios from 'axios';

import {tg} from '../hooks/useTelegram';

const token = window.btoa(tg.initData);

const AUTH_TOKEN = `Bearer ${token}`;
export const instance = axios.create({
    baseURL: 'https://digitalprojectsback.convergentcmg.com'
});
instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;


