import { BrandProps } from "../types";
import api from "./api";

class BrandService {
    async get(): Promise<BrandProps[]> {
      const { data } = await api.get("/brand");
      return data;
    }
  
    async post(props: {
      name:string;
    }): Promise<any> {
      const { data } = await api.post("/brand", props);
      return data;
    }
  }
  
  const service = new BrandService();
  export default service;