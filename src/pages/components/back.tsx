

export default function Back(){
    
const Back = [
    { name: '← Back', href: '..' }
]
    return(
        <div className="w-1/2 bg-black/40 text-center flex flex-col justify-center items-center ">
                    
                    <p className="text-white font-bold text-5xl m-3">Crea el camino a tu nuevo hogar</p>
                        <div className=" text-4xl m-4 font-semibold text-white">
                            {Back.map((item) => (
                                <a className="hover:text-yellow-300 duration-500" key={item.name} href={item.href}>
                                    {item.name}
                                </a>
                            ))}
                        </div>

                </div>
    )
}