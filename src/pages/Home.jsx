import { Flex, Heading, Box, Spinner } from '@chakra-ui/react';
import RecipesList from '../components/RecipesList';
import TopRatedRecipe from '../components/Recipe/TopRatedRecipe';
import { useEffect } from 'react';
import RandomRecipes from '../components/Recipe/RandomRecipes';
import useFetch from '../hooks/useFetch';
import { clientConfig } from '../../config';
import CustomSpinner from '../components/CustomSpinner';

export default function Home() {
    const {
        data: recipes,
        error,
        loading,
    } = useFetch(`${clientConfig.apiUrl}/recipes`);

    useEffect(() => window.scrollTo(0, 0), []);

    if (loading) {
        return <CustomSpinner />;
    }

    if (error) {
        <Heading>{error}</Heading>;
    }

    return (
        <>
            <Flex
                justifyContent={'center'}
                gap="6"
                alignItems={'flex-start'}
                px="10"
                py="7"
            >
                <TopRatedRecipe />
                <RandomRecipes />
            </Flex>
            <Flex direction={'column'} px="4" alignItems={'flex-start'} mt="12">
                <RecipesList recipes={recipes.recipes} />
            </Flex>
        </>
    );
}
