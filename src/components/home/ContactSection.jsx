import { motion } from "framer-motion";
import contactImg from "../../assets/home-images/contact.jpg";

function Contact() {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center bg-[#f9fafb] py-16 md:py-24 px-6 sm:px-12 lg:px-20 xl:px-28">
      <div className="max-w-6xl mx-auto text-center mb-8">
        <p className="uppercase text-sky-500 tracking-widest font-semibold mb-4">
          Contact Us
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold leading-snug mb-6 text-gray-900">
          Let’s start{" "}
          <motion.span
            className="bg-gradient-to-r from-sky-400 to-sky-600 bg-clip-text text-transparent"
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

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center justify-center gap-10 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="overflow-hidden rounded-3xl cursor-pointer hover:scale-[1.03] transition-all duration-500 ease-in-out w-full max-w-[520px] mx-auto md:mx-0"
        >
          <img
            src={contactImg}
            alt="Contact"
            className="w-full h-[300px] md:h-[340px] lg:h-[360px] object-cover rounded-3xl"
          />
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="space-y-5 bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl hover:shadow-sky-100 transition-all duration-500 ease-in-out w-full max-w-[500px] mx-auto md:mx-0"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-2.5 text-[13px] rounded-xl shadow-sm border border-gray-200 focus:ring-2 focus:ring-blue-300 focus:border-blue-500 bg-white text-gray-900 placeholder-gray-400 transition hover:border-sky-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full p-2.5 text-[13px] rounded-xl shadow-sm border border-gray-200 focus:ring-2 focus:ring-blue-300 focus:border-blue-500 bg-white text-gray-900 placeholder-gray-400 transition hover:border-sky-400"
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
                placeholder="Phone number"
                className="w-full p-2.5 text-[13px] rounded-xl shadow-sm border border-gray-200 focus:ring-2 focus:ring-blue-300 focus:border-blue-500 bg-white text-gray-900 placeholder-gray-400 transition hover:border-sky-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Company (optional)
              </label>
              <input
                type="text"
                placeholder="Your company"
                className="w-full p-2.5 text-[13px] rounded-xl shadow-sm border border-gray-200 focus:ring-2 focus:ring-blue-300 focus:border-blue-500 bg-white text-gray-900 placeholder-gray-400 transition hover:border-sky-400"
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
              className="w-full p-2.5 text-[13px] rounded-xl shadow-sm border border-gray-200 focus:ring-2 focus:ring-blue-300 focus:border-blue-500 bg-white text-gray-900 placeholder-gray-400 transition resize-none hover:border-sky-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-gradient-to-r from-sky-500 to-sky-600 text-white font-semibold py-3 text-lg shadow-lg hover:shadow-sky-300 hover:scale-105 hover:translate-y-[-2px] active:translate-y-[0px] transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-300"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;
