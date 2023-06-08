import { Box, Button, Flex, Heading, List, ListItem } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Searchbar from './Searchbar';

export default function Navbar() {
    return (
        <Flex
            alignItems="center"
            justifyContent="space-between"
            py="4"
            px="6"
            shadow="sm"
        >
            <Flex alignItems="center" gap="8">
                <Heading fontSize="3xl" color="yellow.500">
                    recipes
                </Heading>
                <Searchbar />
            </Flex>
            <Flex alignItems="center" gap="6">
                <List display="flex" gap="6">
                    <ListItem>Home</ListItem>
                    <ListItem>Recipes</ListItem>
                    <ListItem>Contact</ListItem>
                    <ListItem>About</ListItem>
                </List>
                <Box>
                    <Button variant="outline" colorScheme="black">
                        <Link to="/auth/signup">Signup</Link>
                    </Button>
                    <Button ml="4" color="white" bg="black">
                        <Link to="/auth/login">Login</Link>
                    </Button>
                </Box>
            </Flex>
        </Flex>
    );
}
