import { Heading, Text, Box } from '@chakra-ui/react';

// eslint-disable-next-line react/prop-types
export default function Steps({ steps }) {
    return (
        <>
            <Heading mt="1" fontSize={'4xl'} mb="4">
                Directions
            </Heading>
            <Box h="max-content">
                {steps.map((step, index) => {
                    return (
                        <Box key={index}>
                            <Heading
                                fontSize={'xl'}
                                mb="1"
                                textDecoration={'underline'}
                                textDecorationColor={'yellow.400'}
                                textDecorationThickness={'2px'}
                                textUnderlineOffset={2}
                            >
                                Step {index + 1}
                            </Heading>
                            <Text mb="7" fontSize={'lg'}>
                                {step}
                            </Text>
                        </Box>
                    );
                })}
            </Box>
        </>
    );
}
