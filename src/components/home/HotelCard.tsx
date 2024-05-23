"use client";
import Aos from "aos";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import Rating from "../Rating";

interface Hotel {
  id: number;
  name: string;
  location: string;
  description: string;
  price: number;
  rating: number;
  images: string[];
}

interface HotelCardProps {
  hotel: Hotel;
}

const HotelCard: React.FC<HotelCardProps> = ({ hotel }) => {
  const [seeMore, setSeeMore] = useState(false);

  useEffect(() => {
    if (typeof window !== undefined) Aos.init();

    return () => {
      Aos.refreshHard();
    };
  }, []);

  const { id, name, location, description, price, rating, images } = hotel;

  return (
    <div
      className="border rounded-lg overflow-hidden h-fit flex flex-col justify-between"
      data-aos="fade-up"
      data-aos-duration="600"
    >
      <Image
        quality={100}
        src={images[0]}
        alt={name}
        width={400}
        height={300}
        className="lg:h-64 md:h-48 w-full object-cover object-center"
      />
      <div className="p-6 flex flex-col justify-between">
        <div className="">
          <h1 className="title-font text-lg sm:text-xl font-medium text-gray-900 mb-3">
            {name}
          </h1>
          <div className="flex items-center gap-2 mb-3">
            <IoLocationOutline className="text-lg" /> {location}
          </div>
          <p className="leading-relaxed mb-3 font-medium">
            Price Starts at: {price}
          </p>
          <div>
            {description?.length > 100 ? (
              <p className="leading-relaxed mb-3">
                {!seeMore ? description.slice(0, 120) : description}
                <button
                  onClick={() => setSeeMore(!seeMore)}
                  className="text-sm"
                >
                  {!seeMore ? "...See more" : "...See less"}
                </button>
              </p>
            ) : (
              <p>{description}</p>
            )}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between">
          <Link
            href={`/hotels/details/${id}`}
            className="text-green-500 inline-flex items-center md:mb-2 lg:mb-0 hover:space-x-2"
          >
            <span>Book Now</span>
            <AiOutlineArrowRight className="ml-1" />
          </Link>
          <div className="text-gray-400 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm py-1">
            <Rating value={rating} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
