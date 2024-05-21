import image1 from "../images/post_1.jpg";
import image2 from "../images/post_2.jpg";
import image3 from "../images/post_3.jpg";
import image4 from "../images/post_4.jpg";
import image5 from "../images/post_5.jpg";
import image6 from "../images/post_6.jpg";
import image7 from "../images/post_7.jpg";
import image8 from "../images/post_8.jpg";
import image9 from "../images/post_9.jpg";
import image10 from "../images/post_10.jpg";

function Tools() {
	return (
		<div className="tools">
			<form action="" className="tools__search components">
				<input type="text" placeholder="Search keyword"/>
				<span>Search</span>
			</form>
			<div className="tools__category components">
				<h3>Category</h3>
				<ul>
					<li className="isblue">Restaurant food(37)</li>
					<li className="isblue">Travel news(10)</li>
					<li className="isblue">Modern technology(03)</li>
					<li className="isblue">Product(11)</li>
					<li className="isblue">Inspiration21</li>
					<li className="isblue">Health care (21)09</li>
				</ul>
			</div>
			<div className="tools__recent-post components">
				<h3>Recent Post</h3>
				<ul>
					<li>
						<img src={image1} alt="recent-post" />
						<div className="content">
							<h4>From life was you fiss...</h4>
							<span>January 12, 2019</span>
						</div>
					</li>
					<li>
						<img src={image2} alt="recent-post" />
						<div className="content">
							<h4>The Amazing Hubble</h4>
							<span>02 Hours ago</span>
						</div>
					</li>
					<li>
						<img src={image3} alt="recent-post" />
						<div className="content">
							<h4>Astronomy Or Astrology</h4>
							<span>03 Hours ago</span>
						</div>
					</li>
					<li>
						<img src={image4} alt="recent-post" />
						<div className="content">
							<h4>Asteroids telescope</h4>
							<span>01 hours ago</span>
						</div>
					</li>
				</ul>
			</div>
			<div className="tools__tag-clouds components">
				<h3>Tag Clouds</h3>
				<div className="wrap-tags">
					<span>Project</span>
					<span>Love</span>
					<span>technology</span>
					<span>Travel</span>
					<span>Restaurant</span>
					<span>Life style</span>
					<span>Design</span>
					<span>Illustration</span>
				</div>
			</div>
			<div className="tools__instagram-feeds components">
				<h3>Instagram Feeds</h3>
				<div className="wrap-image">
					<img src={image5}  alt="instagram"/>
					<img src={image6}  alt="instagram"/>
					<img src={image7}  alt="instagram"/>
					<img src={image8}  alt="instagram"/>
					<img src={image9}  alt="instagram"/>
					<img src={image10} alt="instagram"/>
				</div>
			</div>
			<div className="tools__newsletter components">
				<h3>Newsletter</h3>
				<div className="form__newsletter">
					<input type="text" placeholder="Enter Email" />
					<button className="subscribe">SUBSCRIBE</button>
				</div>
			</div>
		</div>
	)
}

export default Tools;