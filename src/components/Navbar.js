import React from 'react'

export default function Navbar() {

    return(
        <div className='flex space-x-8 py-8'>
                <a href="/">
                    Home
                </a>
                <a href="/blog">
                    Blog
                </a>
                <a href="/team">
                    Team
                </a>
                <a href="/hire">
                    Hire
                </a>
            </div>
            
    )
}