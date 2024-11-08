import form from "../assets/icons/stat-el.svg"
import gapEl from "../assets/icons/el-gap.svg"
import el from "../assets/icons/el.svg"

import kill from "../assets/icons/kill.svg"
import supp from "../assets/icons/supp.svg"
import death from "../assets/icons/death.svg"

const Statistics = () => {
  return (
    <div className='absolute flex gap-[3px] ml-[8px] max-w-full'>
      <div 
        style={{
          backgroundImage: `url(${form})`
        }} 
        className="bg-cover bg-center flex justify-center items-center  w-[33px] h-[21px]"
      >
        <div className="flex gap-[2px]">
          <img src={kill} alt="kills" />
          <span className="text-[8px] mt-[0.5px] text-shadow-default leading-none shadow-main/15">25</span>
        </div>
      </div>
      <div 
        style={{
          backgroundImage: `url(${form})`
        }} 
        className="bg-cover bg-center flex justify-center items-center  w-[33px] h-[21px]"
      >
        <div className="flex gap-[2px]">
          <img src={death} alt="death" />
          <span className="text-[8px] mt-[0.5px] text-shadow-default leading-none shadow-main/15">47</span>
        </div>
      </div>
      <div 
        style={{
          backgroundImage: `url(${form})`,
        }}
        className="bg-cover bg-center flex justify-center items-center  w-[33px] h-[21px]"
      >
        <div className="flex gap-[2px]">
          <img src={supp} alt="supp" />
          <span className="text-[8px] mt-[0.5px] text-shadow-default leading-none shadow-main/15">42</span>
        </div>
      </div>

      <img className="absolute -top-[1px] left-[29px]" src={gapEl} alt="" />
      <img className="absolute -top-[1px] left-[65px]" src={gapEl} alt="" />

      <img className="stat-el el-lt" src={el} alt="" />
      <img className="stat-el el-lb" src={el} alt="" />
      <img className="stat-el el-rt" src={el} alt="" />
      <img className="stat-el el-rb" src={el} alt="" />
    </div>
  )
}

export default Statistics
