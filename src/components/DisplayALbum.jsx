import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { albumsData, assets,songsData } from "../assets/assets";
import { useContext } from "react";
import { PlayersContext } from "../context/PlayerContextProvider";

const DisplayALbum = () => {
  const { id } = useParams();
  const albumdata = albumsData[id];
  const {playWithId}= useContext(PlayersContext)

  return (
    <div>
      <Navbar></Navbar>
      <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end">
        <img className="w-48 rounded" src={albumdata.image} alt="" />
        <div className="flex flex-col">
          <p>Playlist</p>
          <h2 className="text-5xl font-bold mb-4 md:text-7xl">
            {albumdata.name}
          </h2>
          <h4>{albumdata.desc}</h4>
          <p className="mt-1 flex gap-3">
            <img
              className="inline-block w-5"
              src={assets.spotify_logo}
              alt=""
            />
            <b>Spotify</b>. 124,5452 likes . <b>50 songs,</b>
            about 3 hour ago
          </p>
        </div>
      </div>
   
        <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
            <p > <b className="mr-4">#</b> Title</p>
            <p>Album</p>
            <p className="hidden sm:block">Date Added</p>
            <img className="m-auto w-4" src={assets.clock_icon} alt="" />

        </div>
        <hr />

        {
          songsData.map((data)=>(
            <div onClick={()=>playWithId(data.id)} key={data.id} className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer">
             
             <p className="text-white">

              <b className="mr-4 text-[#a7a7a7]">{data.id+1}</b>
              <img className="inline w-10 mr-5" src={data.image} alt="" />
              {data.name}

             </p>
             <p className="text-[15px]">{albumdata.name}</p>
             <p className="text-[15px] hidden sm:block">5 days ago</p>
             <p className="text-[15px] text-center">{data.duration}</p>


            </div>
          ))

        }




    </div>
  );
};

export default DisplayALbum;
