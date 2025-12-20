import React from 'react'
import Title from './Title.jsx'

const items = [
  { id: 1, title: "Bridal Makeup", img: "/src/assets/bridal.jpg" },
  { id: 2, title: "Party & Occasion Makeup", img: "/src/assets/ocassional.png" },
  { id: 3, title: "Hair Styling & Hair Spa", img: "/src/assets/hair.jpg" },
  { id: 4, title: "Manicure & Pedicure", img: "/src/assets/manicure.jpg" },
  { id: 5, title: "Skincare & Facials", img: "/src/assets/skincare.png" },
  { id: 6, title: "Waxing & Threading", img: "/src/assets/threading.jpg" },
];

const Services = () => {
  return (
    <>
      <div className='flex flex-col justify-center items-center section text-stone-800 bg-gray-100 text-center'>
        <Title title="Our Beauty Services" subTitle="Carefully crafted treatments to enhance your natural beauty" align="center" font="font-playfair text-6xl md:text-6xl" />


        <div className=" max-w-6xl mx-auto p-6 mt-20 text-center">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {items.map((item) => (
              <div
                key={item.id}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer 
                hover:shadow-2xl hover:shadow-purple-200 hover:-translate-y-2 transition-all duration-500"
              >
                {/* Image Container with Overlay */}
                <div className="relative h-52 md:h-60 lg:h-72 overflow-hidden">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src={item.img}
                    alt={item.title}
                  />
                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-transparent to-transparent 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Icon Badge */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full 
                    flex items-center justify-center opacity-0 group-hover:opacity-100 
                    transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>

                {/* Text Content */}
                <div className="p-5">
                  <h3 className="text-lg md:text-xl font-semibold text-slate-800 tracking-wide 
                    transition-colors duration-300 group-hover:text-purple-600">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-2 opacity-0 group-hover:opacity-100 
                    transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    Explore service →
                  </p>
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-indigo-500 
                  transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            ))}
          </div>

          <button className="mx-auto flex items-center gap-3 mt-14 px-10 py-4 rounded-full text-white font-medium
            bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700
            hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-300 transition-all duration-300">
            <span>View all services</span>
            <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12.53 6.53a.75.75 0 0 0 0-1.06L7.757.697a.75.75 0 1 0-1.06 1.06L10.939 6l-4.242 4.243a.75.75 0 0 0 1.06 1.06zM0 6v.75h12v-1.5H0z"
                fill="#fff" />
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}

export default Services
