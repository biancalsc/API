import { useEffect, useState } from "react";
import { BikeProps, UsersProps } from "../../../types";
import UsersService from "../../../services/UsersService";
import { Link, useParams } from "react-router-dom";
import "./user.css";
import {
  Alert,
  Button,
  Card,
  Carousel,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import bikeService from "../../../services/BikeService";
import AvLocatorio from "../../components/Avlocatorio/Avlocatorio";
import AvLocador from "../../components/Avlocador/Avlocador";

function User() {
  const { id } = useParams();
  const [bikes, setBikes] = useState([] as BikeProps[]);
  const [users, setUsers] = useState({} as UsersProps);
  useEffect(() => {
    if (id) {
      bikeService
        .listByUser(id)
        .then((r) => {
          setBikes(r);
          console.log("r:", r);
          // Se a lista de bicicletas estiver vazia, busque as informações do usuário
          if (r.length === 0) {
            UsersService.listById(id)
              .then((r) => {
                setUsers(r);
                console.log("userData", r);
              })
              .catch((error) => {
                console.error("Erro ao buscar informações de Usuário:", error);
              });
          }
        })
        .catch((error) => {
          console.error("Erro ao buscar informações de Bike:", error);
        });
    }
  }, [id]);

  const [cardlcdorV, setCardlcdorV] = useState(false);
  const lcdorTroca = () => {
    setCardlcdorV(!cardlcdorV);
  };

  const [cardlctarioV, setCardlctarioV] = useState(false);
  const lctarioTroca = () => {
    setCardlctarioV(!cardlctarioV);
  };

  return (
    <div id="body">
      <Header />
      <Container>
        <Row id="RowProdutos">
          <Card.Text>Informações e contato</Card.Text>
          <div id="rowInfos">
            <Row>
              <Col md={6}>
                <Card.Text id="textoUsuario">
                  Nome do usuário:{" "}
                  {bikes[0] ? bikes[0].user.alias : users ? users.alias : "asd"}
                </Card.Text>
                <Card.Text id="textoUsuario1">
                  Email:{" "}
                  {bikes && bikes[0]
                    ? bikes[0].user.mail
                    : users
                    ? users.mail
                    : ""}
                </Card.Text>
              </Col>
              <Col md={6}>
                <Card.Text id="textoUsuario">
                  Telefone:{" "}
                  {bikes && bikes[0]
                    ? bikes[0].user.phone
                    : users
                    ? users.phone
                    : ""}
                </Card.Text>
              </Col>
            </Row>
          </div>
        </Row>

        <Row id="RowProdutos">
          <Card.Text>Meus Produtos:</Card.Text>
        </Row>
        {bikes && bikes[0] ? (
          <Carousel data-bs-theme="dark" className="carrossel">
            {bikes.map((bike, indice) => (
              <Carousel.Item key={indice}>
                <Row>
                  <Col md={4} id="colBike">
                    <div id="cardBike">
                      <Row>
                        <img
                          src={`http://localhost:3001/photo/public/${bike.photos[0].filename}`}
                          alt={bike.photos[0].filename}
                          id="imgBike"
                        />
                      </Row>
                      <Row>
                        <Card.Text>{bike.name}</Card.Text>
                      </Row>
                      <Row>
                        <Card id="cardInfoBike">
                          <Card.Text>{bike.description}</Card.Text>
                        </Card>
                      </Row>
                      <Row>
                        <Col>
                          <Row>
                            <Col>
                              <Row>
                                <Card.Text>
                                  <span>R$ {bike.dailyvalue}/</span>
                                  <span id="textoCinza">dia</span>
                                </Card.Text>
                              </Row>
                              <Row>
                                <Card.Text>
                                  <span>R$ {bike.hourlyvalue}/</span>
                                  <span id="textoCinza">hora</span>
                                </Card.Text>
                              </Row>
                            </Col>
                          </Row>
                        </Col>
                        <Col id="colDetalhes">
                          <Link to={`../bike/${bike.id}`}>
                            <Button id="detalhes">Detalhes</Button>
                          </Link>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col md={8}>
                    <Row>
                      <Col>
                        <div id="cardInfos">
                          <div>
                            <Card.Text className="details-center">
                              <Card.Text>Marca {bike.brand.name}</Card.Text>
                              <Card.Text>{bike.category.name}</Card.Text>
                              <Card.Text>Tamanho {bike.size}</Card.Text>
                              <Card.Text>Material: {bike.material}</Card.Text>
                            </Card.Text>
                          </div>
                        </div>
                      </Col>
                      <Col>
                        <div id="cardStatus">
                          <Card.Text className="text">STATUS</Card.Text>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <div id="cardDatas">
                          <Card.Text className="text">
                            DATA ALUGUEL <br /> DATA DE ENTREGA
                          </Card.Text>
                        </div>
                      </Col>
                      <Col>
                        <div id="cardAva">
                          <Card.Text className="text">AVALIAÇÃO</Card.Text>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <div>Este usuário ainda não disponibilizou nenhum produto</div>
        )}
        <Row id="RowProdutos">
          <Card.Text>Meus Alugueis:</Card.Text>
        </Row>
        {bikes && bikes[0] ? (
          <Carousel data-bs-theme="dark" className="carrossel">
            {bikes.map((bike, indice) => (
              <Carousel.Item key={indice}>
                <Row>
                  <Col md={4} id="colBike">
                    <div id="cardBike">
                      <Row>
                        <img
                          src={`http://localhost:3001/photo/public/${bike.photos[0].filename}`}
                          alt={bike.photos[0].filename}
                          id="imgBike"
                        />
                      </Row>
                      <Row>
                        <Card.Text>{bike.name}</Card.Text>
                      </Row>
                      <Row>
                        <Card id="cardInfoBike">
                          <Card.Text>{bike.description}</Card.Text>
                        </Card>
                      </Row>
                      <Row>
                        <Col>
                          <Row>
                            <Col>
                              <Row>
                                <Card.Text>
                                  <span>R$ {bike.dailyvalue}/</span>
                                  <span id="textoCinza">dia</span>
                                </Card.Text>
                              </Row>
                              <Row>
                                <Card.Text>
                                  <span>R$ {bike.hourlyvalue}/</span>
                                  <span id="textoCinza">hora</span>
                                </Card.Text>
                              </Row>
                            </Col>
                          </Row>
                        </Col>
                        <Col id="colDetalhes">
                          <Link to={`../bike/${bike.id}`}>
                            <Button id="detalhes">Detalhes</Button>
                          </Link>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col md={8}>
                    <Row>
                      <Col>
                        <div id="cardInfos">
                          <div>
                            <Card.Text className="details-center">
                              <Card.Text>Marca {bike.brand.name}</Card.Text>
                              <Card.Text>{bike.category.name}</Card.Text>
                              <Card.Text>Tamanho {bike.size}</Card.Text>
                              <Card.Text>Material: {bike.material}</Card.Text>
                            </Card.Text>
                          </div>
                        </div>
                      </Col>
                      <Col>
                        <div id="cardStatus">
                          <Card.Text className="text">STATUS</Card.Text>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <div id="cardDatas">
                          <Card.Text className="text">
                            DATA ALUGUEL <br /> DATA DE ENTREGA
                          </Card.Text>
                        </div>
                      </Col>
                      <Col>
                        <div id="cardAva">
                          <Card.Text className="text">AVALIAÇÃO</Card.Text>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <div>Este usuário ainda não realizou nenhum aluguel</div>
        )}

        <Container fluid>
          <Container id="centerContainer">
            <Row>
              <Col md={4} sm={3}>
                <Link to="../registerbike">
                  <Button id="button">CADASTRAR BICICLETAS</Button>
                </Link>
              </Col>
              <Col md={4} sm={3}>
                <Button id="button" onClick={lcdorTroca}>AVALIAÇÕES DO LOCADOR</Button>
                <AvLocador show={cardlcdorV} onClose={lcdorTroca} />
              </Col>
              <Col md={4} sm={3}>
                <Button id="button" onClick={lctarioTroca}>AVALIAÇÕES DO LOCATÓRIO</Button>
                <AvLocatorio show={cardlctarioV} onClose={lctarioTroca} />
              </Col>
            </Row>
          </Container>
        </Container>
      </Container>  
      <Footer />
    </div>
  );
}

export default User;
