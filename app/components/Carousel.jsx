"use client";
import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import { redirect } from "next/navigation";

const Carousel = ({
  data,
  review,
  para,
  tagline = false,
  bg,
  header = true,
  list,
  circle,
  slide,
  handle = false,
}) => {
  const [maxHeight, setMaxHeight] = useState(0);
  const slidesRef = useRef([]);

  useEffect(() => {
    if (slidesRef.current.length > 0) {
      const maxH = Math.max(
        ...slidesRef.current.map((el) => el?.offsetHeight || 0)
      );
      setMaxHeight(maxH);
    }
  }, [data]);

  const handleLocal = (data) => {
    localStorage.setItem('service',data.title)
    redirect("/contactus");
  };

  return (
    <Swiper
      speed={800}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        0: {
          slidesPerView: 1.2,
          spaceBetween: 15,
        },
        700: {
          slidesPerView: 2.3,
          spaceBetween: 20,
        },
        1000: {
          slidesPerView: 3.2,
          spaceBetween: 20,
        },
        1400: {
          slidesPerView: slide || 4.3,
          spaceBetween: 20,
        },
      }}
      spaceBetween={20}
      slidesPerView={slide || 4.3}
      modules={[Autoplay]}
      className="!overflow-visible !px-5"
    >
      {data.map((data, i) => (
        <SwiperSlide
          onClick={() => (handle ? handleLocal(data) : undefined)}
          key={i}
          className={`shadow-[0px_0px_24px_rgba(0,0,0,0.1)] bg-transparent rounded-lg md:rounded-xl overflow-hidden ${handle ? 'cursor-pointer' : 'cursor-grab'}`}
        >
          <div
            ref={(el) => (slidesRef.current[i] = el)}
            style={{ minHeight: maxHeight }}
            className={`${bg || "bg-white"} py-5 w-full duration-100`}
          >
            {tagline && (
              <span className="font-[poppins] inline-block text-sm bg-blue-700 px-5 rounded-r-full text-white py-1.5 mb-3">
                Easy & Affordable
              </span>
            )}

            <div className="w-full px-5">
              {header && (
                <div className="w-full card-head flex items-center gap-2 justify-between">
                  <h3 className="sub-heading">{data.section || data.title}</h3>

                  <div className="relative flex items-center justify-center shrink-0 size-11 sm:size-12 lg:size-15">
                    <img
                      className="z-20 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[53px] h-[60px]"
                      src={data.image || data.services[0].image}
                      width={0}
                      height={0}
                      alt="icon"
                    />
                    <span
                      className={`w-full h-full inline-block rounded-full ${
                        circle || "bg-blue-200"
                      } left-0 top-0`}
                    ></span>
                  </div>
                </div>
              )}

              {para && (
                <p
                  className="paragraph mt-3"
                  dangerouslySetInnerHTML={{ __html: data.content }}
                ></p>
              )}

              {list && (
                <ul className="list-disc pl-5 marker:text-blue-700 grid gap-1.5 paragraph mt-3">
                  {data.services
                    ?.map((item) => item.title)
                    .slice(0, 6)
                    .map((link) => (
                      <li key={link}>
                        <span className="line-clamp-1">{link}</span>
                      </li>
                    ))}
                </ul>
              )}

              {review && (
                <>
                  <div className="w-full card-head flex gap-3 items-center mb-3">
                    <div className="relative flex items-center justify-center size-13 bg-blue-500 rounded-full overflow-hidden">
                      <Image
                        className="size-full object-cover object-center"
                        src={data.image}
                        width={63}
                        height={63}
                        alt={data.name}
                      />
                    </div>
                    <h3 className="sub-heading">{data.name}</h3>
                  </div>

                  <p className="paragraph">{data.feedback}</p>
                </>
              )}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
