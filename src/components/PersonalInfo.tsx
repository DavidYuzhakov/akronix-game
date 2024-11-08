import img from '../assets/img/personal-info.png'
import avatarForm from '../assets/img/avatar-form.png'
import shield from '../assets/icons/shield.svg'
import hp from '../assets/icons/hp.svg'
import ava from '../assets/img/ava.png'

const PersonalInfo = () => {
  const width = 50

  return (
    <div
      style={{
        backgroundImage: `url(${img})`,
      }}
      className="absolute bg-cover z-10 bottom-0 left-1/2 -translate-x-1/2 max-w-[400px] w-full h-full max-h-[100px]"
    >
      <div className="flex px-[36px] pt-[54px]">
        <div className="w-1/2">
          <div className="w-full pr-[36px] flex justify-end items-center gap-[7px] mb-[8px]">
            <span className="text-[13px] text-shadow-default shadow-main/15 leading-none">
              257
            </span>
            <img src={shield} alt="shield" />
          </div>
          <div className="flex flex-row-reverse gap-[1px] mr-[18px]">
            {[...new Array(28)].map((_, i) => (
              <span
                className={`bg-white/10 rounded-[1px] w-[4px] h-[9px] relative ${
                  i <= 20 ? 'bg-gradient-to-b from-main to-[#0945F8]' : ''
                }`}
                key={i}
              />
            ))}
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${avatarForm})`,
          }}
          className="bg-cover bg-center z-10 w-[88px] h-[88px] absolute top-[11px] ml-[1px] left-1/2 -translate-x-1/2"
        >
          <img
            className="absolute top-7 left-1/2 -translate-x-1/2"
            src={ava}
            width={34}
            alt="avatar"
          />
        </div>
        <div className="w-1/2">
          <div className="w-full pl-[36px] flex items-center gap-[7px] mb-[8px]">
            <img src={hp} alt="hp" />
            <span className="text-[13px] text-secondary text-shadow-default shadow-secondary/15 leading-none">
              1257
            </span>
          </div>
          <div
            style={{
              width: `${width}%`,
              background: `linear-gradient(to right, #FF003D, #FFA529 ${
                width < 75 ? '100%' : '50%'
              }, #32FF6C)`,
            }}
            className="ml-[18px] max-w-[140px] h-[9px] rounded-[1px]"
          ></div>
        </div>
      </div>
    </div>
  )
}

export default PersonalInfo
