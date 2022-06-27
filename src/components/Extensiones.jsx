import React from 'react'
import crome from '../images/logo-chrome.svg'
import firefox from '../images/logo-firefox.svg'
import opera from '../images/logo-opera.svg'
import dot from '../images/bg-dots.svg'
const Extensiones = () => {
  return (
    <section className='contenedor text-center'>
        <h2 className='text-VeryDarkBlue text-4xl font-medium'>Download the extension</h2>
        <p className='text-GrayishBlue my-5 md:w-1/2 mx-auto'> 
            We’ve got more browsers in the pipeline. Please do let us know if you’ve 
            got a favourite you’d like us to prioritize.
        </p>
        
        <div className='contenedor-chico grid grid-cols-1 md:flex gap-x-10 '>
            {/**Card 1 */}
            <div className='shadow-xl pt-20 pb-10 flex flex-col items-center rounded-3xl w-3/4 mx-auto mb-10 md:mb-40 '>
                <img src={crome} alt="Logo de navegador" />
                <h3 className='text-VeryDarkBlue text-3xl font-medium mt-10 '>Add to Chrome</h3>
                <p className='text-GrayishBlue text-2xl my-5'>Minimum version 62</p>
                <img src={dot} alt="icon-bg-dot" className='w-full' />
                <button className='capitalize bg-SoftBlue text-white py-6 px-10 rounded-lg mt-10 text-2xl font-medium'>Add & install extension</button>
            </div>
            {/**Card 2 */}
            <div className='shadow-xl pt-20 pb-10 flex flex-col items-center rounded-3xl w-3/4 mx-auto mb-10 md:mt-20 md:mb-20 '>
                <img src={firefox} alt="Logo de navegador" />
                <h3 className='text-VeryDarkBlue text-3xl font-medium mt-10 '>Add to Firefox</h3>
                <p className='text-GrayishBlue text-2xl my-5'>Minimum version 55</p>
                <img src={dot} alt="icon-bg-dot" className='w-full' />
                <button className='capitalize bg-SoftBlue text-white py-6 px-10 rounded-lg mt-10 text-2xl font-medium'>Add & install extension</button>
            </div>
            {/**Card 3 */}
            <div className='shadow-xl pt-20 pb-10 flex flex-col items-center rounded-3xl w-3/4 mx-auto mb-10 md:mt-40 md:mb-0 '>
                <img src={opera} alt="Logo de navegador" />
                <h3 className='text-VeryDarkBlue text-3xl font-medium mt-10 '>Add to Opera</h3>
                <p className='text-GrayishBlue text-2xl my-5'>Minimum version 46</p>
                <img src={dot} alt="icon-bg-dot" className='w-full' />
                <button className='capitalize bg-SoftBlue text-white py-6 px-10 rounded-lg mt-10 text-2xl font-medium'>Add & install extension</button>
            </div>
        </div>

    </section>
  )
}

export default Extensiones