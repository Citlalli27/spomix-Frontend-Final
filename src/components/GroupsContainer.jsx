import React, { useEffect, useState } from "react";
import Group from "./Group";
import { IoIosAddCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import dataGroup from "../groups.json";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";

const GroupsContainer = () => {
  const [myGroups, setMyGroups] = useState();
  useEffect(() => {
    getMyGroups();
  }, []);

  const getMyGroups = () => {
    let config = {
      headers: {
        AT: localStorage.getItem("AT"),
        UI: localStorage.getItem("UI"),
      },
    };
    axios
      .get(process.env.REACT_APP_SERVER_URI + "/groups/mine", config)
      .then((response) => {
        console.log(response.data);
        setMyGroups(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  let navigate = useNavigate();

  const [groupIdJoin, setGroupIdJoin] = useState("");

  const handleIdChange = (event) => {
    setGroupIdJoin(event.target.value);
  };

  const createGroup = () => {
    let config = {
      headers: {
        AT: localStorage.getItem("AT"),
        UI: localStorage.getItem("UI"),
      },
    };
    axios
      .get(process.env.REACT_APP_SERVER_URI + "/groups/create", config)
      .then((response) => {
        console.log(response.data);
        const groupId = response.data;
        toast.success("👌 Group created successfully!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "dark",
        });
        setTimeout(() => {
          navigate("/createGroup?id=" + groupId);
        }, 2500);
      })
      .catch((error) => {
        toast.error("😕 Ups, something went wrong. Please try again.", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "dark",
        });
        console.log(error);
      });
  };

  const joinGroup = () => {
    let config = {
      headers: {
        AT: localStorage.getItem("AT"),
        UI: localStorage.getItem("UI"),
      },
    };
    axios
      .get(
        process.env.REACT_APP_SERVER_URI + "/groups/join?id=" + groupIdJoin,
        config
      )
      .then((response) => {
        console.log(response.data);
        const groupId = response.data;
        toast.success("🙌 Now you're part of the group!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "dark",
        });
        setTimeout(() => {
          navigate("/createGroup?id=" + groupIdJoin);
        }, 2500);
      })
      .catch((error) => {
        toast.error("😕 Ups, something went wrong. Please try again.", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "dark",
        });
        console.log(error.response.status, error.response.data);
      });
  };
  return (
    <div className="bg-[#2d2965]">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover={false}
        theme="dark"
      />
      <div className="bg-rose-500">
        <h1 className="text-white font-bold md:text-7xl sm:text-6xl text-5xl py-16 px-32 md:text-left text-center">
          MY GROUPS
        </h1>
      </div>
      <div className="place-content-center flex flex-wrap p-3 gap-5 text-white m-8">
        <p className="mt-1">Click if you want to create a new group</p>
        <button
          className="bg-red-500 px-4 py-2 rounded-md w-36 "
          onClick={() => createGroup()}
        >
          {" "}
          Create Group
        </button>
        <p className="mt-1">Or join to a group pasting the group id</p>
        <div className="flex gap-4">
          <input
            value={groupIdJoin}
            className="text-black bg-gray-100 rounded "
            onChange={handleIdChange}
          />
          <button
            className="bg-red-500 px-4 py-2 rounded-md w-36  "
            onClick={() => joinGroup()}
          >
            {" "}
            Join Group
          </button>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex flex-wrap sm:flex-wrap  justify-center gap-10 group mb-12">
          {myGroups != null ? (
            myGroups.map((group) => (
              <Group
                name={group.name}
                genre={group.genre}
                members={group.profiles}
                id={group.id}
              />
            ))
          ) : (
            <p className="text-white animate-ping">Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default GroupsContainer;
