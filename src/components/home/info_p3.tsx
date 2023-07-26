import Image from "next/image"

const casa = [

    {
        image: 'casa5.png'
    }

]

export default function Info_p3() {
    return (
        <div className="flex max-sm:flex-col justify-center">
            <div className="flex:col">
                <p className="m-20 italic" data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000">"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete."</p>
                <p className="m-20 italic" data-aos="fade-right" data-aos-delay="800" data-aos-duration="1000">"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete."</p>
            </div>
            <div className="flex m-10 w-96 h-80 text-center rounded-lg bg-cover max-sm:h-1/2 max-sm:w-auto max-sm:items-center" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">
                {casa.map((casa) => (
                    <Image className="fixed -z-10 h-full rounded-lg" src={`/images/${casa.image}`} alt="#" width={400} height={400} />
                ))}
                <p className="flex text-left text-3xl font-bold pt-28 p-20 text-white bg-black/40 rounded-lg">Best Seller Product</p>
            </div>
        </div>
    )
}