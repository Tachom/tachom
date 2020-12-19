import React from 'react'

export default function ServicesSection() {

    return(
        <div id="services" className='py-8'>
            <div className='services px-4'>
                <p className='text-3xl text-gray-800 font-bold'>Our Services</p>
            </div>
            <div className='py-4 flex justify-between flex-wrap'>
                <div className='p-4 sm:w-1/2 md:w-1/3 lg:w-1/4'>
                    <p className='py-2 text-4xl'>
                        📜
                    </p>
                    <p className='text-xl font-medium text-gray-800'>Strategy and Direction</p>
                    <p>
                        Defining the problem, identifying the sope nd finally, organising the 
                        implementation roadmap to bring out 100% of every project.
                    </p>
                </div>
                <div className='p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
                    <p className='py-2 text-4xl'>
                        ✒️
                    </p>
                    <p className='text-xl font-medium text-gray-800'>Design UI/UX</p>
                    <p>
                        We turn great ideas into meaningful and intuitive interfaces that 
                        are simple and easy to use and can improve people's lives.
                    </p>
                </div>
                <div className='p-4 sm:w-1/2 md:w-1/3 lg:w-1/4'>
                    <p className='py-2 text-4xl'>
                        👨🏿‍💻
                    </p>
                    <p className='text-xl font-medium text-gray-800'>Software Development</p>
                    <p>
                        It's {new Date().getFullYear()}, we should really step up or game a bit more right? We are here to tackle your ambitious software development projects.
                    </p>
                </div>
            </div>
        </div>
    )
}