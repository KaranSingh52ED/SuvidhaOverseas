import Img1 from '../../assets/causes-1.jpg';
import Img2 from '../../assets/causes-2.jpg';
import Img3 from '../../assets/causes-3.jpg';
import { GoArrowRight } from 'react-icons/go';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import { Link } from 'react-router-dom';

const causesData = [
    {
        category: "Arts",
        image: Img1,
        title: 'Providing Education for All',
        progress: 2.54,
        goal: "Ghc 65,000",
        raise: "Ghc 1,650",
        description: 'We aim to ensure that every child has access to quality education, regardless of their background. Your support helps us reach this goal.',
        link: "/donate",
        join: "/about"
    },
    {
        image: Img2,
        category: "Article",
        title: 'Clean Water for Communities',
        progress: 3.75,
        goal: "Ghc 40,000",
        raise: "Ghc 1,500",
        description: 'Our mission is to bring clean and safe drinking water to underserved communities. Join us in making a significant impact.',
        link: "/donate",
        join: "/about"
    },
    {
        image: Img3,
        category: "Announcement",
        title: 'Fighting Hunger Together',
        progress: 5,
        goal: "Ghc 40,000",
        raise: "Ghc 2,000",
        description: 'Together, we can combat hunger in our local neighborhoods and communities. Your contribution helps feed those in need.',
        link: "/donate",
        join: "/about"
    },
];


const Causes = () => {
    return (
        <div className='justify-center align-center md:mt-6 -mt-4'>
            <div className=''>
                <div className='text-center mx-auto mb-4 mt-8'>
                    <p className="font-quicksand items-center font-bold text-2xl text-green mb-2 ">
                        Popular Causes
                    </p>
                    <h2 className=" font-quicksand font-bold md:text-5xl text-3xl text-gray-600 mb-4 md:max-w-[700px] md:ml-[25%] mt-6 md:p-0 p-2">
                        Let us know about Suvidha Overseas causes around the world
                    </h2>
                </div>
            </div>
            <div className="flex justify-center gap-4 mt-8 md:p-6 p-6 ">

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {causesData.map((cause, index) => (
                        <div
                            key={index}
                            className="bg-white p-4 rounded-lg shadow-inner shadow-rose-500 border-b-primary  border  border-green">
                            <div className="image-container relative cursor-pointer overflow-hidden">
                                <img
                                    src={cause.image}
                                    alt="Blog Image"
                                    className="object-center object-cover transition-transform duration-300 transform hover:scale-110"
                                />
                            </div>

                            <h3 className="text-sm md:text-lg hover:text-green cursor-pointer text-center font-medium font-serif mt-4 mb-2">{cause.title}</h3>
                            <div className="text-sm text-gray-500 mb-4 mt-4 flex gap-4 justify-center">
                                <Progress percent={cause.progress} />
                            </div>
                            <div className='flex gap-16 mt-4 justify-center mb-4'>
                                <p className='font-quicksand'> Goal : <span className='font-quicksand font-bold text-green'>{cause.goal}</span></p>
                                <p className='font-quicksand'> Raised : <span className='font-quicksand font-bold text-green'>{cause.raise}</span> </p>
                            </div>

                            <p className="text-gray-900 mb-4 text-sm font-serif ">{cause.description}</p>
                            <div className='justify-center items-center flex md:mt-2'>
                                <Link to={cause.join} className='flex items-center border-b-4 font-semibold border border-green border-b-rose-400 hover:border-primary shadow-inner shadow-orange-950 hover:text-teal-600 p-2 text-gray-600 font-quicksand rounded-md m-2 cursor-pointer '>
                                    Learn More
                                    <GoArrowRight className="ml-2 mr-2" />
                                </Link>
                                <Link to={cause.link} className='flex items-center border-b-4 font-semibold border border-green border-b-orange-500 shadow-inner shadow-black hover:border-primary hover:text-teal-600  p-2 text-gray-600 font-quicksand rounded-md m-2 cursor-pointer'>
                                    Donate
                                    <GoArrowRight className="ml-2 mr-2" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}
export default Causes;