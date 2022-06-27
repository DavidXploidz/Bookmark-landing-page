import {useState} from 'react'
import arrow from '../images/icon-arrow.svg'
import {RiArrowDownSLine} from 'react-icons/ri'

const Preguntas = () => {


const [activa, setActiva] = useState(false)
const [activa2, setActiva2] = useState(false)
const [activa3, setActiva3] = useState(false)
const [activa4, setActiva4] = useState(false)



  return (
    <section className='text-center contenedor'>
        <h2 className='text-VeryDarkBlue text-4xl font-medium mt-40 w-2/3 mx-auto '>Frequently Asked Questions</h2>
        <p className='text-GrayishBlue my-5 md:w-1/2 mx-auto'> 
            Here are some of our FAQs. If you have any other questions you’d like 
            answered please feel free to email us.
        </p>
        <div className='text-VeryDarkBlue md:w-1/2 md:mx-auto'>
            <ul className='divide-y '>
                <li className='flex justify-between items-center py-5 md:cursor-pointer md:hover:text-SoftRed' 
                onClick={() => setActiva(!activa)}>What is Bookmark? <RiArrowDownSLine size={40} className={activa ? 'text-SoftRed rotate-180':'text-SoftBlue'}/></li>
                {activa && (
                    <p className='text-GrayishBlue text-left leading-loose'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt 
                        justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.
                    </p>
                )}
                
                <li className='flex justify-between items-center py-5 md:cursor-pointer md:hover:text-SoftRed' 
                onClick={() => setActiva2(!activa2)}>How can I request a new browser? <RiArrowDownSLine size={40} className={activa2 ? 'text-SoftRed rotate-180':'text-SoftBlue'} /></li>
                {activa2 && (
                    <p className='text-GrayishBlue text-left leading-loose'>
                        Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. 
                        Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, 
                        ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. 
                        Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.
                    </p>
                )}
                <li className='flex justify-between items-center py-5 md:cursor-pointer md:hover:text-SoftRed' 
                onClick={() => setActiva3(!activa3)}>Is there a mobile app? <RiArrowDownSLine size={40} className={activa3 ? 'text-SoftRed rotate-180':'text-SoftBlue'}/></li>
                {activa3 && (
                    <p className='text-GrayishBlue text-left leading-loose'>
                        Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. 
                        Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, 
                        ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. 
                        Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.
                    </p>
                )}
                <li className='flex justify-between items-center py-5 md:cursor-pointer md:hover:text-SoftRed' 
                onClick={() => setActiva4(!activa4)}>What about other Chromium browsers? <RiArrowDownSLine size={40} className={activa4 ? 'text-SoftRed rotate-180':'text-SoftBlue'}/></li>
                {activa4 && (
                    <p className='text-GrayishBlue text-left leading-loose'>
                        Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. 
                        Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, 
                        ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. 
                        Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.
                    </p>
                )}
                <li></li>
            </ul>
            <button className='bg-SoftBlue text-white px-6 py-4 rounded-lg text-2xl mt-10'>More info</button>
        </div>
    </section>
  )
}

export default Preguntas