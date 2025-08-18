import { useInView } from 'react-intersection-observer';

const Footer = () => {
  // Hook para observar se o componente está visível
  const { ref, inView } = useInView({
    // Opções do hook
    triggerOnce: true, // A animação acontecerá apenas uma vez
    threshold: 0.1,    // A animação começa quando 10% do footer estiver visível
  });

  return (
    // Atribuímos a referência 'ref' a este elemento para que ele seja observado
    <footer ref={ref} className="bg-zinc-900 text-gray-400 mt-32">
      {/* Aplicamos a animação no contêiner interno.
        Se 'inView' for true, as classes da animação são adicionadas.
        Se for false, o conteúdo fica com opacidade 0.
      */}
      <div
        className={`container mx-auto px-8 transition-opacity duration-1000 ${
          inView ? 'opacity-100 animate__animated animate__fadeInUp' : 'opacity-0'
        }`}
      >
        {/* Grid para as colunas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-16">
          
          {/* Coluna 1: Portfólio e Redes Sociais */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Portfólio</h3>
            <p className="text-base mb-4">
              Obrigado por visitar meu portfólio. Vamos nos conectar!
            </p>
            <div className="flex items-center gap-4">
              <a href="https://github.com/AlbertFreitas" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <i className="ri-github-fill ri-2x"></i>
              </a>
              <a href="https://www.instagram.com/albertcodelab/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <i className="ri-instagram-fill ri-2x"></i>
              </a>
              <a href="https://www.linkedin.com/in/albert-freitas-a56a62280/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <i className="ri-linkedin-fill ri-2x"></i>
              </a>
            </div>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              <li><a href="#pagina-inicial" className="hover:text-white transition-colors">Página Inicial</a></li>
              <li><a href="#sobre" className="hover:text-white transition-colors">Sobre</a></li>
              <li><a href="#projetos" className="hover:text-white transition-colors">Projetos</a></li>
              <li><a href="#contatos" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Coluna 3: Contato */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contato</h3>
            <div className="space-y-4">
                <div className="flex items-center gap-3">
                    <i className="ri-map-pin-2-line ri-xl"></i>
                    <span>São Luís, Maranhão, Brasil</span>
                </div>
                <div className="flex items-center gap-3">
                    <i className="ri-mail-send-line ri-xl"></i>
                    <a href="mailto:freitasalbert4@gmail.com" className="hover:text-white transition-colors">
                        freitasalbert4@gmail.com
                    </a>
                </div>
            </div>
          </div>
        </div>
        
        {/* Linha de Copyright */}
        <div className="border-t border-zinc-800 py-6 text-center text-sm">
          <p>&copy; 2025 Albert Freitas. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


// const Footer = () => {
//   return (
//     <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center ">
//         <h1 className="text-2xl font-bold">Portfólio</h1>
//         <div className="flex gap-7"> 
//             <a href="#pagina-inicial">Pagina Inicial</a>
//             <a href="#sobre">Sobre</a>
//             <a href="#projetos">Projetos</a>
//         </div>
//         <div className="flex items-center gap-3">
//             <a href="https://github.com/AlbertFreitas" target="_blank" rel="noopener noreferrer">
//                 <i className="ri-github-fill ri-2x"></i>
//             </a>
//             <a href="https://www.instagram.com/albertcodelab/" target="_blank" rel="noopener noreferrer">
//                 <i className="ri-instagram-fill ri-2x"></i>
//             </a>
//             <a href="https://www.linkedin.com/in/albert-freitas-a56a62280/" target="_blank" rel="noopener noreferrer">
//                 <i className="ri-linkedin-fill ri-2x"></i>
//             </a>
            
//         </div>
//     </div>
    
//   )
// }

// export default Footer