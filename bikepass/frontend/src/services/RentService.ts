import { RentsProps } from "../types";
import api from "./api";

class RentService {
  listByOwner(id: string) {
    throw new Error("Method not implemented.");
  }
  async get(): Promise<RentsProps[]> {
    const { data } = await api.get("/rents");
    return data;
  }

  async post(props: {
    idBike: number;
    idClient: number;
    idOwner: number;
    rentalDate: Date;
    returnDate: Date;
    ownerValuation: number;
    clientValuation: number;
  }): Promise<any> {
    const { data } = await api.post("/rents", props);
    return data;
  }
}

const service = new RentService();
export default service;
