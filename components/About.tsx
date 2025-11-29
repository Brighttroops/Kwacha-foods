'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
    return (
        <section id="about" className="py-24 bg-neutral-800 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center gap-16">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2 relative h-[600px]"
                    >
                        <div className="absolute inset-0 border-2 border-amber-500/30 transform translate-x-4 translate-y-4 z-0" />
                        <div className="relative h-full w-full z-10 overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                                alt="Chef plating a dish"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2"
                    >
                        <h2 className="text-amber-500 text-sm font-bold tracking-widest uppercase mb-3">Our Story</h2>
                        <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6">A Culinary Journey</h3>
                        <p className="text-gray-300 mb-6 leading-relaxed font-light">
                            Founded in 2024, Kwacha-Foods began with a simple mission: to bring the authentic flavors of traditional cuisine to the modern table. Our chefs travel the world to source the finest ingredients, ensuring that every dish we serve is a testament to quality and passion.
                        </p>
                        <p className="text-gray-300 mb-8 leading-relaxed font-light">
                            We believe that dining is not just about eating, but about the experience. From our carefully curated wine list to our warm, inviting atmosphere, every detail is designed to make you feel at home while you explore new culinary horizons.
                        </p>

                        <div className="flex items-center gap-4">
                            <div className="h-px w-12 bg-amber-500" />
                            <span className="font-serif italic text-xl">Chef Alexander Stone</span>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
