

// components/ContactSection.jsx
'use client';
import contactbanner from "@/public/img/contact-banner.png";
import { useSendContactInfoMutation } from "@/services/contactSlice";

import Image from 'next/image';
import { useState } from 'react';

const Contactbanner = () => {

    const [sendcontdata , {isLoading}] = useSendContactInfoMutation()

 
    

    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {message,error} =  sendcontdata(form)
        console.log(message || error)
        
        alert(`Message Sent!\nName: ${form.name}\nEmail: ${form.email}`);


        setForm({ name: '', email: '', message: '' });
    };

    if (isLoading) (<div className="loader"> </div>) 


    return (
        <section className="pt-40 pb-20" id="contactform">
            <div className="container">
                <div className="  grid lg:grid-cols-2 lg:gap-10 gap-5 items-center justify-center">

                    {/* Left Side */}
                    <div className="self-center">
                        <div className="pb-0">

                            <h5 className="text-light-yellow font-medium  uppercase">Contact Us</h5>
                            <h2 className="text-3xl font-bold mb-2 bg-gradient-to-br from-heading-c1 to-heading-c2 bg-clip-text text-transparent">We’re Here to Help!</h2>
                            <p className="text-gray-600 mb-2">
                                Get in touch with our team for any inquiries, support, or partnership opportunities.
                            </p>
                            <div className="relative ">
                                <Image
                                    src={contactbanner}
                                    alt="Support Illustration"
                                    height={500}
                                    width={500}
                                    className=""
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Side Form */}
                    <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100 shadow-sm">
                        <h3 className="text-2xl font-bold mb-1">Get in Touch</h3>
                        <p className="text-gray-500 text-sm mb-6">
                            Unlock benefits and watch live signals
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label className="text-sm block mb-3 font-bold text-gray-500">NAME</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="John Doe"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border rounded-lg placeholder-gray-400  border-gray-300 outline-none focus:ring focus:ring-yellow-300"
                                />
                            </div>

                            <div>
                                <label className="text-sm block mb-3 font-bold text-gray-500">EMAIL</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="hello@gmail.com"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border rounded-lg placeholder-gray-400 border-gray-300  outline-none focus:ring focus:ring-yellow-300"
                                />
                            </div>

                            <div>
                                <label className="text-sm block mb-3 font-bold text-gray-500">MESSAGE</label>
                                <textarea
                                    name="message"
                                    placeholder="Type Your Message here..."
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full px-4 py-2 border rounded-lg placeholder-gray-400 border-gray-300  outline-none focus:ring focus:ring-yellow-300"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-light-yellow text-black font-medium py-2 rounded-lg transition-all"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contactbanner;
