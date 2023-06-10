import { Box, Flex, Heading, Text } from '@chakra-ui/react';

export default function Hero() {
    return (
        <Flex
            w="100vw"
            h="350px"
            backgroundImage="/hero.jpg"
            backgroundPosition="center"
            backgroundSize="cover"
            backgroundColor={'blackAlpha.700'}
            backgroundBlendMode={'darken'}
            alignItems={'center'}
            justifyContent={'center'}
            textAlign={'center'}
            color={'white'}
        >
            <Box>
                <Heading fontSize={'5xl'} color="yellow.400">
                    CookBook
                </Heading>
                <Text fontSize={'xl'}>
                    Make your every day special with our recipes collection
                </Text>
            </Box>
        </Flex>
    );
}
