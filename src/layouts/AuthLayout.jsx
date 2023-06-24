import { HStack, Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/user';

export default function AuthLayout() {
    const { user } = useUser();
    const navigateTo = useNavigate();

    useEffect(() => {
        if (user) return navigateTo('/');
    }, [user]);

    return (
        <HStack h="100vh">
            <Box
                backgroundImage="/bg.jpeg"
                backgroundSize="cover"
                backgroundPosition="center"
                w="50%"
                h="100%"
            ></Box>
            <Outlet />
        </HStack>
    );
}
