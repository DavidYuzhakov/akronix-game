import PersonalInfo from "./components/PersonalInfo"
import stick from "./assets/img/stick.png"
import map from "./assets/img/map.png"
import aim from "./assets/icons/aim.svg"
import Statistics from "./components/Statistics"
import NavBar from "./components/NavBar"
import Compas from "./components/Compas"
import Weapons from "./components/Weapons"
import Enemy from "./components/Enemy"

function App() {
  return (
    <div className="wrapper">
      <div className="bg-main">
        <PersonalInfo />
        <img className="absolute left-5 bottom-5" width={110} src={stick} alt="stick" />
        <div className="absolute top-1 left-0">
          <img src={map} width={120} alt="map" />
          <Statistics />
        </div>
        <img className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src={aim} alt="aim" />
        <Compas />
        <NavBar />
        <Weapons />
        <Enemy />
      </div>
    </div>
  )
}

export default App
