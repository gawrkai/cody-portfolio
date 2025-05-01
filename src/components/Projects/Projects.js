import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import jeeveAnalytics from "../../Assets/Projects/jeeve-analytics.png";
import jeeveMembers from "../../Assets/Projects/jeeve-members.webp";
import jeevePay from "../../Assets/Projects/jeeve-pay.webp";
import autobrain from "../../Assets/Projects/autobrain.jpg";
import soundblock from "../../Assets/Projects/soundblock.jpg";
import appEggFi from "../../Assets/Projects/app.egg.fi.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={soundblock}
              isBlog={false}
              title="Soundblock"
              description="Built a modern, responsive UI in Angular to manage music and merchandise distribution across multiple platforms. Integrated Web3 APIs to log streams, downloads, and sales on the blockchain."
              demoLink="https://soundblock.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={appEggFi}
              isBlog={false}
              title="Egg DeFi Dashboard"
              description="Egg DeFi Dashboard, built with Solidity, Node.js, Laravel, and Vue.js, lets users connect multiple wallets and track them all in one convenient place."
              demoLink="https://app.egg.fi/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={autobrain}
              isBlog={false}
              title="Autobrain"
              description="Autobrain OBDII offers full vehicle diagnostics and can even connect you to a trained auto specialist who can help."
              ghLink="https://github.com/swjg-ventures/mab-ios-swift"
              demoLink="https://autobrain.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jeeveMembers}
              isBlog={false}
              title="Jeeve Members"
              description="Jeeve Members enables clinics to create branded membership programs and flexible payment plans, helping reduce patient churn and foster long-term loyalty. The platform puts control back into the hands of dental practices, allowing them to grow their own patient community with ease."
              ghLink=""
              demoLink="https://www.jeeve.com.au/jeeve-members"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jeevePay}
              isBlog={false}
              title="Jeeve Pay"
              description="Jeeve Pay streamlines the financial backend for dental clinics by integrating seamlessly with leading platforms such as Dental PMS, Xero, and Hicaps (Australia’s top merchant facilitator). This powerful web application automates billing, payouts, and reporting — giving dental practices more time to focus on patient care."
              ghLink=""
              demoLink="https://www.jeeve.com.au/jeeve-pay"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jeeveAnalytics}
              isBlog={false}
              title="Jeeve Solution"
              description="Jeeve Analytics delivers real-time insights into clinic performance by integrating with leading practice management and accounting tools. Designed to help dental professionals track trends, optimize operations, and make data-driven decisions — all from an intuitive dashboard."
              ghLink="https://www.youtube.com/watch?v=X65dyfNJAxI"
              demoLink="https://www.jeeve.com.au/jeeve-analytics"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
