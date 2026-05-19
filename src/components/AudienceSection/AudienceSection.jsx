import { useEffect, useRef } from "react";
import "./AudienceSection.css";

import personImage from "../../assets/SVG/Asset 22.svg";
import sectionBg from "../../assets/SVG/Asset 19.svg";

import { Star, Building2 } from "lucide-react";

export default function AudienceSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("audience-in-view");
          observer.unobserve(section);
        }
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="audience-section audience-animate" dir="rtl">
      <img
        src={sectionBg}
        alt=""
        aria-hidden="true"
        className="audience-bg"
      />

      <div className="audience-container">
        <h2 className="audience-title">لمن هذه المنظومة؟</h2>

        <div className="audience-content">
          <div className="audience-person-wrap">
            <div className="audience-glow"></div>

            <img
              src={personImage}
              alt="لمن هذه المنظومة"
              className="audience-person"
            />
          </div>

          <div className="audience-cards">
            <div className="audience-card audience-card-one">
              <div className="audience-card-text">
                <h3>المشاهير</h3>
                <p>نحو حضور، مسار واضح وفرص مدروسة</p>
              </div>

              <div className="audience-card-icon">
                <Star size={30} strokeWidth={1.7} />
              </div>
            </div>

            <div className="audience-card audience-card-two">
              <div className="audience-card-text">
                <h3>الشركات / الجهات</h3>
                <p>ندعمك للظهور، حضور قوي، صيت ونتائج قابلة للقياس</p>
              </div>

              <div className="audience-card-icon">
                <Building2 size={30} strokeWidth={1.7} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}