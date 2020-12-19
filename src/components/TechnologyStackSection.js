import React from 'react'

export default function TechnologyStackSection() {
    return (
        <div className='p-4 py-8'>
            <div className='py-4'>
                <p className='text-red-500'>TECHNOLOGY STACK</p>
                <p className='text-3xl font-bold text-gray-800 py-2'>Development stacks that drive innovation</p> 
                <p className='text-gray-600'>
                    We work with a range of technologies that fit your 
                    business requirements. Core expertise include JavaScript, Java, and PHP.
                </p>
            </div>
            <div className='flex flex-wrap py-4'>
                <div className='w-full md:w-1/3 sm:w-1/2 lg:w-1/4 p-2'>
                    <div className='h-64 bg-gray-700 p-4 flex justify-center rounded-t-md'>
                        <img src="https://spring.io/images/spring-logo-9146a4d3298760c2e7e49595184e1975.svg" alt="Spring Boot Logo" className='h-full' />
                    </div>
                    <div className='py-4 flex justify-center bg-gray-900 text-white text-xl rounded-b-md'>
                        <p className='text-center'>Spring Boot</p>
                    </div>
                </div>
                
                <div className='w-full md:w-1/3 sm:w-1/2 lg:w-1/4 p-2'>
                    <div className='h-64 bg-blue-400 p-4 flex justify-center rounded-t-md'>
                        <img src="https://assets.atlanticbt.com/content/uploads/2019/12/l_tech-react2.svg" alt="React" className='h-full' />
                    </div>
                    <div className='py-4 flex justify-center bg-blue-900 text-white text-xl rounded-b-md'>
                        <p className='text-center'>React</p>
                    </div>
                </div>
                <div className='w-full md:w-1/3 sm:w-1/2 lg:w-1/4 p-2'>
                    <div className='h-64 bg-yellow-600 p-4 flex justify-center rounded-t-md'>
                        <img src="https://assets.atlanticbt.com/content/uploads/2020/01/l_tech-magento.svg" alt="Magento" className='h-full' />
                    </div>
                    <div className='py-4 flex justify-center bg-yellow-900 text-white text-xl rounded-b-md'>
                        <p className='text-center'>Magento</p>
                    </div>
                    
                </div>
                <div className='w-full md:w-1/3 sm:w-1/2 lg:w-1/4 p-2'>
                    <div className='h-64 bg-gray-700 p-4 flex justify-center rounded-t-md'>
                        <img src="https://nodejs.org/static/images/logo.svg" alt="Node" className='h-full' />
                    </div>
                    <div className='py-4 flex justify-center bg-gray-900 text-white text-xl rounded-b-md'>
                        <p className='text-center'>Node JS</p>
                    </div>
                </div>
                <div className='w-full md:w-1/3 sm:w-1/2 lg:w-1/4 p-2'>
                    <div className='h-64 bg-blue-500 p-4 flex justify-center rounded-t-md'>
                        <img src="https://assets.atlanticbt.com/content/uploads/2020/01/i_php-4.svg" alt="PostgreSQL" className='h-full' />
                    </div>
                    <div className='py-4 flex justify-center bg-blue-900 text-white text-xl rounded-b-md'>
                        <p className='text-center'>PostgreSQL</p>
                    </div>
                </div>
                <div className='w-full md:w-1/3 sm:w-1/2 lg:w-1/4 p-2'>
                    <div className='h-64 bg-gray-700 p-4 flex justify-center rounded-t-md'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg" alt="PHP" className='h-full' />
                    </div>
                    <div className='py-4 flex justify-center bg-gray-900 text-white text-xl rounded-b-md'>
                        <p className='text-center'>PHP</p>
                    </div>
                </div>
                <div className='w-full md:w-1/3 sm:w-1/2 lg:w-1/4 p-2'>
                    <div className='h-64 bg-blue-700 p-4 flex justify-center rounded-t-md'>
                        <img src="https://dbdb.io/media/logos/Cloud_Bigtable.png" alt="Google BigTable" className='h-full' />
                    </div>
                    <div className='py-4 flex justify-center bg-blue-900 text-white text-xl rounded-b-md'>
                        <p className='text-center'>Google BigTable</p>
                    </div>
                </div>
                <div className='w-full md:w-1/3 sm:w-1/2 lg:w-1/4 p-2'>
                    <div className='h-64 bg-gray-300 p-4 flex justify-center rounded-t-md'>
                        <img src="https://assets.atlanticbt.com/content/uploads/2020/01/l_tech-python.svg" alt="Python" className='h-full' />
                    </div>
                    <div className='py-4 flex justify-center bg-gray-400 text-gray-800 text-xl rounded-b-md'>
                        <p className='text-center'>Python</p>
                    </div>
                </div>
                 
            </div>

        </div>
    )
}
