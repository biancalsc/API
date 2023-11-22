import { Col, Container, Row } from "react-bootstrap";
import logoempresa from "./img/logoempresa.png";
import logoequipe from "./img/logoequipe.png";
import "./Components.css";

function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col>
            <a href="http://genapps.com.br/" target="_blank" rel="noreferrer">
              <img src={logoempresa} alt="logo empresa" />
            </a>
          </Col>
          <Col>
            <a href="https://github.com/ThePerryDev/bikepass" target="_blank" rel="noreferrer">
              <img id="logoequipe" src={logoequipe} alt="logo equipe" />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
