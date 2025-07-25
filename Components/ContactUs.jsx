import React from 'react';

const ContactUs = () => {
  return (
    <div className="min-h-screen  py-12 px-4 lg:ml-40 ">
      <div className="max-w-3xl mx-auto shadow-gray-500 shadow-xs  mt-40 rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-blue-600 mb-6">Contact Us</h2>
        
        <p className="text-gray-500 mb-6">
          Have a question, suggestion, or just want to say hello? We'd love to hear from you!
        </p>

        <form className="space-y-4">
          <div>
            <label className="block text-gray-500 font-medium mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300  text-white rounded-lg px-4 py-2 outline-none "
            />
          </div>

          <div>
            <label className="block text-gray-500 font-medium mb-1 mt-7">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300  text-white rounded-lg px-4 py-2 outline-none "
            />
          </div>

          <div>
            <label className="block text-gray-500 font-medium mb-1 mt-7">Message</label>
            <textarea
              rows="5"
              placeholder="Your message..."
              className="w-full border border-gray-300 resize-none text-white rounded-lg px-4 py-2 outline-none"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 border-2 border-blue-600 text-white px-6 py-2 rounded-lg lg:hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
