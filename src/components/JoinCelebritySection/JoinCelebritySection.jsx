import "./JoinCelebritySection.css";

import joinBg from "../../assets/2x/Asset 41@2x.png";
import starImg from "../../assets/2x/Asset 38@2x.png";

export default function JoinCelebritySection() {
  return (
    <section className="join-celebrity-section" dir="rtl">
      <div className="join-banner">
        <img src={joinBg} alt="" aria-hidden="true" className="join-banner-img" />

        <img src={starImg} alt="" aria-hidden="true" className="join-star" />

        <a href="#contact" className="join-btn">
          <span className="join-btn-arrow">‹</span>
          <span className="join-btn-text">انضم كمشهور</span>
        </a>
      </div>
    </section>
  );
}