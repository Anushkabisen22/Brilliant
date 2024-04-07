import React from "react";
import ProgressBar from "../Side Components/ProgressBar";
import { useNavigate } from "react-router-dom";
import image from "../assets/img.png"
const FifthQ = () => {
  const navigate = useNavigate();
  const next = () => {
    navigate("/sixth");
  };
  return (
    <div>
      <ProgressBar  />
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="flex w-5/6 mt-4 mb-10">
          <div className="basis-1/2">
            <img src={image} alt="" class="w-33 h-33"></img>
          </div>
          <div className="font-sans basis-1/2">
            <div className="text-2xl w-4/6 mb-4 tracking-wide">
              You're on your way!
            </div>
            <div className="flex">
              <svg
                class="w-6 h-6 text-yellow-500 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 1L12.46 6.54L18 7.27L14 11.23L15.64 17L10 14.36L4.36 17L6 11.23L2 7.27L7.54 6.54L10 1Z" />
              </svg>

              <svg
                class="w-6 h-6 text-yellow-500 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 1L12.46 6.54L18 7.27L14 11.23L15.64 17L10 14.36L4.36 17L6 11.23L2 7.27L7.54 6.54L10 1Z" />
              </svg>

              <svg
                class="w-6 h-6 text-yellow-500 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 1L12.46 6.54L18 7.27L14 11.23L15.64 17L10 14.36L4.36 17L6 11.23L2 7.27L7.54 6.54L10 1Z" />
              </svg>

              <svg
                class="w-6 h-6 text-yellow-500 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 1L12.46 6.54L18 7.27L14 11.23L15.64 17L10 14.36L4.36 17L6 11.23L2 7.27L7.54 6.54L10 1Z" />
              </svg>

              <svg
                class="w-6 h-6 text-yellow-500 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 1L12.46 6.54L18 7.27L14 11.23L15.64 17L10 14.36L4.36 17L6 11.23L2 7.27L7.54 6.54L10 1Z" />
              </svg>
            </div>
            <div className="text-base tracking-wide">
              "Through its engaging and well structured courses, Brilliant has
              taught me mathematical concepts that I previously struggled to
              understand. I now feel confident approaching both technical job
              interviews and real world problem solving situation."
            </div>
            <div className="mt-3">- Jacob S.</div>
          </div>
        </div>
        <button onClick={next} className="bg-black text-white font-sans font-light py-2 px-4 w-1/6 rounded ">
          Continue
        </button>
      </div>
    </div>
  );
};

export default FifthQ;
