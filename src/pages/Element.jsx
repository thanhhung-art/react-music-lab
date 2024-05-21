/* eslint-disable react/prop-types */
import styled from "styled-components";
import imageTextComponent from "../images/xd.jpg.pagespeed.ic.8I1txj481O.jpeg";
import flag1 from "../images/download (10).webp";
import flag2 from "../images/download (11).webp";
import flag3 from "../images/download (12).webp";
import flag4 from "../images/download (13).webp";
import flag5 from "../images/download (14).webp";
import flag6 from "../images/download (15).webp";
import flag7 from "../images/download (16).webp";
import flag8 from "../images/download (17).webp";
import child1 from "../images/xg1.jpg.pagespeed.ic.HH5vvLjDNq.webp";
import child2 from "../images/xg2.jpg.pagespeed.ic.Ku7DSeq7Ty.webp";
import child3 from "../images/xg3.jpg.pagespeed.ic.4hK_oHzyDn.webp";
import child4 from "../images/xg4.jpg.pagespeed.ic.vyDDHbZF8U.webp";
import child5 from "../images/xg5.jpg.pagespeed.ic.wCO8ntXysx.webp";
import child6 from "../images/xg6.jpg.pagespeed.ic.vGS0Ufdzrp.webp";
import child7 from "../images/xg2.jpg.pagespeed.ic.Ku7DSeq7Ty.webp";
import child8 from "../images/xg8.jpg.pagespeed.ic.Z3RoWR-Bbd.webp";
import useCloseMobileMenu from "../hooks/closeMobileMenu";

const Header = styled.div`
  background: #1a1e1e;
  padding: 6rem;
  text-align: center;
  color: #fff;
  font-size: 3rem;
  font-weight: bold;
  @media (max-width: 700px) {
    font-size: 2.5rem;
    padding: 3rem;
  }
`;

function Element() {
  useCloseMobileMenu()
  return (
    <>
      <Header>Elements</Header>
      <div className="container elements">
        <div className="text__sample component">
          <h4>Text Sample</h4>
          <p className="text">
            Every avid independent filmmaker has Bold about making that Italic
            interest documentary, or short film to show off their creative
            prowess. Many have great ideas and want to “wow” theSuperscript
            scene, or video renters with their big project. But once you have
            theSubscript “in the can” (no easy feat), how do you move from a
            Strike through of master DVDs with the “Underline” marked
            hand-written title inside a secondhand CD case, to a pile of
            cardboard boxes full of shiny new, retail-ready DVDs, with UPC
            barcodes and polywrap sitting on your doorstep? You need to create
            eye-popping artwork and have your project replicated. Using a
            reputable full service DVD Replication company like PacificDisc,
            Inc. to partner with is certainly a helpful option to ensure a
            professional end result, but to help with your DVD replication
            project, here are 4 easy steps to follow for good DVD replication
            results:
          </p>
        </div>
        <div className="sample__buttons component">
          <h4>Sample Buttons</h4>
          <Buttons shape="btn__rectangle" />
          <Buttons shape="btn__rectangle" />
          <Buttons shape="btn__pill" />
          <Buttons shape="btn__pill" />
          <div className="large-to-small">
            .
            <div className="row__1">
              <button className="btn__rectangle__extra">Extra Large</button>
              <button className="btn__rectangle__large">Large</button>
              <button className="btn__rectangle__default">Default</button>
              <button className="btn__rectangle__medium">Medium</button>
              <button className="btn__rectangle__small">Small</button>
            </div>
            <div className="row__2">
              <button className="btn__reverse__extra">Extra Large</button>
              <button className="btn__reverse__large">Large</button>
              <button className="btn__reverse__default__2">Default</button>
              <button className="btn__reverse__medium">Medium</button>
              <button className="btn__reverse__small">Small</button>
            </div>
          </div>
        </div>
        <div className="left-aligned component">
          <h4>Left Aligned</h4>
          <div className="left-aligned__content">
            <img src={imageTextComponent} alt="" />
            <p className="text">
              Recently, the US Federal government banned online casinos from
              operating in America by making it illegal to transfer money to
              them through any US bank or payment system. As a result of this
              law, most of the popular online casino networks such as Party
              Gaming and PlayTech left the United States. Overnight, online
              casino players found themselves being chased by the Federal
              government. But, after a fortnight, the online casino industry
              came up with a solution and new online casinos started taking
              root. These began to operate under a different business umbrella,
              and by doing that, rendered the transfer of money to and from them
              legal. A major part of this was enlisting electronic banking
              systems that would accept this new clarification and start doing
              business with me. Listed in this article are the electronic
              banking systems that accept players from the United States that
              wish to play in online casinos.
            </p>
          </div>
        </div>
        <div className="right-aligned component">
          <h4>Right Aligned</h4>
          <div className="right-aligned__content">
            <p className="text">
              Recently, the US Federal government banned online casinos from
              operating in America by making it illegal to transfer money to
              them through any US bank or payment system. As a result of this
              law, most of the popular online casino networks such as Party
              Gaming and PlayTech left the United States. Overnight, online
              casino players found themselves being chased by the Federal
              government. But, after a fortnight, the online casino industry
              came up with a solution and new online casinos started taking
              root. These began to operate under a different business umbrella,
              and by doing that, rendered the transfer of money to and from them
              legal. A major part of this was enlisting electronic banking
              systems that would accept this new clarification and start doing
              business with me. Listed in this article are the electronic
              banking systems that accept players from the United States that
              wish to play in online casinos.
            </p>
            <img src={imageTextComponent} alt="" />
          </div>
        </div>
        <div className="definition component">
          <h4>Definition</h4>
          <div className="definition__col">
            <div className="__1">
              <h5>Definition 01</h5>
              <p className="text">
                Recently, the US Federal government banned online casinos from
                operating in America by making it illegal to transfer money to
                them through any US bank or payment system. As a result of this
                law, most of the popular online casino networks
              </p>
            </div>
            <div className="__2">
              <h5>Definition 02</h5>
              <p className="text">
                Recently, the US Federal government banned online casinos from
                operating in America by making it illegal to transfer money to
                them through any US bank or payment system. As a result of this
                law, most of the popular online casino networks
              </p>
            </div>
            <div className="__3">
              <h5>Definition 03</h5>
              <p className="text">
                Recently, the US Federal government banned online casinos from
                operating in America by making it illegal to transfer money to
                them through any US bank or payment system. As a result of this
                law, most of the popular online casino networks
              </p>
            </div>
          </div>
        </div>
        <div className="block-quotes component">
          <h4>Block Quotes</h4>
          <div className="quote__wrap">
            <div className="quote__inner">
              <p className="quote__text">
                “Recently, the US Federal government banned online casinos from
                operating in America by making it illegal to transfer money to
                them through any US bank or payment system. As a result of this
                law, most of the popular online casino networks such as Party
                Gaming and PlayTech left the United States. Overnight, online
                casino players found themselves being chased by the Federal
                government. But, after a fortnight, the online casino industry
                came up with a solution and new online casinos started taking
                root. These began to operate under a different business
                umbrella, and by doing that, rendered the transfer of money to
                and from them legal. A major part of this was enlisting
                electronic banking systems that would accept this new
                clarification and start doing business with me. Listed in this
                article are the electronic banking”
              </p>
            </div>
          </div>
        </div>
        <div className="table component">
          <h4>Table</h4>
          <table>
            <col />
            <col />
            <col />
            <col />
            <thead>
              <tr>
                <th>
                  <h4>#</h4>
                </th>
                <th className="countries__header">
                  <h4>COUNTRIES</h4>
                </th>
                <th>
                  <h4>VISITS</h4>
                </th>
                <th className="col__percent">
                  <h4>PRECENTAGES</h4>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p>01</p>
                </td>
                <td className="col__flag">
                  <img src={flag1} alt="flag" />
                  <p>canada</p>
                </td>
                <td className="col__visits">645032</td>
                <td className="col__percent">
                  <div className="per per__100"></div>
                </td>
              </tr>
              <tr>
                <td>
                  <p>02</p>
                </td>
                <td className="col__flag">
                  <img src={flag2} alt="flag" />
                  <p>canada</p>
                </td>
                <td className="col__visits">645032</td>
                <td className="col__percent">
                  <div className="per per__40"></div>
                </td>
              </tr>
              <tr>
                <td>
                  <p>03</p>
                </td>
                <td className="col__flag">
                  <img src={flag3} alt="flag" />
                  <p className="col__visits">canada</p>
                </td>
                <td>645032</td>
                <td className="col__percent">
                  <div className="per per__60"></div>
                </td>
              </tr>
              <tr>
                <td>
                  <p>04</p>
                </td>
                <td className="col__flag">
                  <img src={flag4} alt="flag" />
                  <p className="col__visits">canada</p>
                </td>
                <td className="col__visits">645032</td>
                <td className="col__percent">
                  <div className="per per__70"></div>
                </td>
              </tr>
              <tr>
                <td>
                  <p>05</p>
                </td>
                <td className="col__flag">
                  <img src={flag5} alt="flag" />
                  <p>canada</p>
                </td>
                <td>645032</td>
                <td className="col__percent">
                  <div className="per per__50"></div>
                </td>
              </tr>
              <tr>
                <td>
                  <p>06</p>
                </td>
                <td className="col__flag">
                  <img src={flag6} alt="flag" />
                  <p>canada</p>
                </td>
                <td>645032</td>
                <td className="col__percent">
                  <div className="per per__90"></div>
                </td>
              </tr>
              <tr>
                <td>
                  <p>07</p>
                </td>
                <td className="col__flag">
                  <img src={flag7} alt="flag" />
                  <p>canada</p>
                </td>
                <td>645032</td>
                <td className="col__percent">
                  <div className="per per__40__2"></div>
                </td>
              </tr>
              <tr>
                <td>
                  <p>08</p>
                </td>
                <td className="col__flag">
                  <img src={flag8} alt="flag" />
                  <p>canada</p>
                </td>
                <td>645032</td>
                <td className="col__percent">
                  <div className="per per__70__2"></div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="gallery component">
          <h4>Image Gallery</h4>
          <div className="gallery__images">
            <div className="flex-3">
              <img src={child1} alt="childs" />
            </div>
            <div className="flex-3">
              <img src={child2} alt="childs" />
            </div>
            <div className="flex-3">
              <img src={child3} alt="childs" />
            </div>
            <div className="flex-2">
              <img src={child4} alt="childs" />
            </div>
            <div className="flex-2">
              <img src={child5} alt="childs" />
            </div>
            <div className="flex-3">
              <img src={child6} alt="childs" />
            </div>
            <div className="flex-3">
              <img src={child7} alt="childs" />
            </div>
            <div className="flex-3">
              <img src={child8} alt="childs" />
            </div>
          </div>
        </div>
        <div className="lists component">
          <div className="col col-1 image-gallery">
            <p className="title">Image Gallery</p>
            <ul>
              <li>
                <h2>This is header 01</h2>
              </li>
              <li>
                <h3>This is header 02</h3>
              </li>
              <li>
                <h4>This is header 03</h4>
              </li>
              <li>
                <h5>This is header 04</h5>
              </li>
              <li>
                <h6>This is header 05</h6>
              </li>
              <li>
                <h6>This is header 06</h6>
              </li>
            </ul>
          </div>
          <div className="col col-2 unordered-list">
            <h3>Unordered List</h3>
            <ul>
              <li>
                <p>Fta Keys</p>
              </li>
              <li>
                <p>For Women Only Your Computer Usage</p>
              </li>
              <li>
                <p>Facts Why Inkjet Printing Is Very Appealing</p>
                <ul>
                  <li>
                    <p>Addiction When Gambling Becomes</p>
                    <ul>
                      <li>
                        <p>Protective Preventative Maintenance</p>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <p>Dealing With Technical Support 10 Useful Tips</p>
              </li>
              <li>
                <p>Make Myspace Your Best Designed Space</p>
              </li>
              <li>
                <p>Cleaning And Organizing Your Computer</p>
              </li>
            </ul>
          </div>
          <div className="col col-3 ordered-list">
            <h3>Ordered List</h3>
            <ol>
              <li>
                <p>Fta Keys</p>
              </li>
              <li>
                <p>For Women Only Your Computer Usage</p>
              </li>
              <li>
                <p>Facts Why Inkjet Printing Is Very Appealing</p>
                <ol>
                  <li>
                    <p>Addiction When Gambling Becomes</p>
                    <ol>
                      <li>
                        <p>Protective Preventative Maintenance</p>
                      </li>
                    </ol>
                  </li>
                </ol>
              </li>
              <li>
                <p>Dealing With Technical Support 10 Useful Tips</p>
              </li>
              <li>
                <p>Make Myspace Your Best Designed Space</p>
              </li>
              <li>
                <p>Cleaning And Organizing Your Computer</p>
              </li>
            </ol>
          </div>
        </div>
        <div className="form-elements">
          <div className="form-elements__col-1">
            <h4>Form Element</h4>
            <form action="" autoComplete="on">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
              <input type="text" placeholder="First Name" />
              <input type="email" placeholder="Email address" />
              <input type="address" placeholder="Address" />
              <select id="">
                <option value="city">City</option>
                <option value="dhaka">Dhaka</option>
                <option value="dill">Dill</option>
                <option value="newyork">New York</option>
                <option value="islamabad">Islamabad</option>
              </select>
              <select name="country" id="">
                <option value="country">country</option>
                <option value="city">Bangladesh</option>
                <option value="dhaka">India</option>
                <option value="dill">England</option>
                <option value="newyork">Srilanka</option>
              </select>
              <textarea name="" id="" placeholder="Message"></textarea>
              <input
                className="input-color"
                type="text"
                placeholder="Primary Color"
              />
              <input
                className="input-color"
                type="text"
                placeholder="Accent color"
              />
              <input
                className="input-color"
                type="text"
                placeholder="Secondary color"
              />
            </form>
          </div>
          <div className="form-elements__col-2">
            <h3>Switched</h3>
            <ul>
              <li>
                <span>01. Sample Switch</span>
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider"></span>
                </label>
              </li>
              <li>
                <span>02. Sample Switch</span>
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider"></span>
                </label>
              </li>
              <li>
                <span>03. Sample Switch</span>
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider"></span>
                </label>
              </li>
            </ul>
            <ul>
              <h3>Selectboxes</h3>
              <select name="" id="">
                <option value="english">English</option>
                <option value="spanish">Spanish</option>
                <option value="arabic">Arabic</option>
                <option value="portugise">Portuguise</option>
                <option value="bengali">Bengali</option>
              </select>
            </ul>
            <ul className="checkboxs">
              <h3>Checkboxes</h3>
              <li>
                <span>01. Sample Checkbox</span>
                <span className="custom-checkbox">
                  <input type="checkbox" />
                </span>
              </li>
              <li>
                <span>02. Primary Color Checkbox</span>
                <input type="checkbox" />
              </li>
              <li>
                <span>03. Confirm Color Checkbox</span>
                <input type="checkbox" />
              </li>
              <li>
                <span>04. Disabled Checkbox</span>
                <input type="checkbox" />
              </li>
              <li>
                <span>05. Disabled Checkbox active</span>
                <input type="checkbox" disabled />
              </li>
            </ul>
            <ul>
              <h3>Radios</h3>
              <li>
                <span>01. Sample radio</span>
                <input type="radio" />
              </li>
              <li>
                <span>02. Primary Color radio</span>
                <input type="radio" />
              </li>
              <li>
                <span>03. Confirm Color radio</span>
                <input type="radio" />
              </li>
              <li>
                <span>04. Disabled radio</span>
                <input type="radio" />
              </li>
              <li>
                <span>05. Disabled radio active</span>
                <input type="radio" disabled />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Element;

function Buttons(props) {
  return (
    <div className="wrap_buttons">
      <div className="row__1">
        <button className={`btn ${props.shape} btn__default`}>default</button>
        <button className={`btn ${props.shape} btn__primary__gray`}>
          primary
        </button>
        <button className={`btn ${props.shape} btn__success`}>Success</button>
        <button className={`btn ${props.shape} btn__info`}>Info</button>
        <button className={`btn ${props.shape} btn__warning`}>Warning</button>
        <button className={`btn ${props.shape} btn__danger`}>Danger</button>
        <button className={`btn ${props.shape} btn__link`}>
          <a href="#0">Link</a>
        </button>
        <button className={`btn ${props.shape} btn__disabled`} disabled>
          Disable
        </button>
      </div>
      <div className="row__2">
        <button className={`btn ${props.shape} btn__reverse__default`}>
          default
        </button>
        <button className={`btn ${props.shape} btn__reverse__primary__gray`}>
          primary
        </button>
        <button className={`btn ${props.shape} btn__reverse__success`}>
          Success
        </button>
        <button className={`btn ${props.shape} btn__reverse__info`}>
          Info
        </button>
        <button className={`btn ${props.shape} btn__reverse__warning`}>
          Warning
        </button>
        <button className={`btn ${props.shape} btn__reverse__danger`}>
          Danger
        </button>
        <button className={`btn ${props.shape} btn__reverse__link`}>
          <a href="#0">Link</a>
        </button>
        <button className={`btn ${props.shape} btn__disabled`} disabled>
          Disable
        </button>
      </div>
    </div>
  );
}
