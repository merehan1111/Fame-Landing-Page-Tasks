import "./Footer.css";
import logo from "../../assets/2x/logo.png"; 
import logo2 from "../../assets/2x/logo2.jpeg";
export default function Footer() {
  return (
    <footer className="fame-footer" dir="rtl">
      <div className="fame-footer-container">
        <div className="footer-line"></div>
        <div className="footer-logo-wrap">
          <img src={logo} alt="Fame" className="footer-logo" />
        </div>
        <div className="footer-content">
          {/* Right Links */}
          <div className="footer-col footer-links">
            <a href="#">الرئيسية</a>
            <a href="#">من نحن</a>
            <a href="#">خدماتنا</a>
            <a href="#">كيف نصنع التوجه</a>
          </div>

          {/* Center Links */}
          <div className="footer-col footer-policy">
            <a href="#">الشروط والأحكام</a>
            <a href="#">سياسة الخصوصية</a>
          </div>

          {/* Subscribe */}
          <div className="footer-col footer-subscribe">
            <h3>انضم إلينا</h3>

            <form className="footer-subscribe-form">
              <button type="submit">انضم إلينا</button>
              <input type="email" placeholder="البريد الإلكتروني" />
            </form>

            <div className="footer-social">
              <a href="#" aria-label="Facebook">f</a>
              <a href="#" aria-label="Instagram">◎</a>
              <a href="#" aria-label="X">𝕏</a>
              <a href="#" aria-label="TikTok">♪</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-made">
            <img src={logo2} alt="log2" />
          </div>
        </div>
      </div>
    </footer>
  );
}