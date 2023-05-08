

export default function Seach() {
    return (
        <div className="flex flex-col justify-center items-center mt-10 h-2/3 max-sm:w-full max-sm:h-auto max-sm:mt-52 ">
   
            <div className="flex flex-col rounded-xl backdrop-blur-sm bg-white/30 select-none w-3/5 h-full text-center max-sm:w-full">
                <div className="flex flex-col m-10 max-sm:h-auto">

                <p className="text-9xl max-sm:text-7xl m-auto mb-20 max-sm:mb-0 font-bold text-slate-50 drop-shadow-2xl border-2 border-x-transparent border-y-transparent border-b-gray-700/40">Repaho</p>
                </div>

                <div className="flex flex-row max-sm:flex-col m-28 max-sm:m-2 mt-0 justify-center max-sm:mb-5">
                    <p className="flex mt-2 mr-5 text-gray-900 font-medium max-sm:m-5">Donde puedes buscar tu proximo hogar</p>
                    <button className="flex w-32 h-10 max-sm:w-full justify-center items-center rounded-lg bg-slate-950 text-white hover:bg-slate-900 duration-300 max-sm:items-center">Shop</button>
                </div>
            </div>
        </div>
    )
}