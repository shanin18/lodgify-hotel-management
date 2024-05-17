"use client";
import Image from "next/image";
import React from "react";
import GalleryImg1 from "@/app/images/gallery/1.webp";
import GalleryImg2 from "@/app/images/gallery/2.webp";
import GalleryImg3 from "@/app/images/gallery/3.webp";
import GalleryImg4 from "@/app/images/gallery/4.webp";
import GalleryImg5 from "@/app/images/gallery/5.webp";
import GalleryImg6 from "@/app/images/gallery/6.webp";
import Aos from "aos";
import "aos/dist/aos.css";

Aos.init();

const Gallery = () => {
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
                placeholder={"blur"}
                quality={100}
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={GalleryImg3}
              />
            </div>
            <div
              className="md:p-2 p-1 w-1/2"
              data-aos="fade-down"
              data-aos-duration="600"
            >
              <Image
                placeholder={"blur"}
                quality={100}
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={GalleryImg2}
              />
            </div>
            <div
              className="md:p-2 p-1 w-full"
              data-aos="fade-right"
              data-aos-duration="600"
            >
              <Image
                placeholder={"blur"}
                quality={100}
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src={GalleryImg1}
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
                placeholder={"blur"}
                quality={100}
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src={GalleryImg6}
              />
            </div>
            <div
              className="md:p-2 p-1 w-1/2"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <Image
                placeholder={"blur"}
                quality={100}
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={GalleryImg5}
              />
            </div>
            <div
              className="md:p-2 p-1 w-1/2"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <Image
                placeholder={"blur"}
                quality={100}
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={GalleryImg4}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
