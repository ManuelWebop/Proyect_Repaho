'use clinet'
import Link from "next/link"
import Image from "next/image"



const Publication = ({ publicData: { ubi, ImageUrl, userId, _id } }) => {
    return (
        <Link href={`/public/${_id}`} className="flex flex-col bg-white m-2 hover:shadow-2xl hover:shadow-black/20 duration-300">
            <div className="flex flex-col bg-white m-1">
                <div className="flex h-full">
                    <Image
                        src={ImageUrl}
                        className="w-full h-52"
                        width="200" height="200" />
                </div>
                <div className="m-3">
                    <div className="line-clamp-1">
                        <span aria-hidden="true" className="absolute" />
                        {ubi}
                    </div>
                    <p className="mt-1 text-sm text-gray-500">{userId?.username}</p>
                    <p className="text-sm font-medium text-gray-900">$2000</p>
                </div>
            </div>
        </Link>
    )
}

export default Publication