import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const AlertMessage = ({ type, message, onClose }) => {
  if (!message) return null;

  const isSuccess = type === "success";

  // 🌿 Och-yashil (light green) gradient — senga mos
  const bgColor = isSuccess
    ? "bg-gradient-to-r from-green-300 via-green-400 to-green-500"
    : "bg-gradient-to-r from-red-400 via-red-500 to-red-600";

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className={`fixed top-8 left-1/2 transform -translate-x-1/2 z-[9999] ${bgColor} text-gray-900 font-medium px-8 py-4 rounded-2xl shadow-xl border border-white/30 backdrop-blur-sm flex items-center gap-3`}
      >
        {/* ICON */}
        {isSuccess ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-green-900"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-red-900"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8v4m0 4h.01M21 12A9 9 0 113 12a9 9 0 0118 0z"
            />
          </svg>
        )}

        {/* TEXT */}
        <p className="tracking-wide text-[15px]">{message}</p>

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="ml-4 text-gray-800/70 hover:text-gray-900 transition text-xl leading-none"
        >
          ×
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

export default AlertMessage;
