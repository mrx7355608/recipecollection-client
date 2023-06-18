import { Box, Heading, Button, ButtonGroup, HStack } from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
    return (
        <Box textAlign={'center'} fontSize={'xs'} bg="gray.800" p="6">
            <Box w="full" h="1px" bg="gray.700" mb="4"></Box>
            <HStack alignItems={'center'} justifyContent={'space-between'}>
                <Heading fontSize={'xl'} color="gray.400" mb="3">
                    &copy; 2023 CookBook
                </Heading>
                <ButtonGroup
                    variant={'solid'}
                    colorScheme="yellow"
                    color="white"
                >
                    <Button borderRadius={'full'} px="2">
                        <FaFacebook size={17} />
                    </Button>

                    <Button borderRadius={'full'} p="0">
                        <FaInstagram size={17} />
                    </Button>
                    <Button borderRadius={'full'} p="0">
                        <FaTwitter size={17} />
                    </Button>
                </ButtonGroup>
            </HStack>
        </Box>
    );
}
