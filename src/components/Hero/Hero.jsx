import heroBg from "../../assets/2X/Asset 8@2X.png";
import pinkButton from "../../assets/SVG/Asset 6.svg";
import whiteButton from "../../assets/SVG/Asset 7.svg";

export default function Hero() {
  return (
    <section
      className="
        relative min-h-screen w-full overflow-hidden bg-[#262053]

        max-lg:min-h-[760px]
        max-md:min-h-[820px]
        max-sm:min-h-[780px]
      "
    >
      {/* Hero Background */}
      <img
        src={heroBg}
        alt="Fame Hero"
        className="
          absolute inset-0 h-full w-full object-fill

          max-lg:object-cover max-lg:object-[35%_center]
          max-md:object-cover max-md:object-[28%_center]
          max-sm:object-cover max-sm:object-[24%_center]
        "
      />

      {/* Light Overlay */}
      <div className="absolute inset-0 bg-black/5" />

      {/* Main English Title */}
      <div
        className="
          absolute left-1/2 top-[22%] z-10
          w-full -translate-x-1/2 px-5 text-center

          max-xl:top-[22%]
          max-lg:top-[22%]
          max-md:top-[21%]
          max-sm:top-[20%]
        "
      >
        <h1
          dir="ltr"
          className="
            whitespace-nowrap text-[39px] font-extrabold
            leading-none tracking-[2px] text-white

            max-xl:text-[37px]
            max-lg:text-[33px]
            max-md:mx-auto max-md:max-w-[92%] max-md:whitespace-normal max-md:text-[29px] max-md:leading-[1.25]
            max-sm:text-[24px]
          "
        >
          Managing Fame. Building Legacy.
        </h1>

        <p
          dir="ltr"
          className="
            mt-[18px] text-[18px] font-medium leading-none text-white

            max-xl:text-[17px]
            max-lg:text-[15px]
            max-md:mx-auto max-md:mt-4 max-md:max-w-[360px] max-md:text-[14px] max-md:leading-6
            max-sm:max-w-[300px] max-sm:text-[13px]
          "
        >
          From content, to audience, to trust, to stardom. FAME Global manages
          the entire journey.
        </p>
      </div>

      {/* Arabic Text + Buttons */}
      <div
        dir="rtl"
        className="
          absolute right-[7.8%] top-[52%] z-20
          w-[500px] text-center

          max-xl:right-[8%] max-xl:w-[480px]
          max-lg:right-[5%] max-lg:top-[55%] max-lg:w-[440px]
          max-md:left-1/2 max-md:right-auto max-md:top-[49%] max-md:w-[90%] max-md:-translate-x-1/2
          max-sm:top-[48%]
        "
      >
        <p
          className="
            mb-[22px] text-[19px] font-bold leading-[1.65] text-white

            max-lg:text-[17px]
            max-md:mx-auto max-md:max-w-[340px] max-md:text-[15px] max-md:leading-8
            max-sm:text-[13px] max-sm:leading-7
          "
        >
          منظومة متكاملة لإدارة وتطوير أعمال المشاهير
          <br className="hidden sm:block" />
          وصناعة النجومية المستدامة.
        </p>

        <div
          className="
            flex items-center justify-center gap-[16px]

            max-sm:flex-col max-sm:gap-3
          "
        >
          <a
            href="#"
            className="
              block h-[44px] w-[180px] overflow-hidden rounded-[10px]

              max-md:h-[44px] max-md:w-[180px]
              max-sm:h-[42px] max-sm:w-[170px]
            "
          >
            <img
              src={pinkButton}
              alt="اكتشف كيف نعمل"
              className="h-full w-full object-fill"
            />
          </a>

          <a
            href="#"
            className="
              block h-[44px] w-[180px] overflow-hidden rounded-[10px]

              max-md:h-[44px] max-md:w-[180px]
              max-sm:h-[42px] max-sm:w-[170px]
            "
          >
            <img
              src={whiteButton}
              alt="تحدث معنا"
              className="h-full w-full object-fill"
            />
            
          </a>
        </div>
      </div>
    </section>
  );
}