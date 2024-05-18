"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Spinner from "@/components/others/Spinner";
import HotelCard from "@/components/home/HotelCard";

interface Hotel {
  id: number;
  name: string;
  location: string;
  description: string;
  price: number;
  rating: number;
  images: string[];
  amenities: string[];
  view: string;
  size: string;
  bed_type: string;
  categories: string;
}
const Hotels = () => {
  const [hotels, setHotels] = useState<Hotel[]>([]);

  useEffect(() => {
    fetch("/hotels.json")
      .then((res) => res.json())
      .then((data: Hotel[]) => setHotels(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // if (!hotels?.length) {
  //   return <Spinner />;
  // }

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-green-500 tracking-widest font-medium title-font mb-1">
            ROOF PARTY POLAROID
          </h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Master Cleanse Reliac Heirloom
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            havent heard of them man bun deep jianbing selfies heirloom prism
            food truck ugh squid celiac humblebrag.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {hotels?.slice(0,5)?.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
        </div>

        <div className="flex justify-center mt-8">
        <Link href="/hotels" className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">See more</Link>
        </div>
      </div>
    </section>
  );
};

export default Hotels;
