import { useRef, useState } from 'react';
import {
    Box,
    Image,
    VStack,
    Button,
    Heading,
    HStack,
    Input,
} from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaTwitter, FaUser } from 'react-icons/fa';
import EditInput from '../components/User/EditableInput';
import useFetch from '../hooks/useFetch';
import { clientConfig } from '../../config';
import CustomSpinner from '../components/CustomSpinner';
import axios from 'axios';
import { axiosClient } from '../axios_setup';

export default function UserProfile() {
    const { loading, error, data } = useFetch(`${clientConfig.apiUrl}/user`);

    if (loading) {
        return <CustomSpinner />;
    }

    if (error) {
        return <Heading>{error}</Heading>;
    }

    return (
        <VStack my="10" p="5" gap="5" justifyContent={'center'} w="full">
            <HStack gap="5" alignItems={'flex-start'} w="full">
                {/* USER DETAILS */}
                <ProfileDataBoxComponent user={data.user} />
                <ProfilePictureComponent photoUrl={data.user.photo} />
            </HStack>
        </VStack>
    );
}

//                                          ********************************
//                                          *           COMPONENTS         *
//                                          ********************************

function ProfilePictureComponent({ photoUrl }) {
    const [image, setImage] = useState(null);
    const imageInputRef = useRef(null);

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
            <Input
                type="file"
                ref={imageInputRef}
                accept="image/*"
                hidden
                onChange={(e) => {
                    setImage(e.target.files[0]);
                }}
            />
            <Button
                mt="3"
                variant={'outline'}
                borderWidth={'2px'}
                borderColor={'gray.700'}
                borderRadius="none"
                w="full"
                mb="2"
                onClick={() => {
                    imageInputRef.current.click();
                }}
            >
                Select photo
            </Button>
            <Button
                onClick={() => {
                    if (!image) return alert('No image selected');
                    if (image && /image/.test(image.type) === false) {
                        return alert('Please select an image');
                    }
                    console.log('uploading...');
                    const formData = new FormData();
                    formData.append('file', image);
                    formData.append('upload_preset', 'cookbook');
                    axios
                        .post(
                            `https://api.cloudinary.com/v1_1/${clientConfig.cloudinaryCloudName}/image/upload`,
                            formData
                        )
                        .then(async (resp) => {
                            console.log(resp.data);
                            console.log('saving on server');
                            const res = await axiosClient.patch(
                                `${clientConfig.apiUrl}/user`,
                                { photo: resp.data.secure_url }
                            );
                            console.log(res.data);
                        })
                        .catch((err) => console.log(err.message));
                }}
                borderRadius="none"
                bg="gray.800"
                color="white"
                w="full"
            >
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
