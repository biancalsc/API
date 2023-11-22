import "./bike.css";
import perfil from "./imagens/perfil.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useCallback, useEffect, useState } from "react";
import { BikeProps } from "../../../types";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import mapBike from "./imagens/mapBike.png";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Bike() {
  const { id } = useParams();
  const [bike, setBike] = useState<BikeProps>();
  useEffect(() => {
    fetch(`http://localhost:3001/bike/${id}`)
      .then((r) => r.json())
      .then((r) => setBike(r))
      .catch((error) =>
        console.error("Erro ao buscar informações da bicicleta:", error)
      );
  }, [id]);

  const initMap = useCallback(() => {
    if (bike?.latitude !== undefined && bike?.longitude !== undefined) {
      const map = L.map("map").setView([bike.latitude, bike.longitude], 13);

      L.tileLayer(`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`, {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      const customIcon = L.icon({
        iconUrl: mapBike,
        iconSize: [35, 35],
        iconAnchor: [15, 30],
        popupAnchor: [0, -30],
      });

      // Adicione um marcador no mapa (opcional)
      L.marker([bike.latitude, bike.longitude], { icon: customIcon })
        .addTo(map)
        .bindPopup("Localização da bicicleta")
        .openPopup();
    }
  }, [bike]);

  useEffect(() => {
    initMap();
  }, [initMap]);

  const getSuspension = (bike: BikeProps | undefined) => {
    if (bike?.suspension === true) {
      return "Possui suspensão";
    } else {
      return "Não possui suspensão";
    }
  };

  return (
    <div id="body">
      <Header />
      <Container fluid id="fundo">
        <Container id="carrouselcontainer">
          <Col md={12}>
            <Carousel
              showThumbs={true}
              showIndicators={true}
              dynamicHeight={true}
              infiniteLoop={true}
              useKeyboardArrows={true}
            >
              {bike?.photos.map((photo) => (
                <div key={photo.id}>
                  <img
                    src={`http://localhost:3001/photo/public/${photo.filename}`}
                    alt="Foto"
                    id="carrouselImg"
                  />
                </div>
              ))}
            </Carousel>
          </Col>
        </Container>
        <Container id="Rcont">
          <Col md={12}>
            <Row>
              <h1>{bike?.name}</h1>
            </Row>
          </Col>
          <Col md={12}>
            <Row>
              <Col md={8} sm={12} id="Rcol">
                <Row className="rowcard">
                  <Col md={12} sm={12}>
                    <Card className="cards">
                      <Card.Title>Categoria</Card.Title>
                      <Card.Text>{bike?.category.name}</Card.Text>
                    </Card>
                  </Col>
                </Row>
                <Row className="rowcard">
                  <Col md={6} sm={12} className="respCard">
                    <Card className="cards">
                      <Card.Title>Cor</Card.Title>
                      <Card.Text>{bike?.color}</Card.Text>
                    </Card>
                  </Col>
                  <Col md={6} sm={12}>
                    <Card className="cards rightCards">
                      <Card.Title>Tamanho</Card.Title>
                      <Card.Text>{bike?.size}</Card.Text>
                    </Card>
                  </Col>
                </Row>
                <Row className="rowcard">
                  <Col md={6} sm={12} className="respCard">
                    <Card className="cards">
                      <Card.Title>Material</Card.Title>
                      <Card.Text>{bike?.material}</Card.Text>
                    </Card>
                  </Col>
                  <Col md={6} sm={12}>
                    <Card className="cards rightCards">
                      <Card.Title>Gênero</Card.Title>
                      <Card.Text>{bike?.gender}</Card.Text>
                    </Card>
                  </Col>
                </Row>
                <Row className="rowcard">
                  <Col md={6} sm={12} className="respCard">
                    <Card className="cards">
                      <Card.Title>Marchas</Card.Title>
                      <Card.Text>{bike?.speedkit}</Card.Text>
                    </Card>
                  </Col>
                  <Col md={6} sm={12}>
                    <Card className="cards rightCards">
                      <Card.Title>Aro</Card.Title>
                      <Card.Text>{bike?.rim}</Card.Text>
                    </Card>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} sm={12} className="respCard">
                    <Card className="cards text-right">
                      <Card.Title>Suspensão</Card.Title>
                      <Card.Text>{getSuspension(bike)}</Card.Text>
                    </Card>
                  </Col>
                  <Col md={6} sm={12}>
                    <Card className="cards rightCards text-right">
                      <Card.Title>Marca</Card.Title>
                      <Card.Text>{bike?.brand.name}</Card.Text>
                    </Card>
                  </Col>
                </Row>
                <Row id="rowDesc">
                  <Col md={12} sm={12}>
                    <Card className="cards" id="cardDesc">
                      <Card.Title>Descrição</Card.Title>
                      <Card.Text>{bike?.description}</Card.Text>
                    </Card>
                  </Col>
                </Row>
                <Row id="mapCardRow">
                  <Col md={12} sm={12} className="respCard">
                    <Card id="mapCard">
                      <div
                        id="map"
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: "15px",
                        }}
                      ></div>
                    </Card>
                  </Col>
                </Row>
              </Col>
              <Col md={4} sm={12} className="order-md-first">
                <Card id="cardCont">
                  <Card.Title className="title">VALORES</Card.Title>
                  <Container className="valContainers">
                    <Card className="valores">
                      <Card.Text>Diária</Card.Text>
                      <Card.Text>{bike?.dailyvalue}</Card.Text>
                    </Card>
                    <Card className="valores">
                      <Card.Text>Hora</Card.Text>
                      <Card.Text>{bike?.hourlyvalue}</Card.Text>
                    </Card>
                  </Container>
                  <Card.Title className="title">AVALIAÇÕES</Card.Title>
                  <Container className="valContainers">
                    <Card className="perfil">
                      <Card.Text>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor tortor at semper. Suspendisse potenti. Nulla facilisi. Vestibulum in consectetur massa, vel ultrices justo."</Card.Text>
                      <Card.Text>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor tortor at semper. Suspendisse potenti. Nulla facilisi. Vestibulum in consectetur massa, vel ultrices justo."</Card.Text>
                      <Card.Text>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor tortor at semper. Suspendisse potenti. Nulla facilisi. Vestibulum in consectetur massa, vel ultrices justo."</Card.Text>
                      <Card.Text>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor tortor at semper. Suspendisse potenti. Nulla facilisi. Vestibulum in consectetur massa, vel ultrices justo."</Card.Text>
                      <Card.Text>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor tortor at semper. Suspendisse potenti. Nulla facilisi. Vestibulum in consectetur massa, vel ultrices justo."</Card.Text>
                    </Card>
                  </Container>
                  <Card.Title className="title">CONTATOS</Card.Title>
                  <Container className="valContainers">
                    <Card className="perfil">
                      <Card.Img src={perfil} id="perfilImg"></Card.Img>
                      <Card.Text>{bike?.user.alias}</Card.Text>
                      <Card.Text>{bike?.user.phone}</Card.Text>
                      <Card.Text>{bike?.user.mail}</Card.Text>
                    </Card>
                  </Container>
                </Card>
              </Col>
            </Row>
          </Col>
        </Container>
      </Container>
      <Footer/>
    </div>
  );
}

export default Bike;
