import React from 'react'

const Track = () => {
    return (

        <>
            <div className="w-full md:max-w-[100%] mx-auto mt-10 bg-gray-50 p-2 md:p-8 rounded-2xl shadow-lg">
                 <div className="w-full md:max-w-[90%] mx-auto bg-white rounded-2xl p-8 shadow-lg"><h1 className="text-4xl font-bold text-center text-red-700">Conference Tracks</h1>
            <p className="text-lg text-gray-600 text-center mt-4 font-bold">Main Track: (ICNGWCET-2K26)</p>
            </div>
                <div className='grid  flex-wrap gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10'>
                    <div className='text-black bg-gray-100 p-5 rounded'>
                        Track-1:Special Session on Next-Gen wireless Communications (5G, 6G and Terahertz) and Modern antenna designs
                    </div>
                    <div className='text-black bg-gray-100 p-5 rounded'>
                        Track-2: Machines , IoT , IIoT and Robotics
                    </div>
                    <div className='text-black bg-gray-100 p-5 rounded'>
                        Track-3: Microwave, radar and satellite communications
                    </div>
                    <div className='text-black bg-gray-100 p-5 rounded'>
                        Track-4: Semiconductors and smart materials
                    </div>
                    <div className='text-black bg-gray-100 p-5 rounded'>
                        Track-5: Electromagnetics and its Bio-medical applications
                    </div>
                    <div className='text-black bg-gray-100 p-5 rounded'>
                        Track-6: Power Systems, Power Electronics and Control Engineering

                    </div>
                    <div className='text-black bg-gray-100 p-5 rounded'>
                        Track-7: Artificial Intelligence and its applications
                    </div>
                    <div className='text-black bg-gray-100 p-5 rounded'>
                        Track-8: Sustainable Development and Renewable Energy
                    </div>
                    <div className='text-black bg-gray-100 p-5 rounded'>
                        Track-9: Data Mining , Block-chain, Web-3 and Big Data Analysis
                    </div>
                    <div className='text-black bg-gray-100 p-5 rounded'>
                        Track-10: Industrial and Aerospace Electronics / Application
                    </div>
                    <div className='text-black bg-gray-100 p-5 rounded'>
                        Track-11: Advancement in Science & Engineering Technology
                    </div>
                    <div className='text-black bg-gray-100 p-5 rounded'>
                        Track-12: Machine Learning Algorithms and its applications
                    </div>

                </div>
            </div>
        </>

    )
}

export default Track