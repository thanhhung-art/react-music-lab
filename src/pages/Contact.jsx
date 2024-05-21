import styled from "styled-components";
import Form from "../components/Form";
import GoogleMap from "../components/GoogleMap";
import useCloseMobileMenu from "../hooks/closeMobileMenu";

const Header = styled.div`
  background: #1a1e1e;
  padding: 6rem;
  text-align: center;
  color: #fff;
  font-size: 3rem;
  font-weight: bold;
  @media (max-width: 700px) {
    font-size: 2.5rem;
  }
`;

export default function Contact() {
  useCloseMobileMenu();
  return (
    <>
      <Header>Contact</Header>
      <div className="container contact">
        <div className="google-map">
          <GoogleMap />
        </div>
        <div className="contact__form">
          <div className="contact__form__col__1">
            <h4>Get In Touch</h4>
            <Form
              placeholderComment="Enter Message"
              placeholderInput1="Enter your name"
              placeholderInput2="Enter your email"
              placeholderInput3="Enter Subject"
              button="SEND"
            />
          </div>
          <div className="contact__form__col__2">
            <ul>
              <li>
                <i className="fas fa-home"></i>
                <p>
                  Buttonwood, California. <br />
                  <span>Rosemead, CA 91770</span>
                </p>
              </li>
              <li>
                <i className="fas fa-mobile-alt"></i>
                <p>
                  +1 253 565 2365 <br />
                  <span>Mon to Fri 9am to 6pm</span>
                </p>
              </li>
              <li>
                <i className="far fa-envelope"></i>
                <p>
                  support@colorlib.com <br />
                  <span>Send us your query anytime</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
