import React from 'react';
import { FaHome, FaEnvelope, FaPhone, FaWhatsapp, FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube, FaPinterestP } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-red-700 text-white pt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Column 1: Who We Are */}
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
            <p className="text-gray-300 mb-4 text-sm">
              IIMT as a group, large and diversified, imparts knowledge in the field of Engineering, Management, Education, Law, Pharmacy, etc. It has highly qualified and experienced faculty members in their respective functional areas. IIMT boasts of having more than 8,000 students in various courses in six colleges. The educational group has been dedicated towards providing quality professional education through well-accredited courses, Seminars, Conferences, Guest Lectures, Industrial visits and excellent Academic facilities.
            </p>
            <div className="space-y-2">
              <a href="#" className="text-white font-semibold underline hover:text-yellow-400">What We Do</a><br/>
              <a href="#" className="text-white font-semibold underline hover:text-yellow-400">Impeccable Placements</a>
            </div>
            <button className="mt-6 bg-yellow-500 text-black font-bold py-2 px-6 rounded hover:bg-yellow-600 transition-colors">
              APPLY NOW
            </button>
          </div>

          {/* Column 2: Connect & Follow */}
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Connect With Us</h2>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start">
                <FaHome className="mr-3 mt-1 flex-shrink-0" />
                <span>IIMT Group of Colleges, Plot No. 19 & 20, Knowledge Park - III Greater Noida - 201310, Uttar Pradesh, India</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 flex-shrink-0" />
                <a href="mailto:enquiries@iimtindia.net" className="hover:text-yellow-400">enquiries@iimtindia.net</a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 flex-shrink-0" />
                <a href="mailto:contact_gn@iimtindia.net" className="hover:text-yellow-400">contact_gn@iimtindia.net</a>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 flex-shrink-0" />
                <span>0120-2322655, 0120-2475000</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 flex-shrink-0" />
                <span>+91 9717015300</span>
              </li>
              <li className="flex items-center">
                <FaWhatsapp className="mr-3 flex-shrink-0" />
                <span>+91 9911009144</span>
              </li>
            </ul>
            <h2 className="text-2xl font-bold mt-8 mb-4">Follow Us On</h2>
            <div className="flex space-x-4">
              <a href="#" className="border border-white rounded-full p-2 hover:bg-yellow-500 hover:text-black transition-colors"><FaFacebookF /></a>
              <a href="#" className="border border-white rounded-full p-2 hover:bg-yellow-500 hover:text-black transition-colors"><FaInstagram /></a>
              <a href="#" className="border border-white rounded-full p-2 hover:bg-yellow-500 hover:text-black transition-colors"><FaTwitter /></a>
              <a href="#" className="border border-white rounded-full p-2 hover:bg-yellow-500 hover:text-black transition-colors"><FaLinkedinIn /></a>
              <a href="#" className="border border-white rounded-full p-2 hover:bg-yellow-500 hover:text-black transition-colors"><FaYoutube /></a>
              <a href="#" className="border border-white rounded-full p-2 hover:bg-yellow-500 hover:text-black transition-colors"><FaPinterestP /></a>
            </div>
          </div>

          {/* Column 3: Map */}
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.933496596528!2d77.48961477607098!3d28.481549375747527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceb07c7e0cae3%3A0x82b288a0fa2a6a5!2sIIMT%20COLLEGE%20KNOWLEDGE%20PARK%203%20%2C%20GREATER%20NOIDA!5e0!3m2!1sen!2sin!4v1760561540348!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="border-t border-red-600 mt-8">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <p className="text-sm text-gray-300">&copy; 2025 IIMT CONF — @devrithm</p>
          {/* You can add the site logo here if you have it */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;