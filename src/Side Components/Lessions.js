import React from "react";
import course from "../assets/course.png";
function Lessions() {
  return (
    <div>
      <button className="flex border rounded-md border-stone-800 w-3/4">
        <div className="m-4 mt-6">
          <p className="font-sans text-xl font-medium text-left">Foundational Maths</p>
          <div className="font-light text-left">
            Build your foundational skills in algebra, geometry and probablity.
          </div>
        </div>
        <div>
          <img src={course} alt="" className="w-30 h-30"></img>
        </div>
      </button>
    </div>
  );
}

export default Lessions;
