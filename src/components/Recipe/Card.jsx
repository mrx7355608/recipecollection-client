import { Flex, Heading, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import StarRatings from '../StarRatings';

export default function Recipe({ recipe }) {
    const { thumbnail, _id, title, totalReviews, averageRatings, category } =
        recipe;
    return (
        <Flex direction={'column'} h={'max-content'} mt="8">
            {/* Recipe image */}
            <Image
                src={thumbnail}
                w={'sm'}
                borderRadius={'sm'}
                h={'56'}
                fit={'cover'}
                shadow={'md'}
            />
            <Text
                mt="4"
                color={'gray.400'}
                fontSize={'sm'}
                fontWeight={'semibold'}
            >
                {category.toUpperCase()}
            </Text>
            {/* Recipe title */}
            <Link to={'/recipes/' + _id}>
                <Heading
                    _hover={{
                        color: 'yellow.500',
                    }}
                    mt="3"
                    fontSize={'2xl'}
                >
                    {title.substring(0, 20)}
                </Heading>
            </Link>
            <Flex alignItems={'center'} gap="2">
                <StarRatings
                    ratings={averageRatings}
                    size={18}
                    fontSize={'md'}
                />
                <Text mt="1" color={'gray.600'} ml="1">
                    {totalReviews} reviews
                </Text>
            </Flex>
        </Flex>
    );
}
