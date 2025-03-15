import Image from "next/image";
import Button from "./components/Button";
import { MainHeading, SectionHeading } from "./components/Headings";
import MainParagraph from "./components/MainParagraph";
import { Team } from "./components/sections/Team";
import { Reviews } from "./components/sections/Reviews";
import HomeServices from "./components/sections/HomeServices";


export const generateMetadata = () => {
  return {
    title: "VTAX - Best Tax Solutions & Financial Services",
    description: "VTAX provides expert tax solutions, financial planning, and business advisory services.",
    keywords: "tax solutions, financial services, business advisory, VTAX, VTAXPRO",
  };
};

const Home = () => {
  return (
      <main className="w-full">
        <section className="hero w-full relative after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-blue-700/60 after:z-10">
          <video
            className="w-full object-cover"
            src="video/hero.mp4"
            width="100%"
            autoPlay
            loop
            playsInline
            muted
          />
          <div className="absolute w-full sm:w-[60vw] px-5 text-white z-20 top-1/2 left-1/2 -translate-1/2">
            <MainHeading
              align="text-center"
              text='Your Trusted Partner For <span class="!text-white">Legal & Tax Solutions</span> In India'
            />
            <MainParagraph
              mt="mt-3"
              align="text-center"
              text="From Business Formation to Brand Protection We Keep You Legally Strong at Every Step"
            />
          </div>
        </section>

        <HomeServices />

        <section className="business mt-15 md:mt-20 py-8">
          <div className="w-[90%] mx-auto flex-col-reverse md:flex-row flex items-center">
            <div className="w-full md:w-1/2">
              <SectionHeading text="Starting A Business And Don’t Know Where To Begin?" />
              <p className="paragraph mt-5">
                Don’t Worry! From Company Registration To GST Filing And Legal
                Compliance, We Handle All The Details So You Don’t Have To. With
                Our Expert Support, You Can Navigate Every Step With Ease. Focus
                On Growing Your Business And Let Us Take Care Of The Rest.
                Together, We’ll Turn Your Dream Into A Thriving
                Reality—Stress-Free And Success-Ready.
              </p>
              <Button text="get started" path="/contactus" mt="mt-9" />
            </div>
            <div className="w-full mb-8 md:w-1/2 flex md:justify-end">
              <div className="w-full md:w-[90%]">
                <Image
                  width={0}
                  height={0}
                  src="images/business.svg"
                  alt="business-svg"
                  className="w-[660px] h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="expert mt-15 md:mt-20">
          <div className="w-[90%] md:w-[85%] 2xl:w-[80%] mx-auto">
            <div className="w-full md:w-[78%] mx-auto text-center">
              <SectionHeading text="EXPERT CA, CS & LAWYERS Your Trusted Partners In Business Success" />
            </div>
            <div className="lg:flex items-center mt-10">
              <div className="w-[70%] mx-auto md:w-1/2 flex justify-center lg:justify-start lg:mx-0">
                <Image
                  src="svgs/home/expert.svg"
                  width={483}
                  height={600}
                  alt="expert-img"
                  className="w-auto md:h-[50vw] lg:max-h-[680px]"
                />
              </div>
              <div className="w-full lg:w-1/2 flex flex-col gap-3 md:gap-6 mt-5 lg:mt-0">
                {[
                  {
                    heading: "Talk To A Chartered Accountant",
                    para: "Expert Tax Planning, Audits & Financial Strategies For Business Growth.",
                    icon: "svgs/home/Accountant.svg",
                  },
                  {
                    heading: "Talk To A Lawyer",
                    para: "Legal Advice, Contract Drafting & Strong Litigation Support.",
                    icon: "svgs/home/LawyerTalk.svg",
                  },
                  {
                    heading: "Talk To A Company Secretary",
                    para: "Seamless Compliance, Corporate Governance & Regulatory Filings.",
                    icon: "svgs/home/Secretary.svg",
                  },
                  {
                    heading: "Talk To An IP Lawyer",
                    para: "Protect Your Ideas With Trademark, IP Rights & Legal Guidance.",
                    icon: "svgs/home/Lawyer.svg",
                  },
                ].map((item, key) => (
                  <div
                    key={key}
                    className="w-full bg-blue-200 rounded-lg md:rounded-xl flex gap-5 items-center justify-between px-4.5 lg:px-8 py-3"
                  >
                    <div>
                      <h3 className="sub-heading !font-semibold !font-[Poppins] mb-3">
                        {item.heading}
                      </h3>
                      <p className="w-full paragraph">{item.para}</p>
                    </div>
                    <div className="hidden md:flex size-22 p-5 md:size-24 xl:size-30 rounded-full shrink-0 items-center justify-center bg-white">
                      <Image
                        className="size-auto"
                        src={item.icon}
                        width={700}
                        height={700}
                        alt={item.heading}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Team />

        <section className="trust mt-15 md:mt-20">
          <div className="w-[90%] md:w-[85%] 2xl:w-[80%] mx-auto">
            <div className="w-full mx-auto text-center">
              <SectionHeading text="Why Do Businesses Trust & Recommend Us?" />
            </div>
            <div className="md:flex items-center mt-10">
              <div className="w-full mx-auto md:w-1/2 flex justify-center lg:justify-start lg:mx-0">
                <Image
                  src="svgs/home/trust.svg"
                  width={483}
                  height={539}
                  alt="trust-img"
                  className="w-auto md:h-[50vw] lg:max-h-[539px]"
                />
              </div>
              <div className="w-full lg:w-1/2 flex flex-col items-end gap-3 md:gap-6 mt-5 lg:mt-0 ">
                {[
                  {
                    heading: "Comprehensive Service Portfolio",
                    para: "One-stop solution for business setup, tax compliance and regulatory advisory.",
                  },
                  {
                    heading: "Expert Team of Professionals",
                    para: "Skilled CAs, CSs and legal experts ensuring accurate and reliable solutions.",
                  },
                  {
                    heading: "Client-Centric Approach",
                    para: "Personalized services tailored to meet unique business needs with utmost dedication.",
                  },
                  {
                    heading: "Commitment to Excellence",
                    para: "Quality-driven solutions focused on efficiency, accuracy and long-term business success.",
                  },
                ].map((item, key) => (
                  <div
                    key={key}
                    className="w-full md:w-[85%] rounded-lg md:rounded-xl flex gap-5 items-start py-3"
                  >
                    <span className="text-2xl md:text-3xl size-10 md:size-13 shrink-0 font-bold grid place-items-center rounded-full bg-blue-200">
                      {key + 1}
                    </span>
                    <div className="w-fit">
                      <h3 className="sub-heading !font-semibold !font-[Poppins] mb-3 w-fit">
                        {item.heading}
                      </h3>
                      <p className="w-full paragraph">{item.para}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Reviews />
      </main>
  );
};

export default Home;
