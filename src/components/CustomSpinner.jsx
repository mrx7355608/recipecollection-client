import { Flex, Spinner } from '@chakra-ui/react';

export default function CustomSpinner() {
    return (
        <Flex
            alignItems={'center'}
            justifyContent={'center'}
            h="100vh"
            w="100vw"
        >
            <Spinner size={'md'} color="yellow.500" />
        </Flex>
    );
}
