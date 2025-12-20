const Footer = () => {
    const quickLinks = [
        { name: 'Home', path: '#home' },
        { name: 'About Us', path: '#about' },
        { name: 'Services', path: '#services' },
        { name: 'Testimonials', path: '#testimonials' },
    ];

    const services = [
        'Bridal Makeup',
        'Hair Styling',
        'Skincare & Facials',
        'Manicure & Pedicure',
    ];

    const socialLinks = [
        { 
            name: 'Facebook', 
            icon: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
            href: '#' 
        },
        { 
            name: 'Instagram', 
            icon: <><path d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5" /><path d="M16 11.37a4 4 0 1 1-7.914 1.173A4 4 0 0 1 16 11.37m1.5-4.87h.01" /></>,
            href: '#' 
        },
        { 
            name: 'WhatsApp', 
            icon: <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />,
            href: '#',
            fill: true
        },
    ];

    return (
        <footer className="relative overflow-hidden">
            {/* Background with gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900" />
            
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
            
            {/* Main Footer Content */}
            <div className="relative z-10">
                {/* Top Section */}
                <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
                        
                        {/* Brand Section */}
                        <div className="lg:col-span-1">
                            <a href="#" className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 
                                    flex items-center justify-center shadow-lg shadow-purple-500/30">
                                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                    </svg>
                                </div>
                                <span className="text-2xl font-bold font-playfair text-white">
                                    XYZ <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Beauty</span>
                                </span>
                            </a>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                Your destination for premium beauty and self-care. We transform looks and boost confidence with our expert services.
                            </p>
                            
                            {/* Social Links */}
                            <div className="flex items-center gap-3">
                                {socialLinks.map((social, index) => (
                                    <a 
                                        key={index}
                                        href={social.href}
                                        className="w-10 h-10 rounded-full bg-white/5 border border-white/10 
                                            flex items-center justify-center text-gray-400 
                                            hover:bg-purple-500 hover:border-purple-500 hover:text-white 
                                            hover:-translate-y-1 transition-all duration-300"
                                        aria-label={social.name}
                                    >
                                        <svg 
                                            width="18" 
                                            height="18" 
                                            viewBox="0 0 24 24" 
                                            fill={social.fill ? "currentColor" : "none"} 
                                            stroke={social.fill ? "none" : "currentColor"} 
                                            strokeWidth="2" 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round"
                                        >
                                            {social.icon}
                                        </svg>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-white font-semibold mb-6 flex items-center gap-2">
                                <span className="w-8 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                                Quick Links
                            </h4>
                            <ul className="space-y-3">
                                {quickLinks.map((link, index) => (
                                    <li key={index}>
                                        <a href={link.path} 
                                            className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-300 flex items-center gap-2">
                                            <svg className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                            </svg>
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services */}
                        <div>
                            <h4 className="text-white font-semibold mb-6 flex items-center gap-2">
                                <span className="w-8 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                                Our Services
                            </h4>
                            <ul className="space-y-3">
                                {services.map((service, index) => (
                                    <li key={index}>
                                        <a href="#services" 
                                            className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-300">
                                            {service}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h4 className="text-white font-semibold mb-6 flex items-center gap-2">
                                <span className="w-8 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                                Contact Us
                            </h4>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-400 text-sm">123 Beauty Lane, Lucknow, UP 226001</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-400 text-sm">+91 98765 43210</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-400 text-sm">hello@xyzbeauty.com</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10">
                    <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-gray-500 text-sm text-center md:text-left">
                            © 2025 XYZ Beauty Parlour. All rights reserved.
                        </p>
                        <p className="text-gray-500 text-sm">
                            Designed & Developed by{' '}
                            <a href="https://github.com/coderMayank69" 
                                className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold hover:from-purple-300 hover:to-pink-300 transition-all">
                                Mayank Singh
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
