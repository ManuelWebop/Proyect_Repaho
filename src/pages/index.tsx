import Navar from './home/nav'
import Seach from './home/seach'
import Info from './home/info'
import Info_p2 from './home/info_p2'
import Info_p3 from './home/info_p3'
import Perfil from './home/perfil'
import Footer from './home/footer'

import React, {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'




export default function Home() {
    useEffect(() => {
        AOS.init({duration:4000})
    }, [])
    
    return (
        
        <div className="bg-local">
          

            <header className="bg-cover header h-screen p-5 object-cover flex flex-col bg-center ">
                <Navar />
                <Seach />
            </header>
           

            {/* Parte donde se muestran opciones */}
            
            <Info/>
           

            {/* Parte 2 de info */}
            <div id="info">
            <Info_p2 />
            </div>

            {/* Parte 3 de info */}

            <Info_p3 />

            <div className="flex:row bg-zinc-950 p-10">
                <Perfil />
            </div>

            <div id="footer">

            <Footer />
            </div>

        </div>
    )
}


