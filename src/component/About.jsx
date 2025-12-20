import React from 'react'
import Title from './Title'

const About = () => {
    return (
        <div className='section bg-gradient-to-b from-gray-50 to-white py-20'>
            <Title title="About Us" subTitle="Discover the Essence of Our Beauty Salon" align="center" font="font-playfair text-5xl md:text-6xl mb-2" />

            <section className="flex mt-16 flex-col md:flex-row items-center justify-center gap-12 lg:gap-20 max-w-6xl mx-auto px-6">
                {/* Image Container */}
                <div className="md:w-1/2 relative group">
                    {/* Decorative Background Element */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl opacity-20 
                        blur-xl group-hover:opacity-30 transition-opacity duration-500" />
                    
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/30">
                        <img 
                            className="w-full h-[400px] md:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                            src="/assets/about.jpg"
                            alt="About XYZ Beauty Parlour" 
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent opacity-0 
                            group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    {/* Floating Badge */}
                    <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 
                        transform group-hover:scale-105 transition-transform duration-500">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full 
                                flex items-center justify-center">
                                <span className="text-white font-bold text-lg">10+</span>
                            </div>
                            <div className="text-left">
                                <p className="text-sm text-gray-500">Years of</p>
                                <p className="font-semibold text-gray-800">Experience</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Text Content */}
                <div className="md:w-1/2 text-left">
                    <span className="inline-block px-4 py-1.5 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
                        Our Story
                    </span>
                    
                    <h3 className="text-2xl md:text-3xl font-playfair font-semibold text-gray-800 mb-6 leading-snug">
                        Where Beauty Meets Excellence
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                        Welcome to <span className="font-semibold text-purple-600">XYZ Beauty Parlour</span> — your destination for premium beauty and self-care. With over 10 years of experience, we've been transforming looks and boosting confidence for women across the city.
                    </p>
                    
                    <p className="mt-4 text-gray-600 leading-relaxed">
                        Our team of skilled stylists and beauty experts specialize in hair styling, bridal makeovers, facials, manicures, pedicures, and complete beauty treatments. We use only top-quality products to ensure you leave feeling refreshed and radiant.
                    </p>
                    
                    <p className="mt-4 text-gray-600 leading-relaxed">
                        At XYZ, we believe every woman deserves to feel beautiful. Step into our salon and experience personalized care in a warm, relaxing environment designed just for you.
                    </p>

                    {/* Features List */}
                    <div className="flex flex-wrap gap-4 mt-6">
                        {['Expert Stylists', 'Premium Products', 'Relaxing Ambiance'].map((feature, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-sm text-gray-700 font-medium">{feature}</span>
                            </div>
                        ))}
                    </div>

                    <button className="flex items-center gap-3 mt-8 px-8 py-3.5 rounded-full text-white font-medium
                        bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700
                        hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-300 transition-all duration-300">
                        <span>Read more</span>
                        <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12.53 6.53a.75.75 0 0 0 0-1.06L7.757.697a.75.75 0 1 0-1.06 1.06L10.939 6l-4.242 4.243a.75.75 0 0 0 1.06 1.06zM0 6v.75h12v-1.5H0z"
                                fill="#fff" />
                        </svg>
                    </button>
                </div>
            </section>
        </div>
    )
}

export default About
