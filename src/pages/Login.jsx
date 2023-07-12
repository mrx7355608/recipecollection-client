import { useState } from 'react';
import {
    Text,
    Box,
    Heading,
    Input,
    Button,
    VStack,
    Center,
    Spinner,
} from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../services/auth';
import { useUser } from '../contexts/user';

export default function Login() {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    });
    const { userDispatcher } = useUser();
    const navigateTo = useNavigate();

    return (
        <VStack
            alignItems={'flex-start'}
            justifyContent="center"
            h="100%"
            bg="white"
            w="50%"
            m="0"
        >
            <Box
                p="6"
                pl="7"
                borderRadius="lg"
                justifyContent="center"
                bg="white"
                w="80%"
            >
                <Heading mb="5" fontSize="3xl" color="gray.700">
                    Login to your account
                </Heading>
                {error ? (
                    <Text
                        my="6"
                        p="3"
                        color="red.700"
                        borderRadius={'sm'}
                        w="full"
                        bg="red.100"
                    >
                        {error}
                    </Text>
                ) : null}
                <form onSubmit={loginUser}>
                    <Input
                        borderWidth="2px"
                        fontSize="sm"
                        borderColor="gray.600"
                        size="lg"
                        borderRadius="none"
                        placeholder="Email address"
                        type="email"
                        name="email"
                        _placeholder={{ color: 'gray.800' }}
                        onChange={handleOnChange}
                    />
                    <Input
                        borderWidth="2px"
                        fontSize="sm"
                        borderColor="gray.600"
                        size="lg"
                        borderRadius="none"
                        placeholder="Password"
                        type="password"
                        name="password"
                        mt="4"
                        _placeholder={{ color: 'gray.800' }}
                        onChange={handleOnChange}
                    />
                    <Button
                        size="lg"
                        borderRadius="none"
                        colorScheme="yellow"
                        w="full"
                        mt="9"
                        mb="7"
                        fontSize="sm"
                        variant="solid"
                        type="submit"
                    >
                        {loading === false ? 'LOGIN' : <Spinner />}
                    </Button>
                </form>
                <Center>
                    Don&apos;t have an account?
                    <Text
                        fontWeight="bold"
                        color="yellow.600"
                        display="inline"
                        ml="2"
                    >
                        <Link to="/auth/signup">Signup</Link>
                    </Text>
                </Center>
            </Box>
        </VStack>
    );

    function handleOnChange(e) {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
    }
    function handleError(errorMessage) {
        setError(errorMessage);
        return setTimeout(() => setError(null), 5000);
    }

    async function loginUser(e) {
        setLoading(true);
        e.preventDefault();
        const { error, data } = await login(loginData);
        setLoading(false);
        if (error) return handleError(error);
        // Update user state
        userDispatcher({ type: 'LOGIN', user: data.user });
        navigateTo(-1);
    }
}
