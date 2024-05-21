/* eslint-disable react/prop-types */
import styled from "styled-components";
import Post from "../components/Post";
import Tools from "../components/Tools";
import Form from "../components/Form";
import image1 from "../images/xsingle_blog_1.jpg.pagespeed.ic.crhqX85fp0.jpeg";
import author from "../images/xauthor.png.pagespeed.ic.ODzYv6n44a.png";
import comment1 from "../images/xcomment_1.png.pagespeed.ic.nxxwmEk3HK.webp";
import comment2 from "../images/xcomment_2.png.pagespeed.ic.rv1J-BlfMh.webp";
import comment3 from "../images/xcomment_3.png.pagespeed.ic.1O6TaovPw0.webp";
import useCloseMobileMenu from "../hooks/closeMobileMenu";

const Header = styled.div`
  background: #1a1e1e;
  padding: 6rem 1rem;
  text-align: center;
  color: #fff;
  font-size: 3rem;
  font-weight: bold;
  @media (max-width: 700px) {
    font-size: 2.5rem;
    padding: 3rem;
  }
`;

function BlogDetails() {
  useCloseMobileMenu()
  return (
    <>
      <Header>Blog Details</Header>
      <div className="container wrap-content blog-details">
        <div className="col__post">
          <Post
            image={image1}
            title={
              "Second divided from form fish beast made every of seas all gathered us saying he our"
            }
            adress={"Travel, LifeStyle"}
            comments={3}
          />
          <p className="text__small">
            MCSE boot camps have its supporters and its detractors. Some people
            do not understand why you should have to spend money on boot camp
            when you can get the MCSE study materials yourself at a fraction of
            the camp price. However, who has the willpower
          </p>
          <p className="text__small">
            MCSE boot camps have its supporters and its detractors. Some people
            do not understand why you should have to spend money on boot camp
            when you can get the MCSE study materials yourself at a fraction of
            the camp price. However, who has the willpower
          </p>
          <div className="quote__wrap">
            <div className="quote__inner">
              <blockquote className="quote__text">
                MCSE boot camps have its supporters and its detractors. Some
                people do not understand why you should have to spend money on
                boot camp when you can get the MCSE study materials yourself at
                a fraction of the camp price. However, who has the willpower to
                actually sit through a self-imposed MCSE training.
              </blockquote>
            </div>
          </div>
          <p className="text__small">
            MCSE boot camps have its supporters and its detractors. Some people
            do not understand why you should have to spend money on boot camp
            when you can get the MCSE study materials yourself at a fraction of
            the camp price. However, who has the willpower
          </p>
          <p className="text__small">
            MCSE boot camps have its supporters and its detractors. Some people
            do not understand why you should have to spend money on boot camp
            when you can get the MCSE study materials yourself at a fraction of
            the camp price. However, who has the willpower
          </p>
          <div className="row__status">
            <div className="row__status__des">
              <div className="col__left">
                <i className="fas fa-heart"></i>
                <span>Lily and 4 people like this</span>
              </div>
              <div className="col__right">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-github"></i>
                <i className="fab fa-linkedin"></i>
              </div>
            </div>
            <div className="row__status__btns">
              <div className="prev">
                <div className="button">
                  <div className="overlay">
                    <i className="fas fa-arrow-left"></i>
                  </div>
                </div>
                <div className="col__text">
                  <p className="text">Prev Post</p>
                  <h5>Space The Final Frontier</h5>
                </div>
              </div>
              <div className="next">
                <div className="col__text">
                  <p className="text">Next Post</p>
                  <h5>TeleScopes 101</h5>
                </div>
                <div className="button">
                  <div className="overlay">
                    <i className="fas fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="author">
            <img src={author} alt="author" />
            <div className="author__info">
              <h4 className="author__name">Harvard Milan</h4>
              <p className="text__small">
                Second divided from form fish beast made. Every of seas all
                gathered use saying you&apos;re, he our dominion twon Second
                divided from
              </p>
            </div>
          </div>
          <div className="wrap__comments__component">
            <h3>03 comments</h3>
            <div className="wrap__comments">
              <SomeOne
                image={comment1}
                comment={
                  "Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser"
                }
                name="Emily Blunt"
                time="December 4, 2017 at 3:12 pm"
              />
              <SomeOne
                image={comment2}
                comment={
                  "Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser"
                }
                name="Emily Blunt"
                time="December 4, 2017 at 3:12 pm"
              />
              <SomeOne
                image={comment3}
                comment={
                  "Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser"
                }
                name="Emily Blunt"
                time="December 4, 2017 at 3:12 pm"
              />
            </div>
          </div>
          <div className="post__comment">
            <h3>Leave a Reply</h3>
            <Form
              placeholderComment="Write Comment"
              placeholderInput1="Name"
              placeholderInput2="Email"
              placeholderInput3="Website"
              button="Post Comment"
            />
          </div>
        </div>
        <div className="col__tools">
          <Tools />
        </div>
      </div>
    </>
  );
}

export default BlogDetails;

function SomeOne(props) {
  return (
    <div className="someone">
      <div className="someone__image">
        <img src={props.image} alt="someone" />
      </div>
      <div className="somone__comment">
        <p className="text__small text__comment">{props.comment}</p>
        <div className="row__des">
          <h4 className="isblue">{props.name}</h4>
          <span>{props.time}</span>
          <p className="text isblue">REPLY</p>
        </div>
      </div>
    </div>
  );
}
