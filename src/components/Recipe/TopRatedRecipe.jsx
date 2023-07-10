import { useEffect, useState } from 'react';
import { getTopRatedRecipe } from '../../services/recipes';
import { Flex, Heading, Image, Text } from '@chakra-ui/react';
import CustomSpinner from '../CustomSpinner';
import useFetch from '../../hooks/useFetch';
import { clientConfig } from '../../../config';

export default function TopRatedRecipe() {
    const { loading, error, data } = useFetch(
        `${clientConfig.apiUrl}/recipes/top-rated`
    );

    if (loading) {
        return <CustomSpinner />;
    }

    if (error) {
        return <Heading>{error}</Heading>;
    }

    return (
        <Flex direction={'column'} alignItems={'flex-start'}>
            <Image
                src={data.topRatedRecipe[0].thumbnail}
                w="800px"
                h="450px"
                fit={'cover'}
            />
            <Text
                color={'gray.500'}
                letterSpacing={'0.5px'}
                fontWeight={'semibold'}
                fontSize={'sm'}
                mt="7"
            >
                {data.topRatedRecipe[0].category.toUpperCase()}
            </Text>
            <Heading fontSize={'3xl'} fontWeight={'black'} mt="1">
                {data.topRatedRecipe[0].title}
            </Heading>
            <Text mt="1" mb="12" fontSize={'lg'}>
                {data.topRatedRecipe[0].description.substring(0, 200)}
            </Text>
        </Flex>
    );
}
