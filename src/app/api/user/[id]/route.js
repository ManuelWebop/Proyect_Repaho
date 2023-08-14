import { verifyJwtToken } from '@/app/lib/jwt';
import { dbConnect } from '@/app/lib/mongoose';
import User from '@/models/User';


export async function GET(req, ctx) {
    await dbConnect();

    const id = ctx.params.id;

    try {
        const user = await User.findById(id).select("-password");

        if (!user) {
            return new Response(JSON.stringify(null), { status: 404 });
        }
        console.log("User details:", user)
        return new Response(JSON.stringify(user), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify(null), { status: 500 });
    }
}

export async function PUT(req, ctx) {
    await dbConnect();

    const id = ctx.params.id;
    const accessToken = req.headers.get('authorization')
    
    if (!accessToken) {
      return new Response(JSON.stringify({ error: 'Access token missing' }), { status: 401 });
    }


    const token = accessToken.split(' ')[1];



    const decodedToken = verifyJwtToken(token);

    if (!accessToken || !decodedToken) {
        return new Response(JSON.stringify({ error: 'unauthorized (wrong or expired token)' }), { status: 403 });
    }

    try {
        const body = await req.json();
        const user = await User.findById(id);

        if (!user) {
            return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 });
        }

        if (user._id.toString() !== decodedToken._id.toString()) {
            return new Response(JSON.stringify({ msg: 'Unauthorized: You can only update your own user data' }), { status: 403 });
        }

        const updatedUser = await User.findByIdAndUpdate(id, { $set: { ...body } }, { new: true });

        return new Response(JSON.stringify(updatedUser), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify(null), { status: 500 });
    }
}
