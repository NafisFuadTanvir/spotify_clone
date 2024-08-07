import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
const Sidebar = () => {
  return (
    <div className="w-[25%] h-full p-2  flex-col gap-2 text-white hidden  lg:flex">
      <div className="bg-[#121212] h-[15%] flex flex-col justify-around rounded">
        <Link to="/"><div  className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-6" src={assets.home_icon} alt="" />
          <p className="font-bold">Home</p>
        </div></Link>
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-6" src={assets.search_icon} alt="" />
          <p className="font-bold">search</p>
        </div>
      </div>

      <div className="bg-[#121212] h-[85%] rounded">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img className="w-8" src={assets.stack_icon} alt="" />
            <p className="font-semibold">Your Library</p>
          </div>
          <div className="flex items-center gap-3">
            <img className="w-6" src={assets.arrow_icon} alt="" />
            <img className="w-6" src={assets.plus_icon} alt="" />
          </div>
        </div>

        <div className="p-4 bg-[#242424] flex flex-col items-start justify-start gap-1 m-2 rounded font-semibold pl-4">
          <h1>Create your first playlist</h1>
          <p className="font-light"> it's easy we will help you</p>
          <button className="px-4 py-1.5 bg-white rounded-full text-black mt-5 text-[15px] ">
            Create PlayList
          </button>
        </div>
        <div className="p-4 bg-[#242424] flex flex-col items-start justify-start gap-1 m-2 rounded font-semibold pl-4">
          <h1>Let's find some podcasts to follow</h1>
          <p className="font-light"> we will keep you update on new episode</p>
          <button className="px-4 py-1.5 bg-white rounded-full text-black mt-5 text-[15px] ">
           Browse podcasts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
