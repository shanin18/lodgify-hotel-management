import Lottie from "lottie-react";
import animation from "@/assets/spinner.json";

const Spinner = () => {
  return (
    <div className={"w-32"}>
      <Lottie animationData={animation} />
    </div>
  );
};

export default Spinner;
