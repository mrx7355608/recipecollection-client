import { Flex, Box, Button, Heading, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function Recipe({ recipe }) {
    const { thumbnail, _id, title, description, chef } = recipe;
    return (
        <Flex gap="2" h={'64'}>
            {/* Recipe image */}
            <Image
                src={thumbnail}
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
                    {title}
                </Heading>

                {/* Description of a recipe */}
                <Text mt="4" fontSize={'md'} color="gray.800">
                    {description}
                </Text>

                {/* Cook button */}
                <Link to={'/recipes/' + _id}>
                    <Button
                        mt="5"
                        colorScheme="yellow"
                        w={'full'}
                        variant={'outline'}
                        borderRadius={'sm'}
                    >
                        Cook
                    </Button>
                </Link>
                <Text>Recipe by: {chef.fullname}</Text>
            </Box>
        </Flex>
    );
}
