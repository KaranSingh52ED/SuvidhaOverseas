import Img2 from '../../../assets/event-1.jpg';
import Img3 from '../../../assets/event-2.jpg';
import { GoArrowRight } from 'react-icons/go';
import { BsClock } from 'react-icons/bs';
import { IoLocationSharp } from 'react-icons/io5';
import { FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Inauguration from '../../../assets/inauguration/3.jpg';

const eventsData = [
    {
        title: 'Inauguration Ceremony',
        date: "30-Dec-23",
        time: "16:00 - 18:00",
        location: "Sky-Plus Hotel",
        buttonText: "Read More!",
        description: 'Our Inauguration Ceremony on December 30, 2023, at Sky-Plus Hotel was a memorable celebration of new beginnings!',
        image: Inauguration,
        link: "/inauguration",

    },
    {
        title: 'Lorem ipsum dolor ',
        date: "22-Jun-23",
        time: "8:00 - 10:00",
        location: "Volta Region",
        buttonText: "Join Now!",
        description: 'Lorem Ipsum is simply dummy text of the industry',
        image: Img2,
        link: "#",

    },
    {
        title: 'Lorem ipsum dolor ',
        date: "22-Jun-23",
        time: "8:00 - 10:00",
        location: "Volta Region",
        buttonText: "Join Now!",
        description: 'Lorem Ipsum is simply dummy text of the industry',
        image: Img3,
        link: "#",
    },
];

const Recent = () => {
    return (
        <div className='justify-center align-center md:mb-10 '>
            <div className=''>
                <div className='text-center mx-auto mb-4 mt-24'>
                    <p className="font-quicksand items-center font-bold text-2xl text-green mb-2 ">
                        Recent Events
                    </p>
                    <h2 className=" font-quicksand font-bold md:text-5xl text-3xl text-gray-600 mb-4 md:max-w-[700px] md:ml-[25%] mt-6 md:p-0 p-2">
                        Be ready to be updated on our recent charity events
                    </h2>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 md:p-6">
                {eventsData.map((event, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-md border border-gray-300">
                        <div className="image-container relative cursor-pointer overflow-hidden">
                            <img
                                src={event.image}
                                alt="Recent Events"
                                className="object-center object-cover transition-transform duration-300 transform hover:scale-110"
                            />
                        </div>
                        <h3 className="text-sm md:text-lg hover:text-green cursor-pointer text-center capitalize font-semibold font-quicksand mt-4 mb-2">{event.title}</h3>
                        <div className="container mx-auto mt-8 pl-4 mb-4 flex flex-wrap items-center">
                            {/* Left Content */}
                            <div className="w-full lg:w-1/2 lg:pr-10 ">
                                <p className='flex items-center gap-2 font-quicksand font-xs pb-1'>
                                    <FaCalendarAlt className='text-green mr-2 h-4 w-4' />{event.date}
                                </p>
                                <p className='flex items-center gap-2 mt-3 font-quicksand font-xs pb-1'>
                                    <BsClock className='text-green mr-2 h-4 w-4' />{event.time}
                                </p>
                                <p className='flex items-center gap-2 mt-3 font-quicksand font-sm pb-1 '>
                                    <IoLocationSharp className='text-green mr-2 h-6 w-6 -ml-1' />{event.location}
                                </p>
                            </div>
                            {/* Right Content */}
                            <div className="w-full lg:w-1/2 md:border-l-4 border-green pl-4 md:mt-0 mt-4 md:ml-0 -ml-4">
                                <p className=' text-xs font-quicksand'>{event.description}</p>
                                <Link to={event.link} className='mt-4 border border-green border-b-4 md:ml-0  pl-2 pb-1 pt-1 pr-2 rounded-md flex items-center font-quicksand font-medium -ml-1 hover:border-primary'>
                                    {event.buttonText}
                                    <GoArrowRight className='ml-2 mr-2' />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Recent;