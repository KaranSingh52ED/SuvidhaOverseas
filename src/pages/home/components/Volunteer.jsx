import React from "react";
import {
    Button,
} from "@material-tailwind/react";
import swal from "sweetalert";

const Volunteer = () => {
    const [loading, setLoading] = React.useState(false);

    const [donateInfo, setDonateInfo] = React.useState({
        email: "",
        fullname: "",
        reason: "",
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setDonateInfo((prevDonate) => ({
            ...prevDonate,
            [name]: value,
        }));
    };

    const handleClear = () => {
        setDonateInfo({
            email: "",
            fullname: "",
            reason: "",
        })
    };

    const handleSave = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Destructure the donateInfo object for clarity
        const { fullname, email, reason } = donateInfo;

        try {
            // Assuming you are using fetch, I've corrected the code
            const res = await fetch('https://v1.nocodeapi.com/kpanti/google_sheets/yyCouxnLhvkpKRdz?tabId=Volunteers', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify([
                    [
                        new Date().toLocaleString(),
                        fullname,
                        email,
                        reason,
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
        <div className="relative w-full  py-12 mt-10">
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

            <div className="mx-auto flex flex-wrap items-center md:ml-12 p-4">
                {/* Second Component (Will appear first on mobile) */}
                <div className="w-full  shadow-inner shadow-primary p-5 lg:w-1/2 lg:pr-10 mt-4 order-1 lg:order-2 mb-8">
                    <div className="border-l-4 shadow-inner shadow-primary border-green pl-2">
                        <h2 className='text-2xl  font-serif text-green ml-2 font-medium'>Become A Volunteer</h2>
                    </div>
                    <h2 className='text-white md:text-5xl text-3xl md:p-0 pr-1  font-serif shadow-inner p-3 shadow-blue mt-6 font-bold'>
                        Let us make a difference in the lives of others
                    </h2>
                    <p className='mt-6 text-white font-serif shadow-inner shadow-red p-4 max-w-[100%] md:text-lg text-sm'>
                        Your commitment can bring about a positive change. Join us as a volunteer and
                        contribute to transforming the lives of those who require assistance.
                        Our mission is to make a meaningful impact. Together, we can make a difference
                        in the lives of those in need. Your support matters.
                    </p>
                </div>

                <div className="w-full lg:w-1/2 order-2 lg:order-1 md:p-0 p-5">
                    <div className="md:mr-10 bg-orange-100 md:p-6 p-3 pt-10 pb-10 rounded-md -ml-6 shadow-inner shadow-red -mr-4">
                        <form
                            onSubmit={handleSave}
                            className="mt-5 flex flex-col gap-6">
                            <input
                                id="fullname"
                                name="fullname"
                                value={donateInfo.fullname}
                                onChange={handleInputChange}
                                placeholder="Full Name"
                                type="text"
                                required
                                className="p-2 font-quicksand border border-gray-600 shadow-inner shadow-red rounded-md focus:outline-none border-b-2"
                            />
                            <input
                                id="email"
                                name="email"
                                value={donateInfo.email}
                                onChange={handleInputChange}
                                placeholder="Email Address"
                                type="email"
                                required
                                className="p-2 font-quicksand border border-gray-600 shadow-inner shadow-red rounded-md focus:outline-none border-b-2" />
                            <textarea
                                id="reason"
                                name="reason"
                                value={donateInfo.reason}
                                onChange={handleInputChange}
                                placeholder="Why do you want to become a Volunteer?"
                                required
                                className="p-2 font-quicksand border border-gray-600  rounded-md focus:outline-none shadow-inner shadow-red border-b-2"
                                min="0"
                                rows="3"
                            />

                            <Button type="submit" className="p-3 mt-2 justify-center bg-green text-white border border-b-2 border-green flex items-center font-quicksand hover:bg-primary hover:border-primary">
                                {!loading ? (
                                    "Become a volunteer"
                                ) : (
                                    "Submitting..."
                                )}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Volunteer;
