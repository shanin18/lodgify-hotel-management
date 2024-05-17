"use client";

import React, { useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Spinner from "../others/Spinner";

interface Testimonial {
  id: number;
  user: string;
  comment: string;
  date: string;
  rating: number;
  image?: string;
}

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    fetch("./reviews.json")
      .then((res) => res.json())
      .then((data: Testimonial[]) => setTestimonials(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!testimonials.length) {
    return <Spinner width={20} />;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">
          Testimonials
        </h1>
        <Slider {...settings}>
          {testimonials.map((item) => (
            <TestimonialCard key={item?.id} data={item} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
