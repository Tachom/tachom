import React from 'react'

export default function Footer() {

    return(
            <>  
                <div className="p-8 w-full divide-y bg-gray-100">
                    <div className="max-w-5xl mx-auto p-4 flex">
                        <div className="w-1/2">
                            <p className="text-3xl md:text-5xl font-bold py-4">Need help creating your billion dollar app?</p>
                            <p className="md:text-xl">We’d love to help you out! Tell us a bit about you and your awesome project, then we’ll be in touch.</p>
                            <p className="py-8">
                                <a href="https://ojn1yd5k2bm.typeform.com/to/nA3tGPK2" target="_blank" className="text-white bg-blue-600 font-bold py-2 px-8 rounded-full">Tell us your idea</a>
                            </p>
                        </div>
                        <div className="w-1/2">

                        </div>
                    </div>
                    <div className="max-w-5xl mx-auto p-4 flex">
                        <p className="text-center">Tachom Developer Group {new Date().getFullYear()} &copy; &bull; Tachom Developer Group is a corporate division of Varisync (Private) Limited</p>
                    </div>
                </div>
            </>
            
    )
}