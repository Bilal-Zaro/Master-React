import React from "react";
import Contactimage from "../images/contact.png"
const Contact = () => {
  return (
    <div
      id="cont"
      className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-4 py-16 gap-8"
    >
      {/* Left side with illustration */}
      <div className="contact-image w-full md:w-1/2">
        <img
          src={Contactimage} // Update this path to your image location
          alt="Illustration of person sitting in chair with laptop and decorative elements"
          className="w-full max-w-lg mx-auto"
        />
      </div>

      {/* Right side with form */}
      <div className="contact-form w-full md:w-1/2 max-w-lg">
        <h1 className="text-4xl font-bold text-purple-500 mb-4">
          تواصل معنا
        </h1>
        <p className="text-gray-600 mb-8">
          My inbox is always open! 💌 Whether you've got a burning question or
          want to drop a friendly "hello", I'm all ears! 👂 Let's chat! 🐝
        </p>

        <form>
          <div className="mb-4">
            <input
              type="text"
              placeholder="الإسم*"
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="الإيميل *"
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="mb-6">
            <textarea
              placeholder="رسالتك *"
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-purple-500 text-white font-medium py-3 px-8 rounded-full hover:bg-purple-600 transition duration-300"
          >
            إرسال 👋
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
