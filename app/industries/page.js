import { MainHeading } from "../components/Headings";
import MainParagraph from "../components/MainParagraph";

export const generateMetadata = () => {
  return {
    title: "VTAX - Empowering Industries with Expert Solutions",
    description: "VTAX offers tailored solutions to industries including finance, legal, taxation, and business advisory, ensuring compliance, growth, and efficiency for businesses of all sizes.",
    keywords: "Automobile, Oil & Petro Chemicals, E-commerce, Event Management, FMCG Industry, Food and Beverages, Goods Transport Agencies, Gym & Fitness Centers, Healthcare & Medical, Education & Social Welfare, Hospitality, Travel, Tourism & Entertainment, Internet Service Providers, Manufacturing, New Startups, Real Estate, Retail Traders, Society Trust NGO, Tech & Software Development, Telecom Industries, Textile, Business Solutions, Expert Guidance, Compliance, Growth, Efficiency",
  };
};


const Industries = () => {
  const industries = [
    { text: "Automobile", path: "automobile.svg" },
    { text: "Oil & Petro Chemicals", path: "chemicals.svg" },
    { text: "E-commerce", path: "ecommerce.svg" },
    { text: "Event Management", path: "event.svg" },
    { text: "FMCG Industry", path: "FMCG.svg" },
    { text: "Food and Beverages", path: "food.svg" },
    { text: "Goods Transport Agencies", path: "goods.svg" },
    { text: "Gym & Fitness Centers", path: "Gym.svg" },
    { text: "Healthcare & Medical", path: "healthcare.svg" },
    { text: "Education & Social Welfare", path: "education.svg" },
    { text: "Hospitality", path: "hospitality.svg" },
    { text: "Travel, Tourism & Entertainment", path: "travel.svg" },
    { text: "Internet Service Providers", path: "internet.svg" },
    { text: "Manufacturing", path: "manufacturing.svg" },
    { text: "New Startups", path: "newstartups.svg" },
    { text: "Real Estate", path: "realestate.svg" },
    { text: "Retail Traders", path: "retail.svg" },
    { text: "Society Trust NGO", path: "society.svg" },
    { text: "Tech. & Software Development", path: "tech.svg" },
    { text: "Telecom Industries", path: "Telecom.svg" },
    { text: "Textile", path: "textile.svg" },
  ];

  return (
    <main className="w-[90%] mx-auto mt-10 md:mt-15">
      <div className="mb-7 w-full md:w-[90%] mx-auto">
        <MainHeading
          align="text-center"
          text="Industries We Empower <span>Turning Challenges</span> Into Opportunities"
        />
      </div>
      <MainParagraph
        align="text-center"
        text="No Matter Your Industry, We Have The Expertise To Drive Your Success. From Startups And SMEs To Large Enterprises, Our Tailored Solutions Ensure Compliance, Growth And Efficiency. Partner With Us For Expert Guidance In Finance, Legal, Taxation And Business Advisory—Because Your Success Is Our Priority."
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 w-full gap-x-2.5 gap-y-5 sm:gap-x-5 sm:gap-y-8 mt-10 md:mt-15">
        {industries.map((item, key, arr) => (
          <div
            key={key * arr.length}
            className="grid gap-y-5 px-2.5 rounded-xl place-items-center shadow-[0px_0px_24px_rgba(0,0,0,0.1)] py-6"
          >
            <img
              className="w-auto h-[clamp(95px,6.771vw,130px)]"
              src={`/svgs/industries/${item.path}`}
              alt={item.text}
              loading="lazy"
            />
            <p className="text-[clamp(20px,1.042vw,24px)] text-center leading-[1.1] font-medium">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Industries;
