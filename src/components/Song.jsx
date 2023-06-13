import React from "react";

const Song = (props) => {
  return (
    <div className="overflow-hidden  group w-1/4 flex flex-col items-center justify-center">
      <img
        src={props.imagen}
        alt=""
        className="transition-transform group-hover:scale-150 duration-200 "
      />
      <div>
        <h1 className="text-center name font-bold">{props.song}</h1>
        <h1 className="text-center name">{props.artist}</h1>
      </div>
    </div>
  );
};

export default Song;
