import React from 'react';
import image from "../images/xhero-desktop.png.pagespeed.ic.xxQqC5O0F5.webp";

function Header() {
	return (
		<section className="header" id="header">
			<h4 className="mx-center">Intuitive. Powerful. Runs Everywhere</h4>
			<h1 className="mx-center">Open the world of music. It's all here</h1>
			<div className="header__btns mx-center">
				<button className="btn btn1">
					<a href="#">Download for desktop</a>
					</button>
				<button className="btn btn2">
					<a href="#">Download for mobile</a>
				</button>
			</div>
			<img src={image} className="mx-center" />
		</section>
	)
}

export default Header;