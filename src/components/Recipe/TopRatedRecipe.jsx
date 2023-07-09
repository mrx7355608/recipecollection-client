import { useEffect, useState } from 'react';
import { getTopRatedRecipe } from '../../services/recipes';
import { Flex, Heading, Image, Text } from '@chakra-ui/react';
import CustomSpinner from '../CustomSpinner';

export default function TopRatedRecipe() {
    const [topRatedRecipe, setTopRatedRecipe] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async function () {
            const res = await getTopRatedRecipe();
            setLoading(false);
            setTopRatedRecipe(res);
        })();
    }, []);

    if (loading) {
        return <CustomSpinner />;
    }

    return (
        <Flex direction={'column'} alignItems={'flex-start'}>
            <Image
                src={topRatedRecipe.thumbnail}
                w="800px"
                h="450px"
                fit={'cover'}
            />
            <Text
                color={'gray.500'}
                letterSpacing={'0.5px'}
                fontWeight={'semibold'}
                fontSize={'sm'}
                mt="4"
            >
                {topRatedRecipe.category.toUpperCase()}
            </Text>
            <Heading fontSize={'3xl'} fontWeight={'black'} mt="1">
                {topRatedRecipe.title}
            </Heading>
            <Text w="64%" mt="1" mb="12">
                {topRatedRecipe.description.substring(0, 200)}
            </Text>
        </Flex>
    );
}
