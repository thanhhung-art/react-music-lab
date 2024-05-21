

function Post (props) {
	return (
		<div className="post">
			<div className="post__image">
				<img src={props.image} alt="post" className="image-post"/>
				<div className="calendar">
					<div className="date">15</div>
					<div className="month">Jan</div>
				</div>
			</div>
			<div className="post__describe">
				<h3 className="isblue">{props.title}</h3>
				<p className="text text__des">{props.content}</p>
				<div className="status">
					<p className="text text__status">
						<span className="isblue">
							<i className="fas fa-user-alt"></i>
							 {props.adress}</span>
						<span>|</span>  
						<span className="isblue">
							<i className="fas fa-comments"></i>
							 0{props.comments} Comments
						</span>
					</p>
				</div>
			</div>
		</div>
	)
}

export default Post;