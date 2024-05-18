"use client"

import { useState } from "react";
import Image from "next/image";
import Rating from "../Rating";

interface Testimonial {
  user: string;
  rating: number;
  image?: string;
  comment: string;
  date: string;
}

interface TestimonialCardProps {
  data: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ data }) => {
  const [seeMore, setSeeMore] = useState(false);

  const { user, rating, image, comment, date } = data;

  return (
    <section className="bg-gray-100 rounded-md p-5 md:p-8 mb-4 md:mx-2">
      <div className="flex items-center justify-between mb-5 gap-5">
        <div className="flex items-center justify-between gap-5">
          <div>
            {image ? (
              <Image
                src={image}
                alt="profile_img"
                className="rounded-full"
                width={60}
                height={60}
              />
            ) : (
              <div className="skeleton w-16 h-16 bg-grey-600 rounded-full"></div>
            )}
          </div>
          <div>
            <h5 className="font-medium text-lg">{user}</h5>
            <div>
              {/* <Rating
                readonly
                initialRating={rating}
                emptySymbol={<AiFillStar className="icon" color="#ddd" />}
                fullSymbol={<AiFillStar className="icon" color="#f8c41a" />}
              /> */}
              <Rating value={rating} />
            </div>
          </div>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="block w-6 h-6 text-gray-400 mb-4"
            viewBox="0 0 975.036 975.036"
          >
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
        </div>
      </div>
      <div>
        {comment?.length > 50 ? (
          <p className="leading-relaxed mb-3">
            {!seeMore ? comment.slice(0, 120) : comment}
            <button onClick={() => setSeeMore(!seeMore)} className="text-sm">
              {!seeMore ? "...See more" : "...See less"}
            </button>
          </p>
        ) : (
          <p>{comment}</p>
        )}

        <p className="text-sm text-right">Date: {date}</p>
      </div>
    </section>
  );
};

export default TestimonialCard;
