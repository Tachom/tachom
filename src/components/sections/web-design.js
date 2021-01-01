import React from 'react'

export default function WebDesignSection() {

    return(
            <>
                <div className="w-full h-full flex flex-wrap justify-between px-4 py-12 max-w-5xl mx-auto">
                <div className="w-0 md:w-1/2 lg:w-2/3 bg-web-design lg:h-full">

                </div>
                    <div className="w-full flex md:w-1/2 lg:w-1/3 lg:h-full lg:py-auto lg:px-4">
                        <div className="">
                            <p className="text-indigo-600 text-2xl py-2 font-bold">Web Development</p>
                            <p className="text-6xl font-bold">Security Giants.</p>
                            <p className="text-3xl">
                                We build secure web applications.
                            </p>
                            <p className="text-indigo-600 py-4 text-md font-bold flex space-x-4">
                                <span>Learn more </span>
                                <svg height={20} width={20} className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </p>
                        </div>
                    </div>
                </div>
            </>
            
    )
}