import { HStack, Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

export default function AuthLayout() {
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
