import styled from "styled-components";
import AboutUs1 from "../components/AboutUs1";
import AboutUs2 from "../components/AboutUs2";
import Features from "../components/Features";
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
    padding: 3rem;
  }
`;

function FeaturesPage() {
  useCloseMobileMenu()
  
  return (
    <>
      <Header>Features</Header>
      <AboutUs1 />
      <AboutUs2 />
      <Features />
    </>
  );
}

export default FeaturesPage;
