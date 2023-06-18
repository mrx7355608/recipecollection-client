import {
    Box,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    HStack,
    Input,
} from '@chakra-ui/react';
import Card from '../components/Recipe/Card';
import {
    FaEnvelope,
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaLock,
    FaUser,
} from 'react-icons/fa';
import React, { useState } from 'react';

export default function UserProfile() {
    return (
        <VStack my="10" p="5" gap="5" justifyContent={'center'} w="full">
            <HStack gap="5" alignItems={'center'} w="full">
                {/* USER DETAILS */}
                <Box
                    bg="white"
                    borderRadius={'md'}
                    shadow={'sm'}
                    w="full"
                    p="6"
                >
                    <Heading mb="5" fontSize={'2xl'}>
                        Your Profile
                    </Heading>
                    <EditInput
                        Icon={<FaUser />}
                        inputType={'text'}
                        inputName={'name'}
                        inputPlaceholder={'Uncle bob'}
                    />
                    <EditInput
                        Icon={<FaEnvelope />}
                        inputType={'email'}
                        inputName={'email'}
                        inputPlaceholder={'bob@gmail.com'}
                    />
                    <EditInput
                        Icon={<FaLock />}
                        inputType={'password'}
                        inputName={'password'}
                        inputPlaceholder={'jsdfasjdfasdf'}
                    />
                    <EditInput
                        Icon={<FaFacebook />}
                        inputType={'text'}
                        inputName={'fb_link'}
                        inputPlaceholder={'https://www.facebook.com/'}
                    />
                    <EditInput
                        Icon={<FaInstagram />}
                        inputType={'text'}
                        inputName={'insta_link'}
                        inputPlaceholder={'https://www.instagram.com/'}
                    />
                    <EditInput
                        Icon={<FaTwitter />}
                        inputType={'text'}
                        inputName={'tw_link'}
                        inputPlaceholder={'https://www.twitter.com/'}
                    />
                </Box>

                {/* PROFILE PICTURE */}
                <Box
                    p="5"
                    borderRadius={'md'}
                    shadow="sm"
                    bg="white"
                    w="30%"
                    h="max-content"
                >
                    <Image
                        src="/bg.jpeg"
                        fit="cover"
                        w="28"
                        h="28"
                        borderRadius={'full'}
                        mx="auto"
                        my="5"
                    />
                    <Button
                        mt="3"
                        variant={'outline'}
                        borderWidth={'2px'}
                        borderColor={'gray.700'}
                        borderRadius="none"
                        w="full"
                        mb="2"
                    >
                        Select photo
                    </Button>
                    <Button
                        borderRadius="none"
                        bg="gray.800"
                        color="white"
                        w="full"
                    >
                        Upload
                    </Button>
                </Box>
            </HStack>
            <Heading mt="12">Your Recipes</Heading>
            <Flex
                wrap={'wrap'}
                justifyContent="flex-start"
                alignItems={'center'}
                gap="5"
            >
                <Card />
                <Card />
                <Card />
                <Card />
            </Flex>
            <Button
                fontSize="sm"
                borderRadius={'sm'}
                bg="gray.700"
                size="lg"
                color="white"
                w="40%"
            >
                LOAD MORE
            </Button>
        </VStack>
    );
}

// eslint-disable-next-line react/prop-types
function EditInput({ Icon, inputType, inputName, inputPlaceholder }) {
    const [isDisabled, setDisabled] = useState(true);
    const iconStyle = {
        display: 'inline',
        color: '#4d4d4d',
    };

    return (
        <Box mb="3" pl="2" borderBottom={'2px'} borderColor={'gray.700'}>
            {React.cloneElement(Icon, { style: { ...iconStyle } })}
            <Input
                disabled={isDisabled}
                variant={'ghost'}
                px="3"
                borderRadius={'none'}
                w="90%"
                type={inputType}
                name={inputName}
                value={inputPlaceholder}
                ml="0.5"
            />
            <Button
                onClick={() => {
                    setDisabled(!isDisabled);
                }}
                variant={'ghost'}
                size="sm"
            >
                {isDisabled ? 'Edit' : 'Cancel'}
            </Button>
        </Box>
    );
}
