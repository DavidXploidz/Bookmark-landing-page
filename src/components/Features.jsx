import {useState} from 'react'
import tabIMG1 from '../images/illustration-features-tab-1.svg'
import tabIMG2 from '../images/illustration-features-tab-2.svg'
import tabIMG3 from '../images/illustration-features-tab-3.svg'

const Features = () => {

    const [tipo, setTipo] = useState('')

    const [tab1, setTab1] = useState(true)
    const [tab2, setTab2] = useState(false)
    const [tab3, setTab3] = useState(false)


    const cambiarContenido = (e) => {
        e.preventDefault()
        if(e.target.value === 'tab1'){
            setTab1(true)
            setTab2(false)
            setTab3(false)
        }else if(e.target.value === 'tab2'){
            setTab1(false)
            setTab2(true)
            setTab3(false)
        }else if(e.target.value === 'tab3'){
            setTab1(false)
            setTab2(false)
            setTab3(true)
        }

    }


  return (
    <section className='text-center contenedor h-screen'>
        <div>
            <h2 className='text-VeryDarkBlue text-4xl font-medium'>Features</h2>
            <p className='text-GrayishBlue my-5 md:w-1/3 mx-auto'>
                Our aim is to make it quick and easy for you to access your favourite websites. 
                Your bookmarks sync between your devices so you can access them on the go.
            </p>
        </div>
        <div className='text-GrayishBlue flex flex-col md:mt-20'>
           <div className='flex flex-col divide-y md:flex-row md:divide-y-0 mx-auto'>
                <button onClick={cambiarContenido} value="tab1" className={tab1 ? 'p-5 text-VeryDarkBlue ': 'p-5 hover:text-SoftRed'}>Simple Bookmarking <span className={tab1 ?'block border-t-4 border-SoftRed mx-auto w-1/2 md:w-full ' : ''}></span></button>
                <button onClick={cambiarContenido} value="tab2" className={tab2 ? 'p-5 text-VeryDarkBlue': 'p-5 hover:text-SoftRed'}>Speedy Searching <span className={tab2 ?'block border-t-4 border-SoftRed mx-auto w-1/2 md:w-full ' : ''}></span></button>
                <button onClick={cambiarContenido} value="tab3" className={tab3 ? 'p-5 text-VeryDarkBlue': 'p-5 hover:text-SoftRed'}>Easy Sharing <span className={tab3 ?'block border-t-4 border-SoftRed mx-auto w-1/2 md:w-full ' : ''}></span></button>
               
                
            <p></p>
           </div>
           <div className='mt-32 grid grid-cols-1 md:grid-cols-2 md:place-items-center '>
                {tab1 &&  <img src={tabIMG1} alt="Tab 1" className='place-items-end' /> }
                {tab2 &&  <img src={tabIMG2} alt="Tab 1" /> }
                {tab3 &&  <img src={tabIMG3} alt="Tab 1" /> }
                <div className='mt-10  md:text-left'>
                    <h3 className='text-VeryDarkBlue text-4xl font-medium'>
                        {tab1 && 'Bookmark in one click'}
                        {tab2 && 'Intelligent search'}
                        {tab3 && 'Share your bookmarks'}
                    </h3>
                    <p className='mt-5 md:w-3/6 '>
                        {tab1 && `Organize your bookmarks however you like. Our simple drag-and-drop interface 
                        gives you complete control over how you manage your favourite sites.`}
                        {tab2 && `Our powerful search feature will help you find saved sites in no time at all. 
                        No need to trawl through all of your bookmarks.`}
                        {tab3 && `Easily share your bookmarks and collections with others. Create a shareable 
                        link that you can send at the click of a button.`}
                        
                    </p>
                    <button className='bg-SoftBlue text-white px-6 py-4 rounded-lg text-xl mt-10'>More info</button>
                </div>
           </div>
        </div>
    </section>
  )
}

export default Features