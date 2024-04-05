import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ScrollToTop from '../components/Scroll';
import TeachersTeam from '../IELTS_masterclass/components/teachersTeam';
import Spinner from '../components/Spinner';


const HomeMasterClass = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <>
            {isLoading ?
                <Spinner />
                :
                <div>
                    <Navigation />

                    <TeachersTeam />
                    <Footer />
                    <ScrollToTop />
                </div>
            }
        </>
    );
};

export default HomeMasterClass;