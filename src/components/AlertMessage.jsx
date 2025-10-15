import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const AlertMessage = ({ type, message, onClose }) => {
  if (!message) return null;

  const isSuccess = type === "success";

  // 🌿 Och-yashil (light green) gradient — senga mos
  const bgColor = isSuccess
    ? "bg-gradient-to-r from-green-100 via-green-200 to-green-100"
    : "bg-gradient-to-r from-red-100 via-red-200 to-red-100";

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className={`fixed top-8 left-1/2 transform -translate-x-1/2 z-[9999] ${bgColor} text-gray-900 font-medium px-8 py-4 rounded-2xl shadow-xl border border-white/30 backdrop-blur-sm flex items-center gap-3`}
      >
        <p className={`tracking-wide text-[15px] ${isSuccess ? "text-green-600" : "text-red-600"}`}>{message}</p>
        {/* ICON */}
        {isSuccess ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-green-600"
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
            className="w-6 h-6 text-red-600"
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
        
      </motion.div>
    </AnimatePresence>
  );
};

export default AlertMessage;
