import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ChakraProvider } from '@chakra-ui/react';
import { UserProvider } from './contexts/user.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ChakraProvider>
            <UserProvider>
                <App />
            </UserProvider>
        </ChakraProvider>
    </React.StrictMode>
);
