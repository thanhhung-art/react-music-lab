import image1 from "../images/xonlinemusic1.png.pagespeed.ic.-YIR7EM0TZ.webp";
import image2 from "../images/xonlinemusic2.png.pagespeed.ic.Cceh80Y6Rl.webp";
import image3 from "../images/xonlinemusic3.png.pagespeed.ic.zgqB0nbRru.webp";
import image4 from "../images/xonlinemusic4.png.pagespeed.ic.Eik9M26QE1.webp";

function Features() {
  return (
    <section className="features">
      <div className="container">
        <h2 className="component-title">Get ready for seamless online music</h2>
        <p className="features__text text">
          Utrust is a seamless integration that gives e-commerce businesses the
          power to accept digital currencies - and get all the benefits you
          can’t with just traditional payment methods.
        </p>
        <ul className="features__list">
          <li>
            <img src={image1} alt="" />
            <h4>Offline mode.</h4>
            <p>Save and listen anywhere.</p>
          </li>
          <li>
            <img src={image2} alt="" />
            <h4>High quality audio.</h4>
            <p>Enjoy the full range of sound.</p>
          </li>
          <li>
            <img src={image3} alt="" />
            <h4>No ads.</h4>
            <p>Enjoy nonstop music.</p>
          </li>
          <li>
            <img src={image4} alt="" />
            <h4>Unlimited skips.</h4>
            <p>just tap skip.</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Features;
