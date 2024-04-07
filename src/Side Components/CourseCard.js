import React from "react";

const CourseCard = (props) => {
    console.log(props.image);
    return (
        <div className="mx-4 my-8">
            <button>
                <img src={props.image} className="h-33 w-33"></img>
            </button>
      </div>
    );
};

export default CourseCard;
