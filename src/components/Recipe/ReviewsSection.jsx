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
import StarRatings from '../StarRatings';

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
        <Box w="full" my="5" bg="white" borderRadius={'md'}>
            <Heading fontSize="4xl" mt="3">
                Reviews
            </Heading>
            {/* Star ratings */}
            <Flex
                direction={'column'}
                gap="2"
                alignItems={'flex-start'}
                mt="5"
                mb="12"
            >
                <StarRatingComponent
                    starCount={5}
                    starColor="orange"
                    name="stars"
                    value={stars}
                    renderStarIcon={() => <FaStar size={'22'} />}
                    onStarClick={(nextValue) => setStars(nextValue)}
                />
                <Box>
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
                </Box>
            </Flex>
            <VStack alignItems={'flex-start'}>
                {loading ? <Spinner /> : null}
                {error ? <Heading>{error}</Heading> : null}
                {reviews.map(({ _id, user, review, stars }) => {
                    return (
                        <>
                            <Flex
                                key={_id}
                                gap="4"
                                alignItems={'center'}
                                bg="white"
                                p="2"
                                w="full"
                            >
                                <Image
                                    src={user.photo}
                                    w="10"
                                    h="10"
                                    borderRadius={'full'}
                                    fit={'cover'}
                                    mb="3"
                                />
                                <Box mr="auto">
                                    <Heading mb="0.5" fontSize={'md'}>
                                        {user.fullname}
                                    </Heading>
                                    <Text>{review}</Text>
                                </Box>
                                <StarRatings ratings={stars} />
                            </Flex>
                            <hr
                                style={{
                                    width: '100%',
                                    height: '2px',
                                    marginBottom: '20px',
                                    marginTop: '10px',
                                }}
                            />
                        </>
                    );
                })}
            </VStack>
        </Box>
    );
}
