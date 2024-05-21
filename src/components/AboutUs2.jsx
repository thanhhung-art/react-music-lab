import image1 from "../images/finder.svg";
import image2 from "../images/xabout2.png.pagespeed.ic.72aMp8Hctl.webp";

function AboutUs2() {
  return (
    <section className="about-us-2">
      <div className="container">
        <div className="about-us-2__content">
          <div className="wrap-content">
            <h2 className="component-title">
              We are tender heart charity foundation.
            </h2>
            <ul className="about-us-2__content__list">
              <li>
                <img src={image1} alt="" />
                <p className="text">
                  Reduce unnecessary spend with real time insights into every
                  penny spent.
                </p>
              </li>
              <li>
                <img src={image1} alt="" />
                <p className="text">
                  Reduce unnecessary spend with real time insights into every
                  penny spent.
                </p>
              </li>
              <li>
                <img src={image1} alt="" />
                <p className="text">
                  Reduce unnecessary spend with real time insights into every
                  penny spent.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="about-us-2__image">
          <img src={image2} alt="about-us-2" />
        </div>
      </div>
    </section>
  );
}

export default AboutUs2;
