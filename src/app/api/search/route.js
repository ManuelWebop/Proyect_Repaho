import { dbConnect } from '../../lib/mongoose';
import Public from '../../../models/Public';

export async function GET(req) {
  await dbConnect();

  const { searchParams } = new URL(req.url)
  const query = searchParams.get("q") || ""
  try {
    const results = await Public.find({
      ubi: { $regex: query, $options: 'i' },
    });

    return new Response(JSON.stringify(results), { status: 201 })
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify(error), { status: 500 })
  }
} 