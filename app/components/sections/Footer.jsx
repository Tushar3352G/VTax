import Image from "next/image";
import Link from "next/link";

const Footer = ({ noSpace }) => {
  return (
    <footer
      className={`bg-blue-700 ${noSpace ? "mt-0" : "mt-15 md:mt-20"} pt-10`}
    >
      <div className="w-[90%] mx-auto flex gap-10 flex-wrap justify-between">
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
            links: [
              "about us",
              "services",
              "industries",
              "careers",
              "contact us",
            ],
          },
          {
            heading: "Contact Us",
            links: ["+123 4567 897", "support@gmail.com"],
          },
        ].map((item) => (
          <div key={item.heading} className="w-full md:w-fit text-white">
            <h3 className="mb-3 font-semibold">{item.heading}</h3>
            <div className="grid gap-2">
              {item.links.map((link) => (
                <Link
                  className="capitalize text-white hover:text-blue-400 transition duration-300"
                  href={link.split(" ").join("")}
                  key={link}
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
        ))}
        <div className="w-full md:w-fit flex gap-8 md:justify-end">
          {[
            {
              icon: "svgs/footer/facebook.svg",
              alt: "facebook-icon",
            },
            {
              icon: "svgs/footer/insta.svg",
              alt: "instagram-icon",
            },
            {
              icon: "svgs/footer/twitter.svg",
              alt: "twitter-icon",
            },
            {
              icon: "svgs/footer/youtube.svg",
              alt: "youtube-icon",
            },
          ].map((link, key) => (
            <Link key={link + key} href="/">
              <Image
                src={link.icon}
                width={30}
                height={30}
                alt={link.alt}
                className="size-8 duration-200 hover:scale-120"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="bg-blue-900 text-white mt-10 text-center py-3">
        <p className="paragraph">All Rights Reserved By VTAX 2025</p>
      </div>
    </footer>
  );
};

export default Footer