import React from "react";
import Options from "../Side Components/Options";
import ProgressBar from "../Side Components/ProgressBar";
import { useNavigate } from "react-router-dom";
import GraphImage from '../assets/Graph.png';
import Globe from '../assets/Globe.png';
import foundation from '../assets/foundation.png';
import Arrow from '../assets/Arrow.png';
import Eyes from '../assets/Eyes.png';
const SecondQ = () => {
  const navigate = useNavigate();
  const next = () => {
    navigate('/third');
  };
  
  const items=[{type:"Learning specific skills to advance my career" , img:GraphImage}
    ,{type:"Exploring new topics I'am interested in",img:Globe}
    ,{type:"Refreshing my math foundations",img:foundation}
    ,{type:"Exercising my brain to stay sharp",img:Arrow}
    ,{type:"Something sharp",img:Eyes}
  ];
  return (
    <div>
      <div>
        <ProgressBar portion={2} />
      </div>
      <div>
        <div className="font-sans text-2xl font bold text-center mb-4">
          Whick are you most interested in?
        </div>
        <div className="text-sm font-light text-center align-baseline">
          Choose just one. This will help us get you started(but won't limit
          your experience.)
        </div>
      </div>
      <div className="flex flex-col justify-center items-center h-screen">
        {items.map((item, index) => (
          <Options key={index} question={item.type} image={item.img} />
        ))}
        <button onClick={next} className="bg-black text-white font-sans font-light py-2 px-4 w-1/6 rounded">
          Continue
        </button>
      </div>
    </div>
  );
};

export default SecondQ;
