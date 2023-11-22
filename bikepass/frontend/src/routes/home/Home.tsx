import "./home.css";
import homebikes from "./img/homebikes.png";
import { Row, Col, Container } from "react-bootstrap";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Header />
      <main>
        <Container>
          <Row id="headerhome">
            <Col>
              <Row id="alignrow">
                <h1>
                  <b>O MELHOR AGREGADOR PARA ALUGUEL DE BICICLETAS</b>
                </h1>
                <h3>
                  <b>Sua melhor escolha para pedalar</b>
                </h3>
                <Link className="catalog-button" to="/catalog">
                  Acesse o Catálogo
                </Link>
              </Row>
            </Col>
            <Col>
              <img src={homebikes} alt="home page bikes" />
            </Col>
          </Row>

          <Row id="mainhome1">
            <h2>Escolha a bicicleta que faz mais o seu estilo</h2>
            <Row>
              <div className="home-bike-card">
                <img src="" alt="bike" className="home-bike-photo" />
                <Link className="home-bike-button" to="/">
                  Confirma
                </Link>
              </div>
            </Row>
          </Row>

          <Row>
            <h2>Procurando em alguma cidade especifica?</h2>
            <Row>
            <div className="home-city-card">
                <img src="" alt="city" className="home-city-photo" />
                <Link className="home-city-button" to="/">
                  Confirma
                </Link>
              </div>
            </Row>
          </Row>
        </Container>
      </main>
      <Footer/>
    </div>
  );
}

export default Home;
