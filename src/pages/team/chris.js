import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import Chris from '../../images/team/chris.png'
import "../../utils/styles.css"


export default function ChrisPage() {
    return(
        <>

        <div className='container pt-15 mx-auto max-w-5xl text-gray-500 divide-y'>
        <Navbar/>
            <div className='py-8 w-full'>
                <p className='text-2xl text-gray-800'>
                    My name is Tatenda Christopher Chinyamakobvu and I’m a freelance Software Developer with 5 years of 
                    experience designing and building creative software solutions.
                </p>
                <p>
                    I am currently open to software development oportunities. If you want, you can view my 
                        <span className='text-blue-600'>
                            <a href="https://www.linkedin.com/in/tate2301/"> LinkedIn</a>
                        </span> profile or download my updated resume.
                </p>

                <p>
                    I show casual pictures on 
                        <span className='text-blue-600'>
                            <a href="https:///www.instagram.com/tatendachristophr"> Instagram </a>
                        </span>
                     and talk on 
                        <span className='text-blue-600'>
                            <a href="mailto:tatendachris@gmail.com"> tatendachris@gmail.com</a>
                        </span>
                </p>
            </div>
            <div className='py-8'>
                <div className='w-full flex space-x-8'>
                    <div className='h-24 w-24 p-2 rounded-lg bg-red-200'>
                        <img src={Chris} alt="Chris Chinyamakobvu"/>
                    </div>
                    <div className='my-auto'>
                        <p className='text-gray-500'>RESUME</p>
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
                                        <p>Spring Boot</p>
                                        <p>Jetpack Android Tools</p>
                                        <p>Swift UI</p>
                                        <p>Micro-services</p>
                                        <p>WinForms</p>
                                        <p>MySQL</p>
                                        <p>PostgreSQL</p>
                                    </div>
                                    <div className='w-1/2'>
                                        <p className='py-2 text-xl font-bold text-gray-800'>Languages</p>
                                        <p>Javascript</p>
                                        <p>Kotlin</p>
                                        <p>Java</p>
                                        <p>C#</p>
                                        <p>Swift</p>
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
                                        <p>Webstorm</p>
                                        <p>Android Studio</p>
                                        <p>Visual Studio</p>
                                        <p>XCode</p>
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
                                <p className='font-medium text-gray-800'>Information Technology</p>
                                <p>August 2018 - Current</p>
                            </div>
                        </div>

                        <div className='md:my-4'>
                            <div className='py-4 mt-4'>
                                <p className='text-3xl font-bold text-gray-800'>Online Courses</p>
                            </div>
                            <div className='space-y-1 py-2'>
                                <p className='text-xl font-bold text-gray-800'>Pluralsight</p>
                                <p className='font-medium text-gray-800'>ReactJS Path</p>
                                <p>February 2020 - April 2020</p>
                            </div>

                            <div className='space-y-1 py-4'>
                                <p className='text-xl font-bold text-gray-800'>Coursera</p>
                                <p className='font-medium text-gray-800'>How to win a DataScience Competition</p>
                                <p>January 2020 - May 2020</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-8'>
                <p>
                    If you have any questions, feedback, or just want to say hello, don't hesitate to 
                    
                    <a href="mailto:tatendachris@gmail.com" className='font-medium text-blue-600'> send me an email.</a>
                </p>
            </div>
        </div>
    
        <Footer/>
        </>
    )
}