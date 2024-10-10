import { Router } from "express";

const suspeitosRoutes = Router();

// Array com suspeitos pré-cadastrados
let suspeitos = [
  {
    id: Math.floor(Math.random() * 1000000),
    nome: "Felipe Dev",
    idade: 35,
    descricao_fisica: "Cabelo curto e preto, moreno",
    envolvimento_atividade_suspeitas: false,
  },
  {
    id: Math.floor(Math.random() * 1000000),
    nome: "Luiza",
    idade: 16,
    descricao_fisica: "Cabelo grande e preto, branca",
    envolvimento_atividade_suspeitas: true,
  },
  {
    id: Math.floor(Math.random() * 1000000),
    nome: "Caio Lacerda",
    idade: 17,
    descricao_fisica: "Cabelo enrolado, branco",
    envolvimento_atividade_suspeitas: true,
  },
  {
    id: Math.floor(Math.random() * 1000000),
    nome: "Larissa Siva",
    idade: 16,
    descricao_fisica: "Cabelo enrolado, moreno",
    envolvimento_atividade_suspeitas: false,
  },
  {
    id: Math.floor(Math.random() * 1000000),
    nome: "Júlia Guarnieri",
    idade: 16,
    descricao_fisica: "Cabelo curto e castanho, branca",
    envolvimento_atividade_suspeitas: false,
  },
];

// Rota para listar todos os suspeitos
suspeitosRoutes.get("/", (req, res) => {
    return res.status(200).json(suspeitos);
  });
  
  

export default suspeitosRoutes;