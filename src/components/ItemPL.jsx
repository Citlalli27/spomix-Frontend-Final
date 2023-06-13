import React from "react";

const ItemPL = (props) => {
  return (
    <div className=" flex bg-indigo-900/70 ml-8 mr-8 mt-3 mb-3">
      <img src={props.img} className=" w-20 shadow-lg " />
      <div className="flex flex-col justify-start p-2">
        <h5 className="mb-2 font-bold"> {props.name}</h5>
        <h5 className="mb-2 ">{props.artist}</h5>
      </div>
    </div>
  );
};

export default ItemPL;
