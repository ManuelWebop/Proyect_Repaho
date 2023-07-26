import { dbConnect } from "../../utils/mongoose";
import { verifyJwtToken } from "../../utils/jwt";
import Comment from "postcss/lib/comment";

export async function POST(req){
    await dbConnect()

    const accessToken = req.headers.get('authorization')
    const token = accessToken.split(' ')[1]
    const decodedToken = verifyJwtToken(token)
    
    if(!accessToken || !decodedToken){
        return new Response(JSON.stringify({error: "unauthorized (wrong or expired token)"}), {status: 403})
    }

    try{
        const body = await req.json()

        let newComment = await Comment.create(body)
        newComment = await newComment.populate('userId')

        return new Response(JSON.stringify(newComment),{status:201})
    }catch(error){
        return new Response(JSON.stringify(null), {status:500})
    }
}