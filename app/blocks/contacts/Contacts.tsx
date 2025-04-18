'use client';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-10 max-w-7xl mx-auto mt-10 ml-20">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-16"
      >
        Contact
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col lg:flex-row gap-12"
      >
        {/* Left Column - Contact Info */}
        <div className="flex-1 space-y-6">
          <h3 className="text-2xl font-semibold">Get in touch</h3>
          <p className='txet-justify'>
            I&rsquo;d love to hear from you! Whether it&rsquo;s a project, opportunity, or just a friendly hello — feel free to drop a message.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Mail className="text-blue-600" />
              <span>unnatiuk.2003@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-blue-600" />
              <span>+91 6363171942</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-blue-600" />
              <span>Tumkur, India</span>
            </div>
          </div>

          <div className="flex gap-6 pt-4">
            <a href="https://linkedin.com/in/unnati-kulkarni-ba9355241" target="_blank" rel="noreferrer">
              <Linkedin className="hover:text-blue-600 transition" />
            </a>
            <a href="https://github.com/UnnatiUmesh" target="_blank" rel="noreferrer">
              <Github className="hover:text-blue-600 transition" />
            </a>
          </div>
        </div>

        {/* Right Column - Form */}
        <form className="flex-1 space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              rows={5}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your message..."
              required
            />
          </div>
          <button
            type="submit"
            className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
}
