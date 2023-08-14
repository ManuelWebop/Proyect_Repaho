import { dbConnect } from "../../../lib/mongoose";
import { verifyJwtToken } from "../../../lib/jwt";
import Public from "@/models/Public";
import User from "../../../../models/User";


export async function GET(req, ctx){
    await dbConnect()

    const id = ctx.params.id

    try{
        const publics = await Public.findById(id).populate("userId").select("-password")
        
        return new Response(JSON.stringify(publics), {status:200})
    }catch(error){
        return new Response(JSON.stringify(null),{status:500})
    }
}

export async function PUT(req, ctx) {
    await dbConnect()

    const id = ctx.params.id
    const accessToken = req.headers.get('authorization')
    const token = accessToken.split(" ")[1]

    const decodedToken = verifyJwtToken(token)

    if (!accessToken || !decodedToken) {
        return new Response(JSON.stringify({ error: "unauthorized (wrong or expired token)" }), { status: 403 })
    }

    try {
        const body = await req.json()
        const publics = await Public.findById(id).populate('userId')

        if (publics?.userId?._id.toString() !== decodedToken._id.toString()) {
            return new Response(JSON.stringify({ msg: 'Only author can update his blog' }), { status: 403 })
        }

        const updatedPublic = await Public.findByIdAndUpdate(id, { $set: { ...body } }, { new: true })

        return new Response(JSON.stringify(updatedPublic), { status: 200 })
    } catch (error) {
        return new Response(JSON.stringify(null), { status: 500 })
    }
}

export async function DELETE(req, ctx) {
    await dbConnect()

    const id = ctx.params.id

    const accessToken = req.headers.get('authorization')
    const token = accessToken.split(' ')[1]

    const decodedToken = verifyJwtToken(token)

    if (!accessToken || !decodedToken) {
        return new Response(JSON.stringify({ error: "unauthorized (wrong or expired token)" }), { status: 403 })
    }

    try {
        const publics = await Public.findById(id).populate('userId')
        if (publics?.userId?._id.toString() !== decodedToken._id.toString()) {
            return new Response(JSON.stringify({ msg: 'Only author can delete his blog' }), { status: 403 })
        }

        await Public.findByIdAndDelete(id)

        return new Response(JSON.stringify({msg: 'Successfully deleted blog'}), {status: 200})
    } catch (error) {
        return new Response(JSON.stringify(null), { status: 500 }) 
    }
}
