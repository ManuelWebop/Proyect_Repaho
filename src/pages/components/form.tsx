import Image from "next/image"
import IconUser from '../svg/user_icon-icons.com_57997.svg'
import IconInfo from '../svg/circle_customer_help_info_information_service_support_icon_123208.svg'
import IconEmail from '../svg/email-envelope-outline-shape-with-rounded-corners_icon-icons.com_56530.svg'
import IconDate from '../svg/calendar_date_day_event_month_schedule_time_icon_123230.svg'
import IconMex from '../svg/mxmexicoflag_111665.svg'
import IconKey from '../svg/key-silhouette-security-tool-interface-symbol-of-password_icon-icons.com_54503.svg'


export default function Form(){
    return(
        <div className="w-1/2 bg-green-900/90">
                    <div className="flex bg-yellow-100 rounded-xl m-[2.47rem]">
                        <form action="post" className="flex flex-col p-10 w-full">

                            <label className="flex text-gray-700 font-light text-sm mb-2"><Image src={IconInfo} alt="#" className="w-5 h-5 m-1" />User Name</label>
                            <div className="flex hover:drop-shadow-xl duration-300">
                                <Image src={IconUser} alt="#" className="flex rounded-l-lg bg-white border border-gray-300 p-3 pr-1 w-10 h-11 border-r-transparent " />
                                <input
                                    className="mb-5 h-11 w-full rounded-r-lg border border-l-transparent border-gray-300 bg-white text-gray-900 focus:outline-none focus:bg-slate-200 px-4 py-2 duration-500"
                                    type="text"
                                    placeholder="Name"
                                />
                            </div>


                            <label className="flex text-gray-700 font-light mb-2"><Image src={IconInfo} alt="#" className="w-5 h-5 m-1" />Email</label>
                            <div className="flex hover:drop-shadow-xl duration-300">
                                <Image src={IconEmail} alt="#" className="flex rounded-l-lg bg-white border border-gray-300 p-3 pr-1 w-10 h-11 border-r-transparent" />
                                <input
                                    className="mb-5 h-11 w-full rounded-r-lg border border-l-transparent border-gray-300 bg-white text-gray-900 focus:outline-none focus:bg-slate-200 px-4 py-2 duration-500"
                                    type="text"
                                    placeholder="Email"
                                />
                            </div>

                            <label className="flex text-gray-700 font-light mb-2"><Image src={IconInfo} alt="#" className="w-5 h-5 m-1" />Date</label>
                            <div className="flex hover:drop-shadow-xl duration-300">
                                <Image src={IconDate} alt="#" className="flex rounded-l-lg bg-white border border-gray-300 p-3 pr-1 w-10 h-11 border-r-transparent" />
                                <input className="mb-5 h-11 w-full rounded-r-lg border border-l-transparent border-gray-300 bg-white text-gray-900 focus:outline-none focus:bg-slate-200 px-4 py-2 duration-500"
                                    type="month"
                                    placeholder="Day / Month / Year" />
                            </div>

                            <label className="flex text-gray-700 font-light mb-2"><Image src={IconInfo} alt="#" className="w-5 h-5 m-1" />Phone</label>
                            <div className="flex hover:drop-shadow-xl duration-300">
                                <Image src={IconMex} alt="#" className="flex rounded-l-lg bg-white border border-gray-300 p-3 pr-1 w-10 h-11 border-r-transparent" />
                                <input className="mb-5 h-11 w-full rounded-r-lg border border-l-transparent border-gray-300 bg-white text-gray-900 focus:outline-none focus:bg-slate-200 px-4 py-2 duration-500"
                                    type="text"
                                    placeholder="Phone" />
                            </div>

                            <label className="flex text-gray-700 font-light mb-2"><Image src={IconInfo} alt="#" className="w-5 h-5 m-1" />Password</label>
                            <div className="flex hover:drop-shadow-xl duration-300">
                                <Image src={IconKey} alt="#" className="flex rounded-l-lg bg-white border border-gray-300 p-3 pr-1 w-10 h-11 border-r-transparent" />
                                <input className="mb-5 h-11 w-full rounded-r-lg border border-l-transparent border-gray-300 bg-white text-gray-900 focus:outline-none focus:bg-slate-200 px-4 py-2 duration-500"
                                    type="password"
                                    placeholder="Password" />
                            </div>

                            <button className=" bg-slate-900 text-white rounded-md m-5 h-10 font-bold hover:bg-yellow-400 hover:text-black duration-300">Crear</button>
                        </form>
                    </div>
                </div>
    )
}