import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey there!, I am <span className="purple">Cody Js </span>
            from coming to you live from a{" "}
            <span className="purple">timezone</span> where coffee is always
            right answer.
            <br />
            These days, I’m flying solo as a software developer — indie mode
            activated, caffeine-powered, and code-driven.
            <br />
            <br />
            When I’m not wrangling code, you’ll find me:
          </p>
          <ul>
            <li className="about-activity">
              🎮 Gaming — from epic quests to pixel-perfect battles
            </li>
            <li className="about-activity">
              ✍️ Writing tech blogs — sharing bugs, breakthroughs, and the
              occasional "aha!" moment
            </li>
            <li className="about-activity">
              ✈️ Traveling — because new places are like new frameworks:
              exciting, occasionally buggy, but always worth exploring
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Striving to write meaningful code (and sip meaningful coffee) that
            makes the world a little better, byte by byte."{" "}
          </p>
          <footer className="blockquote-footer">Cody Js</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
