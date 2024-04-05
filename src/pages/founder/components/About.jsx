import Founder from '../../../assets/team/William.jpg';

const About = () => {
    return (
        <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 mb-16 mt-14">
                <div className="lg:order-1">
                    {/* Left Section */}
                    <div className="left-section md:ml-6  md:mb-0 mb-6">
                        <div className="lg:order-2 relative z-2">
                            <div className="about-img relative overflow-hidden p-5 pe-0 ">
                                <div className="absolute top-0 left-0 w-full h-full transform -skew-x-20 z-1"></div>
                                <img className="w-96 md:w-full h-auto relative z-2" src={Founder} alt="About Us" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:order-2 md:mb-0 -mb-16">
                    {/* Right Section */}
                    <div className="right-section">
                        <div className="lg:order-1 ml-8 md:-mb-24" >
                            <div className=' border-l-4 border-green md:-ml-1 -ml-8 max-w-full md:-mt-56'>
                                <h1 className="mb-5 text-xl max-w-[95%] w-full lg:text-2xl ml-3 text-gray-600 font-semibold font-raleway">
                                    About the Founder
                                </h1>
                            </div>
                            <h1 className="mb-4 md:p-0 md:mb-8 text-2xl lg:text-3xl font-semibold md:ml-0 -ml-8 font-quicksand ">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.  eius aspernatur enim asperiores! Omnis, similique vero?                            </h1>

                            <p className=" mb-4 text-md md:p-0 md:text-md md:ml-0 -ml-8 font-quicksand ">
                                The Vision of establishing <span className='text-green font-medium'>suvidha overseas foundation </span> was conceived by
                                <span className='text-green font-semibold'> Mrs .lorem ...... Name </span>.
                            </p>
                            <p className=" mb-4 text-md md:p-0 md:text-md md:ml-0 -ml-8 font-quicksand ">
                                <span className='text-green font-semibold'> Suvidha Overseas</span>  is a dynamic and dedicated professional firm committed to guiding students who aspire to pursue their education abroad. The company is headquartered in Hyderabad and has a strong presence in Nagpur. Understanding the complexities of studying in countries like the USA, UK, Australia, and Canada, Suvidha Overseas has successfully unraveled these challenges. They offer a comprehensive step-by-step service that covers every aspect of the application process.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
