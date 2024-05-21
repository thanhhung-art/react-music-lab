import image from "../images/xabout1.png.pagespeed.ic.5Gj3LraFvx.webp";
import imageSound from "../images/xsound.png.pagespeed.ic.aqZmb5nW4H.webp";

function AboutUs1() {
  return (
    <section className="about-us-1">
      <div className="container">
        <div className="about-us-1__image">
          <img src={image} alt="about-us" />
        </div>
        <div className="about-us-1__content">
          <div className="wrap-content">
            <img src={imageSound} alt="sound" />
            <h2 className="component-title">
              Listen to a persona lized mix of tracks
            </h2>
            <ul className="about-us-1__content__list">
              <li>
                <span>01</span>
                <p className="text">
                  Reduce unnecessary spend with real time insights into every
                  penny spent.
                </p>
              </li>
              <li>
                <span>02</span>
                <p className="text">
                  Reduce unnecessary spend with real time insights into every
                  penny spent.
                </p>
              </li>
              <li>
                <span>03</span>
                <p className="text">
                  Reduce unnecessary spend with real time insights into every
                  penny spent.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs1;
