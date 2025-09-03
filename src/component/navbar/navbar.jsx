import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  if (open) {
    document.body.style.overflow = "hidden";
  }
  else {
    document.body.style.overflow = "auto";
  }
  return (
    <nav className="my-4 max-w-7xl font-[Lora] mx-auto w-full z-50">
      <div className="flex items-center py-3 justify-between">
        <div className="text-3xl">Flowbit</div>

        <div
          className="hidden md:flex items-center bg-transparent backdrop-blur-3xl rounded-xl space-x-8"
        >
          {["Home", "Features", "Pricing", "About"].map((link) => (
            <a
              key={link}
              href="#"
              className="relative group text-xl"
            >
              {link}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] cornsilk transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <div className="hidden md:flex">
            <button className="bgColor transition duration-300 ease-out cursor-pointer text-xl Nunito px-7 rounded-sm py-1">
                Start Free Trial
            </button>
          </div>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <div
        className={`md:hidden fixed top-20 right-0 Nunito h-svh w-full bg-transparent backdrop-blur-3xl shadow-xl rounded-l-2xl transform transition-transform duration-300 ease-in-out z-50
      ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col items-center px-6 py-10 space-y-6">
          {["Home", "Features", "Pricing", "About"].map((link) => (
            <a
              key={link}
              href="#"
              className="font-medium PakistanGreen text-3xl transition"
            >
              {link}
            </a>
          ))}

            <button className="bgColor transition duration-300 ease-out cursor-pointer text-xl Nunito px-7 rounded-sm py-2">
                Start Free Trial
            </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;