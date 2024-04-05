import React from "react";
import swal from "sweetalert";

const GetinTouch = () => {

    const [contactInfo, setContactInfo] = React.useState({
        email: "",
        fullname: "",
        message: "",
    });

    const handleClear = () => {
        setContactInfo({
            email: "",
            fullname: "",
            message: "",
        })
    };
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setContactInfo((prevDonate) => ({
            ...prevDonate,
            [name]: value,
        }));
    };

    const handleSave = (e) => {
        e.preventDefault();
        swal("Restoration Foundation International", "Information Sent", "success")
        handleClear()
    }

    return (
        <div className="relative w-full py-12 mt-10 bg-white md:-mb-14">
            <div className="mx-auto flex flex-wrap items-center ml-12">
                {/* Left Column */}
                <div className="w-full lg:w-1/2 lg:pr-10 md:-mt-16 -mt-2">
                    <div className="border-l-4 border-gold pl-2">
                        <h2 className=' text-2xl font-quicksand text-gold font-medium ml-2'> Contact for any query
                        </h2>
                    </div>
                    <h2 className='md:text-5xl text-gray-600 text-3xl md:p-0 pr-1 font-quicksand mt-6 font-bold'>
                        Contact for any query
                    </h2>
                    <p className='mt-6  font-quicksand max-w-[90%] md:text-lg text-sm'>
                        If you have any questions or require assistance, please do not hesitate to reach out to us.
                        We are dedicated to providing support and addressing your inquiries promptly.
                        Your satisfaction is our priority, and we are committed to helping you.
                        Feel free to contact us at any time. Our team is here to assist you in any way we can.
                        We appreciate your trust and look forward to serving you
                    </p>
                </div>
                {/* Right Column */}
                <div className="w-full lg:w-1/2 p-6">
                    <div className="ml-0">
                        <form onSubmit={handleSave} className="bg-gray-200 p-6 rounded-md md:ml-0 -ml-12">
                            <div className="mb-4">
                                <label htmlFor="fullname" className="block font-quicksand mb-2 text-gray-600 text-sm font-medium">Name</label>
                                <input
                                    required
                                    type="text"
                                    id="fullname"
                                    name="fullname"
                                    value={contactInfo.fullname}
                                    onChange={handleInputChange}
                                    className="w-full font-quicksand bg-transparent text-sm border border-gray-400 rounded-md border-b-4  focus:outline-none p-2"
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
                                    value={contactInfo.email}
                                    onChange={handleInputChange}
                                    className="w-full font-quicksand bg-transparent text-sm border border-gray-400 rounded-md border-b-4  focus:outline-none p-2"
                                    placeholder="Email Address"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block font-quicksand mb-2 text-gray-600 text-sm font-medium">Contact</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={contactInfo.message}
                                    onChange={handleInputChange}
                                    placeholder="Type your message here"
                                    required
                                    className="p-2 w-full font-quicksand border border-b-4 border-gray-400 rounded-md focus:outline-none bg-transparent"
                                    min="0"
                                    rows="3" // Set the number of rows you want the text area to display
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-gold w-full text-white font-medium rounded-sm font-quicksand px-4 py-2 hover:bg-blue-600"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetinTouch;
