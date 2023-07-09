import { UnorderedList, ListItem, Heading, Box } from '@chakra-ui/react';

// eslint-disable-next-line react/prop-types
export default function RecipeIngredients({ ingredients }) {
    return (
        <>
            <Heading fontSize={'4xl'} mt="12" mb="5">
                Ingredients
            </Heading>
            <UnorderedList ml="4" mb="12">
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
            </UnorderedList>
        </>
    );
}
