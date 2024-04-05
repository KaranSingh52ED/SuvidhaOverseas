import React from "react";
import swal from "sweetalert";
import MTN from '../../../assets/MTN.png';
import VODA from '../../../assets/VODA.png'
import GCB from '../../../assets/GCB.png';
import ZENITH from '../../../assets/ZENITH.png';
import { FaPrayingHands } from "react-icons/fa";
import Typed from 'typed.js';
import { useEffect } from "react";

const About = () => {
    const typingRef = React.useRef(null);

    useEffect(() => {
        const typed = new Typed(typingRef.current, {
            strings: [
                'Assistance',
                'Backing',
                'Aid',
                'Grant',
                'Endowment',
                'Benefaction',
                'Sponsorship',
                'Charity',
                'Gift',
                'Offering',
                'Subsidy',
                'Help',
            ],
            typeSpeed: 200,
            backSpeed: 60,
            loop: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);
    const [activeForm, setActiveForm] = React.useState("donate");
    const [loading, setLoading] = React.useState(false);

    const [donateInfo, setDonateInfo] = React.useState({
        email: "",
        fullname: "",
        contact: "",
    })
    const handleClear = () => {
        setDonateInfo({
            fullname: "",
            email: "",
            contact: "",
        })
    };
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setDonateInfo((prevDonate) => ({
            ...prevDonate,
            [name]: value,
        }));
    };

    const handleSave = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Destructure the donateInfo object for clarity
        const { fullname, email, contact } = donateInfo;

        try {
            // Assuming you are using fetch, I've corrected the code
            const res = await fetch('https://v1.nocodeapi.com/kpanti/google_sheets/yyCouxnLhvkpKRdz?tabId=Donation', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify([
                    [
                        new Date().toLocaleString(),
                        fullname,
                        email,
                        contact,
                    ],
                ]),
            });

            // Check if the response is successful
            if (res.ok) {
                // Use SweetAlert to show success message
                swal("Restoration Foundation International", "Information Submitted", "success");
                // Optionally, you can handle other actions after a successful submission here
            } else {
                // Handle errors if the response is not successful
                swal("Restoration Foundation International", "Error Sending Information", "error");
            }
        } catch (error) {
            // Handle errors in the fetch or other unexpected errors
            console.log(error);
            swal("Restoration Foundation International", "Error Sending Information", "error");
        }

        setLoading(false);
        handleClear();
    };

    return (
        <div className="relative w-full py-12 mt-10">
            <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
                alt=""
                className="absolute inset-0 object-cover object-right w-full h-full -z-10 md:object-center"
            />
            <div
                className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
                aria-hidden="true"
            >
                <div
                    className="aspect-[1097/845] w-[68.5625rem]  opacity-20"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
            <div className="mx-auto flex flex-wrap items-center ml-12">
                {/* Left Column */}
                <div className="w-full lg:w-1/2 lg:pr-10 md:mt-16 -mt-2">
                    <div className="border-l-4 border-green pl-2">
                        <h2 className=' text-2xl font-quicksand text-green font-medium ml-2'>Donate Now</h2>
                    </div>
                    <h2 className='text-white md:text-5xl text-3xl md:p-0 pr-1 font-quicksand mt-6 font-bold'>
                        Join us in making a difference through your generous donation
                    </h2>
                    <p className='mt-6 text-white font-quicksand max-w-[90%] md:text-lg text-sm'>
                        Your contribution has the power to transform lives. When you support our cause, you are making a significant impact.
                        Together, we can provide essential resources to those in need, ensuring a better future for all. Your generosity truly makes a difference.
                    </p>
                </div>

                {/* Right Column */}
                <div className="w-full lg:w-1/2 p-6">
                    <div className="bg-white p-6 rounded-md md:ml-0 -ml-14 md:mr-0 -mr-2">
                        <div className="flex justify-center gap-4 mb-6 mt-4">
                            <button
                                onClick={() => setActiveForm("donate")}
                                className={`px-8 py-2 ${activeForm === "donate" ? "bg-green text-white rounded-sm font-quicksand" : "bg-gray-300 rounded-sm font-quicksand"
                                    }`}
                            >
                                Donate
                            </button>
                            <button
                                onClick={() => setActiveForm("contact")}
                                className={`px-8 py-2 ${activeForm === "contact" ? "bg-green text-white rounded-sm font-quicksand" : "bg-gray-300 rounded-sm font-quicksand"
                                    }`}
                            >
                                Contact
                            </button>
                        </div>

                        {activeForm === "donate" && (
                            <form className="">
                                <div className="mb-6 border-gray-300 border-b-2">
                                    <div className="md:mb-2">
                                        <h1 className="text-center font-quicksand font-semibold text-xl"> Mobile Money</h1>
                                        <div className="flex gap-24 justify-center mt-2">
                                            {/* MTN */}
                                            <div className="mb-4 md:p-0 p-1">
                                                <h2 className=" text-md flex items-center gap-4 justify-center ">
                                                    <span className="font-medium font-quicksand">
                                                        MTN
                                                    </span>
                                                    <img
                                                        src={MTN}
                                                        alt="MTN MoMo"
                                                        className="h-12 w-12 object-center object-fit object-contain"
                                                    />
                                                </h2>
                                                <div className="">
                                                    <p className="font-quicksand font-medium text-md mt-1">0544541587</p>
                                                    <p className="font-quicksand mt-1 md:text-md text-sm">Kabanda Kpanti Michael</p>
                                                </div>
                                            </div>
                                            {/* VODA */}
                                            <div>
                                                <h2 className=" text-md flex items-center gap-4 justify-center">
                                                    <span className="font-semibold font-quicksand">
                                                        Vodafone
                                                    </span>
                                                    <img
                                                        src={VODA}
                                                        alt="VODA MoMo"
                                                        className="h-12 w-12 mb-2 object-center object-fit object-contain"
                                                    />
                                                </h2>
                                                <div className="">
                                                    <p className="font-quicksand font-medium text-md">0202872814</p>
                                                    <p className="font-quicksand mt-1 md:text-md text-sm">Kabanda Kpanti Michael</p>
                                                </div>


                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className=" md:mb-0 mb-4">
                                    <h2 className="font-quicksand font-semibold text-xl text-center justify-center">Bank Account</h2>
                                    <div className="flex gap-24 justify-center mt-2">
                                        {/* MTN */}
                                        <div className="mb-4 md:p-0 p-1">
                                            <h2 className=" text-md flex items-center gap-4 justify-center ">
                                                <span className="font-medium font-quicksand">
                                                    Zenith
                                                </span>
                                                <img
                                                    src={ZENITH}
                                                    alt="MTN MoMo"
                                                    className="h-12 w-12 object-center object-fit object-contain"
                                                />
                                            </h2>
                                            <div className="">
                                                <p className="font-quicksand font-medium text-md mt-1">03200900980</p>
                                                <p className="font-quicksand mt-1 md:text-md text-sm">Kabanda Kpanti Michael</p>
                                            </div>
                                        </div>
                                        {/* VODA */}
                                        <div>
                                            <h2 className=" text-md flex items-center gap-4 justify-center">
                                                <span className="font-semibold font-quicksand">
                                                    GCB
                                                </span>
                                                <img
                                                    src={GCB}
                                                    alt="VODA MoMo"
                                                    className="h-12 w-12 mb-2 object-center object-fit object-contain"
                                                />
                                            </h2>
                                            <div className="">
                                                <p className="font-quicksand font-medium text-md">032009009</p>
                                                <p className="font-quicksand mt-1 md:text-md text-sm">Kabanda Kpanti Michael</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="justify-center text-center flex items-center md:gap-4 mt-4 mb-4">
                                    <FaPrayingHands className="md:h-6 md:w-6 h-8 w-8 text-green" />
                                    <p className="font-quicksand text-md">
                                        Thank you for your {''}
                                        <span className="font-semibold text-green" ref={typingRef}></span>
                                    </p>
                                </div>
                            </form>
                        )}
                        {
                            activeForm === "contact" && (
                                <form onSubmit={handleSave} className="">
                                    <p className="font-quicksand mt-4 mb-4 text-center md:max-w-[90%]">
                                        Please fill out the form below, and we will get in touch with you
                                        shortly to facilitate your generous contribution.
                                    </p>
                                    <div className="mb-4">
                                        <label htmlFor="fullname" className="block font-quicksand mb-2 text-gray-600 text-sm font-medium">Full Name</label>
                                        <input
                                            required
                                            type="text"
                                            id="fullname"
                                            name="fullname"
                                            value={donateInfo.fullname}
                                            onChange={handleInputChange}
                                            className="w-full font-quicksand text-sm border border-gray-300 rounded-sm focus:outline-none p-2"
                                            placeholder="Full Name"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="email" className="block font-quicksand mb-2 text-gray-600 text-sm font-medium">Email</label>
                                        <input
                                            required
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={donateInfo.email}
                                            onChange={handleInputChange}
                                            className="w-full border font-quicksand text-sm border-gray-300 focus:outline-none p-2"
                                            placeholder="Email Address"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="contact" className="block font-quicksand mb-2 text-gray-600 rounded-sm text-sm font-medium">Contact</label>
                                        <input
                                            required
                                            type="tel"
                                            id="contact"
                                            name="contact"
                                            value={donateInfo.contact}
                                            onChange={handleInputChange}
                                            className="w-full font-quicksand text-sm border border-gray-300 rounded-sm focus:outline-none p-2"
                                            placeholder="Phone Number"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="bg-green w-full text-white font-medium rounded-sm font-quicksand md:mt-6 mt-4 px-4 py-2 hover:bg-primary"
                                    >
                                        {!loading ? (
                                            "Submit"
                                        ) : (
                                            "Submitting..."
                                        )}
                                    </button>
                                </form>
                            )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
