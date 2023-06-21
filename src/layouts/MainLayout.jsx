import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useEffect } from 'react';
import Footer from '../components/Footer';
import { getUserData } from '../services/user';
import { useUser } from '../contexts/user';

export default function MainLayout() {
    const { userDispatcher } = useUser();
    useEffect(() => {
        document.body.style.background = 'rgb(245, 245, 245)';

        // Fetch user data
        getUserData()
            .then((resp) => {
                userDispatcher({
                    type: 'FETCHED_USER_DATA',
                    user: resp.data.user,
                });
            })
            .catch(console.log);
    }, []);

    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
}
