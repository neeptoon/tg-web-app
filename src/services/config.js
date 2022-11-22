import axios from 'axios';

import {tg} from '../hooks/useTelegram';

console.log('INITDATA', tg.initData)

const token = window.btoa(tg.initData);

const AUTH_TOKEN = `Bearer ${token}`;
export const instance = axios.create({
    baseURL: 'https://demo-cbot-megafon.convergentcmg.com'
});
instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;

