import React, { useEffect, useState } from "react";
import Navbar from "./NavbarHome";
import MembersContainer from "./MembersContainer";
import ItemPLContainer from "./ItemPLContainer";
import axios from "axios";
import { IoCopyOutline } from "react-icons/io5";
import Member from "./Member";
import ItemPL from "./ItemPL";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateGroup = () => {
  useEffect(() => {
    getGroup();
  }, []);

  const [group, setGroup] = useState();

  const [genre, setGenre] = useState("Hip Hop");

  const [playlistName, setPlaylistName] = useState("");

  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");

  const handleGenreChange = (event) => {
    setGenre(event.target.value);
  };

  const handlePlaylistNameChange = (event) => {
    setPlaylistName(event.target.value);
  };

  const getGroup = () => {
    let config = {
      headers: {
        AT: localStorage.getItem("AT"),
        UI: localStorage.getItem("UI"),
      },
    };
    axios
      .get(process.env.REACT_APP_SERVER_URI + "/groups/group?id=" + id, config)
      .then((response) => {
        console.log("Group", response.data);
        setGroup(response.data);
        setPlaylistName(response.data.name);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const createPlaylist = () => {
    let config = {
      headers: {
        AT: localStorage.getItem("AT"),
        UI: localStorage.getItem("UI"),
      },
    };
    axios
      .get(
        process.env.REACT_APP_SERVER_URI +
          "/groups/recommendations?id=" +
          id +
          "&genre=" +
          genre,
        config
      )
      .then((response) => {
        console.log("Playlist", response.data);
        setGroup({ ...group, playlist: response.data });
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

  const addPlaylist = () => {
    let config = {
      headers: {
        AT: localStorage.getItem("AT"),
        UI: localStorage.getItem("UI"),
      },
    };
    axios
      .get(
        process.env.REACT_APP_SERVER_URI +
          "/groups/add/playlist?groupid=" +
          id +
          "&name=" +
          playlistName,
        config
      )
      .then((response) => {
        toast.success("🤗 Playlist added successfully to Spotify!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "dark",
        });
        console.log("Adding Playlist", response.data);
      })
      .catch((error) => {
        console.log(error);
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
      });
  };
  return (
    <div className="min-h-screen text-white bg-gradient-to-b from-indigo-900 to-rose-500 ">
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
      <Navbar />
      <div className="flex justify-center text-white  ">
        <h1 className="text-w font-bold md:text-7xl sm:text-6xl text-5xl py-16 px-32 md:text-left text-center uppercase">
          {group != null ? <>{group.name}</> : <>Loading</>}
        </h1>
      </div>
      <div className="  bg-indigo-950 rounded-md p-2 m-3 flex items-center justify-center">
        <div className="flex flex-wrap ">
          <div className="m-5">
            <label className="block mb-2 text-sm font-medium text-center ">
              Group Code
            </label>
            <input
              type="text"
              className="bg-gray-300 w-full border border-gray-300 text-gray-900 text-sm rounded-lg  block  p-2.5 cursor-not-allowed "
              placeholder="Group Name"
              value={group != null ? id : "Loading"}
              disabled
            />
          </div>

          <div className="m-5 max-w-full">
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-center "
            >
              Group Name
            </label>
            <input
              type="text"
              className="bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg  block  p-2.5 cursor-not-allowed "
              placeholder="Group Name"
              value={group != null ? group.name : "Loading"}
            />
          </div>

          <div className="m-5">
            <label className="block mb-2 text-sm font-medium text-center ">
              Select a Genre
            </label>

            <select
              value={genre}
              onChange={(e) => handleGenreChange(e)}
              className="bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg  block  p-2.5 "
            >
              <option value="Hip Hop">Hip Hop</option>
              <option value="Rock">Rock</option>
              <option value="Reggaeton">Reggaeton</option>
              <option value="Pop">Pop</option>
            </select>
          </div>
          <div className="m-5">
            <label className="block  text-sm font-medium text-center ">
              Create Playlist
            </label>
            <button
              className="bg-indigo-900 text-white hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-white font-semibold py-2 px-4 mt-3 ml-2 text-sm rounded"
              onClick={() => createPlaylist()}
            >
              Create
            </button>
          </div>
        </div>
      </div>
      <div className=" flex flex-col md:flex-row sm:flex-row gap-1 m-5">
        <div className=" p-2 m-3 rounded-xl bg-indigo-950 md:w-1/3">
          <p className="text-center m-5">Members</p>
          {group != null ? (
            group.profiles.map((profile) => {
              return (
                <Member
                  name={profile.display_name}
                  img={profile.images[0].url}
                />
              );
            })
          ) : (
            <p className="animate-ping">Loading...</p>
          )}
        </div>

        <div className=" bg-indigo-950 rounded-xl p-2 m-3 md:w-full">
          <div className="flex items-center justify-center mt-2 ">
            <input
              value={playlistName}
              onChange={(e) => handlePlaylistNameChange(e)}
              className="bg-gray-300 w-80 border border-gray-300 text-gray-900 text-sm rounded-lg  block  p-2 mr-6 "
            />
            <button
              onClick={() => addPlaylist()}
              className="bg-indigo-900 text-white hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-white font-semibold py-2 px-4  rounded text-sm "
            >
              Add to Spotify
            </button>
          </div>

          {group != null && group.playlist != null ? (
            group.playlist.map((song) => {
              return (
                <ItemPL
                  img={song.img}
                  artist={song.artist}
                  name={song.name}
                  key={song.id}
                />
              );
            })
          ) : (
            <p className="text-center m-4 animate-bounce">
              Create your first playlist!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateGroup;
