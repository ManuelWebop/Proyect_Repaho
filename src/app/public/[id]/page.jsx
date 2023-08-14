"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { BsFillPencilFill } from 'react-icons/bs'
import { AiFillDelete } from 'react-icons/ai'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { format } from 'timeago.js'
import Navar from '@/components/home/nav'
import Comment from '../../../components/shop/comment'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'



const Publics = (ctx) => {

    const [publicDetails, setPublicDetails] = useState("")

    const [commentText, setCommentText] = useState("")
    const [comments, setComments] = useState([])

    const router = useRouter()
    const { data: session } = useSession()

    useEffect(() => {
        async function fetchComments() {
            const res = await fetch(`http://localhost:3000/api/comment/${ctx.params.id}`, { cache: 'no-store' })
            const comments = await res.json()

            setComments(comments)
        }
        fetchComments()
    }, [])

    useEffect(() => {
        async function fetchPublic() {
            const res = await fetch(`http://localhost:3000/api/publicaction/${ctx.params.id}`, { cache: 'no-store' })
            const publics = await res.json()

            setPublicDetails(publics)


        }
        session && fetchPublic()
    }, [session])

    const handleDelete = async () => {
        try {

            const confirmModel = confirm("Deseas realmente eliminar esta publicacion?")
            if (confirmModel) {
                const res = await fetch(`http://localhost:3000/api/publicaction/${ctx.params.id}`, {
                    headers: {
                        'Authorization': `Bearer ${session?.user?.accessToken}`
                    },
                    method: "DELETE"
                })
                if (res.ok) {
                    router.push('/shop')
                    setTimeout(() => {
                        window.location.reload()
                    }, 500)
                }
            }
        }
        catch (error) {
            console.log(error)
        }

    }

    const handleComment = async () => {
        if (commentText?.length < 2) {
            toast.error("Comment must be a last 2 characters")
            return
        }
        try {
            const body = {
                publicId: ctx.params.id,
                userId: session?.user?._id,
                text: commentText
            }
            const res = await fetch(`http://localhost:3000/api/comment`, {
                headers: {
                    'Content-Type': 'applicaction/json',
                    'Authorization': `Bearer ${session?.user?.accessToken}`
                },
                method: "POST",
                body: JSON.stringify(body)
            })
            const newComment = await res.json()

            setComments((prev) => {
                return [newComment, ...prev]
            })

            setCommentText("")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <main className="mx-auto bg-gray-100 h-screen">
            <div className="p-1">
                <Navar />
            </div>
            <div className="">
                <div className="flex flex-row">

                    <div className="flex-col w-3/4">

                        <div className="flex flex-row justify-center ">
                            <Image src={publicDetails?.ImageUrl} width="2000" height="2000" className="h-[31rem] w-[55%] rounded-lg" />
                        </div>
                        <div className="flex flex-col m-5">

                            <div className="flex flex-row">
                                <div className="flex-col">
                                    <h1 className=" text-3xl font-semibold">{publicDetails?.ubi}</h1>
                                    <h2 className="mt-1 text-2xl font-thin text-black">$2000</h2>
                                </div>
                                {

                                    publicDetails?.userId?._id.toString() === session?.user?._id.toString()
                                        ? (
                                            <div className='flex flex-row mt-3 h-auto ml-20 mb-10'>
                                                <Link className='flex bg-slate-900 text-white rounded-md w-full px-20 p-5 font-bold hover:bg-slate-400 hover:text-black duration-300' href={`/public/edit/${ctx.params.id}`}>
                                                    Edit
                                                    <BsFillPencilFill className='ml-2 mt-1' />
                                                </Link>
                                                <button className="ml-5 flex-auto flex bg-red-900 text-white rounded-md w-full px-20 p-5 font-bold hover:bg-red-600 hover:text-black duration-300" onClick={handleDelete}>
                                                    Delete
                                                    <AiFillDelete className='ml-2 mt-1' />
                                                </button>
                                            </div>

                                        )
                                        : (

                                            <div className="flex w-full flex-row-reverse">
                                                <Image className="h-10 w-10 rounded-full" src={publicDetails?.userId?.image ?? '/images/avatar.png'} alt="" width={200} height={200} />
                                                <h3 className="text-xl m-2">{publicDetails?.userId?.username}</h3>
                                            </div>
                                        )
                                }
                            </div>
                            <div className=' text-end m-3 '>
                                Category:
                                <span className='ml-2 bg-indigo-950 p-2 px-5 rounded-lg text-white'>{publicDetails?.category}</span>
                            </div>
                            <div className="mt-3 bg-white border border-gray-500 shadow-inner rounded-lg h-44">
                                <h4 className="m-5 p-1">{publicDetails?.descripcion}</h4>
                            </div>


                        </div>
                    </div>
                    <div className=" m-2 flex flex-col w-3/12 shadow-sm rounded-2xl shadow-black h-[55rem] overflow-y-scroll bg-white">
                        <div className="m-1">
                            <p className="m-5 text-2xl font-serif">Comentarios:</p>
                        </div>

                        <div className="m-3 flex flex-col">
                            <div className="flex flex-row">
                                <input
                                    className="flex mb-5 h-11 w-full rounded-l-lg border border-r-transparent border-gray-300 bg-white text-gray-900 focus:outline-none focus:bg-slate-200 px-4 py-2 duration-500"
                                    value={commentText}
                                    type='text'
                                    placeholder='Type message...'
                                    onChange={(e) => setCommentText(e.target.value)}
                                />
                                <button className='bg-slate-900 text-white rounded-r-md h-11 px-5 font-bold hover:bg-yellow-400 hover:text-black duration-300' onClick={handleComment}>Post</button>
                            </div>
                            {
                                comments?.length > 0
                                    ? comments.map((comment) => (
                                        <Comment key={comment._id} comment={comment} setComments={setComments} />
                                    ))
                                    : <h1 className='ml-1'>Se tu el primer comentario en la pagina :D</h1>
                            }

                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>


        </main>






    )
}

export default Publics