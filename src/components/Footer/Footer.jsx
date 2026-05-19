import "./Footer.css";
import logo from "../../assets/2x/logo.png";
import logo2 from "../../assets/2x/share-logo.png";

export default function Footer() {
  return (
    <footer className="fame-footer" dir="rtl">
      <div className="fame-footer-container">
        <div className="footer-line" />

        <div className="footer-logo-wrap">
          <img src={logo} alt="Fame" className="footer-logo" />
        </div>

        <div className="footer-content">
          <nav className="footer-col footer-links" aria-label="Footer links">
            <a href="#">الرئيسية</a>
            <a href="#">من نحن</a>
            <a href="#">خدماتنا</a>
            <a href="#">كيف تصنع النجومية</a>
          </nav>

          <nav className="footer-col footer-policy" aria-label="Footer policy">
            <a href="#">الشروط والأحكام</a>
            <a href="#">سياسة الخصوصية</a>
          </nav>

          <div className="footer-col footer-subscribe">
            <h3>انضم إلينا</h3>

            <form className="footer-subscribe-form">
              <button type="submit">انضم إلينا</button>
              <input type="email" placeholder="البريد الإلكتروني" />
            </form>

            <div className="footer-social">
              <a href="#" aria-label="Facebook">
                <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M14.2 8.4V6.9c0-.7.2-1.1 1.1-1.1h1.4V3.2c-.7-.1-1.5-.2-2.2-.2-2.2 0-3.7 1.3-3.7 3.8v1.6H8.3v2.9h2.5V21h3.1v-9.7h2.5l.4-2.9h-2.6z" />
                </svg>
              </a>

              <a href="#" aria-label="Instagram">
                <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4c0 3.2-2.6 5.8-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2zm0 2C5.7 4 4 5.7 4 7.8v8.4C4 18.3 5.7 20 7.8 20h8.4c2.1 0 3.8-1.7 3.8-3.8V7.8C20 5.7 18.3 4 16.2 4H7.8zm8.9 1.7c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zM12 7.1c2.7 0 4.9 2.2 4.9 4.9S14.7 16.9 12 16.9 7.1 14.7 7.1 12 9.3 7.1 12 7.1zm0 2C10.4 9.1 9.1 10.4 9.1 12s1.3 2.9 2.9 2.9 2.9-1.3 2.9-2.9-1.3-2.9-2.9-2.9z" />
                </svg>
              </a>

              <a href="#" aria-label="X">
                <svg className="social-icon x-icon" viewBox="0 0 50 50" aria-hidden="true">
                  <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z" />
                </svg>
              </a>

              <a href="#" aria-label="TikTok">
                <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M16.6 5.1c.7.9 1.7 1.5 2.9 1.7v3.1c-1.1 0-2.2-.3-3.2-.9v5.8c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6c.4 0 .8 0 1.1.1v3.3c-.4-.1-.7-.2-1.1-.2-1.5 0-2.8 1.2-2.8 2.8s1.2 2.8 2.8 2.8 2.8-1.2 2.8-2.8V3h3.1c0 .8.1 1.5.4 2.1z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-credit">
            <img src={logo2} alt="Share Adawli" className="footer-made-logo" />
            <span className="footer-heart">♥</span>
            <span className="footer-credit-text">
                احد مشاريع شير الدولي لتقنيه المعلومات
           </span>
          </div>
        </div>
      </div>
    </footer>
  );
}