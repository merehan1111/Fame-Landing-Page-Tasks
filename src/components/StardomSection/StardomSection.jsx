import { Search, Lightbulb, Newspaper, Users, Rocket, Star } from "lucide-react";
import "./StardomSection.css";

const starImage = new URL("../../assets/SVG/start.png", import.meta.url).href;

export default function StardomSection() {
  const steps = [
    { title: "تحليل", icon: Search, position: "top" },
    { title: "استراتيجية", icon: Lightbulb, position: "bottom" },
    { title: "محتوى", icon: Newspaper, position: "top" },
    { title: "جمهور", icon: Users, position: "bottom" },
    { title: "ثقة", icon: Rocket, position: "top" },
    { title: "نجومية", icon: Star, position: "bottom" },
  ];

  return (
    <section dir="rtl" className="stardom-section">
      <div className="stardom-container">
        <img
          src={starImage}
          alt=""
          aria-hidden="true"
          className="stardom-star"
        />

        <div className="stardom-text">
          <h2>كيف نصنع النجومية؟</h2>

          <p>
            شرح مختصر العنوان هنا شرح مختصر العنوان هنا شرح مختصر العنوان هنا
            شرح مختصر العنوان هنا شرح مختصر العنوان هنا شرح مختصر العنوان هنا
            شرح مختصر العنوان هنا شرح مختصر العنوان هنا شرح مختصر العنوان هنا
          </p>
        </div>

        <div className="stardom-timeline">
          <svg className="stardom-line" viewBox="0 0 540 118" fill="none">
            <path
              d="M538 59 L495 42 L408 78 L321 42 L234 78 L147 42 L60 78 L2 59"
              stroke="rgba(217,182,223,0.48)"
              strokeWidth="0.8"
            />

            <defs>
              <radialGradient id="dotGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                <stop offset="100%" stopColor="#7867ff" stopOpacity="0" />
              </radialGradient>

              <filter id="smallGlow">
                <feGaussianBlur stdDeviation="2.2" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <circle cx="538" cy="59" r="16" fill="url(#dotGlow)" />
            <circle cx="538" cy="59" r="5.5" fill="white" filter="url(#smallGlow)" />
            <circle cx="538" cy="59" r="2.8" fill="white" />
          </svg>

          {steps.map((step) => {
            const Icon = step.icon;
            const isTop = step.position === "top";

            return (
              <div
                key={step.title}
                className={`stardom-step ${isTop ? "step-top" : "step-bottom"}`}
              >
                {isTop && <span className="stardom-label">{step.title}</span>}

                <div className="stardom-circle">
                  <div className="stardom-circle-inner" />
                  <Icon className="stardom-icon" size={20} strokeWidth={1.45} />
                </div>

                {!isTop && <span className="stardom-label">{step.title}</span>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}