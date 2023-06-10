import { Flex, Button, Input } from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';

export default function Searchbar() {
    return (
        <Flex
            gap="1"
            alignItems="center"
            ml="5"
            w="md"
            bg="white"
            borderRadius="sm"
            borderWidth={2}
            borderColor={'gray.600'}
        >
            <Input
                bg="transparent"
                size="lg"
                placeholder="Search"
                variant="ghost"
                h="min-content"
            />
            <Button
                bg="transparent"
                size="md"
                variant="solid"
                borderRadius="sm"
            >
                <FaSearch />
            </Button>
        </Flex>
    );
}
