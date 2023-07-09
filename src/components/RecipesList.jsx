import { Flex } from '@chakra-ui/react';
import RecipeCard from './Recipe/Card';

export default function RecipesList({ recipes }) {
    return (
        <Flex
            alignItems={'center'}
            justifyContent={'space-evenly'}
            wrap={'wrap'}
            gap={'10'}
            columnGap={'xl'}
            mb={'10'}
        >
            {recipes.map((recipe) => {
                return <RecipeCard key={recipe._id} recipe={recipe} />;
            })}
        </Flex>
    );
}
