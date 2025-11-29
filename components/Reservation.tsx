'use client';

import { motion } from 'framer-motion';

const Reservation = () => {
    return (
        <section id="reservations" className="py-24 bg-neutral-900 text-white relative">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-10" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-amber-500 text-sm font-bold tracking-widest uppercase mb-3">Reservations</h2>
                    <h3 className="text-4xl md:text-5xl font-serif font-bold">Book Your Table</h3>
                </div>

                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-neutral-800/80 backdrop-blur-sm p-8 md:p-12 border border-white/5 shadow-2xl"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wide">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full bg-neutral-900 border border-neutral-700 text-white px-4 py-3 focus:outline-none focus:border-amber-500 transition-colors"
                                placeholder="Kaluwa Chimtengo"
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wide">Phone</label>
                            <input
                                type="tel"
                                id="phone"
                                className="w-full bg-neutral-900 border border-neutral-700 text-white px-4 py-3 focus:outline-none focus:border-amber-500 transition-colors"
                                placeholder="+265 999 999 999"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div>
                            <label htmlFor="date" className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wide">Date</label>
                            <input
                                type="date"
                                id="date"
                                className="w-full bg-neutral-900 border border-neutral-700 text-white px-4 py-3 focus:outline-none focus:border-amber-500 transition-colors"
                            />
                        </div>
                        <div>
                            <label htmlFor="time" className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wide">Time</label>
                            <select
                                id="time"
                                className="w-full bg-neutral-900 border border-neutral-700 text-white px-4 py-3 focus:outline-none focus:border-amber-500 transition-colors appearance-none"
                            >
                                <option>17:00</option>
                                <option>18:00</option>
                                <option>19:00</option>
                                <option>20:00</option>
                                <option>21:00</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="guests" className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wide">Guests</label>
                            <select
                                id="guests"
                                className="w-full bg-neutral-900 border border-neutral-700 text-white px-4 py-3 focus:outline-none focus:border-amber-500 transition-colors appearance-none"
                            >
                                <option>2 People</option>
                                <option>3 People</option>
                                <option>4 People</option>
                                <option>5+ People</option>
                            </select>
                        </div>
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            className="w-full md:w-auto bg-amber-600 hover:bg-amber-700 text-white px-10 py-4 text-sm tracking-widest uppercase transition-all duration-300 font-bold"
                        >
                            Confirm Reservation
                        </button>
                    </div>
                </motion.form>
            </div>
        </section>
    );
};

export default Reservation;
