import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/angular-dev.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I accidentally fell in love with{" "}
              <b className="purple">programming</b> and now I can’t turn it off.
              <br />
              <br />
              I’ve definitely learned a thing or two — or at least enough to
              Google like a pro. 🤷‍♂️💻 I speak fluent{" "}
              <i>
                <b className="purple">Angular,</b>

                <b className="purple">Laravel,</b>
              </i>{" "}
              and just enough{" "}
              <i>
                <b className="purple">Solidity</b>
              </i>{" "}
              to break things before I fix them.
              <br />
              <br />
              My favorite side quests? 🚀 Building cool web stuff, exploring
              smart contracts, and pretending console.log is a debugging
              strategy. Whenever I get the chance, I dive into crafting slick
              apps with{" "}
              <i>
                <b className="purple">Angular, Laravel,</b>
              </i>{" "}
              and modern JS sidekicks like{" "}
              <i>
                <b className="purple">React and Vue</b>
              </i>{" "}
              — because who needs sleep when there are frameworks to learn?
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/cody-gawr"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <AiOutlineTwitter />
                {/* <a
                  href="https://twitter.com/Cody81568480854"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a> */}
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/lautaro-cordoba-3630172b8/"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
                {/* <a
                  href="https://www.linkedin.com/in/Cody-Js-27233b214/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a> */}
              </li>
              <li className="social-icons">
                <AiFillInstagram />
                {/* <a
                  href="https://www.instagram.com/Cody-Js-27233b214"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a> */}
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
