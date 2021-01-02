import React from 'react'

export default function MacosSection() {

    return(
            <>
                <div className="w-full h-full flex justify-between px-4 py-12 max-w-5xl mx-auto">
                    <div className="w-full md:w-1/2 flex lg:w-1/3 h-full py-auto">
                        <div className="">
                            <p className="text-yellow-500 text-2xl py-2 font-bold">Desktop Softwares</p>
                            <p className="text-6xl font-bold">Big Screen</p>
                            <p className="text-3xl">
                                We build softwares for Macs, Linux and Windows.
                            </p>
                            <p className="text-yellow-500 py-4 text-md font-bold flex space-x-4">
                                <span>Learn more </span>
                                <svg height={20} width={20} className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </p>
                        </div>
                    </div>
                    <div className="w-0 md:w-1/2 lg:w-2/3 bg-macos h-full">

                    </div>
                </div>
            </>
            
    )
}