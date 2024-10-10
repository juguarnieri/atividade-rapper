import { Router } from "express";

const suspeitosRoutes = Router();

// Array com suspeitos pré-cadastrados
let suspeitos = [
  {
    id: Math.floor(Math.random() * 1000000),
    nome: "Felipe Dev",
    idade: 35,
    descricao_fisica:[ "Cabelo curto e preto, moreno"],
    envolvimento_atividade_suspeitas: "sim",
  },
  {
    id: Math.floor(Math.random() * 1000000),
    nome: "Luiza",
    idade: 16,
    descricao_fisica: ["Cabelo grande e preto, branca"],
    envolvimento_atividade_suspeitas: "não",
  },
  {
    id: Math.floor(Math.random() * 1000000),
    nome: "Caio Lacerda",
    idade: 17,
    descricao_fisica: ["Cabelo enrolado, branco"],
    envolvimento_atividade_suspeitas: "sim",
  },
  {
    id: Math.floor(Math.random() * 1000000),
    nome: "Larissa Siva",
    idade: 16,
    descricao_fisica: ["Cabelo enrolado, moreno"],
    envolvimento_atividade_suspeitas: "não",
  },
  {
    id: Math.floor(Math.random() * 1000000),
    nome: "Júlia Guarnieri",
    idade: 16,
    descricao_fisica: ["Cabelo curto e castanho, branca"],
    envolvimento_atividade_suspeitas: "sim",
  },
];

// Rota para listar todos os suspeitos
suspeitosRoutes.get("/", (req, res) => {
    return res.status(200).json(suspeitos);
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

  // Rota para atualizar um suspeito pelo id
suspeitosRoutes.put("/:id", (req, res) => {
    const { id } = req.params;
    const { nome, idade, descricao_fisica, envolvimento_atividade_suspeitas } = req.body;
  
    // Busca um suspeito pelo id no array de suspeitos
    const suspeito = suspeitos.find((suspect) => suspect.id == id);
  
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
        };
  
    suspeito.nome = nome;
    suspeito.idade = idade;
    suspeito.descricao_fisica = descricao_fisica;
    suspeito.envolvimento_atividade_suspeitas = envolvimento_atividade_suspeitas;
  
    return res.status(200).json({
      message: "Suspeito atualizado com sucesso!",
      suspeito,
    });
});
















// Rota para deletar um suspeito
suspeitosRoutes.delete("/:id", (req, res) => {
    const { id } = req.params;
  
    // Busca um suspeito pelo id no array de suspeitos
    const suspeito = suspeitos.find((suspect) => suspect.id == id);
  
    // Verifica se o suspeito foi encontrado
    if (!suspeito) {
      return res
        .status(404)
        .json({ message: `Suspeito com id ${id} não encontrado!` });
    }
  
    // Remove o suspeito do array de suspeitos
    suspeitos = suspeitos.filter((suspect) => suspect.id != id);
  
    return res.status(200).json({
      message: "Suspeito removido com sucesso!",
      suspeito,
    });
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

    // Criação de um novo suspeito
const novoSuspeito = {
      id: Math.floor(Math.random() * 1000000),
      nome,
      idade,
      descricao_fisica,
      envolvimento_atividade_suspeitas,
    }

 // Adiciona o novo planeta ao array de planetas
 suspeitos.push(novoSuspeito);

return res.status(201).json({
  message: "Suspeito cadastrado com sucesso!",
  novoSuspeito,
});
});

export default suspeitosRoutes;