import { SectionHeading } from "../Headings";
import Carousel from "../Carousel";
import data from 'app/content/reviews.json'

export const Reviews = () => {
  return (
    <section className="review mt-15 md:mt-20 overflow-x-clip">
      <div className="w-[90%] mb-5 md:mb-8 mx-auto">
        <SectionHeading
          contain="sm:w-[42vw] lg:w-[40vw]"
          text="REAL STORIES, REAL SUCCESS Hear From Our Happy Clients"
        />
      </div>
      <Carousel header={false} data={data} review={true} />
    </section>
  );
};
