import ship from "../assets/img/ship.png"
import bgName from "../assets/icons/bg-name.svg"

const Enemy = () => {
  const name = '@asdfasdfasdfsf'

  return (
    <div className="absolute top-[60px] left-1/2">
      <div className="flex flex-col pl-[8px] mb-[1px] gap-[1px]">
        <div style={{
          backgroundImage: `url(${bgName})`
        }} className="w-[70px] h-[10px] text-white text-[7px] py-[1px] pl-[3px]">
          { name.slice(0, 9) + '...'}
        </div>
        <div className="border-[1px] border-solid border-black/25 bg-black/25 w-[80px] h-[4px] flex gap-[1px]">
          {[...new Array(26)].map((_, i) => <span className={`w-[2px] h-[2px] ${i <= 20 ? 'bg-[#31D2FF]' : ''}`} />)}
        </div>
        <div className="border-[1px] border-solid border-black/25 bg-black/25 max-w-[80px] h-[4px]">
          <span style={{
            width: '100%'
          }} className="block bg-white h-[2px] bg-gradient-to-r from-[#FF003D] via-[#FFA529] to-[#32FF6C]" />
        </div>
      </div>
      <img width={95} src={ship} alt="ship" />
    </div>
  )
}

export default Enemy
