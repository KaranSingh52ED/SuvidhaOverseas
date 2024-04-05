import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '../components/Navigation'
import Carousel from './components/Carousel'

import About from './components/About'
import Footer from '../components/Footer';
import ScrollToTop from '../components/Scroll';
import Impact from '../components/Impacts';
import Service from '../components/Service';
import Events from '../components/Events';
import Team from '../components/Team';
import Volunteer from './components/Volunteer';
import Causes from '../components/Causes';
import Spinner from '../components/Spinner'

const Home = () => {
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
                    <Carousel />
                    <About />
                    <Service />
                    <Impact />
                    <Team />
                    <Causes />
                    <Events />
                    <Volunteer />
                    <Footer />
                    <ScrollToTop />
                </div>
            }
        </>
    );
};
export default Home;