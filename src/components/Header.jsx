import image from "../images/xhero-desktop.png.pagespeed.ic.xxQqC5O0F5.webp";

function Header() {
	return (
		<section className="header" id="header">
			<h4 className="mx-center">Intuitive. Powerful. Runs Everywhere</h4>
			<h1 className="mx-center">Open the world of music. It&apos;s all here</h1>
			<div className="header__btns mx-center">
				<button className="btn btn__primary btn__pill btn1">
					<a href="#0">Download for desktop</a>
					</button>
				<button className="btn btn__primary btn__pill btn2">
					<a href="#0">Download for mobile</a>
				</button>
			</div>
			<img src={image} className="mx-center" alt="show" />
		</section>
	)
}

export default Header;