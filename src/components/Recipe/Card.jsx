import { Flex, Box, Button, Heading, Image, Text } from '@chakra-ui/react';
import Tags from './Tags';

export default function Recipe() {
    return (
        <Flex gap="2" h={'64'}>
            {/* Recipe image */}
            <Image
                src="/hero.jpg"
                w={'60'}
                borderRadius={'sm'}
                h={'auto'}
                fit={'cover'}
                shadow={'md'}
            />
            <Box
                w={'sm'}
                p="5"
                borderRadius={'sm'}
                _hover={{ cursor: 'pointer' }}
                bg="white"
                direction={'column'}
                justifyContent={'flex-end'}
                shadow={'md'}
            >
                {/* Recipe title */}
                <Heading mb="2" mt="1" fontSize={'xl'}>
                    Special Italian Pasta
                </Heading>

                {/* Tags of recipe */}
                <Tags tags={['Italian']} />

                {/* Description of a recipe */}
                <Text mt="4" fontSize={'md'} color="gray.800">
                    Lorem ipsum dolor sit amet, officia excepteur ex fugiat
                    reprehenderit enim labore culpa sint ad nisi Lorem pariatur
                    aliquip...
                </Text>

                {/* Cook button */}
                <Button
                    mt="5"
                    colorScheme="yellow"
                    w={'full'}
                    variant={'outline'}
                    borderRadius={'sm'}
                >
                    Cook
                </Button>
            </Box>
        </Flex>
    );
}
