import React from 'react'
import Navbar from './Navbar'
import MacosSection from './sections/macos'
import MobileDevelopmentSection from './sections/mobile'
import WebDesignSection from './sections/web-design'

export default function HeaderTop() {

    return (
        <div className="w-full bg-black text-gray-200">
            <div className='h-screen flex flex-col justify-between space-x-4 w-full header-top-banner'>
                <div className="max-w-5xl w-full mx-auto">
                    <Navbar />
                </div>
                <div className="h-full h-min-screen text-center flex justify-center mx-auto">
                    <div className="w-full lg:w-2/3 flex flex-wrap justify-center my-auto mx-auto">
                        <p className="font-bold text-6xl xl:text-7xl header-gradient-text my-auto w-full">
                            We integrate miracles and science
                        </p>
                        <p className="text-3xl lg:w-2/3 mx-auto w-full py-4 text-gray-300 font-bold">
                            In all our years of building awesome websites and apps it was never personal. 
                            And we tell you now. What we are about to do, to your idea. You are going to 
                            love it very very much. 
                        </p>

                        <div className="py-8 space-x-8 w-full">
                            <button className="text-white py-4 px-8 rounded-full bg-blue-700 font-bold">Hire us</button>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="py-12 px-4 header-section">
                <div className="p-auto h-full flex flex-wrap">
                    <MobileDevelopmentSection />
                </div>
            </div>
            <div className="py-12 px-4 header-section">
                <div className="p-auto h-full flex flex-wrap">
                    <WebDesignSection />
                </div>
            </div>
            <div className="py-12 px-4 h-620px header-section">
                <div className="p-auto h-full flex flex-wrap">
                    <MacosSection />
                </div>
            </div>
        </div>
    )
}