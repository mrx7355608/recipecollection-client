import { clientConfig } from '../../config';
import { axiosClient } from '../axios_setup';

async function postReviewRecipe(stars, review, recipeId) {
    const url = clientConfig.apiUrl + `/recipes/${recipeId}/reviews`;
    const response = await axiosClient.post(url, { stars, review });
    return response.data;
}

export { postReviewRecipe };
