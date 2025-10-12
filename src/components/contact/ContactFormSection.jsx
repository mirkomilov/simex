import React from "react";
import Location from "../../components/contact/Location"; 

const ContactFormSection = () => {
  return (
    <section className="bg-[#f4f6fa] pb-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
        {/* LEFT SIDE — MAP / LOCATION */}
        <div className="rounded-2xl overflow-hidden shadow-md h-full min-h-[500px] flex">
          <Location />
        </div>

        {/* RIGHT SIDE — CONTACT FORM */}
        <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-md flex flex-col justify-center h-full min-h-[500px]">
          <h4 className="text-sky-600 uppercase font-semibold tracking-widest mb-2">
            Contact us
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
            Let’s start today!
          </h2>

          <form className="space-y-6">
            {/* Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-700 mb-1"
                >
                  Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  className="border-b border-gray-400 bg-transparent outline-none focus:border-sky-500 py-2 transition"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700 mb-1"
                >
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email"
                  className="border-b border-gray-400 bg-transparent outline-none focus:border-sky-500 py-2 transition"
                />
              </div>
            </div>

            {/* Phone */}
            <div className="flex flex-col">
              <label
                htmlFor="phone"
                className="text-sm font-medium text-gray-700 mb-1"
              >
                Phone<span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                id="phone"
                name="phone"
                placeholder="Your phone number"
                className="border-b border-gray-400 bg-transparent outline-none focus:border-sky-500 py-2 transition"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col">
              <label
                htmlFor="message"
                className="text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Write your message..."
                className="border-b border-gray-400 bg-transparent outline-none focus:border-sky-500 py-2 resize-none transition"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="text-sky-600 font-semibold hover:text-sky-700 underline underline-offset-4 transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
