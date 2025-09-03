import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="my-4 max-w-6xl mx-auto w-full z-50">
      <div className="flex items-center justify-between ">
        <div className="text-3xl">Flowbit</div>

        <div
          className="hidden md:flex items-center bg-transparent backdrop-blur-3xl pl-8 pr-3 py-3 rounded-xl space-x-8"
          style={{
            boxShadow: "3px 0 12px rgba(250, 250, 250, 0.14)",
          }}
        >
          {["Home", "Features", "Pricing", "About"].map((link) => (
            <a
              key={link}
              href="#"
              className="relative group"
            >
              {link}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#C084FC] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <div className="hidden md:flex">
            <button className="bg-[#C084FC] hover:bg-[#7C3AED] transition-colors duration-300 cursor-pointer py-2 px-4 rounded">
              Book a CALL
            </button>
          </div>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <div
        className={`md:hidden fixed top-20 right-0 w-64 bg-transparent backdrop-blur-3xl shadow-xl rounded-l-2xl transform transition-transform duration-300 ease-in-out z-50
      ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col body_font items-center px-6 py-10 space-y-6">
          {["Home", "Features", "Pricing", "About"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-lg font-medium text-[#fafafa] transition"
            >
              {link}
            </a>
          ))}

          <button className="bg-[#C084FC] hover:bg-[#7C3AED] transition-colors duration-300 cursor-pointer body_font w-full text-white py-2 px-4 rounded">
            Book a CALL
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;