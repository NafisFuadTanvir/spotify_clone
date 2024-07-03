import Navbar from "./Navbar";
import { albumsData } from "../assets/assets";
import Albumitem from "./Albumitem";
import {songsData} from '../assets/assets';
import Songitem from "./Songitem";

const Displayhome = () => {
    return (
        <div>

            <Navbar></Navbar>

            <div className="mb-4">
                <h1 className="my-5 font-bold text-2xl">Featured charts</h1>

                <div className="flex overflow-auto">
                {
                albumsData.map((data)=> <Albumitem key={data.id} data={data}></Albumitem>)
              }

                </div>

              
            </div>
            <div className="mb-4">
                <h1 className="my-5 font-bold text-2xl">Todays Hits</h1>

                <div className="flex overflow-auto">
                {
                songsData.map((songs)=><Songitem key={songs.id} songs={songs}></Songitem>)
              }

                </div>

              
            </div>
            
        </div>
    );
};

export default Displayhome;