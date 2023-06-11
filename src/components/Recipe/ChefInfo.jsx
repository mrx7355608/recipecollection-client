import {
    Button,
    ButtonGroup,
    Flex,
    Heading,
    Image,
    Text,
} from '@chakra-ui/react';
import React from 'react';
import {
    FaFacebook,
    FaInstagram,
    FaMailchimp,
    FaSnapchat,
    FaTwitter,
} from 'react-icons/fa';

export default function ChefInfo() {
    return (
        <Flex
            direction={'column'}
            p="4"
            borderRadius={'md'}
            shadow={'sm'}
            bg="white"
            w="35%"
            alignItems={'center'}
        >
            <Heading mb="1" color="yellow.600" fontSize={'2xl'} mt="5">
                About Chef
            </Heading>
            <Image
                src="/hero.jpg"
                borderRadius={'full'}
                w="36"
                h="32"
                fit="cover"
                mt="12"
                mb="9"
            />
            <Heading fontSize={'xl'}>Charlie Puth</Heading>
            <Text mt="2" textAlign={'center'} mx="3" color="gray.700">
                Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
                sint cillum sint consectetur cupidatat.
            </Text>
            <ButtonGroup
                mt="12"
                variant={'ghost'}
                borderRadius={'full'}
                colorScheme="gray"
            >
                <Button p="0">
                    <FaInstagram size="20" />
                </Button>
                <Button p="0">
                    <FaFacebook size="20" />
                </Button>
                <Button p="0">
                    <FaTwitter size="20" />
                </Button>
                <Button p="0">
                    <FaSnapchat size="20" />
                </Button>
            </ButtonGroup>
        </Flex>
    );
}
