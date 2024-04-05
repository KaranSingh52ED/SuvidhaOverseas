import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '../components/Navigation'
import Header from './components/Header';
import Events from './components/Events';
import Footer from '../components/Footer';
import ScrollToTop from '../components/Scroll'
import Spinner from '../components/Spinner'


const Upcoming = () => {
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
            clearTimeout(timer); // Clear the timeout when the component is unmounted or the dependency changes
        };
    }, []);

    return (
        <>
            {isLoading ?
                <Spinner />
                :
                <div>
                    <Navigation />
                    <section style={{ marginTop: "-40px" }}>
                        <Header />
                        <Events />
                        <Footer />
                        <ScrollToTop />
                    </section>
                </div>
            }
        </>
    );
};

export default Upcoming;

