import React from "react";
import ProgressBar from "../Side Components/ProgressBar";
import CourseCard from "../Side Components/CourseCard";
import { useNavigate } from "react-router-dom";
import que1 from "../assets/que1.png";
import que2 from "../assets/que2.png";
import que3 from "../assets/que3.png"
import que4 from "../assets/que4.png"
function FourthQ() {
  const navigate = useNavigate();
  const next = () => {
    navigate("/fifth");
  };

  const items = [
    que1,que2,que3,que4
  ];
  return (
    <div>
      <ProgressBar portion ={5} />
      <div>
        <div className="font-sans text-2xl font bold text-center mb-4">
          What is your math comfort level?
        </div>
        <div className="text-sm font-light text-center align-baseline">
          Choose the highest level you feel confident in - you can always adjust
          later.
        </div>
      </div>
      <div className="flex justify-center">
        {items.map((item, index) => (
          <CourseCard key={index} image={item} />
        ))}
      </div>
      <div className="flex justify-center items-center">
        <button
          onClick={next}
          className="bg-black text-white font-sans font-light py-2 px-4 w-1/6 rounded"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default FourthQ;
