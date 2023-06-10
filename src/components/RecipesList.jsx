import React from 'react';
import { Flex } from '@chakra-ui/react';
import Recipe from './Recipe';

export default function RecipesList() {
    return (
        <Flex
            alignItems={'center'}
            justifyContent={'center'}
            wrap={'wrap'}
            gap={'8'}
            my={'12'}
        >
            <Recipe />
            <Recipe />
            <Recipe />
            <Recipe />
            <Recipe />
        </Flex>
    );
}
