import CustomSpinner from '../CustomSpinner';
import { Box, Heading, Image, Flex, Text } from '@chakra-ui/react';
import StarRatings from '../StarRatings';
import useFetch from '../../hooks/useFetch';
import { clientConfig } from '../../../config';

export default function RandomRecipes() {
    const { data, loading, error } = useFetch(
        `${clientConfig.apiUrl}/recipes/random`
    );

    if (loading) {
        return <CustomSpinner />;
    }

    if (error) {
        return <Heading>{error}</Heading>;
    }

    return (
        <Box bg="gray.100" px="5" py="2" w="70%" m="0">
            {data.randomRecipes.map((recipe) => {
                return (
                    <Flex key={recipe._id} alignItems={'center'} gap="2" my="3">
                        <Image
                            borderRadius={'sm'}
                            src={recipe.thumbnail}
                            fit="cover"
                            w="44"
                            h="24"
                        />
                        <Box>
                            <Text
                                fontSize={'xs'}
                                fontWeight={'semibold'}
                                letterSpacing={1}
                                color={'gray.600'}
                            >
                                {recipe.category.toUpperCase()}
                            </Text>

                            <Heading fontSize={'md'}>
                                {recipe.title.substring(0, 30)}...
                            </Heading>
                            <StarRatings
                                ratings={recipe.averageRatings}
                                size={14}
                                fontSize={'sm'}
                            />
                        </Box>
                    </Flex>
                );
            })}
        </Box>
    );
}
