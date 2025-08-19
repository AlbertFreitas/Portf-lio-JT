// src/ThemeContext.jsx
import React, { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'dark'
  );

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);


// Abra o terminal na pasta do seu projeto (a mesma onde você roda npm run dev).

// Execute o seguinte comando:

// Bash

// npx tailwindcss init -p
// O que este Comando Faz?
// npx tailwindcss init: É o comando que cria o arquivo tailwind.config.js.

// -p: É uma flag que também cria um arquivo postcss.config.js, que é importante para que o Tailwind funcione corretamente com o Vite.

// Após rodar esse comando, você verá dois novos arquivos aparecerem na raiz do seu projeto, como mostra a sua imagem:

// tailwind.config.js

// postcss.config.js

// Próximo Passo
// Agora que o arquivo foi criado, você pode seguir o Passo 1 da minha resposta anterior:

// Abra o novo arquivo tailwind.config.js.

// Adicione a linha darkMode: "class" dentro do objeto de configuração.

// Seu arquivo tailwind.config.js deverá ficar assim:

// JavaScript

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   darkMode: "class", // Adicione esta linha
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
// Depois disso, pode continuar com os outros passos que enviei (criar o ThemeContext.jsx, etc.). Agora tudo funcionará como esperado!






// PS C:\Users\alber\OneDrive\Documentos\PROGRAMAÇÃO PROJETOS\Portf-lio-JT> npx tailwindcss init -p

// npm ERR! could not determine executable to run



// npm ERR! A complete log of this run can be found in:

// npm ERR!     C:\Users\alber\AppData\Local\npm-cache\_logs\2025-08-19T01_34_22_925Z-debug-0.log

// PS C:\Users\alber\OneDrive\Documentos\PROGRAMAÇÃO PROJETOS\Portf-lio-JT> 







// apareceu esses erros




// Mostrar raciocínio
// Ah, entendi. Este erro could not determine executable to run geralmente significa que o npm não está encontrando o pacote tailwindcss instalado no seu projeto para poder executá-lo.

// Mesmo que as classes do Tailwind estejam funcionando no seu CSS (provavelmente porque foram configuradas por um template inicial), o "programa" que cria os arquivos de configuração (tailwindcss CLI) está faltando como uma dependência de desenvolvimento.

// Vamos corrigir isso instalando os pacotes necessários.

// Solução (Passo a Passo)
// Siga estes passos no seu terminal, na pasta do projeto:

// Passo 1: Instale as Dependências Corretas
// Execute este comando para instalar o Tailwind CSS e suas dependências (postcss e autoprefixer) como dependências de desenvolvimento:

// Bash

// npm install -D tailwindcss postcss autoprefixer
// -D é um atalho para --save-dev, que salva esses pacotes como dependências de desenvolvimento, o que é a prática correta para ferramentas de build.

// Passo 2: Rode o Comando de Inicialização Novamente
// Depois que a instalação do passo 1 for concluída com sucesso, tente rodar o comando de inicialização novamente:

// Bash

// npx tailwindcss init -p
// Agora que o pacote tailwindcss está devidamente instalado no seu projeto, o npx conseguirá encontrá-lo e executá-lo, criando os arquivos tailwind.config.js e postcss.config.js sem erros.

// Resumo Rápido
// Primeiro, rode: npm install -D tailwindcss postcss autoprefixer

// Depois, rode: npx tailwindcss init -p

// Isso deve resolver o problema e criar os arquivos que você precisa para continuar.






// detalhe, meu projeto esta rodando no yarn e nao no npm



// Mostrar raciocínio
// Ah, perfeito! Obrigado por esclarecer. Isso muda os comandos que você precisa usar. Peço desculpas por ter assumido o npm.

// O raciocínio é exatamente o mesmo, mas os comandos para o Yarn são diferentes.

// Vamos fazer da forma correta para o seu projeto.

// Solução com Yarn (Passo a Passo)
// Siga estes passos no seu terminal, na pasta do projeto:

// Passo 1: Instale as Dependências com Yarn
// Execute este comando para adicionar o Tailwind e suas dependências como dependências de desenvolvimento usando o Yarn:

// Bash

// yarn add -D tailwindcss postcss autoprefixer
// add -D no Yarn é o equivalente ao install -D no npm.

// Passo 2: Rode o Comando de Inicialização com Yarn
// Depois que a instalação for concluída, execute o comando de inicialização. Com o Yarn, você pode chamar o executável do pacote diretamente:

// Bash

// yarn tailwindcss init -p
// Este comando agora vai funcionar, pois o Yarn encontrará o tailwindcss que acabamos de instalar no seu projeto e criará os arquivos tailwind.config.js e postcss.config.js para você.

// Resumo Rápido (para Yarn)
// Primeiro, rode: yarn add -D tailwindcss postcss autoprefixer

// Depois, rode: yarn tailwindcss init -p

// Feito isso, o problema do erro será resolvido e você poderá continuar com a configuração do dark mode.