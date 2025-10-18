import { useState } from "react";
import 'flag-icons/css/flag-icons.min.css';

export default function FlagSelector({ i18n, mobile = false, onSelect }) {
  const [open, setOpen] = useState(false);
  const currentLang = i18n.language;

  const languages = [
    { code: "en", name: "EN", flag: "fi fi-gb" },
    { code: "uz", name: "UZ", flag: "fi fi-uz" },
    { code: "ru", name: "RU", flag: "fi fi-ru" },
  ];

  const current = languages.find((l) => l.code === currentLang) || languages[0];

  const handleSelect = (lang) => {
    i18n.changeLanguage(lang.code);
    setOpen(false);
    if (onSelect) onSelect();
  };

  return (
    <div className="relative inline-block text-left">
      {/* Dropdown button */}
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-2 border border-gray-300 rounded-md px-3 py-1 text-sm bg-white text-gray-700 hover:border-sky-500 focus:outline-none transition-all ${
          mobile ? "text-base py-2 px-4" : ""
        }`}
      >
        <span className={current.flag}></span>
        {current.name}
      </button>

      {/* Dropdown content */}
      {open && (
        <div
          className={`absolute right-0 mt-2 w-28 bg-white border border-gray-200 rounded-lg shadow-md z-50 ${
            mobile ? "mt-3 w-32" : ""
          }`}
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleSelect(lang)}
              className="flex items-center gap-2 px-3 py-2 w-full hover:bg-sky-50 text-sm text-gray-700"
            >
              <span className={lang.flag}></span>
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
