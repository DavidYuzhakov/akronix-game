import compas from "../assets/img/compas.png"
const data = [50, 60, 70, 80, 90, 100, 150, 160, 170, 180, 190]

const Compas = () => {
  return (
    <div className="absolute top-[10px] left-1/2 -translate-x-1/2 max-w-[260px] w-full">
      <img className="mx-auto mb-[2px]" width={250} src={compas} alt="compas" />
      <div className="flex justify-between items-center">
        {data.map(value => (
          <span className="text-[6px] w-[12px] text-white/70 text-shadow-default shadow-white/25 " key={value}>{ value }</span>
        ))}
      </div>
    </div>
  )
}

export default Compas
