import { Flex, Heading, Box, Spinner } from '@chakra-ui/react';
import RecipesList from '../components/RecipesList';
import TopRatedRecipe from '../components/Recipe/TopRatedRecipe';
import useRecipes from '../hooks/useRecipes';
import { useEffect } from 'react';
import RandomRecipes from '../components/Recipe/RandomRecipes';

export default function Home() {
    const { recipes, error, loading } = useRecipes();

    useEffect(() => window.scrollTo(0, 0), []);

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
            <Heading
                mt="12"
                textDecoration={'underline'}
                textDecorationColor={'yellow.400'}
                textDecorationThickness={'4px'}
                textAlign={'center'}
            >
                Almost no cook recipes
            </Heading>
            <Flex direction={'column'} px="4" alignItems={'flex-start'}>
                <Box mt="0"></Box>
                {loading ? (
                    <Flex
                        w="100vw"
                        my="12"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Spinner color="yellow.500" />
                    </Flex>
                ) : null}
                {error ? <Heading>{error}</Heading> : null}
                <RecipesList recipes={recipes} />
            </Flex>
        </>
    );
}
