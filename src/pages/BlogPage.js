import React from 'react';
import styled from "styled-components";

const HeaderBlog = styled.div`
	background: #1A1E1E;
	padding: 6rem;
	text-align: center;
	color: #fff;
	font-size: 3rem;
	font-weight: bold;	
`;

function BlogPage() {
	return (
		<>
			<HeaderBlog>
				Blog
			</HeaderBlog>
			<div className="container">
				
			</div>
		</>
	)
}

export default BlogPage;

function Post (props) {
	return (
		<div className="post">
			<div className="post__image">
				<img src={props.image} alt="image" />
				<div className="calendar">
					<div className="date">15</div>
					<div className="month">Jan</div>
				</div>
			</div>
			<div className="post__describe">
				<h3>Google inks pact for new 35-storey office</h3>
				<p className="textt">That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>
				<div className="status">
					<i className="fas fa-people"></i>
					<span>Travel, LifeStyle</span> |
					<i className="fas fa-chat"></i>
					<span>03 Comments</span>
				</div>
			</div>
		</div>
	)
}