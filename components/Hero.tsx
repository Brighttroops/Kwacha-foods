'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
    return (
        <div className="relative h-screen flex items-center justify-center overflow-hidden bg-neutral-900">
            {/* Background Image Placeholder - Replace with actual image */}
            <div
                className="absolute inset-0 z-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1514362545857-3bc16549766b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/90 z-10" />

            <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-amber-500 text-lg md:text-xl font-medium tracking-[0.2em] uppercase mb-4"
                >
                    Welcome to Kwacha-Foods
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 leading-tight"
                >
                    Taste the <span className="text-amber-500">Tradition</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light"
                >
                    Experience culinary excellence where every dish tells a story of passion, flavor, and heritage.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <Link
                        href="#reservations"
                        className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-none text-sm tracking-widest uppercase transition-all duration-300 border border-amber-600 hover:border-amber-700"
                    >
                        Book a Table
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
