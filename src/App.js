import React,{ useEffect } from "react";
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
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  const scrollToTop = () => {
    let rootElement = document.documentElement;

    rootElement.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  useEffect(() => {
    window.addEventListener("scroll",handleNavbarAndBtnUp);

    return () => {
      window.addEventListener("scroll",handleNavbarAndBtnUp);
    }
  });

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
              <Link to="/"><img src={logo} alt="logo" /></Link>
            </div>
            <ul className="navbar__links">
              <li className="navbar__links__item"><Link to="/">Home</Link></li>
              <li className="navbar__links__item"><Link to="/features">Features</Link></li>
              <li className="navbar__links__item"><Link to="/pricing">Pricing</Link></li>
              <li className="navbar__links__item"><Link>Donwload</Link></li>
              <li className="navbar__links__item parent">
                 <p><Link to="/blog">Blog</Link></p>
                  <ul className="sub__links">
                    <li className="sub__links__item"><Link to="/blog">Blog</Link></li>
                    <li className="sub__links__item"><Link to="/blog-details">Blog Details</Link></li>
                    <li className="sub__links__item"><Link to="/elements">Elements</Link></li>
                  </ul> 
               </li>
              <li className="navbar__links__item"><Link to="/contact">Contact</Link></li>
            </ul>
            <a href="#" className="btn btn__primary navbar__btn btn__pill">SIGN IN</a>
          </nav>
        </div>  
      </div>
      {/* pages */}
      <Switch>

        <Route path="/features">
          <FeaturesPage />
        </Route>

         <Route path="/pricing">
          <PricingPage />
        </Route>

        <Route path="/blog">
          <BlogPage />
        </Route>

        <Route path="/blog-details">
          <BlogDetails />
        </Route>

        <Route path="/elements">
          <Element />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>

        <Route path="/">
          <Home />
        </Route>

      </Switch>
      {/* footer */}
      <Footer />
    </Router>
  );
}

export default App;


function handleNavbarAndBtnUp (){
  let navbar = document.getElementById("navbar");
  let up = document.getElementById("up");
  if(window.pageYOffset >= 500){
    navbar.classList.add("navbar-change");
    up.classList.add("btn-up-visible");
  }
  else {
    navbar.classList.remove("navbar-change");
    up.classList.remove("btn-up-visible");
  }
}
