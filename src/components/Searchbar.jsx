import { Flex, Button, Input } from '@chakra-ui/react';

export default function Searchbar() {
    return (
        <Flex
            borderWidth="1px"
            borderColor="gray.500"
            gap="1"
            alignItems="center"
            borderRadius="md"
            p="1"
            w="md"
        >
            <Input size="sm" placeholder="Search" variant="ghost" />
            <Button
                size="sm"
                variant="ghost"
                borderRadius="sm"
                _hover={{ background: 'none' }}
            >
                Search
            </Button>
        </Flex>
    );
}
