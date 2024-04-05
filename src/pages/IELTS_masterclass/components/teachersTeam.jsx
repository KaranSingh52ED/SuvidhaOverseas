import React from 'react';
import { HiBadgeCheck } from "react-icons/hi";
import { useEffect, useRef } from 'react';
import Image from './../../../assets/Exams/IELTS.png';
import William from "./../../../assets/team/William.jpg"

import { useInView } from "react-intersection-observer";


const teacherTeamData = [
    {
        name: 'Name....... Lorem',
        role: "Teacher",
        discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: William,
        badge: <HiBadgeCheck />,
    },
    {
        name: 'Name....... Lorem',
        role: "Teacher",
        discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: William,
        badge: <HiBadgeCheck />,
    },
    {
        name: 'Name....... Lorem',
        role: "Teacher",
        discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: William,
        badge: <HiBadgeCheck />,
    },

    {
        name: 'Name....... Lorem',
        role: "Teacher",
        discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: William,
        badge: <HiBadgeCheck />,
    },
    {
        name: 'Name....... Lorem',
        role: "Teacher",
        discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: William,
        badge: <HiBadgeCheck />,
    },
    {
        name: 'Name....... Lorem',
        role: "Teacher",
        discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: William,
        badge: <HiBadgeCheck />,
    },
    {
        name: 'Name....... Lorem',
        role: "Teacher",
        discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: William,
        badge: <HiBadgeCheck />,
    },
    {
        name: 'Name....... Lorem',
        role: "Teacher",
        discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: William,
        badge: <HiBadgeCheck />,
    },

];

const TeachersTeam = () => {

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const initialDisplayCount = 4;
    const [displayCount, setDisplayCount] = React.useState(initialDisplayCount);

    const handleViewMore = () => {
        setDisplayCount(displayCount + initialDisplayCount);
    };

    return (
        <div className='justify-center align-center mt-8 pb-16'>
            <div className="flex flex-col items-center justify-center mt-8">
                <img className="w-11/12 rounded-3xl z-2" src={Image} alt="About Us" />
            </div>

            <div className=''>
                <div className='text-center mx-auto mb-4 mt-24'>
                    <p className="font-quicksand items-center font-bold text-2xl text-green mb-2 ">
                        Meet Our Teaching Staff
                    </p>
                    <h2 className=" font-quicksand font-bold md:text-5xl text-3xl text-gray-600 mb-4 md:max-w-[700px] md:ml-[25%] mt-6 md:p-0 p-2">
                        Awesome Teachers behind our Foundation activities
                    </h2>
                </div>
            </div>
            <div className="flex justify-center p-2 mt-2 relative">
                <div
                    ref={ref}
                    className={`grid md:grid-cols-4 grid-cols-1 gap-4 `}>
                    {teacherTeamData.slice(0, displayCount).map((team, index) => (
                        <div key={index}
                            className={`m-2 rounded-md relative pb-16 ${inView ? "zoom-in zoom-in-animation-active" : ""} `}  >
                            <img src={team.image} alt={`Team-${index + 1}`} className="w-full h-full object-cover object-center rounded-md" />
                            <div className="w-full md:w-[70%] h-auto shadow-lg mt-auto absolute bottom-0 left-1/2 pb-8 transform -translate-x-1/2 bg-white border-green border-b-4 rounded-md text-center">
                                <h2 className=' font-quicksand mt-4 text-sm font-bold'>{team.name}</h2>

                                <div className='flex items-center justify-center mt-3 '>
                                    <p className='mt-3 font-quicksand text-xs font-medium text-gray-600'>{team.role}</p>
                                    <p className='ml-4 items-center text-green'>{team.badge}</p>
                                </div>
                                <div>
                                    <p className='ml-4 items-center text-sm text-green'>{team.discription}</p>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            {/* After Team Data */}
            {displayCount < teacherTeamData.length && (
                <div className='flex justify-center mt-4'>
                    <button
                        className='px-4 py-2 bg-green hover:bg-primary text-white rounded-sm font-quicksand'
                        onClick={handleViewMore}
                    >
                        View More
                    </button>
                </div>
            )}
        </div>
    );
};

export default TeachersTeam;
