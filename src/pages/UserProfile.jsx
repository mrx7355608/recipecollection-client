import {
    Box,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    HStack,
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
import { useEffect } from 'react';
import { useUser } from '../contexts/user';
import { useNavigate } from 'react-router-dom';
import EditInput from '../components/User/EditableInput';

export default function UserProfile() {
    const { user } = useUser();
    const navigateTo = useNavigate();

    useEffect(() => {
        if (!user) return navigateTo('/');
    }, [user]);

    return (
        <VStack my="10" p="5" gap="5" justifyContent={'center'} w="full">
            <HStack gap="5" alignItems={'flex-start'} w="full">
                {/* USER DETAILS */}
                <ProfileDataBoxComponent user={user} />
                <ProfilePictureComponent photoUrl={user.photo} />
            </HStack>

            {/* RECIPES GRID */}
            <Heading mt="12">Your Recipes</Heading>
            <RecipesGridComponent />
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

//                                          ********************************
//                                          *           COMPONENTS         *
//                                          ********************************

function ProfilePictureComponent({ photoUrl }) {
    return (
        <Box
            p="5"
            borderRadius={'md'}
            shadow="sm"
            bg="white"
            w="30%"
            h="max-content"
        >
            <Image
                src={photoUrl}
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
            <Button borderRadius="none" bg="gray.800" color="white" w="full">
                Upload
            </Button>
        </Box>
    );
}

function ProfileDataBoxComponent({ user }) {
    return (
        <Box bg="white" borderRadius={'md'} shadow={'sm'} w="full" p="6">
            <Heading mb="5" fontSize={'2xl'}>
                Your Profile
            </Heading>
            <EditInput
                Icon={<FaUser />}
                inputType={'text'}
                inputName={'fname'}
                inputPlaceholder={user.fname}
            />
            <EditInput
                Icon={<FaUser />}
                inputType={'text'}
                inputName={'lname'}
                inputPlaceholder={user.lname}
            />
            <EditInput
                Icon={<FaEnvelope />}
                inputType={'email'}
                inputName={'email'}
                inputPlaceholder={user.email}
            />
            <EditInput
                Icon={<FaLock />}
                inputType={'password'}
                inputName={'password'}
                inputPlaceholder={user.password}
            />
            <EditInput
                Icon={<FaFacebook />}
                inputType={'text'}
                inputName={'facebook'}
                inputPlaceholder={user.facebook || 'Not provided'}
            />
            <EditInput
                Icon={<FaInstagram />}
                inputType={'text'}
                inputName={'instagram'}
                inputPlaceholder={user.instagram || 'Not provided'}
            />
            <EditInput
                Icon={<FaTwitter />}
                inputType={'text'}
                inputName={'twitter'}
                inputPlaceholder={user.twitter || 'Not provided'}
            />
        </Box>
    );
}

function RecipesGridComponent() {
    return (
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
    );
}
