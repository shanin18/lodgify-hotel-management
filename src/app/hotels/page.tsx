"use client";

import HotelCard from "@/components/home/HotelCard";
import { useEffect, useState } from "react";


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

const HotelsPage = () => {
  const [hotels, setHotels] = useState<Hotel[]>([]);

  useEffect(() => {
    fetch("/hotels.json")
      .then((res) => res.json())
      .then((data: Hotel[]) => setHotels(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  
  if(!hotels){
    return <p>Loading</p>
  }

  return (
    <section className="container px-5 pt-12 pb-24 mx-auto">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-12 text-gray-900">
        Choose your best hotels!
      </h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {hotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </section>
  );
};

export default HotelsPage;
