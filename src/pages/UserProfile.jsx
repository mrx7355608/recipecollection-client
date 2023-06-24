import {
    Box,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    HStack,
    Input,
    Spinner,
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
import React, { useEffect, useState } from 'react';
import { useUser } from '../contexts/user';
import { useNavigate } from 'react-router-dom';
import { editUserData, getUserData } from '../services/user';

export default function UserProfile() {
    const { user } = useUser();
    const navigateTo = useNavigate();
    const [userDetails, setUserDetails] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user) return navigateTo('/');
        // Fetch complete user details
        setLoading(true);
        getUserData()
            .then(({ data }) => {
                console.log(data.user);
                setLoading(false);
                return setUserDetails(data.user);
            })
            .catch((err) => {
                setLoading(false);
                console.log(err);
            });
    }, [user]);

    if (loading) {
        return (
            <Flex
                alignItems={'center'}
                justifyContent={'center'}
                h="100vh"
                w="100vw"
            >
                <Spinner size={'md'} color="yellow.500" />
            </Flex>
        );
    }

    return (
        <VStack my="10" p="5" gap="5" justifyContent={'center'} w="full">
            <HStack gap="5" alignItems={'flex-start'} w="full">
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
                        inputName={'fname'}
                        inputPlaceholder={userDetails.fname}
                    />
                    <EditInput
                        Icon={<FaUser />}
                        inputType={'text'}
                        inputName={'lname'}
                        inputPlaceholder={userDetails.lname}
                    />
                    <EditInput
                        Icon={<FaEnvelope />}
                        inputType={'email'}
                        inputName={'email'}
                        inputPlaceholder={userDetails.email}
                    />
                    <EditInput
                        Icon={<FaLock />}
                        inputType={'password'}
                        inputName={'password'}
                        inputPlaceholder={userDetails.password}
                    />
                    <EditInput
                        Icon={<FaFacebook />}
                        inputType={'text'}
                        inputName={'facebook'}
                        inputPlaceholder={
                            userDetails.facebook || 'Not provided'
                        }
                    />
                    <EditInput
                        Icon={<FaInstagram />}
                        inputType={'text'}
                        inputName={'instagram'}
                        inputPlaceholder={
                            userDetails.instagram || 'Not provided'
                        }
                    />
                    <EditInput
                        Icon={<FaTwitter />}
                        inputType={'text'}
                        inputName={'twitter'}
                        inputPlaceholder={userDetails.twitter || 'Not provided'}
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
                        src={userDetails.photo}
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
    const [showSaveAndContinue, setShowSave] = useState(false);
    const [value, setValue] = useState(inputPlaceholder);

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
                w={showSaveAndContinue ? '83%' : '90%'}
                type={inputType}
                name={inputName}
                value={value}
                ml="0.5"
                onChange={(e) => setValue(e.target.value)}
            />
            {showSaveAndContinue ? (
                <>
                    <Button
                        onClick={async () => {
                            setDisabled(!isDisabled);
                            const { error, data } = await editUserData({
                                [inputName]: value,
                            });
                            if (error) {
                                alert('An error occured');
                                return console.log(error);
                            }
                            if (data) {
                                setShowSave(false);
                                return setDisabled(true);
                            }
                            console.log(data);
                        }}
                        variant={'ghost'}
                        colorScheme="yellow"
                        size="sm"
                    >
                        Save
                    </Button>
                    <Button
                        onClick={() => {
                            setShowSave(false);
                            setDisabled(true);
                            setValue(inputPlaceholder);
                        }}
                        variant={'ghost'}
                        size="sm"
                    >
                        Cancel
                    </Button>
                </>
            ) : (
                <Button
                    onClick={() => {
                        setDisabled(!isDisabled);
                        setShowSave(true);
                    }}
                    variant={'ghost'}
                    size="sm"
                >
                    Edit
                </Button>
            )}
        </Box>
    );
}
