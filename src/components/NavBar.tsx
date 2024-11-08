import menu from "../assets/icons/menu.png"
import chat from "../assets/icons/chat.png"

const NavBar = () => {
  return (
    <div className='absolute flex flex-col items-end top-[10px] right-0'>
      <div className="mb-3 relative cursor-pointer">
        <img width={112} src={menu} alt="menu" />
        <span className="absolute top-[14px] left-5 text-[10px] text-shadow-default shadow-main/15">меню</span>
      </div>
      <img className="cursor-pointer" width={45} src={chat} alt="chat" />
    </div>
  )
}

export default NavBar
