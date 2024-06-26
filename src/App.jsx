import Player from "./components/Player"
import Sidebar from "./components/Sidebar"

function App() {
 

  return (
    <div className="h-screen bg-black ">

      <div className="h-[90%] flex">
        <Sidebar></Sidebar>
      </div>

      
      <Player></Player>
      
     
    </div>
  )
}

export default App
