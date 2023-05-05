const navigation = [
    { name: 'Home', href: '..' },
    { name: 'Shop', href: '../shop' },
    { name: 'About Us', href:'../#info' },
    { name: 'Contact', href: '../#footer' },
  ]
  

export default function NavarTwo(){
    return(
        <div>
        {navigation.map((item) => (
            <a key={item.name} href={item.href} className="m-5 text-sm font-semibold leading-6 hover:text-stone-800 duration-500 cursor-pointer">
              {item.name}
            </a>
          ))}
          </div>
    )
}