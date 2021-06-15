import React from 'react';
import styled from "styled-components";
import Price from "../components/Price";
import Features from "../components/Features";

const Header = styled.div`
	background: #1A1E1E;
	padding: 6rem;
	text-align: center;
	color: #fff;
	font-size: 3rem;
	font-weight: bold;	
`;

function PricingPage() {
	return (
		<>
			<Header>
				Pricing
			</Header>
			<Price />
			<Features />
		</>
	)
}

export default PricingPage;