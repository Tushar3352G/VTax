import Form from "app/components/Form";
import { MainHeading, SectionHeading } from "app/components/Headings";
import { handleContactForm } from "app/utils/formAction";
import Image from "next/image";
import { ToastContainer } from "react-toastify";

export const generateMetadata = () => {
  return {
    title: "Contact Us - VTAX | Get Expert Tax Solutions & Financial Services",
    description:
      "Reach out to VTAX for professional tax solutions, financial planning, and business advisory services. Our team is ready to assist you.",
    keywords:
      "contact VTAX, get in touch, tax solutions, financial services, business advisory, contact us",
  };
};

const ContactUs = () => {
  const formInputs = [
    [
      {
        input: "text",
        holdertext: "Your Name*",
        name: "username",
        required: true,
      },
      {
        input: "text",
        holdertext: "Your Designation*",
        name: "designation",
        required: true,
      },
    ],
    [
      {
        input: "text",
        holdertext: "Your Organization*",
        name: "organization",
        required: true,
      },
      {
        input: "text",
        holdertext: "Your Office Address*",
        name: "officeaddress",
        required: true,
      },
    ],
    [
      {
        input: "text",
        holdertext: "Your City*",
        name: "city",
        required: true,
      },
      {
        input: "email",
        holdertext: "Your Email Address*",
        name: "email",
        required: true,
        pattern: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
      },
    ],
    {
      input: "number",
      holdertext: "Your Number*",
      name: "number",
      required: true,
      min: 10,
      pattern: "^[0-9]{10}$", // Fixed pattern for phone number (10 digits)
    },
  ];

  const contactDetails = [
    {
      text: "204, 3rd Floor, D.R. Chamber, Opp. P.P. Jewellers, Karol Bagh, New Delhi-110005",
      href: "https://maps.app.goo.gl/rSZ3h4VQZRMrgmhJ7",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="shrink-0 w-6 h-auto text-blue-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 2.25c-4.97 0-9 3.783-9 8.445 0 4.013 2.987 8.232 6.277 11.055a2.25 2.25 0 002.926 0c3.29-2.823 6.277-7.042 6.277-11.055 0-4.662-4.03-8.445-9-8.445z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
          />
        </svg>
      ),
    },
    {
      text: "+917428074167",
      href: "tel:+917428074167",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="shrink-0 w-6 h-auto text-green-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 5.25A2.25 2.25 0 014.5 3h3.75a2.25 2.25 0 012.25 2.25v.69a1.125 1.125 0 01-.67 1.03l-2.51 1.08a12.084 12.084 0 005.59 5.59l1.08-2.51a1.125 1.125 0 011.03-.67h.69A2.25 2.25 0 0121 14.25v3.75a2.25 2.25 0 01-2.25 2.25h-.75c-8.28 0-15-6.72-15-15v-.75z"
          />
        </svg>
      ),
    },
    {
      text: "Info@vtaxprofessionals.com",
      href: "mailto:Info@vtaxprofessionals.com",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="shrink-0 w-6 h-auto text-red-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0a2.25 2.25 0 00-2.25-2.25H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.75a.75.75 0 01-.378.65l-7.617 4.168a3 3 0 01-2.832 0L3.128 8.15a.75.75 0 01-.378-.65v-.75"
          />
        </svg>
      ),
    },
    {
      text: "Office@vtaxprofessionals.com",
      href: "mailto:Office@vtaxprofessionals.com",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="shrink-0 w-6 h-auto text-red-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0a2.25 2.25 0 00-2.25-2.25H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.75a.75.75 0 01-.378.65l-7.617 4.168a3 3 0 01-2.832 0L3.128 8.15a.75.75 0 01-.378-.65v-.75"
          />
        </svg>
      ),
    },
  ];

  return (
    <main className="w-full mx-auto mt-10 md:mt-15">
      <ToastContainer />
      <MainHeading
        align="text-center"
        text="Your Success <span>Starts Here Let’s</span> Make It Happen"
      />
      <div className="flex w-[90%] mx-auto flex-wrap justify-end md:justify-start mt-10 md:mt-15">
        <div className="w-full md:w-2/3">
          <Form
            formInputs={formInputs}
            handleForm={handleContactForm}
            category={true}
          />
        </div>
        <div className="w-3/5 md:w-1/3">
          <Image
            width={0}
            height={0}
            src="svgs/contact/contact.svg"
            alt="business-svg"
            className="w-[660px] h-auto"
          />
        </div>
      </div>

      <div className="flex md:w-[90%] mx-auto flex-wrap mt-15 md:mt-20 items-center gap-y-8 gap-x-2">
        <div className="w-[90%] mx-auto md:mx-0 md:w-full lg:w-[30%] shrink-0">
          <SectionHeading text="Information" />
          <div className="grid mt-5 gap-3 lg:w-[80%]">
            {contactDetails.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-zinc-500 hover:text-blue-700"
              >
                {item.icon}
                {item.text}
              </a>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-[69%]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d437.9131132161832!2d77.19434871464838!3d28.651772761893714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfdc7dad69e51%3A0x670ff788fc0b2d88!2sVTax%20Professionals!5e0!3m2!1sen!2sin!4v1740483946141!5m2!1sen!2sin"
            width="600"
            height="450"
            className="border-0 w-full"
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>
      </div>

    </main>
  );
};

export default ContactUs;
