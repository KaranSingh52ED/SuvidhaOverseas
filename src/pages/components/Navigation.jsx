import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './NavBar';
import TopBar from './TopBar';

const Navigation = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <>
            <TopBar />
            <Navbar />
        </>
    );
};

export default Navigation;