import { Box, Button, Flex, Heading, List, ListItem } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useUser } from '../contexts/user';
import { logout } from '../services/auth';

export default function Navbar() {
    const { user, userDispatcher } = useUser();

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
                {user == null ? (
                    <Box>
                        <Button
                            borderRadius="none"
                            variant="outline"
                            colorScheme="black"
                            fontSize="xs"
                        >
                            <Link to="/auth/signup">SIGNUP</Link>
                        </Button>{' '}
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
                ) : (
                    <Flex alignItems={'center'} gap="6">
                        <Heading fontSize={'md'} fontWeight={'medium'}>
                            {user.fullname}
                        </Heading>
                        <Button
                            onClick={async () => await logoutUser()}
                            borderRadius="none"
                            variant="outline"
                            colorScheme="red"
                            fontSize="xs"
                        >
                            LOGOUT
                        </Button>
                    </Flex>
                )}
            </Flex>
        </Flex>
    );

    async function logoutUser() {
        const { error, data } = await logout();
        if (error) return console.log(error);
        if (data.logout == true) {
            userDispatcher({ type: 'LOGOUT' });
        }
        return;
    }
}
