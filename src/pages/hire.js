import React from 'react'
import Footer from '../components/Footer'
import sean from '../images/team/sean.png'
import chris from '../images/team/chris.png'
import Navbar from '../components/Navbar'
import "../utils/styles.css"
import SEO from '../components/seo'

export default function HireUs() {

    return(
        <>
        <SEO/>
            <div className='container pt-15 mx-auto max-w-5xl text-gray-900 py-8 px-4'>
            <Navbar/>
            <div className="flex py-8 space-x-8 justify-center">
                    <div>
                        <div className='rounded-full h-32 bg-red-200 flex flex-wrap shadow-lg'>
                            <a href='/team/chris'>
                                <img src={chris} alt='Tatenda Christopher Chinyamakobvu' className='h-32' />
                            </a>
                        </div>
                    </div>
                    <div>
                        <div className='rounded-full h-32 bg-yellow-200 flex flex-wrap shadow-lg'>
                            <a href='/team/sean'>
                                <img src={sean} alt='Sean Tendai Muchenje' className='h-32' />    
                            </a>                            
                        </div>
                    </div>
                </div>
               <div className='py-8 text-center'>
                   <p className='text-5xl font-bold'>
                       Hello! We've been<br/> waiting for you.
                   </p>

                   <p className='text-2xl py-4'>
                       Fill in the form or 
                       <span className='ml-8 font-bold underline'>
                           <a href="mailto:tatendachris@gmail.com">Send us an email</a>
                       </span>
                   </p>
               </div>

               <form netlify data-netlify-recaptcha="true">
                <div className='py-8 space-y-4' >
                    <input className='p-4 border-2 border-gray-500 w-full rounded-md' placeholder='Full name' name='name' required />
                    <input className='p-4 border-2 border-gray-500 w-full rounded-md' placeholder='Email' name='email_address' required />
                    <input className='p-4 border-2 border-gray-500 w-full rounded-md' placeholder='Phone' name='phone_number' required />
                    <textarea className='p-4 border-2 border-gray-500 w-full rounded-md' placeholder='Tell us about your project' name='details' required />
                </div>

                <div className='flex justify-center py-8'>
                    <button type='submit' className='rounded-md py-4 px-8 bg-gray-900 text-white'>SUBMIT</button>
                </div>
               </form>
            
            </div>

            <Footer/>
        </>
    )
}