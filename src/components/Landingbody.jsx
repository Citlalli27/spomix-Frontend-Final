import React from "react";
import Typed from "react-typed";
import { useNavigate } from "react-router-dom";

const Landingbody = () => {
  const navigate = useNavigate();

  return (
    <div className="text-white ">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-rose-500 font-bold p-2 text-xl">
          CREATE SHARE PLAYLISTS
        </p>
        <h2 className="md:text-6xl sm:text-5xl text-4xl font-bold md:py-6">
          MIX WITH SPOMIX
        </h2>
        <div className="flex justify-center items-center">
          <p className="md:text-3xl sm:text-2xl text-1xl font-bold">It is</p>
          <Typed
            className="md:text-3xl sm:text-2xl text-1xl font-bold md:pl-4 pl-2"
            strings={["fast", "easy", "funny"]}
            typeSpeed={150}
            backSpeed={150}
            loop
          />

          <p className="md:text-3xl sm:text-2xl text-1xl font-bold text-[#2d2965]">
            {" "}
            s{" "}
          </p>
          <p className="md:text-3xl sm:text-2xl text-1xl font-bold"> to use.</p>
        </div>
        <p className="md:text-2xl text-1xl font-bold text-gray-400">
          Log in with your Spotify account
        </p>
        <a href={process.env.REACT_APP_SERVER_URI + "/login"}>
          <button className="bg-rose-500 w-[200px] rounded-md font-medium my-6 mx-auto py-3">
            Log In
          </button>
        </a>
      </div>
    </div>
  );
};

export default Landingbody;
