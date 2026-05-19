import { useEffect, useRef } from "react";
import "./ClientsSection.css";

import arcShape from "../../assets/2x/c2.png";
import glowShape from "../../assets/2x/c1.png";

export default function ClientsSection() {
  const sectionRef = useRef(null);
  const clients = Array.from({ length: 8 });
  const allies = Array.from({ length: 4 });

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("clients-in-view");
          observer.unobserve(section);
        }
      },
      {
        threshold: 0.18,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="fame-clients clients-animate" dir="rtl">
      <img
        src={arcShape}
        alt=""
        aria-hidden="true"
        className="clients-arc-shape"
      />

      <img
        src={glowShape}
        alt=""
        aria-hidden="true"
        className="clients-glow-shape"
      />

      <div className="fame-clients-container">
        <div className="clients-main-area">
          <h2 className="fame-clients-title">عملاؤنا</h2>

          <div className="fame-clients-grid">
            {clients.map((_, index) => (
              <div
                className="fame-client-card"
                key={index}
                style={{ "--client-delay": `${0.42 + index * 0.07}s` }}
              ></div>
            ))}
          </div>

          <button type="button" className="fame-clients-btn">
            المزيد
          </button>
        </div>

        <div className="fame-allies-area">
          <h2 className="fame-allies-title">حلفاؤنا</h2>

          <button type="button" className="allies-arrow allies-arrow-left">
            ‹
          </button>

          <div className="fame-allies-grid">
            {allies.map((_, index) => (
              <div
                className="fame-ally-card"
                key={index}
                style={{ "--ally-delay": `${0.98 + index * 0.1}s` }}
              ></div>
            ))}
          </div>

          <button type="button" className="allies-arrow allies-arrow-right">
            ›
          </button>
        </div>
      </div>
    </section>
  );
}