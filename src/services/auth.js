import { clientConfig } from '../../config';
import { axiosClient } from '../axios_setup';

// 1) LOGIN
async function login(userData) {
    try {
        const url = clientConfig.apiUrl + '/auth/login';
        const response = await axiosClient.post(url, userData);
        return {
            error: null,
            data: response.data,
        };
    } catch (err) {
        const errMsg = err.response.data.error;
        return {
            error: errMsg,
            data: null,
        };
    }
}

// 2) LOGOUT
async function logout() {
    const url = clientConfig.apiUrl + '/auth/logout';
    const response = await axiosClient.post(url);
    console.log(response.data);
    return {
        error: null,
        data: response.data,
    };
}

// 3) SIGNUP
async function signup() {}

export { login, logout, signup };
