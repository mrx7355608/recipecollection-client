import { Flex, Box, Spinner, Heading } from '@chakra-ui/react';
import CommentSection from '../components/Recipe/CommentSection';
import Ingredients from '../components/Recipe/Ingredients';
import Steps from '../components/Recipe/Steps';
import Details from '../components/Recipe/Details';
import ChefInfo from '../components/Recipe/ChefInfo';
import { useEffect, useState } from 'react';
import { getRecipeById } from '../services/recipes';
import { useParams } from 'react-router-dom';

export default function Recipe() {
    const [recipe, setRecipe] = useState({});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        (async function () {
            try {
                const response = await getRecipeById(id);
                setLoading(false);
                setRecipe(response);
            } catch (err) {
                setLoading(false);
                setError(err.message);
            }
        })();
    }, []);

    const ingredients = [
        'Potato 2Kgs',
        'Green chilly 2 bowls',
        'Garlic 30 grams',
        'Ketchup 30ml',
    ];
    const steps = [
        'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
        'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
        'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
        'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
        'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
        'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    ];
    if (loading) {
        return <Spinner />;
    }

    if (error) {
        return <Heading>{error}</Heading>;
    }

    return (
        <>
            <Flex direction={'column'} p="6">
                <Details />
                <Flex gap="5" h="full">
                    <Box bg="white" borderRadius={'md'} p="7" shadow="sm">
                        <Ingredients ingredients={ingredients} />
                        <Box my="8"></Box>
                        <Steps steps={steps} />
                    </Box>
                    <ChefInfo chef={recipe.chef} />
                </Flex>
                <CommentSection />
            </Flex>
        </>
    );
}
