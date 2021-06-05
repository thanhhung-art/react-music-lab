import React,{ useEffect } from "react";
import logo from "./images/download.webp";
import "./sass/index.scss";
import Home from "./pages/Home";
import FeaturesPage from "./pages/FeaturesPage";
import PricingPage from "./pages/PricingPage";
import BlogPage from "./pages/BlogPage";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";



function App() {

  const scrollToTop = () => {
    let btnUp = document.getElementById("up");
    let rootElement = document.documentElement;

    rootElement.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  useEffect(() => {
    window.addEventListener("scroll",changeDisplayBtnUp);
    window.addEventListener("scroll",changeNavbarPosition)

    return () => {
      window.removeEventListener("scroll",changeDisplayBtnUp);
      window.removeEventListener("scroll", changeNavbarPosition);
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
                 <p>Blog</p>
                  <ul className="sub__links">
                    <li className="sub__links__item"><Link to="/blog">Blog</Link></li>
                    <li className="sub__links__item"><Link>Blog Detail</Link></li>
                    <li className="sub__links__item"><Link>Elements</Link></li>
                  </ul> 
               </li>
              <li className="navbar__links__item"><Link to="/contact">Contact</Link></li>
            </ul>
            <a href="#" className="btn navbar__btn">SIGN IN</a>
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


function changeDisplayBtnUp (){
  let up = document.getElementById("up");
  if(window.pageYOffset >= 600){
    up.classList.add("btn-up-visible");
  }
  else {
    up.classList.remove("btn-up-visible");
  }
}

function changeNavbarPosition(){
  let navbar = document.getElementById("navbar");

  if(window.pageYOffset >= 500){
    navbar.classList.add("navbar-change");
  }
  else {
    navbar.classList.remove("navbar-change");
  }
}
