import { CategoriesProps } from "../types";
import api from "./api";

class CategoryService {
    async get(): Promise<CategoriesProps[]> {
      const { data } = await api.get("/category");
      return data;
    }
  
    async post(props: {
      name:string;
    }): Promise<any> {
      const { data } = await api.post("/category", props);
      return data;
    }
  }
  
  const service = new CategoryService();
  export default service;