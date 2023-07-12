import { Center, Box, Heading } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import CustomSpinner from '../components/CustomSpinner';
import RecipesList from '../components/RecipesList';
import useFetch from '../hooks/useFetch';
import { clientConfig } from '../../config';

export default function Searchpage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query');
    const { apiUrl } = clientConfig;
    const { loading, error, data } = useFetch(
        `${apiUrl}/recipes/search?query=${query}`
    );

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Box minH={'100vh'} w="100vw">
            <Center my="10">
                <Heading>
                    Showing results for &quot;{searchParams.get('query')}&quot;
                </Heading>
            </Center>
            {loading ? (
                <CustomSpinner />
            ) : error ? (
                <Heading>{error}</Heading>
            ) : (
                <RecipesList recipes={data} />
            )}
        </Box>
    );
}
