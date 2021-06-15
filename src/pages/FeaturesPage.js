import React from 'react';
import styled from "styled-components";
import AboutUs1 from "../components/AboutUs1";
import AboutUs2 from "../components/AboutUs2";
import Features from "../components/Features";

const Header = styled.div`
	background: #1A1E1E;
	padding: 6rem;
	text-align: center;
	color: #fff;
	font-size: 3rem;
	font-weight: bold;	
`;

function FeaturesPage() {
	return (
		<>
			<Header>
				Features
			</Header>
			<AboutUs1 />
			<AboutUs2 />
			<Features />
		</>
	)
}

export default FeaturesPage;