import React from 'react'
import Title from './Title'
import { testimonials } from '../assets/assets'
import StarRating from './StarRating'

const Testimonial = () => {
  return (
    <div className='relative overflow-hidden py-20 bg-gradient-to-b from-gray-50 to-white'>
      {/* Decorative Elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl" />
      
      {/* Quote Icon Background */}
      <div className="absolute top-32 left-1/2 -translate-x-1/2 opacity-5">
        <svg className="w-64 h-64 text-purple-900" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <Title 
          align='center' 
          title='What Our Clients Say' 
          subTitle='Real experiences from women who trusted us with their beauty'
          font="font-playfair text-4xl md:text-5xl"
        />

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className={`group relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100
                hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2 
                transition-all duration-500 ${index === 1 ? 'lg:scale-105 lg:z-10' : ''}`}
            >
              {/* Accent Line */}
              <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-purple-500 to-pink-500 
                rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Quote Icon */}
              <div className="absolute -top-4 right-6 w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-500 
                rounded-full flex items-center justify-center shadow-lg shadow-purple-500/30">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-4">
                <StarRating rating={testimonial.rating} />
              </div>

              {/* Review Text */}
              <p className="text-gray-600 leading-relaxed mb-6 min-h-[100px]">
                "{testimonial.review}"
              </p>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-5" />

              {/* User Info */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full 
                    opacity-0 group-hover:opacity-100 blur transition-opacity duration-500" />
                  <img 
                    className="relative w-14 h-14 rounded-full object-cover border-2 border-white shadow-md" 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 font-playfair text-lg">{testimonial.name}</p>
                  <p className="text-sm text-purple-600">{testimonial.info}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-500 mb-4">Join thousands of satisfied customers</p>
          <button className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-medium
            bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700
            hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300">
            <span>Book Your Experience</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
