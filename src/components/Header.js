import React from 'react'

export default function Header() {

    return(
        <div id="header" className='flex justify-center justify-center'>
            <div className='py-6 px-4 w-full lg:w-1/2'>
                <p className='text-4xl font-medium text-gray-800 py-4'>
                    Building software solutions and digital products.
                </p>
                <p className='py-2 text-xl text-gray-600'>
                    We are Team Tachom, a <span className='font-medium text-gray-800'>Software Engineering</span> team based in Zimbabwe. We develop creative but simple to use <span className='font-medium text-gray-800'>software solutions</span> without compromising on security and we are looking 
                    forward to working with you on your next big project.
                </p>
            </div>
        </div>
    )
}