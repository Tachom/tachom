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
                        <div className='rounded-full h-32 bg-gray-200 flex flex-wrap'>
                            <a href='/team/chris'>
                                <img src={chris} alt='Tatenda Christopher Chinyamakobvu' className='h-32' />
                            </a>
                        </div>
                    </div>
                    <div>
                        <div className='rounded-full h-32 bg-gray-200 flex flex-wrap'>
                            <a href='/team/sean'>
                                <img src={sean} alt='Sean Tendai Muchenje' className='h-32' />    
                            </a>                            
                        </div>
                    </div>
                </div>
                <div className='w-full py-2'>
                    <p className='text-5xl font-bold text-gray-800 text-center'>
                        Hi! I'm Chris, and I'm Sean
                    </p>
                    <p className='text-center text-xl py-2 text-gray-600'>We Design and Build Softwares</p>
                </div>
            </div>
            <div className='py-2'></div>
            
            
        </div>
    )
}