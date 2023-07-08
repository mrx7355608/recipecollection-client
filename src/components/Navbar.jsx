import {
    Button,
    Flex,
    Heading,
    List,
    ListItem,
    Image,
    Link as ChakraLink,
} from '@chakra-ui/react';
import { useUser } from '../contexts/user';
import { logout } from '../services/auth';
import { FaFacebook, FaInstagram, FaSearch, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const { user } = useUser();

    return (
        <Flex
            alignItems="center"
            justifyContent="space-between"
            py="4"
            px="12"
            shadow="md"
            bg="white"
            direction={'column'}
        >
            <Flex w="full" alignItems="center" justifyContent={'space-between'}>
                <Heading ml="5" fontSize="4xl" color="yellow.400" mt="3" mb="7">
                    Cookbook
                </Heading>
                <Flex gap="2" alignItems={'center'} w="max-content">
                    <FaSearch />
                    <hr
                        style={{
                            background: 'lightgrey',
                            width: '2px',
                            height: '18px',
                            margin: '0px 10px',
                        }}
                    />
                    {user == null ? (
                        <LoginAndSignupButtons />
                    ) : (
                        <UserProfileAndLogoutButton />
                    )}
                </Flex>
            </Flex>

            {/* Navbar links */}
            <Navlinks />
        </Flex>
    );
}

function Navlinks() {
    return (
        <List
            display="flex"
            gap="8"
            fontSize="xs"
            fontWeight="semibold"
            color={'gray.800'}
            letterSpacing={1}
            justifyContent={'flex-start'}
            w="full"
            ml="12"
            _hover={{ cursor: 'pointer' }}
        >
            <ListItem
                _hover={{
                    textDecoration: 'underline',
                    textDecorationColor: 'yellow.500',
                }}
            >
                <Link to="/">HOME</Link>
            </ListItem>
            <ListItem
                _hover={{
                    textDecoration: 'underline',
                    textDecorationColor: 'yellow.500',
                }}
            >
                DINNERS
            </ListItem>
            <ListItem
                _hover={{
                    textDecoration: 'underline',
                    textDecorationColor: 'yellow.500',
                }}
            >
                LUNCH
            </ListItem>
            <ListItem
                _hover={{
                    textDecoration: 'underline',
                    textDecorationColor: 'yellow.500',
                }}
            >
                BREAKFAST
            </ListItem>
            <ListItem
                _hover={{
                    textDecoration: 'underline',
                    textDecorationColor: 'yellow.500',
                }}
            >
                CUISINES
            </ListItem>
            <ListItem
                _hover={{
                    textDecoration: 'underline',
                    textDecorationColor: 'yellow.500',
                }}
            >
                OCASSIONS
            </ListItem>
            <ListItem
                _hover={{
                    textDecoration: 'underline',
                    textDecorationColor: 'yellow.500',
                }}
            >
                <Link to="/contact">CONTACT</Link>
            </ListItem>
            <ListItem
                _hover={{
                    textDecoration: 'underline',
                    textDecorationColor: 'yellow.500',
                }}
            >
                <Link to="/about">ABOUT US</Link>
            </ListItem>
        </List>
    );
}

function LoginAndSignupButtons() {
    return (
        <Flex
            alignItems={'center'}
            justifyContent={'center'}
            w="max-content"
            mr="10"
        >
            <Link to="/auth/signup">
                <Button
                    m="0"
                    p="0"
                    borderRadius="none"
                    variant="ghost"
                    fontSize="xs"
                    _hover={{
                        bg: 'transparent',
                        textDecoration: 'underline',
                        textDecorationColor: 'yellow.400',
                    }}
                    display={'inline'}
                >
                    SIGNUP
                </Button>{' '}
            </Link>
            <hr
                style={{
                    width: '2px',
                    height: '18px',
                    margin: '0px 15px',
                    background: 'lightgrey',
                }}
            />
            <Link to="/auth/login">
                <Button
                    display={'inline'}
                    m="0"
                    p="0"
                    variant={'ghost'}
                    fontSize="xs"
                    _hover={{
                        bg: 'transparent',
                        textDecoration: 'underline',
                        textDecorationColor: 'yellow.400',
                    }}
                    borderRadius="none"
                >
                    LOGIN
                </Button>
            </Link>
            <hr
                style={{
                    width: '2px',
                    height: '18px',
                    margin: '0px 15px',
                    background: 'lightgrey',
                }}
            />
            <Flex alignItems={'center'} gap="4">
                <ChakraLink href="https://www.facebook.com" isExternal>
                    <FaFacebook size={18} />
                </ChakraLink>
                <ChakraLink href="https://www.instagram.com" isExternal>
                    <FaInstagram size={18} />
                </ChakraLink>
                <ChakraLink href="https://www.twitter.com" isExternal>
                    <FaTwitter size={18} />
                </ChakraLink>
            </Flex>
        </Flex>
    );
}

function UserProfileAndLogoutButton() {
    const { user, userDispatcher } = useUser();

    async function logoutUser() {
        const { error, data } = await logout();
        if (error) return console.log(error);
        if (data.logout == true) {
            userDispatcher({ type: 'LOGOUT' });
        }
        return;
    }

    return (
        <Flex alignItems={'center'} mr="10">
            <Image
                src={user.photo}
                w="6"
                fit={'cover'}
                borderRadius={'full'}
                mr="1"
            />
            <Link to="/profile">
                <Heading
                    fontSize={'sm'}
                    mr="3"
                    fontWeight={'medium'}
                    _hover={{ color: 'yellow.500' }}
                >
                    {user.fullname}
                </Heading>
            </Link>
            <hr
                style={{
                    background: 'lightgrey',
                    width: '2px',
                    height: '20px',
                }}
            />
            <Button
                onClick={async () => await logoutUser()}
                borderRadius="none"
                variant="ghost"
                colorScheme="red"
                fontSize="xs"
                _hover={{
                    bg: 'transparent',
                    textDecoration: 'underline',
                    textDecorationColor: 'red.400',
                }}
            >
                LOGOUT
            </Button>
        </Flex>
    );
}
