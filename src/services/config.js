import axios from 'axios';

import {tg} from '../hooks/useTelegram';

// const token = window.btoa(tg.initData);

const AUTH_TOKEN = 'Bearer' +
    '  cXVlcnlfaWQ9QUFGdEtWZ1JBQUFBQUcwcFdCRnZudVJmJnVzZXI9JTdCJTIyaWQlMjIlM0EyOTA5OTA0NDUlMkMlMjJmaXJzdF9uYW1lJTIyJTNBJTIyQWxleGFuZHIlMjIlMkMlMjJsYXN0X25hbWUlMjIlM0ElMjJMb3BhdGluJTIyJTJDJTIybGFuZ3VhZ2VfY29kZSUyMiUzQSUyMnJ1JTIyJTdEJmF1dGhfZGF0ZT0xNjY3MzAzNDE3Jmhhc2g9Yzg0NTdhNTg4OWMxNjc0ZjFjZmE0NGJhMmRjZDVkMWQ4YzIzOWFmN2UyZmU4Yzg2NmEwMDBiZGQyNmIyM2U5Mw==';

// const AUTH_TOKEN = `Bearer ${token}`;
export const instance = axios.create({
    baseURL: 'https://demo-cbot-megafon.convergentcmg.com'
});
instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;

