import { OrderedList, ListItem, Heading, Box } from '@chakra-ui/react';

// eslint-disable-next-line react/prop-types
export default function RecipeIngredients({ ingredients }) {
    return (
        <Box bg="white" p="7" shadow={'sm'} borderRadius={'md'}>
            <Heading fontSize={'3xl'} mt="1" mb="3">
                Ingredients
            </Heading>
            <OrderedList ml="7">
                {ingredients.map((item, index) => {
                    return (
                        <ListItem
                            key={index}
                            _notLast={{ mb: '2' }}
                            fontSize={'lg'}
                        >
                            {item}
                        </ListItem>
                    );
                })}
            </OrderedList>
        </Box>
    );
}
