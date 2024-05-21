"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import Image from "next/image";
import Spinner from "@/components/others/Spinner";
import BookingForm from "@/components/forms/BookingForm";
import ProtectedRoute from "@/components/others/ProtectedRoute";

interface Hotel {
  id: string;
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

const Details = () => {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    fetch("/hotels.json")
      .then((res) => res.json())
      .then((data: Hotel[]) => setHotels(data));
  }, []);

  const hotel: Hotel | undefined = hotels.find((hotel) => hotel.id === id);

  if (!hotel) {
    return <p>Loading...</p>;
  }

  const {
    name,
    location,
    description,
    price,
    rating,
    images,
    amenities,
    view,
    size,
    bed_type,
    categories,
  } = hotel;

  return (
    <ProtectedRoute>
      <section className="container px-5 mx-auto">
        <div className="relative w-full bg-black bg-opacity-65">
          <h2 className="absolute bottom-5 sm:bottom-10 right-5 sm:left-28 text-white font-medium text-2xl sm:text-3xl">
            {name}
          </h2>
          <Image
            quality={100}
            src={images[0]}
            alt="image"
            width={200}
            height={200}
            className="sm:h-[450px] lg:h-[600px] w-full object-fill"
            priority
          />
        </div>
        <div className="text-gray-600 body-font relative">
          <div className="container py-12 mx-auto flex sm:flex-nowrap flex-wrap">
            <div className="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 relative">
              <p>{description}</p>
              <div className="flex flex-wrap items-center gap-5 mt-6">
                {images?.map((image) => (
                  <Image
                    quality={100}
                    key={image}
                    src={image}
                    alt="hotel-image"
                    width={200}
                    height={200}
                    className="w-full md:w-40 md:h-28"
                    priority
                  />
                ))}
              </div>
              <div className="mt-12">
                <h1 className="font-semibold text-2xl pb-6 border-b">
                  Details
                </h1>
                <p className="py-4 border-b">Category: {categories}</p>
                <p className="py-4 border-b flex items-center gap-2">
                  <IoLocationOutline className="text-xl" />
                  {location}
                </p>
                <p className="py-4 border-b">View: {view}</p>
                <p className="py-4 border-b">Size: {size}</p>
                <p className="py-4 border-b">Bed Type: {bed_type}</p>
                <p className="py-4 border-b flex items-center">
                  Rating: {rating}
                </p>
                <p className="py-4 border-b">
                  Amenities:{" "}
                  {amenities?.map((amenity) => (
                    <span key={amenity} className="mr-1">
                      {amenity},
                    </span>
                  ))}
                </p>
                <p className="py-4 border-b">Price: {price}</p>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full mt-8 md:mt-0">
              <h2 className="text-gray-900 text-xl sm:text-3xl mb-1 font-semibold title-font pb-5">
                Book this hotel
              </h2>
              <BookingForm />
            </div>
          </div>
        </div>
      </section>
    </ProtectedRoute>
  );
};

export default Details;
