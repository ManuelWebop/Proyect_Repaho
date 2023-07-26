import { dbConnect } from "../../utils/mongoose";
import { verifyJwtToken } from '../../utils/jwt';
import Public from '../../../models/Public';


export async function GET(req) {
  await dbConnect()

  try {
    const publics = await Public.find({}).limit(16).populate("userId")
    return new Response(JSON.stringify(publics), { status: 200 })
  } catch (error) {
    return new Response(JSON.stringify(null), { status: 200 })
  }

}

export async function POST(req) {
  await dbConnect()

  const accessToken = req.headers.get("authorization")
  const token = accessToken.split('')[1]

  const decodedToken = verifyJwtToken(token)

  if (!accessToken || decodedToken) {
    return new Response(JSON.stringify({ error: "unauthorized (wrong or expired token)" }), { status: 403 })
  }

  try {
    const body = await req.json()
    const newPublic = await Public.create(body)
    return new Response(JSON.stringify(newPublic), { status: 201 })

  } catch (error) {
    return new Response(JSON.stringify(null), { status: 500 })
  }
}