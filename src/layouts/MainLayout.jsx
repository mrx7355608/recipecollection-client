import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useEffect } from 'react';

export default function MainLayout() {
    useEffect(() => {
        document.body.style.background = 'rgb(245, 245, 245)';
    }, []);

    return (
        <>
            <Navbar />
            <Outlet />
            {/* Footer */}
        </>
    );
}
