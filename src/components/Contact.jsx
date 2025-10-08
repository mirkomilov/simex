import { motion } from "framer-motion";
import contactImg from "../assets/contact.jpg";

function Contact() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-6 px-6 md:px-10">
      <div className="max-w-6xl mx-auto text-center mb-6">
        <p className="uppercase text-green-400 tracking-widest font-semibold mb-2">
          Contact Us
        </p>
        <h2 className="text-2xl md:text-3xl font-extrabold leading-snug mb-4">
          Let’s start{" "}
          <motion.span
            className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-600 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            today!
          </motion.span>
        </h2>
        <p className="text-gray-500 text-base leading-relaxed mx-auto max-w-md">
          Have any questions, ideas, or collaboration proposals? Fill out the
          form and we’ll get back to you shortly.
        </p>
      </div>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-4">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="overflow-hidden rounded-3xl cursor-pointer hover:scale-105 transition-transform duration-300 max-w-[460px] md:max-h-[260px] object-cover"
        >
          <img
            src={contactImg}
            alt="Contact"
            className="w-full h-[260px] object-cover rounded-3xl"
          />
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="space-y-2"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-2.5 text-[13px] rounded-2xl shadow-sm border border-gray-200 focus:ring-2 focus:ring-green-300 focus:border-green-500 bg-white text-gray-900 placeholder-gray-400 focus:outline-none transition"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full p-2.5 text-[13px] rounded-2xl shadow-sm border border-gray-200 focus:ring-2 focus:ring-green-300 focus:border-green-500 bg-white text-gray-900 placeholder-gray-400 focus:outline-none transition"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Phone
              </label>
              <input
                type="text"
                placeholder="+998 ..."
                className="w-full p-2.5 text-[13px] rounded-2xl shadow-sm border border-gray-200 focus:ring-2 focus:ring-green-300 focus:border-green-500 bg-white text-gray-900 placeholder-gray-400 focus:outline-none transition"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Company (optional)
              </label>
              <input
                type="text"
                placeholder="Your company"
                className="w-full p-2.5 text-[13px] rounded-2xl shadow-sm border border-gray-200 focus:ring-2 focus:ring-green-300 focus:border-green-500 bg-white text-gray-900 placeholder-gray-400 focus:outline-none transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full p-2.5 text-[13px] rounded-2xl shadow-sm border border-gray-200 focus:ring-2 focus:ring-green-300 focus:border-green-500 bg-white text-gray-900 placeholder-gray-400 focus:outline-none transition resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full rounded-2xl bg-gradient-to-r from-emerald-500 via-green-500 to-lime-500 text-white font-semibold py-2.5 text-base shadow-sm hover:shadow-green-200 hover:scale-[1.03] transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-300"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;
