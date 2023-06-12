import { HStack, Box } from '@chakra-ui/react';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

export default function AuthLayout() {
    useEffect(() => {
        document.body.style.background = 'white !important';
    }, []);

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
            <Outlet />
        </HStack>
    );
}
