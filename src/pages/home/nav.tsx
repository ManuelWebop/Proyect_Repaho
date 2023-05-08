import Image from 'next/image'
import Logo from '../images/Repaho.png'
import { animateScroll as scroll } from 'react-scroll';
import NavarTwo from './navtwo';

const navigation = [
  { name: 'Home', href: '' },
  { name: 'Shop', href: '../shop' },
  { name: 'About Us', href:'#info' },
  { name: 'Contact', href: '#footer' },
]

const Logiin = [
  { name: 'Login in', href: '../login' }
]

export default function Navar() {
  return (
    <nav className="flex flex-row">
      
        <Image className="w-10 h-10" src={Logo} alt="" />
        <div className="flex w-full items-center lg:flex-1 lg:gap-x-20 text-white ">
          <NavarTwo/>
        </div>
       
          <div className="flex text-white hover:text-stone-800 duration-500">
            {Logiin.map((item) => (
              <a key={item.name} href={item.href}>
                {item.name}
              </a>
            ))}
          </div>
     
    
    </nav>
  )
}
