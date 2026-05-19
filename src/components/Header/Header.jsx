import { useState } from "react";
import logo from "../../assets/SVG/Asset 2.svg";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    "الرئيسية",
    "من نحن",
    "الخدمات",
    "كيف نصنع النجومية",
    "القيم لدينا",
  ];

  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <div className="relative mx-auto h-[96px] w-full max-w-[1376px] px-5">
        <a
          href="#contact"
          className="
            absolute left-[7.8%] top-[38px]
            hidden h-[42px] min-w-[150px] items-center justify-center
            rounded-full bg-[#cf6daf] px-7
            text-[16px] font-bold leading-none text-white
            transition hover:bg-[#bf5da0]
            lg:flex
          "
        >
          تواصل معنا
        </a>

        <nav
          dir="rtl"
          className="
            absolute left-1/2 top-[43px]
            hidden -translate-x-1/2 items-center gap-[44px]
            lg:flex
          "
        >
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className={`whitespace-nowrap text-[18px] font-bold leading-none transition ${
                link === "الرئيسية"
                  ? "text-[#cf6daf]"
                  : "text-white hover:text-[#cf6daf]"
              }`}
            >
              {link}
            </a>
          ))}
        </nav>

        <img
          src={logo}
          alt="Fame Logo"
          className="
            absolute right-[7.8%] top-[24px] h-[58px] w-auto

            max-lg:right-[24px] max-lg:top-[25px] max-lg:h-[58px]
            max-sm:h-[48px]
          "
        />

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="
            absolute left-[24px] top-[30px]
            flex h-[42px] w-[46px] flex-col items-center justify-center gap-[6px]
            rounded-xl bg-white/10 backdrop-blur-md
            lg:hidden
          "
          aria-label="Open menu"
        >
          <span className="h-[2px] w-6 bg-white"></span>
          <span className="h-[2px] w-6 bg-white"></span>
          <span className="h-[2px] w-6 bg-white"></span>
        </button>

        {open && (
          <div
            dir="rtl"
            className="
              absolute left-5 right-5 top-[92px]
              rounded-2xl border border-white/10 bg-[#20194a]/95
              p-5 shadow-2xl backdrop-blur-md
              lg:hidden
            "
          >
            <nav className="flex flex-col gap-4 text-right">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  onClick={() => setOpen(false)}
                  className={`text-[16px] font-bold transition ${
                    link === "الرئيسية"
                      ? "text-[#cf6daf]"
                      : "text-white hover:text-[#cf6daf]"
                  }`}
                >
                  {link}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="
                  mt-2 flex h-[42px] items-center justify-center
                  rounded-full bg-[#cf6daf]
                  text-[15px] font-bold text-white
                "
              >
                تواصل معنا
                
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}