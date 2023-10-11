import Publication from "@/components/shop/publication"
import Footer from "../../components/home/footer"
import Navar from '../../components/navar/page'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'

export async function fetchPublics() {

    const res = await fetch('http://localhost:3000/api/publicaction', { cache: 'no-store' })
    return res.json()

}

async function searchShop(searchQuery = "") {
    const res = await fetch(`http://localhost:3000/api/search?q=${searchQuery}`)
    return res.json()
}


export default async function Shop({ searchParams }) {
    const searchQuery = searchParams.q
    const results = await searchShop(searchQuery)

    const publics = await fetchPublics()

    return (
        <div className="bg-local md:block ">
            <div className="bg-gray-100">
                <Navar searchQuery={searchQuery} />
            </div>

            <div className="flex flex-row items-center justify-center bg-gray-100">
                <div className="flex flex-col m-5 p-3 w-5/6 shadow-lg bg-white pb-5 max-sm:w-full min-h-fit">
                    <div className=" mx-auto grid grid-cols-6 drop-shadow-lg max-sm:grid-cols-2">

                        {results.length > 0
                            ? results.map((publicData) => (
                                <Publication key={publicData._id} publicData={publicData} />
                            ))
                            : publics?.length > 0
                                ? publics.map((publicData) => (
                                    <Publication key={publicData._id} publicData={publicData} />
                                ))
                                : <h3>No blogs are currently in the</h3>
                        }

                    </div>
                </div>
            </div>
            <Footer />

        </div>
    )
}