'use client'
import Navar from "@/components/home/nav"
import { useSession } from "next-auth/react"
import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { AiOutlineFileImage } from 'react-icons/ai'
import { CiLocationOn } from 'react-icons/ci'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function createPublic() {
    const CLOUD_NAME = 'do0puev9t'
    const UPLOAD_PRESET = 'my_shop_proyect_web'


    const [ubi, setUbi] = useState('')
    const [descripcion, setDesc] = useState('')
    const [category, setCategory] = useState("Rent")
    const [image, setImage] = useState('')

    const { data: session, status } = useSession()
    const router = useRouter()


    if (status === 'loading') {
        return <p>Loading...</p>
    }
    if (status === 'unauthenticated') {
        return <p> Access Denied</p>
    }
    const handleSumit = async (e) => {
        e.preventDefault()

        if (!image || !ubi || !descripcion || !category) {
            toast.error("All filds are required")
            return
        }

        try {
            const ImageUrl = await uploadImage()

            const res = await fetch(`http://localhost:3000/api/publicaction`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${session?.user?.accessToken}`
                },
                method: 'POST',
                body: JSON.stringify({ ubi, descripcion, category, ImageUrl, userId: session?.user?._id })
            })
            if (!res.ok) {
                throw new Error("Error occured")
            }

            const blog = await res.json()

            router.push(`/public/${blog?._id}`)
        } catch (error) {
            console.log(error)
        }

    }

    const uploadImage = async () => {
        if (!image) return

        const formData = new FormData()

        formData.append("file", image)
        formData.append("upload_preset", UPLOAD_PRESET)

        try {
            const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
                method: "POST",
                body: formData
            })

            const data = await res.json()

            const ImageUrl = data['secure_url']

            return ImageUrl
        } catch (error) {
            console.log(error)
        }
    }


    return (

        <div className="bg-gradient-to-t from-slate-950 to-slate-400 h-screen">
            <div className="p-5">
                <Navar />
            </div>

            <form className="grid flex-col justify-center" onSubmit={handleSumit}>
                <div className="bg-slate-400 py-5 w-[52rem] rounded-lg">
                    <div className="m-10">

                        <p className="m-14 font-medium text-5xl">Create house...</p>

                        <div className="flex flex-col mb-5">
                            <label className="mb-3 text-2xl">Ubication</label>
                            <div className="flex hover:drop-shadow-xl duration-300">
                                <CiLocationOn className="flex rounded-l-lg bg-white border border-gray-300 p-3 pr-1 w-10 h-11 border-r-transparent" />
                                <input
                                    placeholder="Ubi..."
                                    className="mb-5 h-11 w-full rounded-r-lg border border-l-transparent border-gray-300 bg-white text-gray-900 focus:outline-none focus:bg-slate-200 px-4 py-2 duration-500"
                                    onChange={(e) => setUbi(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col mb-5">
                            <label className="mb-3 text-2xl">Description</label>
                            <textarea className="mb-5 h-11 w-full rounded-lg border border-l-transparent border-gray-300 bg-white text-gray-900 focus:outline-none focus:bg-slate-200 px-4 py-2 duration-500"
                                onChange={(e) => setDesc(e.target.value)} />
                        </div>
                        <div className="flex flex-col">
                            <label className="mb-3 text-2xl">Category</label>
                            <select className="mb-5 text-xl h-11 text-gray-700 focus:outline-none focus:bg-slate-200 px-4 py-2 duration-500"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            >
                                <option value="Rent">Renta</option>
                                <option value="Sale">Venta</option>
                                <option value="Promotion">Promocion</option>
                            </select>
                        </div>
                        <div className="flex flex-col mb-5">
                            <label htmlFor="images" className="my-2 mb-5 text-2xl flex-row">
                                Agregar imagen
                            </label>
                            <div className="flex hover:drop-shadow-xl duration-300">

                                <AiOutlineFileImage className="flex rounded-l-lg bg-white border border-gray-300 p-3 pr-1 w-10 h-11 border-r-transparent" />
                                <input
                                    className="flex mb-5 h-11 w-full rounded-r-lg border border-l-transparent border-gray-300 bg-white text-gray-900 focus:outline-none focus:bg-slate-200 px-4 py-2 duration-500"
                                    type="file" accept="image/*"
                                    id="images"
                                    onChange={(e) => setImage(e.target.files[0])}
                                />
                            </div>
                        </div>
                        <div className="flex">

                            <button className=" bg-slate-900 text-white rounded-md w-full mt-10 p-5 font-bold hover:bg-yellow-400 hover:text-black duration-300">Create</button>
                        </div>
                    </div>
                </div>
            </form>
            <ToastContainer />
        </div>
    )
}