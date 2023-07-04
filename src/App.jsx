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
import { Flex, Spinner } from '@chakra-ui/react';
import CustomSpinner from './components/CustomSpinner';

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

    useEffect(() => {
        document.body.style.background = 'rgb(245, 245, 245)';
        // Fetch user
        console.log('fetching user');
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
                console.log(err.response.data.error); // TODO: Remove this
            });
    }, []);

    if (loading) {
        return <CustomSpinner />;
    }

    return <RouterProvider router={router} />;
}

export default App;
