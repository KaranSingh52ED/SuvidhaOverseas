import Img3 from '../../../../assets/inauguration/3.jpg';

const Inauguration = () => {
    return (

        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 mt-12">
                <div className="lg:order-1">
                    {/* Left Section */}
                    <div className="left-section md:ml-6  ">
                        <div className="lg:order-2 relative z-2">
                            <div className="about-img relative overflow-hidden p-5 pe-0 ">
                                <div className="absolute top-0 left-0 w-full h-full transform -skew-x-20 z-1"></div>
                                <img className="w-96 md:w-full h-auto relative z-2" src={Img3} alt="About Us" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:order-2">
                    <div className="right-section">
                        <div className="lg:order-1 ml-8" >
                            <div className=' border-l-4 border-green md:-ml-1 -ml-8 max-w-full'>
                                <h1 className="mb-5 text-xl max-w-[99%] w-full lg:text-3xl ml-3 text-gray-800 font-bold font-raleway">
                                    Unveiling New Beginnings: Our Inauguration Ceremony at Sky-Plus Hotel
                                </h1>
                            </div>
                            <h1 className="mb-4 md:p-0 md:mb-8 text-lg lg:text-xl font-bold text-gray-600 md:ml-0 -ml-8 font-quicksand">
                                A Grand Affair Filled with Inspiring Speeches, Captivating Performances, and Shared Commitment
                            </h1>

                            <p className=" mb-4 text-md md:p-0 md:text-md md:ml-0 -ml-8 font-quicksand ">
                                On December 30, 2023, we had the privilege of hosting our  <span className='text-green font-semibold'>Inauguration Ceremony</span> at the prestigious Sky-Plus Hotel. It was a momentous occasion that marked the beginning of a new chapter for our organization.
                            </p>
                            <p className=" mb-4 mt-3 text-md md:p-0 md:text-md md:ml-0 -ml-8 font-quicksand ">
                                The ceremony was a grand affair, attended by esteemed guests, dignitaries, and
                                members of our community. The venue was adorned with elegant decorations,
                                creating an atmosphere of excitement and anticipation.
                            </p>

                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className='md:p-8 md:mb-8 -mb-2 md:-mt-4 -mt-12 p-10 md:ml-0 ml-8'>
                <p className=" mb-4 mt-3 text-md md:p-0 md:text-md md:ml-0 -ml-8 font-quicksand ">
                    The event kicked off with a warm welcome address by our CEO <span className='text-green font-semibold'> Mr. William Kojo Amoabeng</span>., who expressed gratitude to everyone present and highlighted the significance of the occasion. This was followed by inspiring speeches from key members of our organization, who shared their vision for the future and the goals we aim to achieve.
                </p>
                <p className=" mb-4 mt-3 text-md md:p-0 md:text-md md:ml-0 -ml-8 font-quicksand ">
                    One of the highlights of the ceremony was the unveiling of our new logo and brand identity. The design represents our commitment to innovation, growth, and excellence. It was met with great enthusiasm and applause from the audience.
                </p>
                <p className=" mb-4 mt-3 text-md md:p-0 md:text-md md:ml-0 -ml-8 font-quicksand ">
                    As the ceremony drew to a close, there was a sense of optimism and excitement in the air. The attendees left with a renewed sense of purpose and a shared commitment to the journey ahead.
                </p>
                <p className=" mb-4 mt-3 text-md md:p-0 md:text-md md:ml-0 -ml-8 font-quicksand ">

                    Our Inauguration Ceremony at Sky-Plus Hotel was truly a memorable celebration of new beginnings. It marked the start of a promising era for our organization, filled with opportunities and possibilities.
                </p>
            </div>
        </div>

    );
}

export default Inauguration;