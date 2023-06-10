import { Box, Button, Flex, Heading, List, ListItem } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <Flex
            alignItems="center"
            justifyContent="space-between"
            py="4"
            px="12"
            shadow="md"
            bg="white"
        >
            <Heading ml="5" fontSize="2xl" color="yellow.400">
                Cookbook
            </Heading>
            <Flex mr="5" alignItems="center" gap="8">
                <List
                    display="flex"
                    gap="8"
                    fontSize="xs"
                    fontWeight="semibold"
                >
                    <ListItem>HOME</ListItem>
                    <ListItem>RECIPES</ListItem>
                    <ListItem>CONTACT</ListItem>
                    <ListItem>ABOUT</ListItem>
                </List>
                <Box>
                    <Button
                        borderRadius="none"
                        variant="outline"
                        colorScheme="black"
                        fontSize="xs"
                    >
                        <Link to="/auth/signup">SIGNUP</Link>
                    </Button>
                    <Button
                        fontSize="xs"
                        borderRadius="none"
                        ml="4"
                        color="white"
                        bg="black"
                    >
                        <Link to="/auth/login">LOGIN</Link>
                    </Button>
                </Box>
            </Flex>
        </Flex>
    );
}
