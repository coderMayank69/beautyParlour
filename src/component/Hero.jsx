

const Hero = () => {
  return (
    <div
      className="relative flex flex-col items-start justify-center
      bg-[url('/src/assets/background.png')] bg-no-repeat bg-cover bg-top
      min-h-screen overflow-hidden"
    >
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 via-transparent to-transparent z-10" />

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl z-0" />

      {/* Content */}
      <section className="mt-20 relative z-20 flex flex-col md:flex-row w-full items-center min-h-screen">
        {/* Text Content - Added pt-28 to account for fixed navbar */}
        <div className="md:w-1/2 mb-20 w-full px-6 md:px-16 lg:px-24 xl:px-32 text-white pt-28 md:pt-32">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full 
            border border-white/20 mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-white/90">Now accepting appointments</span>
          </div>

          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight font-extrabold max-w-2xl drop-shadow-lg">
            Your Beauty,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
              Our Expertise
            </span>
          </h1>

          <p className="max-w-xl mt-6 text-lg md:text-xl text-white/80 leading-relaxed">
            Indulge in luxury beauty treatments tailored just for you. From
            stunning hair makeovers to rejuvenating facials and flawless bridal
            looks—experience the art of beauty with our expert stylists.
          </p>

          {/* Stats */}
          <div className="flex gap-8 mt-8 mb-8">
            {[
              { number: "10+", label: "Years Experience" },
              { number: "5K+", label: "Happy Clients" },
              { number: "50+", label: "Expert Stylists" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-white">{stat.number}</p>
                <p className="text-sm text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-3 px-8 py-4 rounded-full text-white font-medium
              bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700
              hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300">
              <span>Book Appointment</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            
            <button className="flex items-center gap-3 px-8 py-4 rounded-full font-medium
              bg-white/10 backdrop-blur-sm border border-white/30 text-white
              hover:bg-white/20 hover:-translate-y-1 transition-all duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              <span>Watch Video</span>
            </button>
          </div>
        </div>

        {/* Hero Image - Positioned at bottom right */}
        <div className="absolute bottom-0 right-0 w-full md:w-[55%] lg:w-[50%] flex justify-end items-end">
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-30 
              blur-2xl group-hover:opacity-50 transition-opacity duration-700" />
            
            <img
              src="/assets/hero.png"
              alt="Beauty Salon Experience"
              className="relative w-full max-w-none md:max-w-lg lg:max-w-xl xl:max-w-2xl object-contain 
                transition-transform duration-700 ease-out group-hover:scale-105 drop-shadow-2xl"
            />

            {/* Floating Card */}
            <div className="absolute left-4 md:-left-8 bottom-32 bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-4 
              transform hover:scale-105 transition-transform duration-500 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <img className="w-10 h-10 rounded-full border-2 object-cover border-white" src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=200" alt="" />
                  <img className="w-10 h-10 rounded-full border-2 object-cover border-white" src="https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?q=80&w=200&auto=format&fit=crop" alt="" />
                  <img className="w-10 h-10 rounded-full border-2 object-cover border-white" src="https://images.unsplash.com/photo-1598257006626-48b0c252070d?q=80&w=200&auto=format&fit=crop" alt="" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-xs text-gray-600 mt-1">5000+ Happy Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/60 text-sm">Scroll Down</span>
        <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
