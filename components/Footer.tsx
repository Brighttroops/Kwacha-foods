'use client';

import { Facebook, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-16 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">

                    <div>
                        <Link href="/" className="text-2xl font-serif font-bold tracking-wider text-amber-500 block mb-6">
                            Kwacha-Foods
                        </Link>
                        <p className="text-gray-400 leading-relaxed max-w-xs mx-auto md:mx-0">
                            Experience the art of dining with our carefully crafted dishes and elegant atmosphere.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold uppercase tracking-widest mb-6">Contact</h4>
                        <p className="text-gray-400 mb-2">Kameza, Roundabout</p>
                        <p className="text-gray-400 mb-2">Blantyre, Malawi</p>
                        <p className="text-gray-400 mb-2">+265 999 999 999</p>
                        <p className="text-gray-400">info@kwachafoods.com</p>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold uppercase tracking-widest mb-6">Hours</h4>
                        <p className="text-gray-400 mb-2"><span className="text-white">Mon - Thu:</span> 17:00 - 22:00</p>
                        <p className="text-gray-400 mb-2"><span className="text-white">Fri - Sat:</span> 17:00 - 23:00</p>
                        <p className="text-gray-400 mb-6"><span className="text-white">Sun:</span> Closed</p>

                        <div className="flex justify-center md:justify-start space-x-6">
                            <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>

                </div>

                <div className="border-t border-white/10 mt-16 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Kwacha-Foods. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
