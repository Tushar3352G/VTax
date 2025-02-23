import { MainHeading } from "app/components/Headings";
import Carousel from "../components/Carousel";
import services from "app/content/services.json";

export const generateMetadata = () => {
  return {
    title: "VTAX - Comprehensive Business Services for All Sectors",
    description: "Explore a wide range of services including business incorporation, GST registration, tax filing, bookkeeping, legal advisory, and more for every industry like healthcare, e-commerce, manufacturing, and real estate.",
    keywords: "business incorporation, public limited company, private limited company, one person company, LLP registration, GST registration, tax filing, income tax, bookkeeping, trademark registration, MSME registration, FSSAI, income tax returns, GST compliance, shareholding agreements, business advisory, financial planning, wealth management, investment planning, Nidhi company, Liaison office registration, partnership firm, tax compliance, tax exemptions, valuations, annual filings, company winding up, RBI compliance, NBFC compliance, industry audits, NGO audits, real estate compliance"
  };
};



const Services = () => {
  return (
    <main className="w-full">
      <div className="w-[90%] mx-auto text-center mb-10 mt-10 md:mt-15">
        <MainHeading text="Expert Solutions for <span>Your Business</span> Success" />
      </div>
      {services.map((data, key) => (
        <div className="mb-17" key={key}>
          <div className="w-[90%] mx-auto mb-7">
            <h3 className="sub-heading !font-bold">
              {data.section}
            </h3>
          </div>
          <div className="!overflow-x-clip">
            <Carousel
              handle={true}
              slide={3.2}
              data={data.services}
              circle="bg-white"
              bg="bg-blue-200 hover:bg-blue-300 transition duration-300"
              heading="Protect your Intellectual Property"
              para="A Private Limited Company (Pvt Ltd) is a registered entity under the Companies Act, 2013, offering LIMITED LIABILITY to shareholders and restricting public share transfers. Key features include MINIMUM REQUIREMENTS of at least 2 directors, 2 shareholders, and a registered office in India, NO PUBLIC TRADING of shares, and mandatory COMPLIANCE with annual filings, tax returns, and audits with the MCA. It is ideal for startups and growing businesses."
            />
          </div>
        </div>
      ))}
    </main>
  );
};

export default Services;
