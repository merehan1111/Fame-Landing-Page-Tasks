import { useEffect, useRef } from "react";
import "./JoinCelebritySection.css";

import joinBg from "../../assets/2x/Asset 41@2x.png";
import starImg from "../../assets/2x/Asset 38@2x.png";

export default function JoinCelebritySection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("join-in-view");
          observer.unobserve(section);
        }
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="join-celebrity-section join-animate"
      dir="rtl"
    >
      <div className="join-banner">
        <img
          src={joinBg}
          alt=""
          aria-hidden="true"
          className="join-banner-img"
        />

        <img src={starImg} alt="" aria-hidden="true" className="join-star" />

        <a href="#contact" className="join-btn">
          <span className="join-btn-arrow">‹</span>
          <span className="join-btn-text">انضم كمشهور</span>
        </a>
      </div>
    </section>
  );
}