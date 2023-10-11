import { useSession } from "next-auth/react"
import { format } from 'timeago.js'
import React from 'react'
import { BsTrash } from "react-icons/bs"



const Comment = ({ comment, setComments }) => {
    const { data: session } = useSession()
    const token = session?.user?.accessToken


    const handleDeleteComment = async () => {
        try {
            await fetch(`http://localhost:3000/api/comment/${comment?._id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                method: "DELETE"
            })

            setComments(prev => {
                return [...prev].filter((c) => c?._id !== comment?._id)
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <div className="bg-slate-100 m-1 rounded-xl">
                <div className="flex flex-row">
                    <div className="w-3/4">
                        {/*<img src={commit.perfil} alt="#" className="h-10 w-10 rounded-full mt-5 ml-5" />*/}
                        <h3 className="m-6">{comment?.userId?.username}</h3>
                    </div>
                    <span className="m-4 ml-32">{format(comment?.createdAt)}</span>
                </div>
                <div className="flex flex-row">
                    <p className="m-5 w-full">{comment?.text}</p>
                    {session?.user?._id === comment?.userId?._id && (
                        <button onClick={handleDeleteComment} className="bg-red-500 m-2 mr-7 h-12 w-28 rounded-lg hover:bg-black hover:text-white duration-200">
                            <BsTrash className="w-full" />
                        </button>
                    )}

                </div>
            </div>
        </div>
    )
}

export default Comment