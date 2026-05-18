import "./WhyFameSection.css";

import bgImage  from "../../assets/SVG/Asset 19.svg";

import starRobot from "../../assets/SVG/Asset 24.svg";

/*
  حسب النتيجة اللي ظهرت عندك:
  Asset 30 = احتراف
  Asset 29 = استقلالية
  Asset 28 = منظومة
  Asset 27 = بيانات
  Asset 31 = ذكاء اصطناعي
*/

import cardProfessional from "../../assets/SVG/Asset 30.svg";
import cardIndependence from "../../assets/SVG/Asset 29.svg";
import cardSystem from "../../assets/SVG/Asset 28.svg";
import cardData from "../../assets/SVG/Asset 27.svg";
import cardAI from "../../assets/SVG/Asset 31.svg";

export default function WhyFameSection() {
  return (
    <section className="why-fame-section" dir="rtl">
      
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