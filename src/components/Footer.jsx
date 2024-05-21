import logo from "../images/download.webp";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer__header">
            <div className="footer__header__col1">
              <div className="footer__logo">
                <img src={logo} alt="logo" />
              </div>
              <div className="footer__text">
                <p>
                  Utrust is a seamless integration that gives e-commercef
                  businesses the power to accept digital currencies - and get
                  all the benefit.
                </p>
              </div>
              <div className="icons">
                <i className="fab fa-facebook"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-linkedin-in"></i>
                <i className="fab fa-youtube"></i>
              </div>
            </div>
            <div className="footer__header__col2 quicklinks">
              <h3>Quick links</h3>
              <ul className="list">
                <li>Work</li>
                <li>Services</li>
                <li>Products</li>
                <li>Tip & Trick</li>
              </ul>
            </div>
            <div className="footer__header__col3 support">
              <h3>Support</h3>
              <ul className="list">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className="footer__header__col4 Navigation">
              <h3>Navigation</h3>
              <ul className="list">
                <li>Work</li>
                <li>Services</li>
                <li>Products</li>
                <li>Tip & Trick</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyright">
        Copyright ©2021 All rights reserved | This template is made with by
        Colorlib
      </div>
    </>
  );
}

export default Footer;
