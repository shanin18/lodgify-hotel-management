import React from "react";
import Lottie from "lottie-react";
import animation from "@/public/spinner.json";

interface SpinnerProps {
  width?: number;
}
const Spinner: React.FC<SpinnerProps> = (width) => {
  return (
    <div className="min-h-[calc(100vh-452px)] flex items-center justify-center">
      <div className={"w-32" || `w-${width}`}>
        <Lottie animationData={animation} />
      </div>
    </div>
  );
};

export default Spinner;
