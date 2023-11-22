import lupa from "../../components/img/lupa.png";
import mapao from "./img/mapao.png";
import filterbutton from "./img/Filter-button.png"
import { Row, Col, Container } from "react-bootstrap";
import Header from "../../components/Header";
import "./Catalog.css";

function Catalog() {
  return (
    <div>
      <Header />
      <main>
        <Container>
          <Row>
            <Col>
              <Row id="search-row" >
                <Col>
                <form action="" className="catalog-searchbar">
                  <input type="text" placeholder="Search..." />
                  <button type="submit">
                    <img src={lupa} alt="search icon" />
                  </button>
                </form>
                <button className="filter-button"><img src={filterbutton} alt="Filter Button" /></button>
                </Col>
              </Row>
              <Row id="bikeadline">
                <div className="bikead">
                  <div className="bikecontent">
                    <div className="bikephoto">
                      <img src="#" alt="bike_photo" />
                    </div>
                    <h3>título da bike</h3>
                    <div className="descritivo">Aqui tem texto</div>
                    <h3>R$00,00</h3>
                    <button>Details</button>
                    <p id="cidade">cidade</p>
                    <button>fav</button>
                  </div>
                </div>
                <div className="bikead">
                  <div className="bikecontent">
                    <div className="bikephoto">
                      <img src="#" alt="bike_photo" />
                    </div>
                    <h3>título da bike</h3>
                    <div className="descritivo">Aqui tem texto</div>
                    <h3>R$00,00</h3>
                    <button>Details</button>
                    <p id="cidade">cidade</p>
                    <button>fav</button>
                  </div>
                </div>
                <div className="bikead">
                  <div className="bikecontent">
                    <div className="bikephoto">
                      <img src="#" alt="bike_photo" />
                    </div>
                    <h3>título da bike</h3>
                    <div className="descritivo">Aqui tem texto</div>
                    <h3>R$00,00</h3>
                    <button>Details</button>
                    <p id="cidade">cidade</p>
                    <button>fav</button>
                  </div>
                </div>
                <div className="bikead">
                  <div className="bikecontent">
                    <div className="bikephoto">
                      <img src="#" alt="bike_photo" />
                    </div>
                    <h3>título da bike</h3>
                    <div className="descritivo">Aqui tem texto</div>
                    <h3>R$00,00</h3>
                    <button>Details</button>
                    <p id="cidade">cidade</p>
                    <button>fav</button>
                  </div>
                </div>
                <div className="bikead">
                  <div className="bikecontent">
                    <div className="bikephoto">
                      <img src="#" alt="bike_photo" />
                    </div>
                    <h3>título da bike</h3>
                    <div className="descritivo">Aqui tem texto</div>
                    <h3>R$00,00</h3>
                    <button>Details</button>
                    <p id="cidade">cidade</p>
                    <button>fav</button>
                  </div>
                </div>
                <div className="bikead">
                  <div className="bikecontent">
                    <div className="bikephoto">
                      <img src="#" alt="bike_photo" />
                    </div>
                    <h3>título da bike</h3>
                    <div className="descritivo">Aqui tem texto</div>
                    <h3>R$00,00</h3>
                    <button>Details</button>
                    <p id="cidade">cidade</p>
                    <button>fav</button>
                  </div>
                </div>
                <div className="bikead">
                  <div className="bikecontent">
                    <div className="bikephoto">
                      <img src="#" alt="bike_photo" />
                    </div>
                    <h3>título da bike</h3>
                    <div className="descritivo">Aqui tem texto</div>
                    <h3>R$00,00</h3>
                    <button>Details</button>
                    <p id="cidade">cidade</p>
                    <button>fav</button>
                  </div>
                </div>
              </Row>
            </Col>
            <Col>
              <img src={mapao} alt="mapa grande" id="mapao" />
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}

export default Catalog;
