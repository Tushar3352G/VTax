import React from "react";
import data from "app/content/services.json";
import { SectionHeading } from "../Headings";
import Carousel from "../Carousel";
import Button from "../Button";

const HomeServices = () => {
  return (
    <section className="services mt-10 md:mt-20 overflow-x-clip">
      <div className="w-[90%] mb-5 md:mb-8 mx-auto">
        <SectionHeading
          contain="sm:w-[42vw] lg:w-[40vw]"
          text="End-To-End Business Setup & Compliance Assistance"
        />
      </div>
      <Carousel data={data} list={true} tagline={true} />
      <Button
        text="explore more"
        path="/services"
        align="mx-auto"
        mt="mt-5 md:mt-8"
      />
    </section>
  );
};

export default HomeServices;
