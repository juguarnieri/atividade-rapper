import { Router } from "express";

const suspeitosRoutes = Router();

// Array com suspeitos pré-cadastrados
let suspeitos = [
  {
    id: Math.floor(Math.random() * 1000000),
    nome: "Felipe Dev",
    idade: 35,
    descricao_fisica:[ "Cabelo curto e preto, moreno"],
    envolvimento_atividade_suspeitas: false,
  },
  {
    id: Math.floor(Math.random() * 1000000),
    nome: "Luiza",
    idade: 16,
    descricao_fisica: ["Cabelo grande e preto, branca"],
    envolvimento_atividade_suspeitas: true,
  },
  {
    id: Math.floor(Math.random() * 1000000),
    nome: "Caio Lacerda",
    idade: 17,
    descricao_fisica: ["Cabelo enrolado, branco"],
    envolvimento_atividade_suspeitas: true,
  },
  {
    id: Math.floor(Math.random() * 1000000),
    nome: "Larissa Siva",
    idade: 16,
    descricao_fisica: ["Cabelo enrolado, moreno"],
    envolvimento_atividade_suspeitas: false,
  },
  {
    id: Math.floor(Math.random() * 1000000),
    nome: "Júlia Guarnieri",
    idade: 16,
    descricao_fisica: ["Cabelo curto e castanho, branca"],
    envolvimento_atividade_suspeitas: false,
  },
];

// Rota para listar todos os suspeitos
suspeitosRoutes.get("/", (req, res) => {
    return res.status(200).json(suspeitos);
  });
  
  // Rota para cadastrar um novo suspeito
  suspeitosRoutes.post("/", (req, res) => {
      const { nome, idade, descricao_fisica, envolvimento_atividade_suspeitas } = req.body;
    
  // Validação dos campos obrigatórios
  if (!nome || !idade|| !envolvimento_atividade_suspeitas) {
      return res.status(400).json({
        message: "O campo nome, idade, envolvimento em atividades suspeitas é obrigatório!",
      });
    }
    
    // Validação de existência de envolvimento em atividades suspeitas
    if (
      envolvimento_atividade_suspeitas != "sim" &&
      envolvimento_atividade_suspeitas != "não"
    ) {
      return res.status(400).send({
        message: "Digite 'sim' ou 'não'!",
      });
    }
    
    // Validação para verificar se a idade é um número inteiro
    if (Number.isInteger(idade) == false) {
      return res.status(400).send({
        message: "A idade do suspeito deve ser um número inteiro!",
      });
    }
  });
  // Rota para buscar um suspeito pelo id
suspeitosRoutes.get("/:id", (req, res) => {
    const { id } = req.params;
  
    // Busca um suspeito pelo id no array de suspeitos
    const suspeito = suspeitos.find((suspect) => suspect.id == id);
  
    // Verifica se o suspeito foi encontrado
    if (!suspeito) {
      return res
        .status(404)
        .json({ message: `Suspeito com id ${id} não encontrado!` });
    }
  
    return res.status(200).json(suspeito);
  });


export default suspeitosRoutes;