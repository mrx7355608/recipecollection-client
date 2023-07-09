import {
    Heading,
    Box,
    VStack,
    Flex,
    Textarea,
    Image,
    Text,
    Button,
    Spinner,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import StarRatingComponent from 'react-star-rating-component';
import { postReviewRecipe } from '../../services/recipes';

export default function ReviewsSection({ recipeId }) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [reviews, setReviews] = useState([]);
    const [stars, setStars] = useState(0);
    const [userReview, setUserReview] = useState('');

    useEffect(() => {
        const url = `http://localhost:8000/api/v1/recipes/${recipeId}/reviews`;
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                setLoading(false);
                setReviews(data.reviews);
            })
            .catch((err) => {
                setLoading(false);
                setError(err.message);
            });
    }, []);

    return (
        <Box my="5" bg="white" borderRadius={'md'} shadow="sm" p="5">
            <Heading fontSize="3xl" mt="3">
                Reviews
            </Heading>
            {/* Star ratings */}
            <StarRatingComponent
                starCount={5}
                starColor="orange"
                name="stars"
                value={stars}
                renderStarIcon={() => <FaStar size={'22'} />}
                onStarClick={(nextValue) => setStars(nextValue)}
            />
            <Textarea
                placeholder="Write your review here"
                mt="3"
                resize={'none'}
                w="lg"
                mb="6"
                p="4"
                borderRadius={'sm'}
                onChange={(e) => setUserReview(e.target.value)}
            ></Textarea>
            <Button
                onClick={async () => {
                    const result = await postReviewRecipe(
                        stars,
                        userReview,
                        recipeId
                    );
                    console.log(result);
                }}
                mt="12"
                colorScheme="yellow"
                borderRadius={'sm'}
                ml="3"
            >
                Review
            </Button>
            <VStack alignItems={'flex-start'}>
                {loading ? <Spinner /> : null}
                {error ? <Heading>{error}</Heading> : null}
                {reviews.map(({ _id, user, review }) => {
                    return (
                        <Flex
                            key={_id}
                            gap="4"
                            alignItems={'center'}
                            bg="white"
                            p="2"
                        >
                            <Image
                                src={user.photo}
                                w="10"
                                h="10"
                                borderRadius={'full'}
                                fit={'cover'}
                                mb="3"
                            />
                            <Box>
                                <Heading mb="0.5" fontSize={'md'}>
                                    {user.fullname}
                                </Heading>
                                <Text fontSize={'sm'}>{review}</Text>
                            </Box>
                        </Flex>
                    );
                })}
            </VStack>
        </Box>
    );
}
