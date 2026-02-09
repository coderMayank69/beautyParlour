import React from 'react';

const Navbar = () => {
    const navLinks = [
        { name: 'Home', path: '#home' },
        { name: 'About', path: '#about' },
        { name: 'Services', path: '#services' },
        { name: 'Testimonials', path: '#testimonials' },
        { name: 'Contact', path: '#contact' },
    ];

    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 
            ${isScrolled 
                ? "bg-gray-200 backdrop-blur-xl shadow-lg shadow-purple-500/5 py-3" 
                : "bg-black/20 backdrop-blur-sm py-5"}`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
                
                {/* Logo */}
                <a href="#" className="flex items-center gap-3 group">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300
                        ${isScrolled 
                            ? "bg-gradient-to-br from-purple-600 to-indigo-600" 
                            : "bg-white/20 backdrop-blur-sm border border-white/30"}`}
                    >
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                    </div>
                    <span className={`text-xl font-bold font-playfair transition-colors duration-300
                        ${isScrolled ? "text-gray-800" : "text-white"}`}>
                        XYZ <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Beauty</span>
                    </span>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-1">
                    {navLinks.map((link, i) => (
                        <a 
                            key={i} 
                            href={link.path} 
                            className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                                ${isScrolled 
                                    ? "text-gray-600 hover:text-purple-600 hover:bg-purple-50" 
                                    : "text-white/80 hover:text-white hover:bg-white/10"}`}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Desktop CTA */}
                <div className="hidden lg:flex items-center gap-4">
                    <a href="tel:+919876543210" 
                        className={`flex items-center gap-2 text-sm font-medium transition-colors duration-300
                            ${isScrolled ? "text-gray-600 hover:text-purple-600" : "text-white/80 hover:text-white"}`}
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        +91 98765 43210
                    </a>
                    <button className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300
                        ${isScrolled 
                            ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:shadow-lg hover:shadow-purple-500/30 hover:-translate-y-0.5" 
                            : "bg-white text-gray-800 hover:bg-white/90 hover:-translate-y-0.5"}`}
                    >
                        Book Now
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    onClick={() => setIsMenuOpen(!isMenuOpen)} 
                    className={`lg:hidden p-2 rounded-lg transition-colors duration-300
                        ${isScrolled ? "text-gray-100 hover:bg-gray-100" : "text-white hover:bg-white/10"}`}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden fixed inset-0 z-50 transition-all duration-500 
                ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}
                style={isMenuOpen ? { background: 'white' } : {}}
            >
                {/* Backdrop */}
                <div 
                    className="absolute inset-0" 
                    style={{ background: isMenuOpen ? 'white' : 'transparent' }}
                    onClick={() => setIsMenuOpen(false)} 
                />
                
                {/* Menu Panel */}
                <div className={`absolute right-0 top-0 h-full w-80 max-w-full bg-transparent shadow-2xl transition-transform duration-500
                    ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
                >
                    {/* Menu Header */}
                    <div className="flex items-center justify-between p-6 border-b border-gray-100">
                        <span className="text-xl font-bold font-playfair text-gray-800">
                            XYZ <span className="text-purple-600">Beauty</span>
                        </span>
                        <button 
                            onClick={() => setIsMenuOpen(false)}
                            className="p-2 rounded-lg text-gray-500 bg-gray-100 transition-colors"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Menu Links */}
                    <div className="p-6 space-y-2">
                        {navLinks.map((link, i) => (
                            <a 
                                key={i} 
                                href={link.path} 
                                onClick={() => setIsMenuOpen(false)}
                                className="block px-4 py-3 rounded-xl text-black font-medium bg-purple-50 hover:text-purple-600 transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Menu Footer */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-100 space-y-4">
                        <a href="tel:+919876543210" 
                            className="flex items-center gap-3 text-gray-600 hover:text-purple-600 transition-colors"
                        >
                            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-xs text-gray-400">Call us</p>
                                <p className="font-medium">+91 98765 43210</p>
                            </div>
                        </a>
                        <button className="w-full py-3 rounded-full font-semibold text-white
                            bg-gradient-to-r from-purple-600 to-indigo-600 hover:shadow-lg hover:shadow-purple-500/30 transition-all"
                        >
                            Book Appointment
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;