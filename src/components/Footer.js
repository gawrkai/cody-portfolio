import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Cody Js</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Cody</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/cody-gawr"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <button
                style={{
                  background: "none",
                  border: "none",
                  color: "white",
                  cursor: "pointer",
                  padding: 0,
                }}
                onClick={() => alert("Twitter link not available")}
              >
                <AiOutlineTwitter />
              </button>
              {/* <a
                href="https://twitter.com/Cody81568480854"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
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
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <button
                style={{
                  background: "none",
                  border: "none",
                  color: "white",
                  cursor: "pointer",
                  padding: 0,
                }}
                onClick={() => alert("Instagram link not available")}
              >
                <AiFillInstagram />
              </button>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
