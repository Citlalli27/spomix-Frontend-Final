import React from "react";
import { useNavigate } from "react-router-dom";

const Group = (props) => {
  let navigate = useNavigate();

  return (
    <div className="bg-white/10 text-gray-300 group-hover:scale-[0.85] hover:!scale-100 duration-200 md:w-1/4 sm:w-1/4 w-100 p-8 rounded-xl cursor-pointer ">
      <h4 className="uppercase text-xl font-semibold">
        {props.name}
      </h4>
      <p className="mt-4 text-gray-300	 ">Group Id</p>
      <p className="mt-1 text-xs ¿ ">{props.id}</p>
      <p className="mb-4 mt-4">Members</p>
      {props.members != null ? (
        props.members.map((member) => (
          <div className="flex align-middle mb-4">
            <img
              src={member.images[0].url}
              className="w-6 h-6 mr-2 align-middle rounded-full rounded-full shadow-lg "
            />
            <p className=" font-normal   ">
              {member.display_name}
            </p>
          </div>
        ))
      ) : (
        <p className="mb-3 font-normal  ">Loading...</p>
      )}

      <button 
        className="py-2.5 px-8 rounded-xl flex justify-center items-center mx-auto bg-indigo-900 text-white hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-white"
        onClick={() => navigate("/createGroup?id=" + props.id)}
        href="#"
        
      >
       Details
        
      </button>
    </div>
  );
};

export default Group;
