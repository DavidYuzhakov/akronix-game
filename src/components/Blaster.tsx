import btn from "../assets/icons/btn-form.png"
import charge from "../assets/icons/charge.svg"

interface BlasterProps {
  img: string
  styles?: any
}

const Blaster = ({ img, styles }: BlasterProps) => {
  return (
    <button 
    style={{
      backgroundImage: `url(${btn})`,
      ...styles
    }}
    className={`absolute  w-[74px] h-[70px] bg-cover bg-center active:scale-95 duration-200`}
    >
      <img className={'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'} src={img} alt="attack" />
      <div style={{
        backgroundImage: `url(${charge})`
      }} className="w-[21px] h-[51px] relative z-10 overflow-hidden">
      </div>
    </button>
  )
}

export default Blaster
