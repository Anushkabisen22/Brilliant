import React from "react";
import Options from "../Side Components/Options";
import ProgressBar from "../Side Components/ProgressBar";
import { useNavigate } from 'react-router-dom';
import Student from "../assets/Student.png";
import Professional from "../assets/Professional.png";
import Parent from "../assets/Parent.png"
import Lifelong from "../assets/Lifelong Learner.png"
import Teacher from "../assets/Teacher.png"
import Other from "../assets/Other.png"
const FirstQ = () => {
  const navigate = useNavigate();
  const next = () => {
    navigate('/second');
  };
  const questions = [{type:"Student or soon to be enrolled" , img:Student}
    ,{type:"Professional pursuing a career",img:Professional}
    ,{type:"Parent of a school-age child",img:Parent}
    ,{type:"Lifelong learner",img:Lifelong}
    ,{type:"Teacher",img:Teacher}
    ,{type:"Other",img:Other}
  ];
  return (
    <div >
      <ProgressBar portion={1} />
      <div>
        <div className="font-sans text-2xl font bold text-center mb-4">
          Which describes you best ?
        </div>
        <div className="text-sm font-light text-center align-baseline">
          This will help us personalise your experience.
        </div>
      </div>
      <div className="flex flex-col justify-center items-center h-screen">
        {questions.map((item, index) => (
          <Options key={index} question={item.type} image={item.img}/>
        ))}
       
        <button onClick={next}  className="bg-slate-500 text-white font-sans font-light py-2 px-4 w-1/6 rounded opacity-50">
          Continue
          </button>
      </div>
    </div>
  );
};

export default FirstQ;
