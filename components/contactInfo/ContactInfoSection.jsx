// components/ContactInfoSection.jsx
import {
    MdLocationOn,
    MdCall,
    MdEmail,
} from 'react-icons/md';
import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaXTwitter,
} from 'react-icons/fa6';

const ContactInfoSection = () => {
    return (
        <section className="py-10">
            <div className="container">

                <div className=" mx-auto px-4 py-4 bg-white border border-gray-400 rounded-xl overflow-hidden shadow-sm">
                    <div className="grid md:grid-cols-2 gap-6 p-6">
                        {/* Left: Map */}
                        <div className="rounded-lg overflow-hidden shadow">
                            <iframe
                                className="w-full h-full rounded-lg"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.427738195935!2d55.21777347538229!3d25.11129277776718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6c8a733f6883%3A0xe6b5b1d816529fc5!2sAl%20Barsha%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1719997101026!5m2!1sen!2sin"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>

                        {/* Right: Contact Info */}
                        <div className="flex flex-col justify-center space-y-6">
                            <h2 className="text-2xl font-bold text-[#3d3a29]">Quick Contact Information</h2>

                            <div className="space-y-4 text-sm text-gray-700">
                                <div className="flex items-start gap-3">
                                    <MdLocationOn className="text-2xl text-heading-c1  border border-gray-400 h-10 w-10 p-2 rounded-full  mt-1" />
                                    <div>
                                        <p className="font-semibold">Address</p>
                                        <p>
                                            Plot 125, Al Sayegh building, 457R+45M – Al Barsha – Al Barsha 1, Dubai
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <MdCall className="text-2xl text-heading-c1  border border-gray-400 h-10 w-10 p-2 rounded-full  mt-1" />
                                    <div>
                                        <p className="font-semibold">Contact Number</p>
                                        <p>+91 971559803682</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <MdEmail className="text-2xl text-heading-c1  border border-gray-400 h-10 w-10 p-2 rounded-full  mt-1" />
                                    <div>
                                        <p className="font-semibold">Support Emails</p>
                                        <p>support@fxsignals.ae | info@fxsignals.ae</p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Icons */}
                            <div>
                                <p className="font-semibold mb-2">Follow us on</p>
                                <div className="flex gap-3 text-light-yellow ">
                                    <FaXTwitter className="hover:scale-110 text-3xl cursor-pointer" />
                                    <FaFacebookF className="hover:scale-110 text-3xl cursor-pointer" />
                                    <FaInstagram className="hover:scale-110 text-3xl cursor-pointer" />
                                    <FaYoutube className="hover:scale-110 text-3xl cursor-pointer" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default ContactInfoSection