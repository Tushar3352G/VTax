import Image from "next/image";
import { SectionHeading } from "../Headings";
import { nanoid } from "nanoid";

export const Team = () => {
  return (
    <section className="team mt-15 md:mt-20">
      <div className="flex flex-col-reverse md:flex-row items-center mx-auto w-[90%]">
        <div className="w-full md:w-3/5 mt-8 md:mt-0">
          <SectionHeading
            contain="sm:w-[42vw] lg:w-[40vw]"
            text="A Team Of Expert Minds Driving Your Business Success!"
          />
          <p className="paragraph mt-5 md:w-[40vw]">
            Our team of seasoned Chartered Accountants, Company Secretaries &
            Legal Experts is committed to driving your business forward. With
            extensive expertise in taxation, compliance & legal solutions, we
            provide seamless support to startups, entrepreneurs and established
            businesses. From company registration and GST filing to legal
            advisory, we ensure accurate, reliable and hassle-free services
            tailored to your unique business needs. Let’s Build Your Success
            Together.
          </p>
        </div>
        <div className="w-full md:w-2/5 flex gap-3">
          {[
            {
              id: nanoid(),
              member: ["/images/teamimg-1.webp", "/images/teamimg-2.webp"],
            },
            {
              id: nanoid(),
              member: ["/images/teamimg-3.webp", "/images/teamimg-4.webp"],
            },
          ].map((item, key) => (
            <div
              key={item.id}
              className={`w-1/2 h-fit grid gap-3 ${key == 0 && "md:pt-10"}`}
            >
              {item.member.map((url) => (
                <div
                  key={url}
                  className="w-full h-fit p-2 md:p-3 rounded-lg md:rounded-xl bg-blue-500"
                >
                  <Image
                    className="w-full h-full rounded-lg md:rounded-xl overflow-hidden"
                    src={url}
                    width={150}
                    height={150}
                    alt="memberOne"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
