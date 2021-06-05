import React from 'react';
import Header from "../components/Header";
import AboutUs1 from "../components/AboutUs1";
import AboutUs2 from "../components/AboutUs2";
import Features from "../components/Features";
import Price from "../components/Price";
import Testimonials from "../components/Testimonials";

function Home() {
	return (
		<>
		    <Header />
		    <AboutUs1 />
		    <AboutUs2 />
		    <Features />
		    <Price />
		    <Testimonials />
		</>
	)
}

export default Home;