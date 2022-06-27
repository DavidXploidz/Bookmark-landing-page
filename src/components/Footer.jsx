import {useState} from 'react'
import {BsBookmarkFill} from 'react-icons/bs'
import {GrFacebook} from 'react-icons/gr'
import {SiTwitter} from 'react-icons/si'
import error from '../images/icon-error.svg'
const Footer = () => {

const validarFormulario = (e) => {
    e.preventDefault()
    if(valido === ''){
        setMostrar(true)
        return;
    }
    e.target.reset()
    setValido('')
    setMostrar(false)
}

const [valido, setValido] = useState('')
const [mostrar, setMostrar] = useState(false)


    
  return (
    <footer className='text-center mt-40 '>
        <div className='bg-SoftBlue py-20'>
            <div className=' contenedor '>
                <p className='text-white uppercase tracking-widest text-xl'>35,000+ already joined</p>
                <h3 className='text-white font-medium text-4xl my-5'>Stay up-to-date with what <span className='block'>we’re doing</span> </h3>
            </div>
            <form className='contenedor md:flex md:items-center md:justify-center md:gap-x-5 md:w-1/3' onSubmit={validarFormulario}>
                <div className={mostrar ? 'bg-SoftRed rounded-lg' : 'rounded-lg bg-white'}>
                    <div className='flex items-center justify-between bg-white rounded-lg'>
                        <input type="email" placeholder='Enter your email address' className='w-full p-5 text-2xl rounded-lg ' onChange={e => setValido(e.target.value)} />
                        {mostrar && <img src={error} alt="Icon error" className='pr-5 ' />}
                    </div>
                {mostrar && <p className='text-white text-xl italic'>Whoops, make sure it's an email</p>}
                </div>
                {/*  */}
                
                <input type="submit" value='Contact Us' 
                className='cursor-pointer border-solid border-2 border-SoftRed w-full p-5 text-2xl rounded-lg bg-SoftRed text-white my-5 md:w-1/3 hover:bg-white hover:text-SoftRed' />
            </form>
        </div>
        <div className='bg-VeryDarkBlue flex flex-col py-10 md:grid grid-cols-3'>
            <div className='flex gap-x-5 items-center jusify-center mx-auto'>
                <div className='bg-SoftBlue rounded-full p-5 w-20 h-20 flex items-center justify-center '>
                    <BsBookmarkFill className='text-white'/>
                </div>
                <p className='text-white uppercase text-4xl'>bookmark</p>
            </div>
            <ul className='text-center  uppercase text-white md:flex gap-x-5 md:text-2xl'>
                <li className='my-10 hover:text-SoftRed cursor-pointer'>features</li>
                <li className='my-10 hover:text-SoftRed cursor-pointer'>pricing</li>
                <li className='my-10 hover:text-SoftRed cursor-pointer'>contact</li>
            </ul>
            <div className='flex justify-center items-center gap-x-10 text-white'>
                <GrFacebook size={30} className="hover:text-SoftRed cursor-pointer" />
                <SiTwitter size={30}  className="hover:text-SoftRed cursor-pointer"/>
            </div>
        </div>
        
    </footer>
  )
}

export default Footer