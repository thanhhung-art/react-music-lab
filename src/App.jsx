import { useEffect } from "react";
import logo from "./images/download.webp";
import "./sass/index.scss";
import Home from "./pages/Home";
import FeaturesPage from "./pages/FeaturesPage";
import PricingPage from "./pages/PricingPage";
import BlogPage from "./pages/BlogPage";
import BlogDetails from "./pages/BlogDetails";
import Element from "./pages/Element";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./hooks/scrollToTop";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { handleNavbarAndBtnUp } from "./utils/handleNavbarAndBtnUp";
import { useRef } from "react";

function App() {
  const arrowIcon = useRef(null);
  const menu1 = useRef(null);
  const menu2 = useRef(null);

  const scrollToTop = () => {
    let rootElement = document.documentElement;

    rootElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleNavbarAndBtnUp);

    return () => {
      window.addEventListener("scroll", handleNavbarAndBtnUp);
    };
  });

  useEffect(() => {
    document.querySelector('.menu-mobile').classList.add('hide-menu');
  },[])

  function handleMenuMobile(i) {
    if (i === 0) {
      menu1.current.classList.toggle("hide-menu");
    } else if (i === 1) {
      menu2.current.classList.toggle("hide-menu");
      arrowIcon.current.classList.toggle("rotate_180");
    }
  }

  return (
    <Router>
      <div className="up" id="up" onClick={scrollToTop}>
        <i className="fas fa-arrow-up"></i>
      </div>
      {/* navbar */}
      <div className="hold-position">
        <div className="navbar" id="navbar">
          <nav>
            <div className="navbar__brand">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <ul className="navbar__links">
              <li className="navbar__links__item">
                <Link to="/">Home</Link>
              </li>
              <li className="navbar__links__item">
                <Link to="/features">Features</Link>
              </li>
              <li className="navbar__links__item">
                <Link to="/pricing">Pricing</Link>
              </li>
              <li className="navbar__links__item">
                <a href="#0">Donwload</a>
              </li>
              <li className="navbar__links__item parent">
                <p>
                  <Link to="/blog">Blog</Link>
                </p>
                <ul className="sub__links">
                  <li className="sub__links__item">
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li className="sub__links__item">
                    <Link to="/blog-details">Blog Details</Link>
                  </li>
                  <li className="sub__links__item">
                    <Link to="/elements">Elements</Link>
                  </li>
                </ul>
              </li>
              <li className="navbar__links__item">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
            <a href="#0" className="btn btn__primary navbar__btn btn__pill">
              SIGN IN
            </a>
            <div className="btn-nav" onClick={() => handleMenuMobile(0)}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
            <div ref={menu1} className="navbar__mobile menu-mobile hide-menu">
              <ul className="navbar__mobile__links">
                <li className="navbar__mobile__links__item">
                  <Link to="/">Home</Link>
                </li>
                <li className="navbar__mobile__links__item">
                  <Link to="/features">Features</Link>
                </li>
                <li className="navbar__mobile__links__item">
                  <Link to="/pricing">Pricing</Link>
                </li>
                <li className="navbar__mobile__links__item">
                  <a href="#0">Donwload</a>
                </li>
                <li
                  className="navbar__mobile__links__item sub__links__item"
                  onClick={() => handleMenuMobile(1)}
                >
                  <div>
                    <a href="#blog">Blog</a>
                    <i ref={arrowIcon} className="fas fa-angle-down"></i>
                  </div>
                  <ul ref={menu2} className="menu-mobile hide-menu">
                    <li>
                      <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                      <Link to="/blog-details">Blog Details</Link>
                    </li>
                    <li>
                      <Link to="/elements">Elements</Link>
                    </li>
                  </ul>
                </li>
                <li className="navbar__mobile__links__item">
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      {/* pages */}
      <Switch>
        <Route path="/features" exact>
          <ScrollToTop />
          <FeaturesPage />
        </Route>

        <Route path="/pricing">
          <ScrollToTop />
          <PricingPage />
        </Route>

        <Route path="/blog">
          <ScrollToTop />
          <BlogPage />
        </Route>

        <Route path="/blog-details">
          <ScrollToTop />
          <BlogDetails />
        </Route>

        <Route path="/elements">
          <ScrollToTop />
          <Element />
        </Route>

        <Route path="/contact">
          <ScrollToTop />
          <Contact />
        </Route>

        <Route path="/">
          <ScrollToTop />
          <Home />
        </Route>
      </Switch>
      {/* footer */}
      <Footer />
    </Router>
  );
}

export default App;
