import { useContext } from "react"
import Display from "./components/Display"
import Player from "./components/Player"
import Sidebar from "./components/Sidebar"
import { PlayersContext } from "./context/PlayerContextProvider"

function App() {

  const{audioRef,track}= useContext(PlayersContext)
 

  return (
    <div className="h-screen bg-black ">

      <div className="h-[90%] flex">
        <Sidebar></Sidebar>
        <Display></Display>
      </div>

      
      <Player></Player>
      <audio src={track.file} ref={audioRef} preload="auto"></audio>
      
     
    </div>
  )
}

export default App
