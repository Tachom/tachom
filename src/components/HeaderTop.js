import React from 'react'
import sean from '../images/team/sean.png'
import chris from '../images/team/chris.png'

export default function HeaderTop() {

    return (
        <div className='h-screen flex flex-col justify-center py-8 space-x-4'>
            <div className=''>
                <div className="flex space-x-8 justify-center">
                    <div>
                        <div className='rounded-full h-32 bg-gray-200 flex flex-wrap'>
                            <img src={chris} alt='Tatenda Christopher Chinyamakobvu' className='h-full' />
                        </div>
                    </div>
                    <div>
                        <div className='rounded-full h-32 bg-gray-200 flex flex-wrap'>
                            <img src={sean} alt='Sean Tendai Muchenje' className='h-full' />
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
            <div className='flex justify-center mt-8'>
                <a href='#header' className='text-white bg-gray-800 px-8 py-4 rounded-md'>Continue</a>
            </div>
        </div>
    )
}