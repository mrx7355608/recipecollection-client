import { Flex, Box, Spinner, Heading, Text, Image } from '@chakra-ui/react';
import Ingredients from '../components/Recipe/Ingredients';
import Steps from '../components/Recipe/Steps';
import Details from '../components/Recipe/Details';
import ChefInfo from '../components/Recipe/ChefInfo';
import StarRatings from '../components/StarRatings';
import VerticalDivider from '../components/VerticalDivider';
import { useEffect, useState } from 'react';
import { getRecipeById } from '../services/recipes';
import { useParams } from 'react-router-dom';
import ReviewsSection from '../components/Recipe/ReviewsSection';

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

    if (loading) return <Spinner />;

    return (
        <Flex w="60vw" mx="auto" direction={'column'} p="6" mt="10">
            {/* title, ratings and reviews */}
            <Heading fontSize={'4xl'}>
                {' '}
                {recipe.title.substring(0, 1).toUpperCase() +
                    recipe.title.substring(1)}
            </Heading>
            <Flex alignItems={'center'}>
                <StarRatings ratings={recipe.averageRatings} />
                <VerticalDivider />
                <Text
                    fontWeight={'semibold'}
                    letterSpacing={0.4}
                    textDecoration={'underline'}
                    textDecorationColor={'yellow.400'}
                    textUnderlineOffset={4}
                    mt="1"
                >
                    {recipe.ratingsAndReviews.length} reviews
                </Text>
                <VerticalDivider />
                <Text
                    fontWeight={'semibold'}
                    letterSpacing={0.8}
                    textDecoration={'underline'}
                    textDecorationColor={'yellow.400'}
                    textUnderlineOffset={4}
                    mt="1"
                >
                    {recipe.recipePhotos.length} photos
                </Text>
            </Flex>

            {/* recipe description */}
            <Text mt="4" fontSize={'lg'}>
                {recipe.description}
            </Text>

            {/* Chef, createdAt, updatedAt */}
            <Flex mt="10">
                <Text mr="1" color={'gray.600'}>
                    Recipe by{' '}
                    <Text
                        as={'span'}
                        fontWeight={'semibold'}
                        letterSpacing={0.8}
                        textDecoration={'underline'}
                        textDecorationColor={'yellow.400'}
                        textUnderlineOffset={4}
                        color="black"
                    >
                        {recipe.chef.fullname}
                    </Text>
                </Text>
                <VerticalDivider />
                <Text fontSize={'sm'} color={'gray.600'}>
                    Pulished on {new Date(recipe.createdAt).toDateString()}
                </Text>
                <VerticalDivider />
                <Text fontSize={'sm'} color={'gray.600'}>
                    Updated on {new Date(recipe.updatedAt).toDateString()}
                </Text>
            </Flex>

            {/* cooking time */}
            <Box bg={'gray.100'} p="5" mt="8">
                <Text fontWeight={'semibold'}>Total cooking time</Text>
                {recipe.cookingTime} minutes
            </Box>

            {/* preview photos */}
            <Image src={recipe.recipePhotos[0]} h={'400px'} mt="10" mb="3" />
            <Flex alignItems={'center'} gap="3">
                {recipe.recipePhotos.map((url, index) => {
                    return (
                        <Image
                            _hover={{ cursor: 'pointer' }}
                            w="28"
                            key={index}
                            src={url}
                        />
                    );
                })}
            </Flex>
            <Ingredients ingredients={recipe.ingredients} />
            <Steps steps={recipe.steps} />
            <ReviewsSection recipeId={recipe._id} />
        </Flex>
    );
}
