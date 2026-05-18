import "./ClientsSection.css";

import arcShape from "../../assets/2x/c2.png";
import glowShape from "../../assets/2x/c1.png";

export default function ClientsSection() {
  const clients = Array.from({ length: 8 });
  const allies = Array.from({ length: 4 });

  return (
    <section className="fame-clients" dir="rtl">
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
        {/* عملاؤنا */}
        <div className="clients-main-area">
          <h2 className="fame-clients-title">عملاؤنا</h2>

          <div className="fame-clients-grid">
            {clients.map((_, index) => (
              <div className="fame-client-card" key={index}></div>
            ))}
          </div>

          <button type="button" className="fame-clients-btn">
            المزيد
          </button>
        </div>

        {/* حلفاؤنا */}
        <div className="fame-allies-area">
          <h2 className="fame-allies-title">حلفاؤنا</h2>

          <button type="button" className="allies-arrow allies-arrow-left">
            ‹
          </button>

          <div className="fame-allies-grid">
            {allies.map((_, index) => (
              <div className="fame-ally-card" key={index}></div>
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