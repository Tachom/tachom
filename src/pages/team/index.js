import React from 'react'
import Navbar from '../../components/Navbar'
import GetRecruitedSection from '../../components/sections/get-recruited'
import SEO from '../../components/seo'

export default function Team() {

    return(
            <>
                <div className="w-full max-w-5xl mx-auto">
                    <SEO title="Team"/>
                    <Navbar />
                    <GetRecruitedSection/>
                </div>
            </>
            
    )
}