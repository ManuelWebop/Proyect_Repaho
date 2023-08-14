import Image from 'next/image'


export default function Info() {

    return (
        <div className="max-sm:h-full flex:container max-sm:flex-col pb-20 bg-white">


            <div className="flex max-sm:flex-col justify-center mx-16 max-sm:mx-0 pt-32">
                <a href="">
                    <div className="flex:container shadow-xl shadow-indigo-900/40 m-5 mb-16 rounded-lg max-sm:p-5 pb-5 mx-12" data-aos="fade-up" data-aos-delay="200" data-aos-duration="2000">
                        <Image src={'/images/house_one.jpeg'} width={500} height={500} alt="#" className="w-80 h-60 rounded-lg max-sm:w-full" />
                        <h1 className="mb-10 mt-8 m-5 text-2xl font-bold text-center">Venta</h1>
                    </div>
                </a>
                <a href="" className="">
                    <div className="flex:container shadow-xl shadow-indigo-900/40 m-5 mb-16 rounded-lg max-sm:p-5 pb-5 mx-12" data-aos="zoom-in-down" data-aos-delay="500" data-aos-duration="2000">

                        <Image src={'/images/house_two.jpg'} width={5000} height={5000} alt="#" className="w-80 h-60 rounded-lg max-sm:w-full" />
                        <h1 className="mb-10 mt-8 m-5 text-2xl font-bold text-center">Renta</h1>
                    </div>
                </a>
                <a href="">

                    <div className="flex:container shadow-xl shadow-indigo-900/40 m-5 mb-16 rounded-lg max-sm:p-5 pb-5 mx-12" data-aos="fade-up" data-aos-delay="700" data-aos-duration="2000">
                        <Image src={'/images/house_tree.jpg'} width={5000} height={5000} alt="#" className="w-80 h-60 rounded-lg max-sm:w-full" />
                        <h1 className="mb-10 mt-8 m-5 text-2xl font-bold text-center">Promocion</h1>
                    </div>
                </a>
            </div>
        </div>
    )
}