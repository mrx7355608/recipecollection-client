import { Flex, Box, Heading, Text, Image } from '@chakra-ui/react';
import Ingredients from '../components/Recipe/Ingredients';
import Steps from '../components/Recipe/Steps';
import StarRatings from '../components/StarRatings';
import VerticalDivider from '../components/VerticalDivider';
import { useParams } from 'react-router-dom';
import ReviewsSection from '../components/Recipe/ReviewsSection';
import useFetch from '../hooks/useFetch';
import { clientConfig } from '../../config';
import CustomSpinner from '../components/CustomSpinner';

export default function Recipe() {
    const { id } = useParams();
    const { loading, error, data } = useFetch(
        `${clientConfig.apiUrl}/recipes/${id}`
    );

    if (loading) return <CustomSpinner />;
    if (error) return <Heading>{error}</Heading>;

    return (
        <Flex w="60vw" mx="auto" direction={'column'} p="6" mt="10">
            {/* title, ratings and reviews */}
            <Heading fontSize={'4xl'}>
                {' '}
                {data.recipe.title.substring(0, 1).toUpperCase() +
                    data.recipe.title.substring(1)}
            </Heading>
            <Flex alignItems={'center'}>
                <StarRatings ratings={data.recipe.averageRatings} />
                <VerticalDivider />
                <Text
                    fontWeight={'semibold'}
                    letterSpacing={0.4}
                    textDecoration={'underline'}
                    textDecorationColor={'yellow.400'}
                    textUnderlineOffset={4}
                    mt="1"
                >
                    {data.recipe.ratingsAndReviews.length} reviews
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
                    {data.recipe.recipePhotos.length} photos
                </Text>
            </Flex>

            {/* recipe description */}
            <Text mt="4" fontSize={'lg'}>
                {data.recipe.description}
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
                        {data.recipe.chef.fullname}
                    </Text>
                </Text>
                <VerticalDivider />
                <Text fontSize={'sm'} color={'gray.600'}>
                    Pulished on {new Date(data.recipe.createdAt).toDateString()}
                </Text>
                <VerticalDivider />
                <Text fontSize={'sm'} color={'gray.600'}>
                    Updated on {new Date(data.recipe.updatedAt).toDateString()}
                </Text>
            </Flex>

            {/* cooking time */}
            <Box bg={'gray.100'} p="5" mt="8">
                <Text fontWeight={'semibold'}>Total cooking time</Text>
                {data.recipe.cookingTime} minutes
            </Box>

            {/* preview photos */}
            <Image
                src={data.recipe.recipePhotos[0]}
                h={'400px'}
                mt="10"
                mb="3"
            />
            <Flex alignItems={'center'} gap="3">
                {data.recipe.recipePhotos.map((url, index) => {
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
            <Ingredients ingredients={data.recipe.ingredients} />
            <Steps steps={data.recipe.steps} />
            <ReviewsSection recipeId={data.recipe._id} />
        </Flex>
    );
}
