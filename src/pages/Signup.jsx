import { useState } from 'react';
import {
    Text,
    Container,
    Heading,
    Input,
    Button,
    VStack,
    Center,
    Spinner,
} from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { clientConfig } from '../../config';
import { axiosClient } from '../axios_setup';

export default function Signup() {
    return (
        <VStack justifyContent="center" h="100%">
            <Container
                p="6"
                borderRadius="lg"
                justifyContent="center"
                bg="white"
                w="max-content"
            >
                <Heading mb="10" fontSize="3xl" color="gray.700">
                    Create your account
                </Heading>

                {/* Signup form */}
                <SignupForm />

                <Center>
                    Already have an account?
                    <Text
                        fontWeight="bold"
                        color="yellow.600"
                        display="inline"
                        ml="2"
                    >
                        <Link to="/auth/login">Login</Link>
                    </Text>
                </Center>
            </Container>
        </VStack>
    );
}

function SignupForm() {
    const [signupData, setSignupData] = useState({
        fname: '',
        lname: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigateTo = useNavigate();

    function handleOnChange(e) {
        const { name, value } = e.target;
        setSignupData({ ...signupData, [name]: value });
    }

    async function signup(e) {
        try {
            e.preventDefault();
            const url = `${clientConfig.apiUrl}/auth/signup`;
            setLoading(true);
            await axiosClient.post(url, signupData);
            setLoading(false);
            navigateTo('/auth/login');
        } catch (err) {
            const { error } = err.response.data;
            setLoading(false);
            setError(error);
        }
    }

    return (
        <>
            {/* Error message box */}
            {error ? (
                <Text mt="6" mb="4" p="4" bg="red.100" color="red.700">
                    {error}
                </Text>
            ) : null}

            <form onSubmit={signup}>
                <Input
                    borderWidth="2px"
                    fontSize="sm"
                    borderColor="gray.600"
                    size="lg"
                    borderRadius="none"
                    placeholder="First name"
                    type="text"
                    name="fname"
                    onChange={handleOnChange}
                    _placeholder={{ color: 'gray.800' }}
                />
                <Input
                    borderWidth="2px"
                    fontSize="sm"
                    borderColor="gray.600"
                    onChange={handleOnChange}
                    size="lg"
                    borderRadius="none"
                    placeholder="Last name"
                    type="text"
                    name="lname"
                    my="4"
                    _placeholder={{ color: 'gray.800' }}
                />
                <Input
                    borderWidth="2px"
                    fontSize="sm"
                    borderColor="gray.600"
                    onChange={handleOnChange}
                    size="lg"
                    borderRadius="none"
                    placeholder="Email address"
                    type="email"
                    name="email"
                    _placeholder={{ color: 'gray.800' }}
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
                    onChange={handleOnChange}
                    mt="4"
                    _placeholder={{ color: 'gray.800' }}
                />
                <Input
                    borderWidth="2px"
                    fontSize="sm"
                    borderColor="gray.600"
                    size="lg"
                    borderRadius="none"
                    placeholder="Confirm Password"
                    type="password"
                    onChange={handleOnChange}
                    name="confirmPassword"
                    mt="4"
                    _placeholder={{ color: 'gray.800' }}
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
                    {loading ? <Spinner /> : 'SIGNUP'}
                </Button>
            </form>
        </>
    );
}
