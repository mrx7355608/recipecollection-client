import { OrderedList, ListItem, Heading, Box } from '@chakra-ui/react';

// eslint-disable-next-line react/prop-types
export default function RecipeIngredients({ ingredients }) {
    return (
        <>
            <Heading fontSize={'2xl'} mt="1" mb="3">
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
        </>
    );
}
