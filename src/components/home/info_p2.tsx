import Image from "next/image"

const uwu = [

    {
    image: 'casa4.jpg'
    }

]


export default function Info_p2() {
    return (
        <div className="flex max-sm:flex-col justify-center" id="green">
            <div className="flex m-10 w-96 h-80 text-center rounded-lg bg-cover max-sm:h-1/2 max-sm:w-auto max-sm:items-center" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">
                {uwu.map((uwu) => (
                    <Image className="fixed -z-10 h-full rounded-lg" src={`/images/${uwu.image}`} alt="#" width={400} height={400} />
                ))}
                <p className="flex text-left text-3xl font-bold pt-28 p-20 text-white bg-black/40 rounded-lg max-sm:pl-10">Mas de 500 mil publicaciones</p>
            </div>
            <div className="m-5 mt-20 w-96 h-64 flex max-sm:w-auto max-sm:mt-0 " id="black" data-aos="fade-right" data-aos-delay="500" data-aos-duration="1000">
                <p className="flex text-left text-white m-10 italic ">"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete."</p>
            </div>
        </div>

    )
}