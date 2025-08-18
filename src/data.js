import HeroImage from "/assets/hero-img.webp";


const Image = {
  HeroImage, 
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/TypeScript.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/Python.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/Adobe Photoshop.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Editor de Código",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
   {
    id: 3,
    gambar: Tools3,
    nama: "Typescript",
    ket: "Framework",
    dad: "200",
  },
  
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Python",
    ket: "Linguagem de Programação",
    dad: "400",
  },
  
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Linguagem de Programação",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Linguagem de Programação",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repositorio de Código",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Adobe Photoshop",
    ket: "Design App",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
];

import Proyek1 from "/assets/proyek/proyek1.webp";
import Proyek2 from "/assets/proyek/proyek2.webp";
import Proyek3 from "/assets/proyek/proyek3.webp";
import Proyek4 from "/assets/proyek/proyek4.webp";
import Proyek5 from "/assets/proyek/proyek5.webp";
import Proyek6 from "/assets/proyek/proyek6.webp";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "API Cadastro de Vendas",
    desk: "Solução de back-end completa para otimizar o fluxo de vendas de uma hamburgueria. A API gerencia desde o cadastro de produtos e usuários até a criação e atualização dos pedidos, com autenticação segura via JWT.",
    tools: ["Javascript", "Node.JS", "MongoDB", "PostgreSQL", "Vite"],
    link: 'https://github.com/AlbertFreitas/devburguer-API',
    dad: "200",  
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "BuscaSaude",
    desk: "Plataforma para busca de unidades de saúde, desenvolvida durante o Hackathon Trilhas da Inova Maranhão. Atuei diretamente no back-end, focando na arquitetura da API e na otimização do banco de dados para garantir uma busca eficiente.",
    tools: ["REACT", "Javascript", "MongoDB", "Node.JS", "PostgreSQL", "Vite", "TailwindCSS"],
    link: 'https://buscasaudema.vercel.app/', 
    dad: "300",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Dashboard Previsão de Vendas",
    desk: "Solução de Business Intelligence vencedora do desafio proposto pela Pulse em parceria com o Supermercado Mateus. O dashboard interativo transforma dados brutos em insights para a tomada de decisões estratégicas.",
    tools: ["Vite", "Typescript", "TailwindCSS", "Python", "React", "MongoBD","Node.JS"],
    link: 'https://pulseminds.vercel.app/',
    dad: "400",
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "Portfólio",
    desk: "Resultado do meu projeto para o Desafio da Inova Maranhão. Este portfólio responsivo foi uma oportunidade de aplicar e demonstrar meus conhecimentos em tecnologias essenciais do front-end.",
    link: 'https://projeto-inova-02-portfolio.vercel.app/#home',
    tools: ["Html", "Css", "Javascript"],
    dad: "500",
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: "API Cadastro de Usuários",
    desk: "Aplicação Full Stack completa para gerenciamento de usuários em tempo real. O projeto integra um front-end construído com React.js a uma API REST robusta, desenvolvida com Node.js, Express e Prisma ORM.",
    tools: ["Vite", "React", "Javascript", "MongoBD","Node.JS", "Prisma.io"],
    link: 'https://github.com/AlbertFreitas/NODE.JS-CADASTRO-USUARIOS', 
    dad: "600",
  },
  {
    id: 6,
    gambar: Proyek6,
    nama: "Previsão do Tempo",
    desk: "Aplicação web que fornece a previsão do tempo de forma simples e direta. O projeto foi construído utilizando HTML, CSS e JavaScript para consumir e apresentar dados de uma API de meteorologia em tempo real.",
    tools: ["Html", "Css", "Javascript"],
    link: 'https://albertfreitas.github.io/PROJETO-PREVISAO-TEMPO/',
    dad: "700",
  },
];
