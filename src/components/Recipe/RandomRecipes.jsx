import { useState, useEffect } from 'react';
import { getRandomRecipes } from '../../services/recipes';
import CustomSpinner from '../CustomSpinner';
import { Box, Heading, Image, Flex, Text } from '@chakra-ui/react';
import StarRatings from '../StarRatings';

export default function RandomRecipes() {
    const [randomRecipes, setRandomRecipes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async function () {
            const res = await getRandomRecipes();
            setLoading(false);
            setRandomRecipes(res);
        })();
    }, []);

    if (loading) {
        return <CustomSpinner />;
    }
    return (
        <Box bg="gray.50" p="5" w="60%" m="0">
            {randomRecipes.map((recipe) => {
                return (
                    <Flex key={recipe._id} alignItems={'center'} gap="2">
                        <Image
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
