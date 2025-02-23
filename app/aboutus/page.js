import { Team } from "../components/sections/Team";
import { MainHeading } from "../components/Headings";
import Image from "next/image";
import { Reviews } from "../components/sections/Reviews";

export const generateMetadata = () => {
  return {
    title: "About VTAX - Trusted Tax & Financial Experts",
    description:
      "Learn more about VTAX, your trusted partner in tax solutions, financial planning, and business advisory services.",
  };
};

const About = () => {
  const data = [
    {
      heading: "Who We Are? <br /> Your Growth, Our Expertise",
      para: `At VTAX Professionals, we are more than just consultants – we are your trusted business growth partners. With a team of highly skilled Chartered Accountants, Company Secretaries and Legal Experts, we specialize in Startups, Corporate Laws, Taxation (Direct & Indirect), GST, International Taxation, Import-Export, Risk Advisory and Compliance. Our mission is to provide tailored financial, legal and business management services that help businesses of all sizes stay compliant, reduce risks and achieve sustainable growth. Whether you're launching a startup or managing a large corporation, we ensure seamless financial and regulatory solutions, allowing you to focus on scaling your business while we handle the complexities.`,
    },
    {
      heading: "Why Choose VTAX? <br /> Where Expertise Meets Excellence",
      para: `At VTAX Professionals, we don’t just offer services—we build lasting relationships with our clients. Our team of industry experts and financial strategists ensures that every business receives accurate, timely and reliable support in areas like taxation, compliance, financial planning and risk advisory. We believe in delivering excellence with precision, ensuring that your business stays ahead of regulatory requirements while maximizing profitability. With a customer-first approach, we are here to simplify complex business processes, eliminate operational stress and provide actionable insights that lead to long-term success. When you choose VTAX, you choose a dedicated partner committed to your business’s growth and financial well-being.`,
    },
    {
      heading: "Our Vision <br /> Redefining Success, One Business At A Time",
      para: `Our vision is to revolutionize the way businesses handle their financial, taxation and corporate law needs. We aim to be a trusted one-stop solution, providing end-to-end consulting services that cater to businesses of all sizes. At VTAX, we believe in integrity, innovation and continuous learning, ensuring that our clients receive cutting-edge solutions aligned with the latest market trends and regulatory changes. Through strategic financial management, ethical business practices and customized solutions, we empower businesses to navigate challenges, seize opportunities, and achieve long-term stability. Our goal is to be universally recognized as a leading corporate consulting firm, consistently delivering excellence and value to our clients.`,
    },
    {
      heading: "Our Mission <br /> Your Business, Our Commitment",
      para: `At VTAX Professionals, our mission is to simplify business complexities and provide businesses with the right financial and legal guidance to ensure seamless operations. We are committed to delivering high-quality, cost-effective and globally compliant solutions that enhance operational efficiency, reduce risks and drive business success. By combining global expertise with deep local market knowledge, we help businesses stay competitive, compliant and financially strong. Our approach is driven by transparency, customer-centricity and ethical business values, ensuring that every client receives personalized solutions that align with their unique business needs. With VTAX by your side, you can focus on growth while we take care of the rest.`,
    },
  ];
  return (
    <main className="mt-10 md:mt-15">
      <MainHeading
        align="text-center"
        text="Your Trusted <Span>Partners In Growth</span> & Compliance"
      />
      <div className="flex flex-wrap items-stretch h-full w-[90%] mx-auto mt-10 md:mt-20">
        <div className="w-full md:w-3/4 md:pr-2">
          {data.map((content, key) => (
            <div
              key={content.heading}
              className={`${key == 0 ? "mt-0" : "mt-15"}`}
            >
              <h3
                className="sub-heading !font-bold mb-3"
                dangerouslySetInnerHTML={{ __html: content.heading }}
              ></h3>
              <p className="paragraph mt-4">{content.para}</p>
            </div>
          ))}
        </div>
        <div className="w-full md:w-1/4 relative flex justify-end">
          <div className="w-[200px] md:w-[316px] h-[215px] md:h-[355px] md:sticky top-1/3">
            <Image
              src="/svgs/home/about.svg"
              width={0}
              height={0}
              alt="about-img"
              className='w-full h-auto'
            />
          </div>
        </div>
      </div>
      <Team />
      <Reviews />
    </main>
  );
};

export default About;
