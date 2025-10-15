import React, { useState } from 'react';

const places = [
    // ...same as before
    {
        name: 'Red Fort',
        description: 'A historic fort in Delhi that served as the main residence of the Mughal emperors.',
        image: 'https://images.unsplash.com/photo-1705861144413-f02e38354648?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3',
        map: 'https://maps.google.com/maps?q=Red%20Fort&output=embed',
    },
    {
        name: 'Qutub Minar',
        description: 'A 73-meter tall minaret which is a UNESCO World Heritage Site in Delhi.',
        image: 'https://images.unsplash.com/photo-1632426237957-5ea14aae7100?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3',
        map: 'https://maps.google.com/maps?q=Qutub%20Minar&output=embed',
    },
    {
        name: 'India Gate',
        description: 'A war memorial located astride the Rajpath, on the eastern edge of the ceremonial axis of New Delhi.',
        image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        map: 'https://maps.google.com/maps?q=India%20Gate&output=embed',
    },
    {
        name: 'Rishikesh',
        description: "A spiritual city known as the 'Yoga Capital of the World', located in the foothills of the Himalayas along the Ganges River.",
        image: 'https://images.unsplash.com/photo-1713340546638-5e30e2b7b1fe?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
        map: 'https://maps.google.com/maps?q=Rishikesh&output=embed',
    },
    {
        name: 'Haridwar',
        description: 'One of the seven holiest places in Hinduism, famous for the Ganga Aarti at Har Ki Pauri ghat.',
        image: 'https://images.unsplash.com/photo-1653392083932-d5e9e7d2ccd1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGFyaWR3YXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600',
        map: 'https://maps.google.com/maps?q=Haridwar&output=embed',
    },
    {
        name: 'Taj Mahal',
        description: 'An iconic ivory-white marble mausoleum in Agra, built by Mughal emperor Shah Jahan.',
        image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        map: 'https://maps.google.com/maps?q=Taj%20Mahal&output=embed',
    },
];

const Gallery = () => {
    const [hoveredIdx, setHoveredIdx] = useState(null);

    return (
        <div className="w-full md:max-w-[100%] mx-auto mt-10 bg-gray-50 p-2 md:p-8 rounded-2xl shadow-lg">
            <div className="w-full md:max-w-[90%] mx-auto bg-white rounded-2xl p-8 shadow-lg"><h1 className="text-4xl font-bold text-center text-red-700">Tourist Attractions</h1>
            <p className="text-lg text-gray-600 text-center mt-4">Discover the rich heritage and modern marvels of NCR through these must-visit tourist attractions.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
                {places.map((place, idx) => (
                    <div key={place.name} className="bg-white p-6 rounded-lg shadow-md flex flex-col">
                        <div
                            className="relative w-full h-64 rounded-lg overflow-hidden cursor-pointer"
                            onMouseEnter={() => setHoveredIdx(idx)}
                            onMouseLeave={() => setHoveredIdx(null)}
                        >
                            <img
                                alt={place.name}
                                loading="lazy"
                                className={`object-cover transition-opacity duration-300 ${hoveredIdx === idx ? 'opacity-0' : 'opacity-100'}`}
                                style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, color: 'transparent' }}
                                src={place.image}
                            />
                            {hoveredIdx === idx && (
                                <div className="absolute inset-0 w-full h-full transition-opacity duration-300 opacity-100">
                                    <iframe
                                        title={`${place.name} Location`}
                                        src={place.map}
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        // loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                </div>
                            )}
                        </div>
                        <div className="flex flex-col flex-grow mt-4">
                            <h3 className="text-xl font-semibold text-red-600">{place.name}</h3>
                            <p className="text-gray-700 mt-2 text-justify flex-grow">{place.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
