import express from "express";
import routes from "./routes";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

// será usado 3000 se a variável de ambiente não tiver sido definida
const PORT = process.env.PORT || 3000;
const app = express(); // cria o servidor e coloca na variável app
const corsOptions = {
  origin: 'http://localhost:3000', // Permitir apenas esta origem
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Permitir esses métodos HTTP
};
app.use(cors(corsOptions))
// suportar parâmetros JSON no body da requisição
app.use(express.json());
// inicializa o servidor na porta especificada
app.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}`);
});

// define a rota para o pacote /routes
app.use(routes);
