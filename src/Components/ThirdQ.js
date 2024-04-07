import React from "react";
import ProgressBar from "../Side Components/ProgressBar";
import { useNavigate } from "react-router-dom";
import weight from "../assets/weight.png"
const ThirdQ = () => {
  const navigate = useNavigate();
  const next = () => {
    navigate('/fourth');
  };
  return (
    <div>
      <ProgressBar portion={4} />
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="grid grid-col-3 grid-rows-3 w-5/6 gap-x-8">
          <div className="row-span-3">
            <img src={weight} alt="" class="w-32 h-32"></img>
          </div>
          <div className="font-sans col-start-3">
            <div className="text-2xl w-4/6 mb-4 tracking-wide">
              Learning on Brilliant is effective and fun.
            </div>
            <div className="text-base tracking-wide">
              You’ll interact with concepts and solve fun problems in math,
              science, and computer science. Brilliant helps you train your
              critical thinking and creative problem solving skills.
            </div>
          </div>
        </div>
        <button onClick={next} className="bg-black text-white font-sans font-light py-2 px-4 w-1/6 rounded ">
          Continue
        </button>
      </div>
    </div>
  );
};

export default ThirdQ;
