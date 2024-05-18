"use client";
import Image from "next/image";
import { useEffect } from "react";
import Aos from "aos";

const Gallery = () => {
  useEffect(() => {
    if (typeof window !== undefined) Aos.init();

    return () => {
      Aos.refreshHard();
    };
  }, []);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 mx-auto flex flex-wrap">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Gallery
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            havent heard of them man bun deep jianbing selfies heirloom prism
            food truck ugh squid celiac humblebrag.
          </p>
        </div>
        <div className="flex flex-wrap md:-m-2 -m-1 overflow-hidden">
          <div className="flex flex-wrap w-1/2">
            <div
              className="md:p-2 p-1 w-1/2"
              data-aos="fade-down"
              data-aos-duration="600"
            >
              <Image
                height={500}
                width={500}
                placeholder={"blur"}
                quality={100}
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={"/images/gallery/3.webp"}
                blurDataURL={"/images/gallery/3.webp"}
              />
            </div>
            <div
              className="md:p-2 p-1 w-1/2"
              data-aos="fade-down"
              data-aos-duration="600"
            >
              <Image
                height={500}
                width={500}
                placeholder={"blur"}
                quality={100}
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={"/images/gallery/2.webp"}
                blurDataURL={"/images/gallery/2.webp"}
              />
            </div>
            <div
              className="md:p-2 p-1 w-full"
              data-aos="fade-right"
              data-aos-duration="600"
            >
              <Image
                height={500}
                width={500}
                placeholder={"blur"}
                quality={100}
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src={"/images/gallery/1.webp"}
                blurDataURL={"/images/gallery/1.webp"}
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div
              className="md:p-2 p-1 w-full"
              data-aos="fade-left"
              data-aos-duration="600"
            >
              <Image
                height={500}
                width={500}
                placeholder={"blur"}
                quality={100}
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src={"/images/gallery/6.webp"}
                blurDataURL={"/images/gallery/6.webp"}
              />
            </div>
            <div
              className="md:p-2 p-1 w-1/2"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <Image
                height={500}
                width={500}
                placeholder={"blur"}
                quality={100}
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={"/images/gallery/5.webp"}
                blurDataURL={"/images/gallery/5.webp"}
              />
            </div>
            <div
              className="md:p-2 p-1 w-1/2"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <Image
                height={500}
                width={500}
                placeholder={"blur"}
                quality={100}
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={"/images/gallery/4.webp"}
                blurDataURL={"/images/gallery/4.webp"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
