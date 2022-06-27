import {useState} from 'react'
import logobookmark from '../images/logo-bookmark.svg'
import menuHam from '../images/icon-hamburger.svg'
import hero from '../images/illustration-hero.svg'
import facebook from '../images/icon-facebook.svg'
import twitter from '../images/icon-twitter.svg'
import {MdOutlineClose} from 'react-icons/md'



const Header = () => {


    const [mostrarMenu, setMostrarMenu] = useState(false)


  return (
    <header className='contenedor text-center h-screen'>
        <div className='flex items-center justify-between mt-10'>
            <img src={logobookmark} alt="Logo de bookmark" />
            {mostrarMenu ? (
                <MdOutlineClose size={30} className="text-white z-10" onClick={e => setMostrarMenu(!mostrarMenu)} />
            ): (
                <img src={menuHam} alt="Icono de menu ham" onClick={e => setMostrarMenu(!mostrarMenu)} className="md:hidden"  />
            )}
            <ul className='hidden md:flex items-center gap-x-10 text-VeryDarkBlue uppercase tracking-widest text-2xl'>
                <li className='hover:cursor-pointer hover:text-SoftRed'>features</li>
                <li className=''>pricing</li>
                <li className=''>contact</li>
                <li className='bg-SoftRed border-solid border-2 border-SoftRed text-white px-10 py-2 rounded-lg hover:cursor-pointer hover:text-SoftRed hover:bg-transparent hover:duration-100'>Login</li>
            </ul>
            {mostrarMenu && (
            <div className='menu-oculto '>
                <ul className='contenedor text-white uppercase grid grid-cols-1 divide-y pt-40 tracking-widest'>
                    <li></li>
                    <li className='p-10'>features</li>
                    <li className='p-10'>pricing</li>
                    <li className='p-10'>contact</li>
                    <li className='p-10 uppercase border-solid border-y-4 border-x-2 rounded-xl mb-2 font-medium '>Login</li>
                    <li></li>
                </ul>
                <div className='flex justify-center items-center gap-x-10 mt-96 text-white'>
                    <img src={facebook} alt="Icono de facebook" />
                    <img src={twitter} alt="Icono de twitter" />
                </div>
            </div>
        )}
        </div>
        <div className='flex flex-col md:flex-row-reverse items-center mt-40'>
            <div>
                <img src={hero} alt="Imagen hero" className='heroIMG' />
            </div>
            <div className='text-center md:text-left'>
                <div>
                    <h1 className='text-5xl font-medium text-VeryDarkBlue capitalize mt-20 md:text-8xl'>A simple bookmark manager</h1>
                    <p className='text-GrayishBlue my-10'>
                        A clean and simple interface to organize your favourite websites. Open a new 
                        browser tab and see your sites load instantly. Try it for free.
                    </p>
                </div>
                <div className='flex justify-center gap-x-5 md:justify-start '>
                    <button className='px-6 py-4 border-solid border-2 border-SoftBlue bg-SoftBlue rounded-lg text-2xl font-medium hover:text-SoftBlue hover:bg-transparent '>Get it on Chrome</button>
                    <button className='px-6 py-4 rounded-lg text-VeryDarkBlue shadow-xl bg-gray-100 text-2xl font-medium hover:bg-white hover:border-solid hover:border-2 hover:border-black '>Get it on Firefox</button>
                </div>
            </div>
        </div>
        
        
        
        
        
    </header>
  )
}

export default Header