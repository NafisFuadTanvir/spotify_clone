import {assets} from "../assets/assets"
const Navbar = () => {
    return (
        <div>

            <div className="w-full flex items-center justify-between font-semibold">
                <div className="flex items-center gap-2">
                    <img className="w-8 rounded-2xl bg-black p-2 cursor-pointer" src={assets.arrow_left} alt="" />
                    <img className="w-8 rounded-2xl bg-black p-2 cursor-pointer" src={assets.arrow_right} alt="" />

                </div>
                <div className="flex items-center gap-4">
                    <p className="bg-white text-black text[15px] px-4 py-1  rounded-2xl hidden md:block cursor-pointer">Explore premium</p>
                    <p className="bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer"> install app</p>
                    <p className="bg-purple-600 rounded-full text-white w-7 h-7 flex items-center justify-center">N</p>
                 </div>
                 
                </div>
                <div className="flex items-center gap-2 mt-4">
                    <p className="bg-white text-black rounded-2xl px-4 py-1 cursor-pointer">All</p>
                    <p className="bg-black rounded-2xl px-4 py-1 cursor-pointer">Music</p>
                    <p className="bg-black rounded-2xl px-4 py-1 cursor-pointer">podcast</p>

                </div>
            
        </div>
    );
};

export default Navbar;