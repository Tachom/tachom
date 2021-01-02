import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import GetRecruitedSection from '../../components/sections/get-recruited'
import SEO from '../../components/seo'
import "../../utils/styles.css"

export default function Team() {

    return(
            <>
                <div className="w-full mx-auto">
                    <SEO title="Team"/>
                    <div className="max-w-5xl mx-auto">
                        <Navbar />
                    </div>
                    <div className="py-12 h-screen max-w-5xl mx-auto">
                        <h1 className="text-8xl font-bold py-4">Our Small Business Team is your team.</h1>
                        <p className="text-4xl font-bold py-4 text-gray-700">
                            Our Small Business Experts are ready to help. They’ll advise you on the devices 
                            to fit your budget, including special pricing,* and find you the best financing 
                            option. All backed by ongoing support to give you much-needed peace of mind.
                        </p>
                        <a href="#" className="text-blue-700 text-xl hover:underline hover:pointer py-2">
                            Talk to an Expert
                        </a>
                    </div>

                    <div className="py-12 p-4 lg:p-8 h-screen flex flex-wrap bg-team">
                        <div className="w-full h-full rounded-xl bg-white shadow p-8 lg:p-12 flex max-w-5xl flex mx-auto">
                            <div className="m-auto">
                                <p className="text-3xl font-bold py-4">Our team. On your team.</p>
                                <p className="text-7xl font-bold">
                                        Flexible teams who are creative. 
                                    <span className="text-gray-500">
                                        Alone we can do so little; together we can do so much.
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-5xl mx-auto">
                        <GetRecruitedSection/>
                    </div>
                </div>
                <Footer/>

            </>
            
    )
}