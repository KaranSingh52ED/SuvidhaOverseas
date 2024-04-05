import { useState, useEffect } from 'react';
import { IoIosArrowUp } from 'react-icons/io';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className={`fixed bottom-8 right-8 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <button
                onClick={scrollToTop}
                className=" p-2 rounded-full text-black bg-green md:hover:bg-purple shadow-inner shadow-black hover:bg-gray-500 hover:text-white focus:outline-none"
            >
                <IoIosArrowUp className="h-6 w-6" />
            </button>
        </div>
    );
};

export default ScrollToTop;
