import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import jeeveAnalytics from "../../Assets/Projects/jeeve-analytics.png";
import autobrain from "../../Assets/Projects/autobrain.jpg";
import soundblock from "../../Assets/Projects/soundblock.jpg";
import suicide from "../../Assets/Projects/suicide.png";
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
              description="Soundblock is 21st Century rights management, administration built using web2/web3 infrastructure. Soundblock smartly distributes your music and merchandise to the most relevant platforms and on-demand storefronts while every audio stream, file download, and t-shirt sale is documented forever on the blockchain."
              demoLink="https://soundblock.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={appEggFi}
              isBlog={false}
              title="Egg DeFi Dashboard"
              description="Egg DeFi Dashboard builds with Solidity, Node.js, Laravel, Vue.js. This dashboard allows the user to connect his multiple wallets and track all of them."
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
              imgPath={suicide}
              isBlog={false}
              title="Eat That API"
              description="This API offers all-in-one solution to search restaurants nearby a user, view menus and rate them, etc."
              ghLink="https://github.com/cody-gawr/AI_For_Social_Good"
              demoLink="http://137.184.208.22/docs"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jeeveAnalytics}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Jeeve Analytics builds with MEAN stack and works with your favourite practice management and accounting software to provide you with all the important information you need on how your practice is trending — right at your fingertips."
              ghLink="https://www.youtube.com/watch?v=X65dyfNJAxI"
              demoLink="https://www.jeeve.com.au/jeeve-analytics/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
