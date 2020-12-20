import React from 'react'
import Sean from '../../images/team/sean.png'


export default function SeanPage() {
    return(
        <div className='container mx-auto w-full text-gray-600 divide-y'>
            <div className='py-8 w-full'>
                <p className='text-2xl text-gray-800'>
                    My name is Sean Tendai Muchenje and I’m a freelance Software Developer with 3 years of 
                    experience designing and building creative software solutions.
                </p>
                <p>
                    I am currently open to software development oportunities. If you want, you can view my 
                        <span className='text-blue-600'>
                            <a href="/linkedin"> LinkedIn</a>
                        </span> profile or download my updated resume.
                </p>

                <p>
                    I show casual pictures on 
                        <span className='text-blue-600'>
                            <a href="/linkedin"> Instagram </a>
                        </span>
                     and talk on 
                        <span className='text-blue-600'>
                            <mailto href="/linkedin"> seanshairah@gmail.com</mailto>
                        </span>
                </p>
            </div>
            <div className='py-8'>
                <div className='w-full flex space-x-8'>
                    <div className='h-24 w-24 p-2 rounded-lg bg-gray-200'>
                        <img src={Sean} alt="Sean Muchenje"/>
                    </div>
                    <div className='my-auto'>
                        <p className='text-gray-500'>Read more about me</p>
                        <p className='text-5xl font-bold text-gray-800'>Read more about me
</p>
                    </div>
                </div>
                <div className='space-y-4 py-8 flex flex-wrap'>
                    <div className='w-full md:w-1/2'>
                        <div>
                            <div className='py-4'>
                                <p className='text-3xl font-bold text-gray-800'>Work Experience</p>
                            </div>
                            <div className='space-y-1'>
                                <p className='text-xl font-bold text-gray-800'>Chinhoyi University of Technology</p>
                                <p className='font-medium text-gray-800'>Contact Tracing - Software Engineer</p>
                                <p>May 2020 - Novemeber 2020</p>
                            </div>
                        </div>

                        <div className='space-y-4 py-8'>
                            <div>
                                <div className='py-4'>
                                    <p className='text-3xl font-bold text-gray-800'>Skills</p>
                                </div>
                                <div className='flex'>
                                    <div className='w-1/2'>
                                        <p className='py-2 text-xl font-bold text-gray-800'>Technologies</p>
                                        <p>OAuth Framework</p>
                                        <p>ReactJS</p>
                                        <p>Jetpack Android Tools</p>
                                        <p>Micro-services</p>
                                        <p>OpenID Connect</p>
                                        <p>MongoDB</p>
                                        <p>OpenID Connect</p>
                                    </div>
                                    <div className='w-1/2'>
                                        <p className='py-2 text-xl font-bold text-gray-800'>Languages</p>
                                        <p>Javascript</p>
                                        <p>Python</p>
                                        <p>PHP</p>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='space-y-4 py-8'>
                            <div>
                                <div className='py-4'>
                                    <p className='text-3xl font-bold text-gray-800'>Tools</p>
                                </div>
                                <div className='flex'>
                                    <div className='w-1/2'>
                                        <p>Figma</p>
                                        <p>Intelij IDEAJ</p>
                                        <p>Android Studio</p>
                                        <p>Adobe XD</p>
                                        <p>Visual Studio</p>
                                        <p>Visual Studio Code</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='w-full md:w-1/2'>
                        <div>
                            <div className='py-4'>
                                <p className='text-3xl font-bold text-gray-800'>Education</p>
                            </div>
                            <div className='space-y-1'>
                                <p className='text-xl font-bold text-gray-800'>Chinhoyi University of Technology</p>
                                <p className='font-medium text-gray-800'>Mechatronics Engineering</p>
                                <p>October 2020 - Current</p>
                            </div>
                        </div>

                        <div className='md:my-4'>
                            <div className='py-4 mt-4'>
                                <p className='text-3xl font-bold text-gray-800'>Online Courses</p>
                            </div>
                            <div className='space-y-1'>
                                <p className='text-xl font-bold text-gray-800'>Pluralsight</p>
                                <p className='font-medium text-gray-800'>ReactJS Path</p>
                                <p>February 2020 - May 2020</p>
                            </div>

                            <div className='space-y-1'>
                                <p className='text-xl font-bold text-gray-800'>Egghead</p>
                                <p className='font-medium text-gray-800'>Building applications with idiomatic Redux</p>
                                <p>April 2020 - May 2020</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}