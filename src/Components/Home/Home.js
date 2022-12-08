import React from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import "./Home.css";
import Post from "../../Pages/Post/Post";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Container>
        <div className="container">
          <div className="heading_title">Instagram</div>
          <div className="heading_icon">
            <Link to="/Chats">
              <FontAwesomeIcon
                style={{ marginTop: "6px" }}
                icon={faFacebookMessenger}
                size="xl"
              />
            </Link>
          </div>
        </div>
      </Container>
      <Post />
    </div>
  );
}

export default Home;
