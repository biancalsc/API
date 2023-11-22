import React, { useEffect, useState } from "react";
import { RentsProps } from "../../types";
import RentService from "../../services/RentService";
import { parseISO } from "date-fns";

function rent(){
    const [idBike, setIdBike] = useState("");
    const [idClient,setIdClient] = useState("");
    const [idOwner, setIdOwner] = useState("");
    const [rentalDate, setrentalDate] = useState("");
    const [returnDate, setreturnDate] = useState("");
    const [ownerValuation, setOwnerValuation] = useState("");
    const [clientValuation, setClientValuation] = useState("");
    const [rents, setRents] = useState([] as RentsProps[]);


     // Disparado ao carregar o componente
  useEffect(() => {
    (async () => {
      try {
        const rentData = await RentService.get();
        if (rentData) {
          setRents(rentData);
        }
      } catch (error) {
        console.error("Erro ao buscar dados das bicicletas:", error);
      }
    })();
  }, []);

  const load = async () => {
    const res: RentsProps[] = await RentService.get();
    setRents(res);
  };

  const save = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Converter os campos numéricos para inteiros ou floats
    const idBikeInt = parseInt(idBike);
    const idClientInt = parseInt(idClient);
    const idOwnerInt = parseInt(idOwner);
    const rentalDateDate = parseISO (rentalDate);
    const returnDateDate = parseISO (returnDate);
    const ownerValuationInt = parseInt (ownerValuation);
    const clientValuationInt = parseInt (clientValuation);

    // Verificar se as conversões foram bem-sucedidas e se os campos obrigatórios foram preenchidos
    if (
        !isNaN(idBikeInt) &&
        !isNaN(idClientInt) &&
        !isNaN(idOwnerInt) &&
        !isNaN(ownerValuationInt) &&
        !isNaN(clientValuationInt) &&
        isNaN(rentalDateDate.getTime()) &&
        isNaN(returnDateDate.getTime())
      ){
        const res = await RentService.post({
          idBike: idBikeInt,
          idClient: idClientInt,
          idOwner: idOwnerInt,
          rentalDate: rentalDateDate,
          returnDate: returnDateDate,
          ownerValuation: ownerValuationInt,
          clientValuation: clientValuationInt
        });
        if (res.error) {
            alert(res.error);
          } else {
            load();
            reset();
          }
        }
    };
    
    const reset = () => {
        setIdBike("");
        setIdClient("");
        setIdOwner("");
        setrentalDate("");
        setreturnDate("");
        setOwnerValuation("");
        setClientValuation("");
    };  

    

}