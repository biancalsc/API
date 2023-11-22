import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./Avlocatorio.css";
import { useParams } from "react-router-dom";
import { BikeProps, RentsProps, UsersProps } from "../../../types";
import rentService from "../../../services/RentService";

interface AlertProps {
  show: boolean;
  onClose: () => void;
}

const AvLocatorio: React.FC<AlertProps> = ({ show, onClose }) => {

  const { id } = useParams();
  const [rent, setRent] = useState<RentsProps>();
  useEffect(() => {
    fetch(`http://localhost:3001/rent/owner/${id}`)
      .then((r) => r.json())
      .then((r) => {
        console.log(r);
         setRent(r)
      })
      .catch((error) =>
        console.error("Erro ao buscar informações da bicicleta:", error)
      );
  }, [id]);

  useEffect(() => {
    // Verificar se rent está definido e atualizar a renderização
    if (rent !== undefined) {
      console.log("Renderizar com rent atualizado:", rent);
    }
  }, [rent]);  
  
  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Avaliações do locatório</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {rent && (
          <>
            <p>Avaliação do Locatário:</p>
            <p>{rent.ownerValuation}</p>
          </>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default AvLocatorio;
