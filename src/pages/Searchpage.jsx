import { Center, Box, Heading } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import CustomSpinner from '../components/CustomSpinner';
import RecipesList from '../components/RecipesList';
import { getSearchRecipes } from '../services/recipes';

export default function Searchpage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [results, setResults] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);

        (async function () {
            try {
                const query = searchParams.get('query');
                const recipes = await getSearchRecipes(query);
                setResults(recipes);
                setLoading(false);
            } catch (err) {
                setLoading(false);
                setError(err.message);
            }
        })();
    }, []);

    if (error) {
        return <Heading>{error}</Heading>;
    }

    return (
        <Box minH={'100vh'} w="100vw">
            <Center my="10">
                <Heading>
                    Showing results for &quot;{searchParams.get('query')}&quot;
                </Heading>
            </Center>
            {loading ? <CustomSpinner /> : <RecipesList recipes={results} />}
        </Box>
    );
}
