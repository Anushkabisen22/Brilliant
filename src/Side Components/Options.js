import React from 'react'
const Options = (props) => {
  // console.log(props.image);
  return (
    <button className="flex border border-slate-400 hover:border-orange-300 rounded-md w-2/5 min-h-10 m-4">
      <div className="mx-6 inline-block align-middle ">
        <img src={props.image} className='h-10 w-10' alt="" />
      </div>
      <div className="text font-sans mt-1">
        <p>{props.question}</p>
      </div>
    </button>
  )
}

export default Options;