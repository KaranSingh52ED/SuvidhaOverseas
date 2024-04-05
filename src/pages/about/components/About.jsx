import React from "react";
import Image from '../../../assets/carousel-3.jpg';
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";

const About = () => {

    const [activeTab, setActiveTab] = React.useState("mission");

    const data = [
        {
            label: "Mission",
            value: "mission",
            desc: `Suvidha Overseas is committed to not just fulfilling educational aspirations but also in crafting pathways that lead to rewarding careers and personal growth for their students.`,
        },
        {
            label: "Vision",
            value: "vision",
            desc: `The vision of Suvidha Overseas is to deeply comprehend each student's profile, ambitions, and aspirations. Through this understanding, the firm aims to excel in researching, shortlisting, and recommending the most appropriate programs, schools, or universities tailored to the unique needs of every individual.`,
        },
        {
            label: "Values",
            value: "core-values",
            desc: `
            "We are committed to a divine purpose of sharing and facilitating mutual sharing. Our donors, board, staff, volunteers, and beneficiaries unite in advancing social development and fostering re-orientation. Upholding the dignity and uniqueness of each individual is paramount to our mission."
            `,
        },
    ];

    return (
        <div className="">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 mb-16 mt-14">
                <div className="lg:order-1">
                    {/* Left Section */}
                    <div className="left-section md:ml-6  ">
                        <div className="lg:order-2 relative z-2">
                            <div className="about-img relative overflow-hidden p-5 pe-0 ">
                                <div className="absolute top-0 left-0 w-full h-full transform -skew-x-20 z-1"></div>
                                <img className="w-96 md:w-full h-auto relative z-2" src={Image} alt="About Us" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:order-2">
                    {/* Right Section */}
                    <div className="right-section">
                        <div className="lg:order-1 ml-8" >
                            <div className=' border-l-4 border-green md:-ml-1 -ml-8 max-w-full'>
                                <h1 className="mb-5 text-xl  max-w-[95%] w-full lg:text-2xl ml-3 text-gray-600 font-semibold font-raleway">
                                    Learn About Us
                                </h1>
                            </div>
                            <h1 className="mb-4 md:p-0 md:mb-8 text-3xl lg:text-5xl font-semibold md:ml-0 -ml-8 font-quicksand">
                                We are the world's largest university
                            </h1>

                            <p className=" mb-4 text-md md:p-0 md:text-md md:ml-0 -ml-8 font-serif ">
                                Suvidha Overseas is a dynamic and dedicated professional firm committed to guiding students who aspire to pursue their education abroad. The company is headquartered in Hyderabad and has a strong presence in Nagpur. Understanding the complexities of studying in countries like the USA, UK, Australia, and Canada, Suvidha Overseas has successfully unraveled these challenges. They offer a comprehensive step-by-step service that covers every aspect of the application process.
                            </p>

                            <Tabs value={activeTab} className='md:ml-0 -ml-8 md:mb-0 -mb-14'>
                                <TabsHeader
                                    className="rounded-none border-b border-blue-gray-50 bg-transparent p-0 mt-4"
                                    indicatorProps={{
                                        className:
                                            "bg-transparent border-b-2 border-green shadow-none rounded-none",
                                    }}
                                >
                                    {data.map(({ label, value }) => (
                                        <Tab
                                            key={value}
                                            value={value}
                                            onClick={() => setActiveTab(value)}
                                            className={activeTab === value ? " md:text-lg text-lg font-quicksand font-semibold text-green" : "font-quicksand text-lg font-semibold"}
                                        >
                                            {label}
                                        </Tab>
                                    ))}
                                </TabsHeader>
                                <TabsBody>
                                    {data.map(({ value, desc }) => (
                                        <TabPanel key={value} value={value} className="font-quicksand md:text-md text-sm">
                                            {desc}
                                        </TabPanel>
                                    ))}
                                </TabsBody>
                            </Tabs>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
