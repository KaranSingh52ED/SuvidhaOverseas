import { HiBadgeCheck } from "react-icons/hi";
// import { useEffect, useRef } from 'react';
import William from "./../../assets/team/William.jpg"

import { useInView } from "react-intersection-observer";

const teamData = [
    {
        name: 'Name....... Lorem',
        role: "Founder and President of Suvidhja overseas",
        role2: "CEO",
        image: William,
        badge: <HiBadgeCheck />,
    },


];

const Team = () => {

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    // const initialDisplayCount = 4;
    // const [displayCount, setDisplayCount] = React.useState(initialDisplayCount);

    // const handleViewMore = () => {
    //     setDisplayCount(displayCount + initialDisplayCount);
    // };

    return (
        <div className='justify-center align-center mt-8 pb-16'>
            <div className=''>
                <div className='text-center mx-auto mb-4 mt-24'>
                    <p className="font-quicksand items-center font-bold text-2xl text-green mb-2 ">
                        Meet Our Team
                    </p>
                    <h2 className=" font-quicksand font-bold md:text-5xl text-3xl text-gray-600 mb-4 md:max-w-[700px] md:ml-[25%] mt-6 md:p-0 p-2">
                        Awesome guys behind our charity activities
                    </h2>
                </div>
            </div>
            <div className="flex justify-center p-2 mt-8 relative">
                <div
                    ref={ref}
                    className={`grid md:grid-cols-4 grid-cols-1 gap-4 `}>
                    {teamData.map((team, index) => (
                        <div key={index}
                            className={`m-4 rounded-md relative pb-16 ${inView ? "zoom-in zoom-in-animation-active" : ""} `}  >
                            <img src={team.image} alt={`Team-${index + 1}`} className="w-full h-full object-cover object-center rounded-md" />
                            <div className="w-[70%] shadow-lg h-32 absolute bottom-0 left-1/2 pb-8 transform -translate-x-1/2 bg-white border-green border-b-4 rounded-md text-center">
                                <h2 className=' font-quicksand mt-4 text-sm font-bold'>{team.name}</h2>
                                <div className='flex items-center justify-center mt-3 '>
                                    <p className='font-quicksand font-medium text-sm text-gray-600'>{team.role2}</p>
                                    <p className='ml-4 items-center text-green'>{team.badge}</p>
                                </div>
                                <p className='mt-3 font-quicksand text-xs font-medium text-gray-600'>{team.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* After Team Data */}
            {/* .slice(0, displayCount) */}
            {/* {displayCount < teamData.length && (
                <div className='flex justify-center mt-4'>
                    <button
                        className='px-4 py-2 bg-green hover:bg-primary text-white rounded-sm font-quicksand'
                        onClick={handleViewMore}
                    >
                        View More
                    </button>
                </div>
            )} */}
        </div>
    );
};

export default Team;
