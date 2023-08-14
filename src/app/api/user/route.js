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
