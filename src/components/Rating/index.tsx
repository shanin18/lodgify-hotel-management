"use client";
import { Fragment, memo } from "react";
import { AiFillStar } from "react-icons/ai";

type TRating = {
  value?: number;
  emptySymbol?: JSX.Element;
  fullSymbol?: JSX.Element;
  className?: string;
  maxRating?: number;
};

const Rating = ({
  value = 0,
  maxRating = 5,
  emptySymbol = <AiFillStar className="icon" color="#ddd" />,
  fullSymbol = <AiFillStar className="icon" color="#f8c41a" />,
  className = "",
}: TRating) => {
  return (
    <div className={`flex items-center ${className}`}>
      {[...Array(maxRating)].map((star, index) => {
        const currentRating = index + 1;

        return (
          <Fragment key={index}>
            {currentRating <= value ? fullSymbol : emptySymbol}
          </Fragment>
        );
      })}
    </div>
  );
};

export default memo(Rating);
