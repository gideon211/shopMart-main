// src/components/Contact.jsx
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Background blobs */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-green-100 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-pulse" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-orange-300 p-3 rounded-full text-white shadow-md">
              <MessageCircle size={28} />
            </div>
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900">Contact Us</h2>
          <p className="mt-3 text-lg text-gray-600 max-w-xl mx-auto">
            We'd love to hear from you. Whether you have a question, need support, or just want to say hello, we're here to help!
          </p>
        </div>

        {/* Contact Info & Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Info Section */}
          <div className="space-y-6 text-gray-700">
            <div className="flex items-center space-x-4">
              <Mail className="text-orange-300" />
              <span>Email: <a href="mailto:support@furniturestore.com" className="text-orange-300 font-medium hover:underline">support@furniturestore.com</a></span>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="text-orange-300" />
              <span>Phone: <a href="tel:+18005551234" className="text-orange-300 font-medium hover:underline">+1-800-555-1234</a></span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="text-orange-300" />
              <span>Address: 123 Oak Street, Accra, Ghana</span>
            </div>
            <div>
              <iframe
                className="w-full h-64 rounded-lg shadow"
                src="https://maps.google.com/maps?q=Accra,Ghana&t=&z=13&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                allowFullScreen
                title="Map"
              />
            </div>
          </div>

          {/* Form Section */}
          <form className="space-y-6 bg-gray-50 p-6 rounded-xl shadow-lg">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2 focus:ring-orange-300 focus:border-orange-300"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2 focus:ring-orange-300 focus:border-orange-300"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
            <button
              type="submit"
              className="bg-orange-300 text-white px-6 py-2 rounded-md hover:bg-orange-500 transition-all shadow-md w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
