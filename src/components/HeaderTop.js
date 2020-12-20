import React from 'react'
import sean from '../images/team/sean.png'
import chris from '../images/team/chris.png'
import Navbar from './Navbar'

export default function HeaderTop() {

    return (
        <div className='h-screen flex flex-col justify-between pb-12 space-x-4'>
            <Navbar />
            <div className=''>
                <div className="flex space-x-8 justify-center">
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
                <div className='w-full py-2'>
                    <p className='text-5xl font-bold text-gray-800 text-center'>
                        Hi! its Chris and Sean
                    </p>
                    <p className='text-center text-xl py-2 text-gray-600'>We Design and Build Softwares</p>
                </div>
            </div>
            <div className='py-2 flex flex-wrap md:space-x-8'>
                <p className='bg-blue-200 text-blue-600 rounded-full p-2'>
                <svg height={20} width={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
                </p>
                <p className='text-blue-600 font-medium my-auto lg:text-xl '>Currently available for full time and freelance work</p>
            </div>
            
            
        </div>
    )
}