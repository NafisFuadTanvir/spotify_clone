import { useNavigate } from "react-router-dom";

const Albumitem = ({data}) => {

    const {image,name,desc,id}= data

    const navigate= useNavigate()
    return (
        <div onClick={()=>(navigate(`/album/${id}`))} className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]">
            <img className="rounded" src={image} alt="" />
            <p className="font-bold mt-2 mb-1">{name}</p>
            <p className="text-slate-200 text-sm">{desc}</p>
        </div>
    );
};

export default Albumitem;