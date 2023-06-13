import React from "react";
import NavbarHome from "./NavbarHome";
import GroupsContainer from "./GroupsContainer";
import Group from "./Group";

const Home = () => {
  return (
    <div className="bg-[#2d2965]  text-black  w-full">
      <NavbarHome/>
      <GroupsContainer />
    </div>
  );
};

export default Home;
