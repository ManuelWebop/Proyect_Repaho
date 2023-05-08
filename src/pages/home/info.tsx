import Image from 'next/image'
import Casa1 from '../images/casa1.jpeg'
import Casa2 from '../images/casa2.jpg'
import Casa3 from '../images/casa3.jpg'



export default function Info(){
    
    return(
        <div className="h-screen max-sm:h-full flex:container max-sm:flex-col ">
                <div className="flex flex-col items-center max-sm:m-5 text-center mb-24 mt-20">
                    <h1 className="flex font-bold text-4xl" data-aos="zoom-in-down" data-aos-delay="100" data-aos-duration="1000">Interior Plant Reference</h1>
                    <p className="flex text-gray-500" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000" >make your home so conmforable with refreshing plants</p>
                </div>

                <div className="flex max-sm:flex-col justify-center mr-16 ml-16 max-sm:mr-0 max-sm:ml-0">
                    <div className="flex:container shadow-xl shadow-indigo-900/40 m-5 mb-16 rounded-lg max-sm:p-5" data-aos="fade-up" data-aos-delay="200" data-aos-duration="2000">
                        <Image src={Casa1} alt="#" className="w-80 h-60 rounded-lg max-sm:w-full" />
                        <h1 className="mb-10 mt-8 m-5 text-2xl font-bold text-center">Mas populares</h1>
                    </div>
                    <div className="flex:container shadow-xl shadow-indigo-900/40 m-5 mb-16 rounded-lg max-sm:p-5" data-aos="zoom-in-down" data-aos-delay="500" data-aos-duration="2000">
                        <Image src={Casa2} alt="#" className="w-80 h-60 rounded-lg max-sm:w-full" />
                        <h1 className="mb-10 mt-8 m-5 text-2xl font-bold text-center">Nuevas casas</h1>
                    </div>
                    <div className="flex:container shadow-xl shadow-indigo-900/40 m-5 mb-16 rounded-lg max-sm:p-5" data-aos="fade-up" data-aos-delay="700" data-aos-duration="2000">
                        <Image src={Casa3} alt="#" className="w-80 h-60 rounded-lg max-sm:w-full" />
                        <h1 className="mb-10 mt-8 m-5 text-2xl font-bold text-center">Promocion</h1>
                    </div>
                </div>
            </div>
    )
}