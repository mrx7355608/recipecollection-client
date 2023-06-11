import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Recipe from './pages/Recipe';
import { useEffect } from 'react';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/recipes/:id',
        element: <Recipe />,
    },
    {
        path: '/auth',
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
    useEffect(() => {
        document.body.style.background = '#eee';
    }, []);

    return <RouterProvider router={router} />;
}

export default App;
