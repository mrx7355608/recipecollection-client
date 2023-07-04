import { Flex, Heading, Box, Spinner } from '@chakra-ui/react';
import Hero from '../components/Hero';
import RecipesList from '../components/RecipesList';
import Searchbar from '../components/Searchbar';
import useRecipes from '../hooks/useRecipes';

export default function Home() {
    const { recipes, error, loading } = useRecipes();

    return (
        <>
            <Hero />
            <Flex direction={'column'} px="4" alignItems={'flex-start'}>
                <Box mt="12"></Box>
                <Heading color="gray.700" mt="12" ml="5" mb="5">
                    Find your recipe
                </Heading>
                <Searchbar />
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
