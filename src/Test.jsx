import { useState } from 'react';
import "../../index.css";
import "../../main.css";
import {
  Card,
  Input,
  Button,
  Typography,
  Textarea,
  Select,
  Option,
  Alert,
} from "@material-tailwind/react";

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
        clipRule="evenodd"
      />
    </svg>
  );
}
function ErrorIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6 text-red-500"
    >
      <path
        fillRule="evenodd"
        d="M12 2c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 20.627 0 14 5.373 2 12 2zm0 1c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10S17.523 3 12 3zm1 13h-2v-2h2v2zm0-4h-2V7h2v5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const Email = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isFormError, setIsFormError] = useState(false);
  const [service, setService] = useState('')

  const [data, setData] = useState({
    email: '',
    name: '',
    service: '',
    telephone: '',
    message: '',
  });

  const { email, name, telephone, message } = data;

  const handleChange = (e) => {
    setData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle change for Service
  const handleSelect = (event) => {
    console.log('Event:', event);
    const selectedValue = event?.target?.value || event;
    setService(selectedValue === event ? event : selectedValue);
  };

  // Handle Submit function
  const handleSubmit = async (e) => {
    e.preventDefault();
  
     // Validate telephone number
     const isValidPhoneNumber = /^[0-9]{1,10}$/.test(telephone);
     if (!isValidPhoneNumber) {
       console.log("Invalid phone number");
       return;
     }
  
    try {
      const response = await fetch('https://v1.nocodeapi.com/kpanti/google_sheets/hJoVtXWJDNiMyWHN?tabId=Service-Request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([
          [
            email,
            name,
            telephone,
            service,
            message,
            new Date().toLocaleString(),
          ],
        ]),
      });
  
      if (response.ok) {
        console.log(data);
  
        await response.json();
        setIsFormSubmitted(true);
        setData({
          email: '',
          name: '',
          service: '',
          telephone: '',
          message: '',
        });
      } else {
        setIsFormError(true);
      }
    } catch (err) {
      console.log(err);
      setIsFormError(true);
    }
  };
  

  // Modal component
  const SuccessModal = () => (
    <div className="modal">
      <div className="modal-content">
        <Alert
          icon={<Icon />}
          className="rounded-none mb-8 border-l-4 border-[#2ec946] bg-[#2ec946]/10 font-medium text-[#2ec946]"
        >
          Request Sent Successfully!
        </Alert>
        <button onClick={() => setIsFormSubmitted(false)}>Close</button>
      </div>
    </div>
  );

  return (
    <section className="mb-0 relative w-full h-full">
      <div className="mx-auto overflow-hidden">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 contact-section">
          <div className="flex flex-col justify-center">
            <div className="row contact-me">
              <div className="section-title">
                <h2 id='email-heading' className="service-head text-left ml-10">Get in Touch</h2>
              </div>
            </div>
            <p className="mb-4 ml-10 email-content">
              We love to hear from you! If you have any questions, inquiries, or
              would like to discuss a potential project, please get in touch with
              us using the contact form or the provided contact information below.
            </p>
          </div>
          <div className="flex justify-center mb-8 emails">
            <Card color="transparent" shadow={false}>
              <Typography variant="h4" color="blueGray" className="text-center mt-8 email-section-head">
                Email us
              </Typography>
              <form className="mt-8 mb-1 w-80 max-w-screen-lg email-collect" onSubmit={handleSubmit}>
                {isFormSubmitted && !isFormError && (
                  <Alert
                    icon={<Icon />}
                    className="rounded-none mb-4 border-l-4 border-[#2ec946] bg-[#2ec946]/10 font-medium text-[#2ec946]"
                  >
                    Request Sent Successfully!
                  </Alert>
                )}
                {isFormError && (
                  <Alert
                    icon={<ErrorIcon />}
                    className="rounded-none mb-4 border-l-4 border-red-500 bg-red-50 font-medium text-red-500"
                  >
                    An error occurred. Please try again later.
                  </Alert>

                )}
                <div className="mb-4 flex flex-col gap-6">
                  <Input
                    label="Email"
                    containerProps={{ className: "min-w-[72px] mail" }}
                    type="email"
                    name='email'
                    autoComplete="email"
                    onChange={(event) => handleChange(event)}
                    value={email}
                    required
                    labelProps={{
                      htmlFor: "email-input",
                      style: { fontSize: '15px' },
                    }}
                  />

                  <div className="my-2 flex items-center gap-3">
                    <Input
                      label="Name"
                      containerProps={{ className: "min-w-[72px] mail" }}
                      type='text'
                      name='name'
                      onChange={handleChange}
                      value={name}
                      required
                      labelProps={{
                        htmlFor: "name-input",
                        style: { fontSize: '15px' },
                      }}
                    />
                    <Input
                      required
                      label="Phone Number"
                      type="tel"
                      name='telephone'
                      onChange={handleChange}
                      value={telephone}
                      containerProps={{ className: "min-w-[72px] mail" }}
                      labelProps={{
                        htmlFor: "phone-number-input",
                        style: { fontSize: '15px' },
                      }}
                    />

                  </div>
                  <div >
                    <Select
                      label="Service"
                      name='service'
                      className="mail selected-service"
                      onChange={handleSelect}
                      value={service}
                      required
                      labelProps={{ className: "label-large" }}
                    >
                      <Option value="Web Development">Web Development</Option>
                      <Option value="Mobile App Development">Mobile App Development</Option>
                      <Option value="API Integration">API Integration</Option>
                      <Option value="Electronic Data Exchange">Electronic Data Exchange</Option>
                      <Option value="Software Development">Software Development</Option>
                    </Select>
                  </div>
                  <Textarea
                    label="Message"
                    name='message'
                    onChange={handleChange}
                    value={message}
                    required
                    labelProps={{ className: "custom-label" }}
                    containerProps={{ className: "min-w-[72px] mail-content" }}
                  />
                </div>
                <div className="">
                  <Button type='submit' className="mt-6 email-btn" fullWidth>
                    Submit
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </div>

      {/* Conditionally render the SuccessModal when isFormSubmitted is true */}
      {isFormSubmitted && <SuccessModal />}
    </section>
  );
};

export default Email;
