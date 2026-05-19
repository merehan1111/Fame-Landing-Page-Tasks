import { useEffect, useRef } from "react";
import "./ContactSection.css";
import contactPerson from "../../assets/2x/contactperson.png";
import linesBg from "../../assets/2x/contactus.png";

export default function ContactSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("contact-in-view");
          observer.unobserve(section);
        }
      },
      {
        threshold: 0.22,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="fame-contact contact-animate"
      dir="rtl"
      style={{ "--contact-bg": `url(${linesBg})` }}
    >
      <div className="fame-contact-container">
        <h2 className="fame-contact-title">تواصل معنا</h2>

        <div className="fame-contact-wrapper">
          <div className="fame-contact-image">
            <img src={contactPerson} alt="تواصل معنا" />
          </div>

          <div className="fame-contact-form-box">
            <form className="fame-contact-form">
              <div className="fame-form-group">
                <label>الاسم الشخصي / اسم الشركة:*</label>
                <input type="text" placeholder="الاسم الشخصي / اسم الشركة" />
              </div>

              <div className="fame-form-group">
                <label>البريد الإلكتروني:*</label>
                <input type="email" placeholder="البريد الإلكتروني" />
              </div>

              <div className="fame-form-group">
                <label>الموضوع:</label>
                <input type="text" placeholder="الموضوع" />
              </div>

              <div className="fame-form-group fame-message-group">
                <label>الرسالة:*</label>
                <textarea placeholder="الرسالة"></textarea>
              </div>

              <button type="submit" className="fame-contact-btn">
                إرسال
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}