import { Flex } from '@chakra-ui/react';
import Recipe from './Recipe/Card';

export default function RecipesList({ recipes }) {
    return (
        <Flex
            alignItems={'center'}
            justifyContent={'center'}
            wrap={'wrap'}
            gap={'8'}
            my={'12'}
        >
            {recipes.map((recipe) => {
                return <Recipe key={recipe._id} recipe={recipe} />;
            })}
        </Flex>
    );
}
