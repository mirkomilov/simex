import contactBg from "../assets/about.jpg";
import Location from "../components/contact/Location";
const Contact = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-start px-10 md:px-24"
        style={{ backgroundImage: `url(${contactBg})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative text-left z-10 space-y-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-green-400 tracking-widest drop-shadow-md">
            SIMEX PROGRESS
          </h2>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white drop-shadow-xl leading-tight">
            CONTACT US
          </h1>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="bg-[#f4f6fa] py-15">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
          {/* Card */}
          {[
            {
              title: "PHONE NUMBER",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M2.25 6.75c0-1.243.507-2.377 1.41-3.29A4.67 4.67 0 0 1 6.75 2.25h.563c.76 0 1.436.424 1.768 1.104l1.127 2.254a2.25 2.25 0 0 1-.32 2.477l-.994.993a.75.75 0 0 0-.165.822 11.25 11.25 0 0 0 5.945 5.945.75.75 0 0 0 .822-.165l.993-.994a2.25 2.25 0 0 1 2.477-.32l2.254 1.127a1.875 1.875 0 0 1 1.104 1.768v.563a4.67 4.67 0 0 1-1.21 3.09 4.67 4.67 0 0 1-3.09 1.21A17.94 17.94 0 0 1 2.25 6.75z"
                  />
                </svg>
              ),
              lines: [
                "+99890 955 55 70",
                "+99871 231 98 03",
                "+99871 231 98 04",
              ],
            },
            {
              title: "ADDRESS",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 21.75c4.556-4.25 7.5-7.639 7.5-11.25A7.5 7.5 0 0 0 12 3a7.5 7.5 0 0 0-7.5 7.5c0 3.611 2.944 7 7.5 11.25z"
                  />
                  <circle cx="12" cy="10.5" r="2.25" />
                </svg>
              ),
              lines: [
                "Tashkent city, Sergeli district,",
                "st. Kumaryk-3, building 88",
              ],
            },
            {
              title: "EMAIL",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8.25l9 5.25 9-5.25M3 8.25v7.5a2.25 2.25 0 0 0 2.25 2.25h13.5A2.25 2.25 0 0 0 21 15.75v-7.5M3 8.25l9 5.25 9-5.25"
                  />
                </svg>
              ),
              lines: ["info@simex.uz"],
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-8 flex flex-col items-center text-center"
            >
              <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-full mb-4 shadow-inner">
                {item.icon}
              </div>
              <h3 className="text-gray-900 font-semibold text-lg mb-2 tracking-wide">
                {item.title}
              </h3>
              {item.lines.map((line, i) => (
                <p key={i} className="text-gray-700 leading-relaxed">
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f4f6fa] pb-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-0 items-stretch">
        {/* LEFT SIDE — MAP / LOCATION COMPONENT */}
        <div className="rounded-2xl overflow-hidden shadow-md h-full min-h-[500px] flex">
          <Location />
        </div>

        {/* RIGHT SIDE — FORM */}
        <div className="bg-white p-10 rounded-2xl shadow-md flex flex-col justify-center h-full min-h-[500px]">
          <h4 className="text-[#75b31e] uppercase font-semibold tracking-widest mb-2">
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
                  className="border-b border-gray-400 bg-transparent outline-none focus:border-[#75b31e] py-2 transition"
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
                  className="border-b border-gray-400 bg-transparent outline-none focus:border-[#75b31e] py-2 transition"
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
                type="tel"
                id="phone"
                name="phone"
                placeholder="+998 __ ___ __ __"
                className="border-b border-gray-400 bg-transparent outline-none focus:border-[#75b31e] py-2 transition"
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
                className="border-b border-gray-400 bg-transparent outline-none focus:border-[#75b31e] py-2 resize-none transition"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="text-[#75b31e] font-semibold hover:text-[#31640c] underline underline-offset-4 transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
    </>
  );
};

export default Contact;
