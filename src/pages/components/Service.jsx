import React from 'react';
import { Link } from 'react-router-dom';
import ScholarshipAssistance from "../../assets/services/Scholarship_Assistance.jpg";
import CommunityOutreach from "../../assets/services/Community-Outreach.jpg";
import culturalExchangeInitiatives from "../../assets/services/Cultural-Exchange.jpg";
import EducationalCounseling from "../../assets/services/Educational-Counseling.jpg";
import languageSupport from "../../assets/services/Language-Support.jpg";
import sopReview from "../../assets/services/SOP.jpg";
import FinancialPlaning from "../../assets/services/Finacial.jpg";
import mentorshipPrograms from "../../assets/services/Mentorship.jpg";
import VisaSupport from "../../assets/services/Visa-Support.jpg";


const services = [
    {
        Image: ScholarshipAssistance,
        title: 'Scholarship Application Assistance',
        description: 'Comprehensive aid in applying for scholarships to fund your education abroad through our NGO.',
    },
    {
        Image: EducationalCounseling,
        title: 'Eduactional Counseling',
        description: 'Personilized guidance sessions to help you make informed decisions about your overseas education journey.',
    },
    {
        Image: languageSupport,
        title: 'Language Support Programs',
        description: 'specialized language trianng tailored to assist you in adopting to a new culture and environment.',
    },
    {
        Image: CommunityOutreach,
        title: 'Community outreach Programs',
        description: 'Engage in voluntreer activities and community proiject as a part of our educational initiatives.',
    },
    {
        Image: sopReview,
        title: 'SOP review ',
        description: 'Thorugh review and feedback on your statement of purpose (SOP) to help you secure admission in your dream university.',
    },
    {
        Image: mentorshipPrograms,
        title: 'Mentorship Programs',
        description: 'Access to our network of mentors and alumni to help you navigate through the challenges of studying abroad.+',
    },
    {
        Image: culturalExchangeInitiatives,
        title: 'Cultural Exchange Initiatives',
        description: 'Participate in cultural exchange events fostering global understanding and appreciation of diversity.',
    },
    {
        Image:FinancialPlaning,
        title: 'Financial Planning Assistance',
        description: 'Personalized financial planning support to help you manage your finances and make the most of your study abroad experience.',
    },{
        Image: VisaSupport,
        title: 'Visa Support ',
        description: 'Guidance and support in applying for student visa to study abroad and fulfill your academic aspirations abroad.',
    },
];

const Service = () => {
    return (
        <div className="justify-center align-center mt-6 md:pb-10 md:mb-14 mb-8 -pb-8">
            <div className="container">
                <div className="text-center mx-auto mb-4 mt-16">

                    <p className="font-quicksand items-center font-bold text-2xl text-green mb-2 md:ml-[15%]">
                        What We Do?
                    </p>
                    <h2 className=" font-serif font-bold md:text-5xl text-3xl md:-p-0 p-4 text-gray-600 mb-4 md:-mb-6 md:max-w-[700px] md:ml-[32%] md:mt-6 mt-4">
                        We believe that we can save more lives with you
                    </h2>
                </div>
                <div className="services mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-10 justify-center items-center md:mt-24 md:p-7 p-6 md:ml-24 ">
                    {services.map((service, index) => (
                        <div className="col-lg-4 col-md-6 flex items-center justify-center " key={index}>
                            <Link to={service.link}>
                                <div className=" flex justify-center items-center">

                                    <div className="border-l-4 border-green rounded-lg ml-4 pl-4">
                                        <div className=" flex items-center justify-center mb-2">
                                            <img src={service.Image} alt={service.title} className="w-32 h-32 bg-cover rounded-full " />
                                        </div>
                                        <h3 className='font-serif font-bold text-2xl text-gray-600 mb-2 '>
                                            {service.title}
                                        </h3>
                                        <p className='mt-2 font-quicksand text-sm mb-4'>{service.description}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Service;
