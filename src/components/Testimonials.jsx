/* eslint-disable react/prop-types */
import Slider from "react-slick";
import image1 from "../images/xfounder-img.png.pagespeed.ic.3kkoGROeDr.webp";
import image2 from "../images/xfounder-img2.png.pagespeed.ic.rRHNnxm3IK.webp";
import image3 from "../images/xfounder-img3.png.pagespeed.ic.DQeZtHTdr9.webp";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import { useMemo } from "react";

function User(props) {
  return (
    <div className="user">
      <div className="user__header">
        <img src={props.image} alt="" />
        <div className="user__name">
          <h4>{props.name}</h4>
          <span>CEO at Creativelab</span>
        </div>
      </div>
      <div className="user__review">
        <p className="text">
          Lorem ipsum dolor sit amet consectetur, adipisicing, elit. Itaque
          possimus pariatur sit eaque temporibus.
        </p>
      </div>
      <div className="stars">
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
      </div>
    </div>
  );
}

function Testimonials() {
  const settings = useMemo(
    () => ({
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 1175,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 699,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    }),
    []
  );

  return (
    <section className="testimonials">
      <div className="Testimonials__header">
        <h2 className="component-title">Customers are loving MusicLab</h2>
      </div>
      <div className="testimonials__slider">
        <div className="container">
          <Slider {...settings}>
            <User image={image1} name={"Mary Christmas"} />
            <User image={image1} name={"Mary Christmas"} />
            <User image={image2} name={"Juan Annato"} />
            <User image={image3} name={"Holly Graham"} />
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
