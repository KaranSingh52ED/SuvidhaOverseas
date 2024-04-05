import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '../../components/Navigation'
import Header from '../../events/components/Header';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/Scroll'
import Spinner from '../../components/Spinner'
import Recent from './component/Recent';

const Event = () => {
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
        <div>
            {isLoading ?
                <Spinner />
                :
                <div>
                    <Navigation />
                    <section style={{ marginTop: "-40px" }}>
                        <Header />
                        <Recent />
                        <Footer />
                        <ScrollToTop />
                    </section>
                </div>
            }

        </div>
    )
}

export default Event;