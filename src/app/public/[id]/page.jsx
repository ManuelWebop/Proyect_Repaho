'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { BsFillPencilFill } from 'react-icons/bs'
import { AiFillDelete } from 'react-icons/ai'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { format } from 'timeago.js'
import Navar from '@/components/home/nav'

const Publics = (ctx) => {

    const [publicDetails, setPublicDetails] = useState("")
    const router = useRouter()
    const { data: session } = useSession()


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

            const confirmModel = confirm("Are you sure you want to delete your public?")
            if (confirmModel) {
                const res = await fetch(`htpp://localhost:3000/api/publicaction/${ctx.params.id}`, {
                    headers: {
                        'Authorization': `Bearer ${session?.user?.accessToken}`
                    },
                    method: "DELETE"
                })
                if (res.ok) {
                    router.push('/')
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
                                                {/*<img className="h-10 w-10 rounded-full mt-5" src= alt="" />*/}
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
                        </div>{/*

                        <div className="m-3 flex flex-col">
                            {commit.map((commit) => (
                                <div className=" bg-slate-100 m-1 rounded-xl">
                                    <div className="flex">
                                        <img src={commit.perfil} alt="#" className="h-10 w-10 rounded-full mt-5 ml-5" />
                                        <h3 className="m-4">{commit.user}</h3>
                                    </div>
                                    <div className="flex">
                                        <p className="m-5 line-clamp-3">{commit.commit}</p>
                                        
                                    </div>
                                </div>
                            ))}
                        </div>
                */}
                        {
                            /*
                            <div className="flex flex-col items-center">
                                        <Image
                                            src={publicDetails?.ImageUrl}
                                            className="h-1/2 w-1/2"
                                            width='750' height='750' />
                        
                                        <div className="text-left flex flex-row w-full">
                                            <h3 className="text-2xl">{publicDetails?.ubi}</h3>
                                        </div>
                                        <div className="flex">
                                            {
                                                publicDetails?.userId?._id.toString() === session?.user?._id.toString()
                                                    ? (
                        
                                                        <div className='flex flex-row'>
                                                            <div className="m-2 flex">
                        
                                                                <BsFillPencilFill />
                                                                <Link href={`/public/edit/${ctx.params.id}`}>
                                                                    Edit
                                                                </Link>
                                                            </div>
                        
                                                            <div className='m-2 flex flex-auto'>
                                                                <AiFillDelete />
                                                                <button onClick={handleDelete}>
                                                                    Delete
                                                                </button>
                                                            </div>
                                                        </div>
                                                    )
                                                    : (
                        
                                                        <div>
                                                            Author: <span>{publicDetails?.userId?.username}</span>
                                                        </div>
                                                    )
                                            }
                        
                                        </div>
                                        <div>
                                            Category:
                                            <span>{publicDetails?.category}</span>
                                        </div>
                                        <div className="">
                                            <p>{publicDetails?.doc}</p>
                                            <span>Posted:</span><span>{format(publicDetails?.createdAt)}</span>
                                        </div>
                                        <div>
                                            <div></div>
                                        </div>
                                    </div >
                             */
                        }
                    </div>
                </div>
            </div>


        </main>






    )
}

export default Publics