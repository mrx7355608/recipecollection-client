import React from 'react';
import {
    Text,
    Container,
    Heading,
    Input,
    Button,
    VStack,
    Center,
    HStack,
    Box,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <HStack gap="3" h="100vh">
            <Box
                backgroundImage="/bg.jpeg"
                backgroundSize="cover"
                backgroundPosition="center"
                w="47%"
                h="100%"
                style={{}}
            ></Box>
            <VStack justifyContent="center" h="100%">
                <Container
                    p="6"
                    borderRadius="lg"
                    justifyContent="center"
                    bg="white"
                    w="max-content"
                >
                    <Heading mb="10" fontSize="3xl" color="gray.700">
                        Login to your account
                    </Heading>
                    <Text mt="6" mb="4"></Text>
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
                    >
                        LOGIN
                    </Button>
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
                </Container>
            </VStack>
        </HStack>
    );
}
