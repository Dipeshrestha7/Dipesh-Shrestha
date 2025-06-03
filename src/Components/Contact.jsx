import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div className="bg-black min-h-screen py-10 px-6 sm:px-10 text-gray-200 font-sans">
      <div className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-2xl shadow-lg">
        <h1 className="text-4xl font-extrabold text-yellow-500 mb-6 border-b pb-2 border-purple-600">
          Contact Me
        </h1>

        <p className="mb-6 text-lg">
          Feel free to reach out to me for projects, collaborations, or just a friendly hello!
        </p>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-yellow-500 mb-4">Contact Information</h2>
            <ul className="text-gray-300 space-y-2 list-disc list-inside">
              <li>
                <strong>Email:</strong>{' '}
                <Link to="/contact/email" className="text-yellow-400 hover:underline">
                  dipstha061@gmail.com
                </Link>
              </li>
              <li>
                <strong>Phone:</strong>{' '}
                <Link to="/contact/phone" className="text-yellow-400 hover:underline">
                  9869144570
                </Link>
              </li>
              <li>
                <strong>Location:</strong>{' '}
                <Link to="/contact/location" className="text-yellow-400 hover:underline">
                  Gorkha, Nepal
                </Link>
              </li>
            </ul>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block mb-1 font-medium" htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-md bg-gray-700 text-gray-200 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium" htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                className="w-full p-3 rounded-md bg-gray-700 text-gray-200 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium" htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="5"
                placeholder="Your message..."
                className="w-full p-3 rounded-md bg-gray-700 text-gray-200 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-full transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
