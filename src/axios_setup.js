import axios from 'axios';
import { clientConfig } from '../config';

export const axiosClient = axios.create({
    baseURL: clientConfig.apiUrl,
    withCredentials: true,
    headers: {
        'Content-type': 'application/json',
    },
});
