import React from 'react'

export default function TailwindService() {

    return(
            <>
            <div className="p-4 w-full lg:w-1/2">
                <div className='w-full text-center rounded-xl bg-gray-100 px-8 md:py-12 py-4'>
                    <div className="w-full flex">
                        <div className="mx-auto h-40 p-8 w-40 rounded-xl border-4 border-white shadow-xl bg-gray-200">
                            <div className="h-full p-4 bg-tailwind"></div>
                        </div>
                    </div>
                    <div className="space-y-4 md:space-y-8 py-8">
                        <p className="text-3xl md:text-5xl font-bold text-gray-900">
                            We build with TailwindCSS
                        </p>
                        <p className="md:text-2xl text-gray-600 w-3/4 mx-auto">
                            Tailwind allows us to get your website up and running in no time. Because Tailwind is so low-level, it never encourages us to design the same site twice. 
                        </p>
                    </div>
                </div>
            </div>
            
            </>
            
    )
}