import { Routes,Route } from "react-router-dom";
import Displayhome from "./Displayhome";

const Display = () => {
    return (
        <div className="w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0">
            <Routes>

                <Route path="/" element={<Displayhome></Displayhome>}></Route>
            </Routes>
            
        </div>
    );
};

export default Display;