import React from "react";

const ContactInfo = () => {
  const contactData = [
    {
      title: "PHONE NUMBER",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 text-sky-600"
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
      lines: ["+99890 955 55 70", "+99871 231 98 03", "+99871 231 98 04"],
    },
    {
      title: "ADDRESS",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 text-sky-600"
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
      lines: ["Tashkent city, Sergeli district,", "st. Kumaryk-3, building 88"],
    },
    {
      title: "EMAIL",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 text-sky-600"
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
  ];

  return (
    <section className="bg-[#f4f6fa] py-20 px-6 sm:px-10 lg:px-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {contactData.map((item) => (
          <div
            key={item.title}
            className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-8 flex flex-col items-center text-center"
          >
            <div className="p-4 bg-gradient-to-br from-sky-50 to-sky-100 rounded-full mb-4 shadow-inner">
              {item.icon}
            </div>
            <h3 className="text-gray-900 font-semibold text-lg mb-2 tracking-wide">
              {item.title}
            </h3>
            {item.lines.map((line, i) => (
              <p
                key={i}
                className="text-gray-700 text-sm sm:text-base leading-relaxed"
              >
                {line}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactInfo;
