
import { BsSearch } from "react-icons/bs"
export default function Seach_() {
    return (
        <div className="flex w-full pl-14 ">

            <form action="POST" className="flex w-full">
                <div className="flex bg-white rounded-xl hover:shadow-md hover:shadow-white/30 duration-200 p-1 w-full">
                    <input type="text" className="flex p-2 text-slate-700/90 rounded-l-lg focus:outline-none w-full"/>
                    <button className="flex p-3 bg-white rounded-full hover:bg-blue-900/90 fill-slate-950 hover:fill-white duration-200">
                        <BsSearch/>
                    </button>
                </div>
            </form>
        </div>
    )
}