import { BikeProps } from "../types";
import api from "./api";

class BikeService {
  async get(): Promise<BikeProps[]> {
    const { data } = await api.get("/bike");
    return data;
  }

  async post(props: {
    idUser: number;
    idCategory: number;
    idBrand: number;
    name: string;
    color: string;
    size: number;
    material: string;
    gender: string;
    speedkit: number;
    rim: number;
    suspension: boolean;
    description: string;
    hourlyvalue: number;
    dailyvalue: number;
    latitude: number;
    longitude: number;
  }): Promise<any> {
    const { data } = await api.post("/bike", props);
    return data;
  }

  async listByUser(iduser:string){
    const { data } = await api.get(`/bike/user/${iduser}`);
    return data;
  }
}

const service = new BikeService();
export default service;
