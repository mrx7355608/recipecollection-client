import { Button, Flex, Image, Heading, Box, Text } from '@chakra-ui/react';
import { FaArrowDown } from 'react-icons/fa';
import Tags from './Tags';

export default function Details() {
    return (
        <Flex
            h="80vh"
            alignItems={'center'}
            gap="4"
            mb="6"
            justifyContent={'center'}
        >
            {/* IMAGE*/}
            <Image
                src="/bg.jpeg"
                borderRadius={'sm'}
                w={'48%'}
                h={'80vh'}
                fit={'cover'}
            />

            <Box
                w="48%"
                bg="white"
                p="3"
                px="6"
                borderRadius={'md'}
                shadow={'sm'}
                h="full"
            >
                {/* TITLE */}
                <Heading mb="1" mt="7" fontSize={'3xl'} color="gray.700">
                    Special Italian Pasta
                </Heading>

                {/* TAGS */}
                <Tags tags={['Italian', 'Special']} />

                {/* DESCRIPTION */}
                <Text fontSize="lg" mt="5" w="full" color="gray.700">
                    Lorem ipsum dolor sit amet, officia excepteur ex fugiat
                    reprehenderit enim labore culpa sint ad nisi Lorem pariatur
                    mollit ex esse exercitation amet. Nisi anim cupidatat
                    excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem
                    est aliquip amet voluptate voluptate dolor minim nulla est
                    proident. Nostrud officia pariatur ut officia. Sit irure
                    elit esse ea nulla sunt ex occaecat reprehenderit commodo
                    officia dolor Lorem duis laboris cupidatat officia
                    voluptate. Culpa proident adipisicing id nulla nisi laboris
                    ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit
                    commodo ex non excepteur duis sunt velit enim. Voluptate
                    laboris sint cupidatat ullamco ut ea consectetur et est
                    culpa et culpa duis.
                </Text>

                <Button mt="10" variant={'link'} colorScheme="yellow">
                    <FaArrowDown style={{ marginRight: '7px' }} />
                    Proceed
                </Button>
            </Box>
        </Flex>
    );
}
