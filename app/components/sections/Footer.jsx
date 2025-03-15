import Image from "next/image";
import Link from "next/link";

const Footer = ({ noSpace }) => {
  return (
    <footer
      className={`bg-blue-700 ${noSpace ? "mt-0" : "mt-15 md:mt-20"} pt-10`}
    >
      <div className="w-[90%] mx-auto flex gap-y-8 gap-x-5 flex-wrap justify-between">
        <div className="w-full md:w-fit">
          <Link href="/" className="block">
            <Image
              src="/images/logo.svg"
              className="w-auto h-[68px] md:h-[90px]"
              width={100}
              height={76}
              alt="logo"
            />
          </Link>
          <p className="paragraph text-white mt-3 md:w-[30rem]">
            VTAX Professionals offers expert solutions in taxation, compliance,
            legal services and business advisory. We simplify complex processes,
            ensuring businesses stay compliant and thrive with confidence. Trust
            Us for reliable, efficient and hassle-free professional services
            tailored to your needs.
          </p>
        </div>
        {[
          {
            heading: "Quick Links",
            links: ["about us", "services", "industries", "careers"],
          },
          {
            heading: "Contact Us",
            links: [
              {
                text: "+917428074167",
                href: "tel:+917428074167",
              },
              {
                text: "Info@vtaxprofessionals.com",
                href: "mailto:Info@vtaxprofessionals.com",
              },
              {
                text: "Office@vtaxprofessionals.com",
                href: "mailto:Office@vtaxprofessionals.com",
              },
              {
                text: "204, 3rd Floor, D.R. Chamber, Opp. P.P. Jewellers, Karol Bagh, New Delhi-110005",
                href: "https://maps.app.goo.gl/rSZ3h4VQZRMrgmhJ7",
              },
            ],
          },
        ].map((item, key) => (
          <div
            key={item.heading}
            className={`w-full  ${
              key == 1 ? "md:w-fit lg:w-[20%]" : "md:w-fit"
            } text-white`}
          >
            <h3 className="mb-3 font-semibold w-fit">{item.heading}</h3>
            <div className="grid gap-2">
              {item.links.map((link) => {
                if (typeof link === "string") {
                  return (
                    <Link
                      className="capitalize text-white hover:text-blue-400 transition duration-300"
                      href={`/${link.split(" ").join("")}`}
                      key={link}
                    >
                      {link}
                    </Link>
                  );
                }

                return (
                  <a
                    className="break-words text-white hover:text-blue-400 transition duration-300"
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={link.href}
                  >
                    {link.text}
                  </a>
                );
              })}
            </div>
          </div>
        ))}
        <div className="w-full flex-wrap md:w-fit content-start flex gap-5 md:justify-end">
          {[
            {
              icon: "svgs/footer/facebook.svg",
              alt: "facebook-icon",
              href: "https://www.facebook.com/vtaxprofessional/",
            },
            {
              icon: "svgs/footer/insta.svg",
              alt: "instagram-icon",
              href: "https://www.instagram.com/vtaxprofessionals/?hl=en",
            },
          ].map((link, key) => (
            <a
              target="_blank"
              rel="noopener noreferrer"
              key={link + key}
              href={link.href}
              className="size-fit"
            >
              <Image
                src={link.icon}
                width={0}
                height={0}
                alt={link.alt}
                className="size-8 duration-200 hover:scale-120"
              />
            </a>
          ))}
        </div>
      </div>
      <div className="bg-blue-900 text-white mt-10 text-center py-3">
        <p className="paragraph">
          All Rights Reserved By VTAX Professionals 2025
        </p>
      </div>
    </footer>
  );
};

export default Footer;
