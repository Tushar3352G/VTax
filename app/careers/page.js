import { MainHeading } from "app/components/Headings";
import Form from "../components/Form";
import Image from "next/image";
import { handleCareerForm } from "app/utils/formAction";
import { ToastContainer } from "react-toastify";

export const generateMetadata = () => {
  return {
    title:
      "Careers - Join the Team at VTAX | Tax Solutions & Financial Services",
    description:
      "Explore career opportunities at VTAX. Join our team of professionals providing expert tax solutions, financial services, and business advisory.",
    keywords:
      "careers at VTAX, join our team, tax solutions, financial services, business advisory jobs, career opportunities",
  };
};

const Careers = () => {
  
  const formInputs = [
    [
      {
        input: "text",
        holdertext: "First name*",
        name: "firstname",
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
    [
      {
        input: "number",
        holdertext: "Your Number*",
        name: "number",
        required: true,
        min: 10,
        pattern: "^[0-9]{10}$", 
      },
      {
        input: "select",
        option: ["Male", "Female"],
        name: "gender",
        required: true,
      },
    ],
    [
      {
        input: "text",
        holdertext: "Position you are applying for*",
        name: "position",
        required: true,
      },
      {
        input: "datetime-local",
        holdertext: "Date Of Birth*",
        name: "dateofbirth",
        required: true,
      },
    ],
    [
      {
        input: "text",
        holdertext: "Highest Qualification*",
        name: "qualification",
        required: true,
      },
      {
        input: "text",
        holdertext: "Years of Experience (Year Month)*",
        name: "experience",
        required: true,
      },
    ],
    [
      {
        input: "text",
        holdertext: "Last company you worked for*",
        name: "last_company",
        required: true,
      },
    ],
  ];

  return (
    <main className="w-full mx-auto mt-10 md:mt-15">
      <ToastContainer />
      <MainHeading
        align="text-center"
        text="Unlock Your <span>Potential Join</span> Our Winning Team."
      />
      <div className="flex w-[90%] mx-auto flex-wrap justify-end md:justify-start mt-10 md:mt-15">
        <div className="w-full md:w-2/3">
          <Form
            btext="Submit Your Application"
            handleForm={handleCareerForm}
            formInputs={formInputs}
          />
        </div>
        <div className="w-3/5 md:w-1/3 mt-5 md:mt-0">
          <Image
            width={0}
            height={0}
            src="/svgs/career/career.svg"
            alt="business-svg"
            className="w-[660px] h-auto"
            loading="lazy"
          />
        </div>
      </div>
    </main>
  );
};

export default Careers;
