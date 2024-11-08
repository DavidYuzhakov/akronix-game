import Blaster from "./Blaster"
import first from "../assets/icons/1.svg"
import second from "../assets/icons/2.svg"
import third from "../assets/icons/3.svg"
import main from "../assets/icons/4.svg"
import mainBtn from "../assets/icons/main-btn-form.png"

const Weapons = () => {
  return (
    <div className="absolute max-w-[168px] w-full h-[195px] bottom-[15px] right-[13px]">
      <Blaster img={first} styles={{
        top: '0',
        right: '20px'
      }} />
      <Blaster img={second} styles={{
        top: '45px',
        left: '0',
      }} />
      <Blaster img={third} styles={{
        bottom: '0',
        left: '0'
      }} />
      <button 
        style={{
          backgroundImage: `url(${mainBtn})`
        }}
        className="absolute bottom-[30px] right-0 w-[94px] h-[94px] bg-cover bg-center active:scale-95 duration-200"
      >
        <img className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src={main} alt="" />
      </button>
    </div>
  )
}

export default Weapons
