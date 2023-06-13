import React from "react";

const Member = (props) => {
  return (
    <div className="text-center bg-indigo-900/70 flex p-2 gap-2 rounded-xl m-2">
      <img src={props.img} className="mb-2 w-20 h-20 rounded-full shadow-lg " />
      <h5 className="mb-2 self-center">{props.name}</h5>
    </div>
  );
};

export default Member;
