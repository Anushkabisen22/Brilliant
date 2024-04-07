import React from "react";

const ProgressBar = (props) => {
  console.log(props.portion);
  let width = "w-"+ props.portion+"/6" ;
  if (props.portion === 2) {
     width = "w-1/5" ;
  }
  
  const classname = `h-1 bg-green-500 ${width}`;
  return (
    <div className="flex justify-center">
    <div className="h-1 bg-gray-300 my-2 w-5/6">
        <div className={classname} ></div>
    </div>
    </div>
  );
};
export default ProgressBar;
