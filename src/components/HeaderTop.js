import React from 'react'
import Navbar from './Navbar'

export default function HeaderTop() {

    return (
        <div className='h-screen flex flex-col justify-between pb-12 space-x-4'>
            <Navbar />
            <div className="h-full text-center flex justify-center">
                <div className="w-full w-2/3 flex flex-wrap justify-center">
                    <p className="font-bold text-6xl xl:text-8xl header-gradient-text my-auto w-full">
                        We integrate miracles and science
                    </p>

                    <div className="py-8 space-x-8">
                        <button className="bg-white py-4 px-8 rounded-full text-gray-900 font-bold">Contact us</button>
                        <button className="border py-4 px-8 rounded-full border-white text-white font-bold">Our services</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}