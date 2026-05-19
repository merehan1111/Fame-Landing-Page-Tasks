import { useEffect, useRef } from "react";
import "./WhyFameSection.css";

import bgImage from "../../assets/SVG/Asset 19.svg";
import starRobot from "../../assets/SVG/Asset 24.svg";

import cardProfessional from "../../assets/SVG/Asset 30.svg";
import cardIndependence from "../../assets/SVG/Asset 29.svg";
import cardSystem from "../../assets/SVG/Asset 28.svg";
import cardData from "../../assets/SVG/Asset 27.svg";
import cardAI from "../../assets/SVG/Asset 31.svg";

export default function WhyFameSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("why-fame-in-view");
          observer.unobserve(section);
        }
      },
      {
        threshold: 0.24,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="why-fame-section why-fame-animate" dir="rtl">
      <img
        src={bgImage}
        alt=""
        aria-hidden="true"
        className="why-fame-bg"
      />

      <div className="why-fame-container">
        <h2 className="why-fame-title">لماذا FAME ؟</h2>

        <div className="why-fame-star-glow" aria-hidden="true" />

        <img
          src={starRobot}
          alt="FAME Star"
          className="why-fame-star"
        />

        <img
          src={cardProfessional}
          alt="احتراف"
          className="why-fame-card why-card-left-top"
        />

        <img
          src={cardIndependence}
          alt="استقلالية"
          className="why-fame-card why-card-left-middle"
        />

        <img
          src={cardAI}
          alt="ذكاء اصطناعي"
          className="why-fame-card why-card-bottom"
        />

        <img
          src={cardSystem}
          alt="منظومة"
          className="why-fame-card why-card-right-top"
        />

        <img
          src={cardData}
          alt="بيانات"
          className="why-fame-card why-card-right-middle"
        />
      </div>
    </section>
  );
}