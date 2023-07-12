import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useEffect, useState } from 'react';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Recipe from './pages/Recipe';
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';
import UserProfile from './pages/UserProfile';

import { getUserData } from './services/user';
import { useUser } from './contexts/user';
import Searchpage from './pages/Searchpage';
import { Flex, Heading } from '@chakra-ui/react';
import { useErrorBoundary } from 'react-error-boundary';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/recipes/:id',
                element: <Recipe />,
            },
            {
                path: '/profile',
                element: <UserProfile />,
            },
            {
                path: '/search',
                element: <Searchpage />,
            },
        ],
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                path: 'login',
                element: <Login />,
            },
            {
                path: 'signup',
                element: <Signup />,
            },
        ],
    },
]);

function App() {
    const { userDispatcher } = useUser();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        // Fetch user
        getUserData()
            .then((resp) => {
                setLoading(false);
                userDispatcher({
                    type: 'FETCHED_USER_DATA',
                    user: resp.data.user,
                });
            })
            .catch((err) => {
                setLoading(false);
                setError(err.message);
            });
    }, []);

    if (loading) {
        return (
            <Flex
                w="100vw"
                h="100vh"
                alignItems={'center'}
                justifyContent={'center'}
                bg="white"
            >
                <Heading ml="5" fontSize="4xl" color="yellow.400" mt="3" mb="7">
                    Cookbook
                </Heading>
            </Flex>
        );
    }

    if (error) {
        return <Heading>{error}</Heading>;
    }

    return <RouterProvider router={router} />;
}

export default App;
