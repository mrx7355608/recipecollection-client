import { clientConfig } from '../../config';
import { axiosClient } from '../axios_setup';

async function getRecipes() {
    const url = clientConfig.apiUrl + '/recipes';
    const response = await axiosClient.get(url);
    return response.data.recipes;
}

async function getRecipeById(id) {
    const url = clientConfig.apiUrl + `/recipes/${id}`;
    const response = await axiosClient.get(url);
    return response.data.recipe;
}

async function getSearchRecipes(query) {
    const url = clientConfig.apiUrl + `/recipes/search?query=${query}`;
    const response = await axiosClient.get(url);
    console.log(response.data);
    return response.data.recipes;
}

export { getRecipes, getRecipeById, getSearchRecipes };
