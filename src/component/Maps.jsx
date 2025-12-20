import React from 'react'
import Title from './Title.jsx'

const Maps = () => {
    const contactInfo = [
        {
            icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />,
            icon2: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />,
            title: 'Visit Us',
            info: '123 Beauty Lane, Lucknow, UP 226001',
        },
        {
            icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />,
            title: 'Call Us',
            info: '+91 98765 43210',
        },
        {
            icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />,
            title: 'Opening Hours',
            info: 'Mon - Sat: 10AM - 8PM',
        },
    ];

    return (
        <section className="relative py-20 bg-gray-100 overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-200/20 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <Title 
                    align="center" 
                    title="Find Us Here" 
                    subTitle="Visit our salon for an unforgettable beauty experience"
                    font="font-playfair text-4xl md:text-5xl"
                />

                {/* Contact Cards + Map Container */}
                <div className="mt-16 grid lg:grid-cols-3 gap-8">
                    
                    {/* Contact Info Cards */}
                    <div className="lg:col-span-1 space-y-4">
                        {contactInfo.map((item, index) => (
                            <div 
                                key={index}
                                className="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100
                                    hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1 
                                    transition-all duration-300"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 
                                        flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/30
                                        group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            {item.icon}
                                            {item.icon2}
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800 mb-1">{item.title}</h4>
                                        <p className="text-gray-500 text-sm leading-relaxed">{item.info}</p>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* CTA Button */}
                        <a 
                            href="https://maps.google.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 w-full py-4 rounded-xl text-white font-medium
                                bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700
                                hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                            </svg>
                            <span>Get Directions</span>
                        </a>
                    </div>

                    {/* Map */}
                    <div className="lg:col-span-2 relative group">
                        {/* Map Glow Effect */}
                        <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-3xl 
                            opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500" />
                        
                        <div className="relative bg-white rounded-2xl p-2 shadow-2xl overflow-hidden">
                            <iframe 
                                className="block w-full h-[400px] lg:h-[450px] rounded-xl"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4205.957553062206!2d80.88837326665222!3d26.796189165903666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bff869a386b47%3A0x66dfdb318cded5de!2sLooks%20Salon%20%26%20Academy!5e0!3m2!1sen!2sin!4v1766255661203!5m2!1sen!2sin" 
                                style={{ border: 0 }} 
                                allowFullScreen="" 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>

                        {/* Floating Info Card */}
                        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-xl 
                            px-6 py-4 flex items-center gap-4 border border-gray-100">
                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                            <span className="text-sm font-medium text-gray-700">Open Now</span>
                            <span className="text-gray-300">|</span>
                            <span className="text-sm text-gray-500">Closes at 8:00 PM</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Maps
