import { useState, useEffect } from "react";

const navLinks = [
  { id: "pagina-inicial", title: "Página Inicial" },
  { id: "sobre", title: "Sobre" },
  { id: "projetos", title: "Projetos" },
  { id: "contatos", title: "Contato" },
];

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [activeSection, setActiveSection] = useState("pagina-inicial");

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 100);

      const sections = navLinks.map((link) =>
        document.getElementById(link.id)
      );

      let currentSection = "pagina-inicial";
      for (const section of sections) {
        if (section) {
          const sectionTop = section.offsetTop;
          if (window.scrollY >= sectionTop - 150) {
            currentSection = section.id;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`navbar px-4 sm:px-8 py-4 flex items-center justify-end transition-all duration-300 z-50 ${
        active
          ? // AQUI ESTÁ A CORREÇÃO! 👇 Adicionamos o prefixo "md:"
            "fixed top-0 left-0 right-0 md:bg-zinc-950/80 md:backdrop-blur-sm md:shadow-xl"
          : "relative"
      }`}
    >
      <ul
        className={`menu flex items-center sm:gap-10 gap-4 md:static fixed left-1/2 -translate-x-1/2 md:translate-x-0 md:opacity-100 bg-white/30 backdrop-blur-md p-4 rounded-br-2xl rounded-bl-2xl md:bg-transparent transition-all duration-300 md:transition-none z-40 ${
          active ? "top-0 opacity-100" : "-top-20 opacity-0 md:opacity-100"
        }`}
      >
        {navLinks.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              className={`sm:text-lg text-base font-medium transition-colors duration-300 ${
                activeSection === link.id
                  ? "text-violet-400"
                  : "text-white"
              }`}
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;

// import { useState, useEffect } from "react";

// // Para deixar o código mais limpo, criamos um array com os links
// const navLinks = [
//   { id: "pagina-inicial", title: "Página Inicial" },
//   { id: "sobre", title: "Sobre" },
//   { id: "projetos", title: "Projetos" },
//   { id: "contatos", title: "Contato" }, // Corrigido de 'contatos' para o href correto
// ];

// const Navbar = () => {
//   const [active, setActive] = useState(false);
//   const [activeSection, setActiveSection] = useState("pagina-inicial"); // Novo estado para a seção ativa

//   useEffect(() => {
//     const handleScroll = () => {
//       // Lógica para o fundo do navbar
//       setActive(window.scrollY > 100);

//       // Lógica para destacar o link ativo
//       const sections = navLinks.map((link) =>
//         document.getElementById(link.id)
//       );

//       let currentSection = "pagina-inicial";
//       for (const section of sections) {
//         if (section) {
//           const sectionTop = section.offsetTop;
//           // O offset de 150 ajuda a selecionar a seção um pouco antes de chegar no topo
//           if (window.scrollY >= sectionTop - 150) {
//             currentSection = section.id;
//           }
//         }
//       }
//       setActiveSection(currentSection);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div
//       className={`navbar px-4 sm:px-8 py-4 flex items-center justify-between transition-all duration-300 z-50 ${
//         active
//           ? "fixed top-0 left-0 right-0 bg-zinc-950/80 backdrop-blur-sm shadow-xl"
//           : "relative"
//       }`}
//     >
//       <div className="logo">
//         <h1 className="text-3xl font-bold bg-white text-black p-1 md:bg-transparent md:text-white">
//           Portfólio
//         </h1>
//       </div>
//       <ul className="menu flex items-center sm:gap-10 gap-4">
//         {navLinks.map((link) => (
//           <li key={link.id}>
//             <a
//               href={`#${link.id}`}
//               className={`sm:text-lg text-base font-medium transition-colors duration-300 ${
//                 activeSection === link.id
//                   ? "text-violet-400" // Classe de destaque
//                   : "text-white"      // Classe padrão
//               }`}
//             >
//               {link.title}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Navbar;






// import { useState, useEffect } from "react";

// const Navbar = () => {
//   const [active, setActive] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 150) {
//         setActive(true);
//       } else {
//         setActive(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div className="navbar py-7 flex items-center justify-between">
//       <div className="logo">
//         <h1 className="text-3xl font-bold bg-white text-black p-1 md:bg-transparent md:text-white">
//           Portfólio
//         </h1>
//       </div>
//       <ul
//         className={`menu flex items-center sm:gap-10 gap-4 md:static fixed left-1/2 -translate-x-1/2 md:translate-x-0 transition-all duration-300
//         md:opacity-100 bg-white/30 backdrop-blur-md p-4 rounded-br-2xl rounded-bl-2xl md:bg-transparent transition-all md:transition-none  z-40 ${
//           active ? "top-0 opacity-100" : "-top-10 opacity-0"
//         }`}
//       >
//         <li>
//           <a href="#pagina-inicial" className="sm:text-lg text-base font-medium">
//             Pagina Incial
//           </a>
//         </li>

//         <li>
//           <a href="#sobre" className="sm:text-lg text-base font-medium">
//             Sobre
//           </a>
//         </li>

//         <li>
//           <a href="#projetos" className="sm:text-lg text-base font-medium">
//             Projetos
//           </a>
//         </li>

//         <li>
//           <a href="#contatos" className="text-lg text-base font-medium">
//             Contato
//           </a>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Navbar;
// import { useState, useEffect, use } from "react";

// const Navbar = () => {
//   const [active, setActive] = useState(false);

//   // Monitora a rolagem da página para determinar se o cabeçalho deve ser ativado ou desativado.//
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 150) {
//         setActive(true);
//       } else {
//         setActive(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div className="navbar py-7 flex items-center justify-between">
//       <div className="logo">
//         <h1 className="text-3x1 font-bold bg-white text-black p-1 md:bg-transparent md:text-white">
//           Portfólio
//         </h1>
//       </div>
//       <ul
//         className={`menu flex items-center sm:gap-10 gap-4 md:static fixed left-1/2 traslate-x-1/2 md:translate-x-0  
//         md:opacity-100 bg-white/30 backgrop-blur-md p-4 rounded-br-2x1 rounded-bl-2x1 ${
//           active ? "top-0 opacity-100" : "-top-10 opacity-0"
//         }`} //algum problema na parte de scroll, não está funcionando como deveria. minuto 32
//       >
//         <li>
//           <a href="#" className="sm:text-lg text-base font-medium">
//             Pagina Incial
//           </a>
//         </li>

//         <li>
//           <a href="#" className="sm:text-lg text-base font-medium">
//             Sobre
//           </a>
//         </li>

//         <li>
//           <a href="#" className="sm:text-lg text-base font-medium">
//             Projetos
//           </a>
//         </li>

//         <li>
//           <a href="#" className="text-lg text-base font-medium">
//             Contato
//           </a>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Navbar;
