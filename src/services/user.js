import { clientConfig } from '../../config';
import { axiosClient } from '../axios_setup';

export async function getUserData() {
    const url = `${clientConfig.apiUrl}/user`;
    const response = await axiosClient.get(url);
    return { error: null, data: response.data };
}
