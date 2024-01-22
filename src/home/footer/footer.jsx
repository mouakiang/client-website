import "./footer.css";

export function Footer() {
  return (
    <footer className="footer-wrap">
      <div className="social-icons">
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook fa-2x"></i>
        </a>
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram fa-2x"></i>
        </a>
        <a
          href="mailto:your@email.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-envelope fa-2x"></i>
        </a>
      </div>
      <div>
        Copyright © 2024 Sai Vang // Web design by Kiang Moua and Greg Topscher
      </div>
    </footer>
  );
}
