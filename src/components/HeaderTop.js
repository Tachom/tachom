import React from 'react'
import Navbar from './Navbar'
import MacosSection from './sections/macos'
import MobileDevelopmentSection from './sections/mobile'
import WebDesignSection from './sections/web-design'

export default function HeaderTop() {

    return (
        <div className="w-full bg-black text-gray-200">
            <div className='flex flex-col justify-between space-x-4 w-full header-top-banner'>
                <div className="max-w-5xl w-full mx-auto px-8 lg:px-0">
                    <Navbar />
                    <div className="h-full flex mx-auto py-4 md:py-8">
                        <div className="w-full lg:w-1/2 flex flex-wrap my-auto">
                            <p className="font-bold text-6xl my-auto w-full pt-8">
                                We integrate miracles and science
                            </p>
                            <p className="text-xl w-full py-4 text-gray-300">
                                In all our years of building awesome websites and apps it was never personal. 
                                And we tell you now. What we are about to do, to your idea. You are going to 
                                love it very very much. 
                            </p>
                            <div className="py-8 w-full">
                                <button className="text-white py-2 px-8 rounded-full bg-blue-700 font-bold">Tell us your idea</button>
                            </div>
                        </div>
                        <div className="w-0 h-0 lg:w-1/2 lg:h-auto p-8">
                            <div className="w-full h-full bg-techicons"/>
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