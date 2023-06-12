import { Heading, OrderedList, ListItem, Box } from '@chakra-ui/react';

// eslint-disable-next-line react/prop-types
export default function Steps({ steps }) {
    return (
        <>
            <Heading mt="1" fontSize={'2xl'} mb="4">
                Steps
            </Heading>
            <OrderedList ml="7">
                {steps.map((step, index) => {
                    return (
                        <ListItem
                            key={index}
                            _notLast={{ mb: '2' }}
                            fontSize={'lg'}
                        >
                            {step}
                        </ListItem>
                    );
                })}
            </OrderedList>
        </>
    );
}
