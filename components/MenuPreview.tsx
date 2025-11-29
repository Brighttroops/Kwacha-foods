'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const dishes = [
    {
        name: 'Truffle Risotto',
        description: 'Arborio rice, black truffle, parmesan crisp, wild mushrooms.',
        price: 'MWK 28,000',
        image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
        name: 'Pan-Seared Scallops',
        description: 'Cauliflower purée, crispy pancetta, lemon butter sauce.',
        price: 'MWK 34,000',
        image: 'https://images.unsplash.com/photo-1532465614-6cc8d45f647f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
        name: 'Herb-Crusted Lamb',
        description: 'Rack of lamb, rosemary jus, roasted root vegetables.',
        price: 'MWK 42,000',
        image: 'https://images.unsplash.com/photo-1544510808-91bcbee1df55?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
];

const MenuPreview = () => {
    return (
        <section id="menu" className="py-24 bg-neutral-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-amber-500 text-sm font-bold tracking-widest uppercase mb-3">Discover</h2>
                    <h3 className="text-4xl md:text-5xl font-serif font-bold">Signature Dishes</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {dishes.map((dish, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="group"
                        >
                            <div className="relative h-80 w-full overflow-hidden mb-6">
                                <Image
                                    src={dish.image}
                                    alt={dish.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                            </div>
                            <div className="text-center px-4">
                                <h4 className="text-2xl font-serif font-medium mb-2">{dish.name}</h4>
                                <p className="text-gray-400 mb-4 font-light">{dish.description}</p>
                                <span className="text-amber-500 text-xl font-bold">{dish.price}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <button className="border border-white/30 hover:border-amber-500 hover:text-amber-500 text-white px-8 py-3 text-sm tracking-widest uppercase transition-all duration-300">
                        View Full Menu
                    </button>
                </div>
            </div>
        </section>
    );
};

export default MenuPreview;
