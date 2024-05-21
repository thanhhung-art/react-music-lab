import styled from "styled-components";
import Price from "../components/Price";
import Features from "../components/Features";
import useCloseMobileMenu from "../hooks/closeMobileMenu";

const Header = styled.div`
	background: #1A1E1E;
	padding: 6rem;
	text-align: center;
	color: #fff;
	font-size: 3rem;
	font-weight: bold;
	@media (max-width: 700px) {
		font-size: 2.5rem;
		padding; 3rem;
	} 
`;

function PricingPage() {
  useCloseMobileMenu();
	
  return (
    <>
      <Header>Pricing</Header>
      <Price />
      <Features />
    </>
  );
}

export default PricingPage;
