import React from 'react'

export default function Footer() {

    return (
        <div className='py-6 bg-gray-900'>
            <div className='container mx-auto'>
                <div className='flex flex-wrap px-4 divide-y divide-gray-500 space-y-8'>
                    <div className='w-full lg:w-1/2 px-4'>
                        <div className='py-4'>
                            <p className='text-3xl font-bold text-white'>About Us</p>
                        </div>
                        <div className=''>
                            <p className='text-gray-400 py-2'>
                                We are Tachom, a Software Engineering Team based in Zimbabwe. Specialized in creating awesome experiences on web and mobile devices.
                            </p>
                            <p className='text-gray-400 py-2'>
                                We turn great ideas into meaningful and intuitive software solutions that are simple and easy to use and can improve people's lives without compromising on security.
                            </p>
                            <p className='text-gray-400 py-2'>
                                We previously worked with severals startups and in the development of the Soterio COVID-19 Contact Tracing protocol.
                            </p>
                        </div>
                    </div>

                    <div className='w-full lg:w-1/2 px-4 lg:px-8'>
                        <div className='py-4'>
                            <div className='py-4'>
                                <p className='text-3xl font-bold text-white'>Have a project in mind</p>
                                <p className='text-gray-400 py-1 text-xl'>Let's turn it into reality</p>
                            </div>
                            <div className='py-4 space-y-4'>
                                <div className='p-4 py-auto flex rounded bg-gray-800 space-x-4 text-gray-400'>
                                    <svg height={20} width={20} className='ml-4 my-auto' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20" />
                                    </svg>
                                    <p className='my-auto'>Send us an Email</p>
                                </div>
                                
                                <div className='p-4 rounded flex space-x-4 bg-gray-800 text-gray-400'>
                                    <svg height={20} width={20} className="ml-4 my-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                    </svg>
                                    
                                    <p>Send us a DM on WhatsApp</p>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className='w-full pt-8 lg:pt-12 lg:mt-6 pb-4 text-gray-400 text-center'>
                        TEAM TACHOM &copy; 2020
                    </div>
                </div>
            </div>
        </div>
    )
}