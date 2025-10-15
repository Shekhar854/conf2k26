import React from 'react'

const Sponsor = () => {
    return (
        <div>
            
        <div className="p-6 border border-gray-300 rounded-lg shadow-md max-w-[100%] mx-auto my-10 bg-gradient-to-r from-[#024CAD] to-[#0CC1E0] text-white">
                <h2 className="text-xl font-bold mb-4">Student Support</h2>
                <div className="space-y-4">
                    <div className="flex items-start">
                        <span className="text-yellow-400 mr-2">✓</span>
                        <p>More than 25% fee relaxation in registration fee for IEEE Student/Graduate Student members</p>
                    </div>
                    <div className="flex items-start">
                        <span className="text-yellow-400 mr-2">✓</span>
                        <p>Some travel assistance will be tried to arrange for IEEE Student/Graduate Student members from registration fee/External funding/Organizational funding
                        </p>
                    </div>
                </div>
            </div>
<div> </div>
            <style>
                {`
                    @keyframes scrollLeft {
                        0% { transform: translateX(100%); }
                        100% { transform: translateX(-100%); }
                    }
                    .animate-scroll {
                        animation: scrollLeft 20s linear infinite;
                    }
                `}
            </style>
            <div className="overflow-hidden whitespace-nowrap my-14">
                <div className="animate-scroll flex">
                    {/* Sponsor logos */}
                    <div className="mx-10 flex-shrink-0 relative h-28 w-auto">
                        <img 
                            alt="Logo for Sponsor 1 featuring blue and white colors, displayed in a horizontal scrolling row of sponsor logos on a conference webpage" 
                            loading="lazy" width="200" height="112" decoding="async" data-nimg="1" 
                            className="h-28 w-auto object-contain" style={{ color: "transparent" }} 
                            src="/logo/Logo2.jpg" 
                        />
                    </div>
                    <div className="mx-10 flex-shrink-0 relative h-28 w-auto">
                        <img 
                            alt="Logo for Sponsor 2 with stylized text and graphics, part of a series of sponsor logos shown in a scrolling banner for a professional conference" 
                            loading="lazy" width="200" height="112" decoding="async" data-nimg="1" 
                            className="h-28 w-auto object-contain" style={{ color: "transparent" }} 
                            src="/logo/Logo3.jpg" 
                        />
                    </div>
                    <div className="mx-10 flex-shrink-0 relative h-28 w-auto">
                        <img 
                            alt="Logo for Sponsor 3 showing a circular emblem with blue and yellow accents, included in a sponsor logo carousel for a conference event" 
                            loading="lazy" width="200" height="112" decoding="async" data-nimg="1" 
                            className="h-28 w-auto object-contain" style={{ color: "transparent" }} 
                            src="/logo/Logo4.jpg" 
                        />
                    </div>
                    <div className="mx-10 flex-shrink-0 relative h-28 w-auto">
                        <img 
                            alt="Logo for Sponsor 5 with abstract shapes and bold colors, presented among other sponsor logos in a scrolling display on a conference page" 
                            loading="lazy" width="200" height="112" decoding="async" data-nimg="1" 
                            className="h-28 w-auto object-contain" style={{ color: "transparent" }} 
                            src="/logo/Logo5.jpg" 
                        />
                    </div>
                    <div className="mx-10 flex-shrink-0 relative h-28 w-auto">
                        <img 
                            alt="Logo for IAS featuring the letters IAS in blue, part of a horizontal sponsor logo banner for a professional conference, set against a clean background" 
                            loading="lazy" width="200" height="112" decoding="async" data-nimg="1" 
                            className="h-28 w-auto object-contain" style={{ color: "transparent" }} 
                            src="/logo/Logo6.jpg" 
                        />
                    </div>
                    <div className="mx-4 flex-shrink-0 relative h-28 w-auto">
                        <img 
                            alt="Logo for Sponsor 1 with geometric design and blue tones, included in a scrolling sponsor logo section on a conference website" 
                            loading="lazy" width="200" height="112" decoding="async" data-nimg="1" 
                            className="h-28 w-auto object-contain" style={{ color: "transparent" }} 
                            src="/logo/Logo7.jpg" 
                        />
                    </div>
                    <div className="mx-4 flex-shrink-0 relative h-28 w-auto">
                        <img 
                            alt="Logo for Sponsor 2 with stylized initials and a modern look, displayed in a sponsor logo carousel for a conference" 
                            loading="lazy" width="200" height="112" decoding="async" data-nimg="1" 
                            className="h-28 w-auto object-contain" style={{ color: "transparent" }} 
                            src="/logo/Logo8.jpg" 
                        />
                    </div>
                    <img
                       alt="IEEE logo with blue globe and text IEEE, shown in a row of sponsor logos for a technical conference, conveying a professional and collaborative atmosphere"
                       loading="lazy" width="200" height="112" decoding="async" data-nimg="1"
                       className="h-28 w-auto object-contain" style={{ color: "transparent" }}
                       src="https://www.iccca.co.in/Sponser%20Logos/ieee.png"
                   />
                   <div className="mx-10 flex-shrink-0 relative h-28 w-auto">
                       <img
                           alt="Logo for Conf2"
                           loading="lazy" width="200" height="112" decoding="async" data-nimg="1"
                           className="h-28 w-auto object-contain" style={{ color: "transparent" }}
                           src="/logo/Conf2.png"
                       />
                   </div>
                </div>
            </div>

            <div className="p-6 border border-gray-300 rounded-lg shadow-md max-w-[100%] mx-auto my-10">
                <h2 className="text-red-600 text-xl font-bold border-b-2 border-gray-300 pb-2 mb-4">PUBLICATION OPPORTUNITY</h2>
                <p className="text-gray-700 mb-4">
                    All accepted and presented papers will be published as e-proceedings. Papers meeting IEEE Xplore's scope and quality standards will be considered for possible inclusion in the IEEE Xplore Digital Library, which is indexed in SCOPUS, Google Scholar, and other major databases.
                </p>
                <p className="text-gray-700 mb-4">
                    Selected high-quality papers will also be considered for publication in:
                </p>
                <ul className="text-gray-700 mb-4 ml-4">
                    <li>• IEEE Transactions on Industry Applications</li>
                    <li>• IEEE Industry Applications Magazine</li>
                </ul>
                <div className="flex items-center gap-4">
                     <img 
                        src="/logo/ieeeXplore.png" 
                        alt="IEEE Transactions logo showing the cover of IEEE Transactions on Industry Applications, featuring blue and white colors and technical graphics, associated with high-quality research publications" 
                        className="h-16" 
                    /> 
                    <img 
                        src="/logo/ieeeTransactions.jpg" 
                        alt="IEEE Xplore logo with stylized orange and blue text IEEE Xplore, representing the digital library for conference publications, set in a professional and academic context" 
                        className="h-20" 
                    />
                  
                </div>
            </div>

            <div className="p-6 border border-gray-300 rounded-lg shadow-md max-w-[100%] mx-auto my-10"><h2 className="text-red-600 text-xl font-bold border-b-2 border-gray-300 pb-2 mb-4">ACKNOWLEDGEMENT</h2><p className="text-gray-700 mb-4">The <a href="https://cmt3.research.microsoft.com/User/Login" className="text-blue-500 hover:text-blue-700 underline">Microsoft CMT service</a> was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.</p></div>
        </div>
    )
}

export default Sponsor