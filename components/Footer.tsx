import React, { useEffect, useRef } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Github, Phone, Mail } from 'lucide-react';
import { partners } from '../constants';

const Footer: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.3;
        }
    }, []);

    return (
        <footer className="bg-background relative pt-24">
            {/* Globe Video Background Area */}
            <div className="relative w-full h-[56rem] md:h-[40rem] overflow-hidden">
                <video 
                    ref={videoRef}
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="absolute top-0 left-0 w-full h-full object-cover opacity-30 mix-blend-screen scale-110"
                >
                    <source src="https://github.com/designmonks/webvideos/raw/refs/heads/main/footer_globe.mp4" type="video/mp4" />
                </video>
                
                {/* Logo Overlays */}
                <div className="absolute bottom-16 left-0 w-full flex justify-center gap-4">
                    <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-4 w-32 h-24 flex items-center justify-center hover:scale-105 transition-transform border border-white/10">
                        <img src="https://cdn.prod.website-files.com/690c287dbe2911a89643cc8e/6912f07cd9fc9f2295eaef1a_Government_Seal_of_Bangladesh.svg%201.png" alt="Gov Seal" className="max-w-full max-h-full" />
                    </div>
                    <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-4 w-32 h-24 flex items-center justify-center hover:scale-105 transition-transform border border-white/10">
                        <img src="https://cdn.prod.website-files.com/690c287dbe2911a89643cc8e/6912f04d3ef2f83c874f2519_Layer_1%20(9).svg" alt="BASIS" className="max-w-full max-h-full" />
                    </div>
                    <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-4 w-32 h-24 flex items-center justify-center hover:scale-105 transition-transform border border-white/10">
                        <img src="https://cdn.prod.website-files.com/690c287dbe2911a89643cc8e/6912f04d12b615011a04dd97_Layer_1%20(10).svg" alt="e-CAB" className="max-w-full max-h-full" />
                    </div>
                </div>
                
                {/* Gradient Fade */}
                <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
            </div>

            <div className="max-w-7xl mx-auto px-5 pt-10 pb-5 relative z-10">
                <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
                    {/* Left Column */}
                    <div className="md:w-1/3">
                        <h1 className="text-3xl font-black text-white mb-8">SJ <span className="text-primary">IT</span> LTD</h1>
                        <div className="flex gap-4 flex-wrap">
                            {[Facebook, Twitter, Instagram, Linkedin, Youtube, Github].map((Icon, i) => (
                                <a key={i} href="#" className="border border-primary/50 rounded-full w-12 h-12 flex items-center justify-center hover:bg-primary hover:text-black text-white transition-all cursor-pointer group hover:scale-110">
                                    <Icon className="w-5 h-5 transition-transform group-hover:rotate-12" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="md:w-1/3 flex justify-between">
                        <div>
                            <h4 className="text-xl font-bold text-white mb-6">Company</h4>
                            <ul className="space-y-4 text-secondary font-medium">
                                {['About', 'Blog', 'Portfolio', 'Pricing', 'Privacy Policy', 'Terms and Conditions'].map(item => (
                                    <li key={item}><a href="#" className="hover:text-primary transition-colors">{item}</a></li>
                                ))}
                            </ul>
                        </div>
                        <div className="w-px bg-primary/30 h-auto mx-4"></div>
                        <div>
                            <h4 className="text-xl font-bold text-white mb-6">Services</h4>
                            <ul className="space-y-4 text-secondary font-medium">
                                {['All Services', 'Web Development', 'Content Development', 'E-commerce Development', 'Digital Marketing', 'Local SEO'].map(item => (
                                    <li key={item}><a href="#" className="hover:text-primary transition-colors">{item}</a></li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Contact Columns (Fixed Layout) */}
                    <div className="md:w-1/3 space-y-4">
                        {/* BD Address Card */}
                        <div className="bg-white/5 backdrop-blur-xl rounded-[1.3rem] p-6 hover:bg-white/10 transition-colors border border-white/5 group">
                            <div className="flex gap-4">
                                <div className="w-10 h-7 shrink-0 rounded-[4px] overflow-hidden shadow-sm mt-1 ring-1 ring-white/10">
                                    <img src="https://cdn.prod.website-files.com/690c287dbe2911a89643cc8e/6912faf9e2efcbccdd1616ea_image%2013.svg" className="w-full h-full object-cover" alt="BD" />
                                </div>
                                <div>
                                    <h5 className="text-white font-bold text-sm mb-1">Dhaka, Bangladesh</h5>
                                    <p className="text-secondary text-xs leading-relaxed mb-3">
                                        Nahar Tower, 124–Avenue 3, Block C, Banasree, Rampura, Dhaka – 1219
                                    </p>
                                    <div className="flex flex-col gap-2">
                                        <a href="tel:+8801300460411" className="text-white text-xs font-semibold hover:text-primary transition-colors flex items-center gap-2">
                                            <Phone className="w-3 h-3 text-primary" /> +88 01300-460411
                                        </a>
                                        <a href="mailto:info@sjitltd.com" className="text-white text-xs font-semibold hover:text-primary transition-colors flex items-center gap-2">
                                            <Mail className="w-3 h-3 text-primary" /> info@sjitltd.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* USA Address Card */}
                        <div className="bg-white/5 backdrop-blur-xl rounded-[1.3rem] p-6 hover:bg-white/10 transition-colors border border-white/5 group">
                            <div className="flex gap-4">
                                <div className="w-10 h-7 shrink-0 rounded-[4px] overflow-hidden shadow-sm mt-1 ring-1 ring-white/10">
                                    <img src="https://cdn.prod.website-files.com/690c287dbe2911a89643cc8e/6912fc25ed71f28b5ad7dfa8_image%2012.png" className="w-full h-full object-cover" alt="USA" />
                                </div>
                                <div>
                                    <h5 className="text-white font-bold text-sm mb-1">Virginia, USA</h5>
                                    <p className="text-secondary text-xs leading-relaxed mb-3">
                                        6800 Backlick Rd #303, Springfield, VA 22150, United States
                                    </p>
                                    <div className="flex flex-col gap-2">
                                        <a href="tel:+15716668500" className="text-white text-xs font-semibold hover:text-primary transition-colors flex items-center gap-2">
                                            <Phone className="w-3 h-3 text-primary" /> +1 (571) 666–8500
                                        </a>
                                        <a href="mailto:contact@sjitltd.com" className="text-white text-xs font-semibold hover:text-primary transition-colors flex items-center gap-2">
                                            <Mail className="w-3 h-3 text-primary" /> contact@sjitltd.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Partner Logos Bottom */}
                <div className="py-8 mb-5">
                    <div className="flex flex-wrap justify-between items-center gap-4">
                        <div className="flex flex-col items-center">
                            <img src="https://cdn.prod.website-files.com/690c287dbe2911a89643cc8e/69130ebd9886a42e144c2c91_Group%20448.svg" alt="Partner" className="h-7 mb-1 filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all" />
                            <span className="text-xs text-secondary font-medium">Professional Partner</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="https://cdn.prod.website-files.com/690c287dbe2911a89643cc8e/69130ebb6a636b80a79305da_Group%20449.svg" alt="Partner" className="h-7 mb-1 filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all" />
                            <span className="text-xs text-secondary font-medium">Professional Partner</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="https://cdn.prod.website-files.com/690c287dbe2911a89643cc8e/69130eb7be0b55ab233e4281_Layer_1%20(11).svg" alt="Partner" className="h-7 mb-1 filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all" />
                            <span className="text-xs text-secondary font-medium">Top Team On Behance</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="https://cdn.prod.website-files.com/690c287dbe2911a89643cc8e/69130eb87a5239020e74da99_Layer_1%20(12).svg" alt="Partner" className="h-7 mb-1 filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all" />
                            <span className="text-xs text-secondary font-medium">Top Team On Dribbble</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="https://cdn.prod.website-files.com/690c287dbe2911a89643cc8e/69130eb7e0f3d60a367bba37_Layer_1%20(13).svg" alt="Partner" className="h-7 mb-1 filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all" />
                            <div className="flex items-center gap-1">
                                <span className="text-xs text-secondary font-medium">Reviewed On</span>
                                <img src="https://cdn.prod.website-files.com/690c287dbe2911a89643cc8e/6913130e1b4b861c950b92ae_Group%20154.svg" className="h-3" alt="Stars" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center text-xs text-[#6e6d6d] py-5">
                    <p>Copyright © 2025 SJ IT LTD - All Rights Reserved.</p>
                    <div className="flex gap-6 text-white">
                        <a href="#">Terms & Conditions</a>
                        <a href="#">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;