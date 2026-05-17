import aboutImage from "../../assets/2X/Asset 10@2X.png";
import glowCircle from "../../assets/SVG/Asset 11.svg";
import bgOverlay from "../../assets/SVG/Asset 9.svg";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="about-section">
      {/* Asset 9 = top-edge gradient overlay */}
      <img
        src={bgOverlay}
        alt=""
        aria-hidden="true"
        className="about-bg-overlay"
      />

      <div className="about-inner">
        {/* LEFT — Chair */}
        <div className="about-image-col">
          <img src={aboutImage} alt="Fame About" className="about-chair" />
          <div className="about-fade-h" />
          <div className="about-fade-b" />
        </div>

        {/* RIGHT — Text */}
        <div className="about-text-col" dir="rtl">
          <img
            src={glowCircle}
            alt=""
            aria-hidden="true"
            className="about-glow"
          />

          <p className="about-who">من نحن</p>

          <h2 className="about-fame" dir="ltr">
            FAME
          </h2>

          <p className="about-body">
            هـــي منظومـــة متكاملـــة لإدارة وتطويـــر أعمال المشـــاهير
            وصنّاع المحتوى، نحول الشـــهرة إلى قيمة مسـتدامة عبر استراتيجية
            محتـوى، إدارة سمعة، وتنظيم الأعمال والشراكات.
          </p>

          <a href="#services" className="about-btn">
            اكتشف المنظومة
          </a>
        </div>
      </div>
    </section>
  );
}