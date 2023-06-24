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
                    <ListItem>
                        <Link to="/">HOME</Link>
                    </ListItem>
                    <ListItem>RECIPES</ListItem>
                    <ListItem>
                        <Link to="/contact">CONTACT</Link>
                    </ListItem>
                    <ListItem>
                        <Link to="/about">ABOUT</Link>
                    </ListItem>
                </List>
                {user == null ? (
                    <Box>
                        <Link to="/auth/signup">
                            <Button
                                borderRadius="none"
                                variant="outline"
                                colorScheme="black"
                                fontSize="xs"
                            >
                                SIGNUP
                            </Button>{' '}
                        </Link>
                        <Link to="/auth/login">
                            <Button
                                fontSize="xs"
                                borderRadius="none"
                                ml="4"
                                color="white"
                                bg="black"
                            >
                                LOGIN
                            </Button>
                        </Link>
                    </Box>
                ) : (
                    <Flex alignItems={'center'} gap="6">
                        <Link to="/profile">
                            <Heading fontSize={'md'} fontWeight={'medium'}>
                                {user.fullname}
                            </Heading>
                        </Link>
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
