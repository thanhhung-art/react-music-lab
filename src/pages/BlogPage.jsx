import styled from "styled-components";
import image1 from "../images/xsingle_blog_1.jpg.pagespeed.ic.crhqX85fp0.jpeg";
import image2 from "../images/xsingle_blog_2.jpg.pagespeed.ic.QwFRAzu_NP.webp";
import image3 from "../images/xsingle_blog_3.jpg.pagespeed.ic.D3so3ZMyuT.webp";
import image4 from "../images/xsingle_blog_4.jpg.pagespeed.ic.sPLUurA5SD.webp";
import image5 from "../images/xsingle_blog_5.jpg.pagespeed.ic.iAJ-fvqdoP.webp";
import Post from "../components/Post";
import Tools from "../components/Tools";

const Header = styled.div`
	background: #1A1E1E;
	padding: 6rem 1rem;
	text-align: center;
	color: #fff;
	font-size: 3rem;
	font-weight: bold;
	@media (max-width: 700px) {
		font-size: 2.5rem;
		padding; 3rem;
	} 
`;

function BlogPage() {
  return (
    <>
      <Header>Blog</Header>
      <div className="container wrap-blog">
        <div className="col__post">
          <Post
            image={image1}
            title={"Google inks pact for new 35-storey office"}
            content={
              "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying."
            }
            adress={"Travel, LifeStyle"}
            comments={3}
          />
          <Post
            image={image2}
            title={"Google inks pact for new 35-storey office"}
            content={
              "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying."
            }
            adress={"Travel, LifeStyle"}
            comments={3}
          />
          <Post
            image={image3}
            title={"Google inks pact for new 35-storey office"}
            content={
              "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying."
            }
            adress={"Travel, LifeStyle"}
            comments={3}
          />
          <Post
            image={image4}
            title={"Google inks pact for new 35-storey office"}
            content={
              "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying."
            }
            adress={"Travel, LifeStyle"}
            comments={3}
          />
          <Post
            image={image5}
            title={"Google inks pact for new 35-storey office"}
            content={
              "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying."
            }
            adress={"Travel, LifeStyle"}
            comments={3}
          />
          <div className="btns-to-page">
            <div className="wrap">
              <button className="text isblue">
                <i className="fas fa-chevron-left"></i>
              </button>
              <button className="text isblue">1</button>
              <button className="text isblue">2</button>
              <button className="text isblue">
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="col__tool">
          <Tools />
        </div>
      </div>
    </>
  );
}

export default BlogPage;
