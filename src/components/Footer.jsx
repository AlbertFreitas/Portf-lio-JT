import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Footer = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [showScrollTop, setShowScrollTop] = useState(false);
  // Novo estado para o texto do botão de copiar
  const [copyButtonText, setCopyButtonText] = useState('Copiar e-mail');

  // Função que copia o e-mail para a área de transferência
  const handleCopyEmail = () => {
    const email = 'freitasalbert4@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      // Altera o texto do botão para dar feedback
      setCopyButtonText('E-mail Copiado!');
      // Retorna ao texto original após 2 segundos
      setTimeout(() => {
        setCopyButtonText('Copiar e-mail');
      }, 2000);
    }).catch(err => {
      console.error('Falha ao copiar e-mail: ', err);
    });
  };

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScrollTop && window.pageYOffset > 400) {
        setShowScrollTop(true);
      } else if (showScrollTop && window.pageYOffset <= 400) {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScrollTop]);

  return (
    <>
      <footer ref={ref} className="bg-zinc-900 text-gray-400 mt-32 relative">
        <div
          className={`container mx-auto px-8 transition-opacity duration-1000 ${
            inView ? 'opacity-100 animate__animated animate__fadeInUp' : 'opacity-0'
          }`}
        >
          {/* Grid para as colunas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-16">
            {/* Coluna 1: Portfólio e Redes Sociais */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Portfólio de Albert Freitas</h3>
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

            {/* Coluna 3: Contato - COM O NOVO BOTÃO */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Contato</h3>
              <div className="space-y-4">
                  <div className="flex items-center gap-3">
                      <i className="ri-map-pin-2-line ri-xl"></i>
                      <span>São Luís, Maranhão, Brasil</span>
                  </div>
                  <div> {/* Container para o e-mail e botão */}
                    <div className="flex items-center gap-3">
                        <i className="ri-mail-send-line ri-xl"></i>
                        <a href="mailto:freitasalbert4@gmail.com" className="hover:text-white transition-colors">
                            freitasalbert4@gmail.com
                        </a>
                    </div>
                    {/* Botão de Copiar E-mail */}
                    <button 
                      onClick={handleCopyEmail}
                      className="mt-3 flex items-center gap-2 text-sm text-gray-400 border border-dashed border-gray-600 rounded-lg px-3 py-2 hover:bg-zinc-800 hover:text-white transition-all"
                    >
                      <i className="ri-file-copy-line"></i>
                      {copyButtonText}
                    </button>
                  </div>
              </div>
            </div>
          </div>
          
          {/* Linha de Copyright com a Logo */}
          <div className="border-t border-zinc-800 py-6 flex justify-center items-center text-center text-sm">
            <img src="/assets/favicon.ico" alt="Logo Albert Freitas" className="w-5 h-5 mr-3" />
            <p>&copy; 2025 Albert Freitas. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Botão "Voltar ao Topo" */}
      {showScrollTop && (
        <a 
          href="#pagina-inicial" 
          className="fixed bottom-8 right-8 bg-zinc-800 hover:bg-zinc-700 text-white p-3 rounded-lg shadow-lg transition-all duration-300 z-50 animate__animated animate__fadeInUp animate__faster"
          aria-label="Voltar ao topo"
        >
          <i className="ri-arrow-up-s-line ri-xl"></i>
        </a>
      )}
    </>
  );
};

export default Footer;

// import { useState, useEffect } from 'react';
// import { useInView } from 'react-intersection-observer';

// const Footer = () => {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   // Novo estado para controlar a visibilidade do botão de "voltar ao topo"
//   const [showScrollTop, setShowScrollTop] = useState(false);

//   useEffect(() => {
//     const checkScrollTop = () => {
//       // Mostra o botão se o scroll passar de 400px
//       if (!showScrollTop && window.pageYOffset > 400) {
//         setShowScrollTop(true);
//       } else if (showScrollTop && window.pageYOffset <= 400) {
//         setShowScrollTop(false);
//       }
//     };

//     window.addEventListener('scroll', checkScrollTop);
//     // Limpa o evento ao desmontar o componente
//     return () => window.removeEventListener('scroll', checkScrollTop);
//   }, [showScrollTop]);

//   return (
//     <>
//       <footer ref={ref} className="bg-zinc-900 text-gray-400 mt-32 relative">
//         <div
//           className={`container mx-auto px-8 transition-opacity duration-1000 ${
//             inView ? 'opacity-100 animate__animated animate__fadeInUp' : 'opacity-0'
//           }`}
//         >
//           {/* Grid para as colunas */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-16">
//             {/* Coluna 1: Portfólio e Redes Sociais */}
//             <div>
//               <h3 className="text-2xl font-bold text-white mb-4">Portfólio de Albert Freitas</h3>
//               <p className="text-base mb-4">
//                 Obrigado por visitar meu portfólio. Vamos nos conectar!
//               </p>
//               <div className="flex items-center gap-4">
//                 <a href="https://github.com/AlbertFreitas" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
//                   <i className="ri-github-fill ri-2x"></i>
//                 </a>
//                 <a href="https://www.instagram.com/albertcodelab/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
//                   <i className="ri-instagram-fill ri-2x"></i>
//                 </a>
//                 <a href="https://www.linkedin.com/in/albert-freitas-a56a62280/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
//                   <i className="ri-linkedin-fill ri-2x"></i>
//                 </a>
//               </div>
//             </div>

//             {/* Coluna 2: Links Rápidos */}
//             <div>
//               <h3 className="text-xl font-bold text-white mb-4">Links Rápidos</h3>
//               <ul className="space-y-3">
//                 <li><a href="#pagina-inicial" className="hover:text-white transition-colors">Página Inicial</a></li>
//                 <li><a href="#sobre" className="hover:text-white transition-colors">Sobre</a></li>
//                 <li><a href="#projetos" className="hover:text-white transition-colors">Projetos</a></li>
//                 <li><a href="#contatos" className="hover:text-white transition-colors">Contato</a></li>
//               </ul>
//             </div>

//             {/* Coluna 3: Contato */}
//             <div>
//               <h3 className="text-xl font-bold text-white mb-4">Contato</h3>
//               <div className="space-y-4">
//                   <div className="flex items-center gap-3">
//                       <i className="ri-map-pin-2-line ri-xl"></i>
//                       <span>São Luís, Maranhão, Brasil</span>
//                   </div>
//                   <div className="flex items-center gap-3">
//                       <i className="ri-mail-send-line ri-xl"></i>
//                       <a href="mailto:freitasalbert4@gmail.com" className="hover:text-white transition-colors">
//                           freitasalbert4@gmail.com
//                       </a>
//                   </div>
//               </div>
//             </div>
//           </div>
          
//           {/* Linha de Copyright com a Logo */}
//           <div className="border-t border-zinc-800 py-6 flex justify-center items-center text-center text-sm">
//             <img src="assets/favicon.ico" alt="Logo Albert Freitas" className="w-5 h-5 mr-3" />
//             <p>&copy; 2025 Albert Freitas. Todos os direitos reservados.</p>
//           </div>
//         </div>
//       </footer>

//       {/* Botão "Voltar ao Topo" */}
//       {showScrollTop && (
//         <a 
//           href="#pagina-inicial" 
//           className="fixed bottom-8 right-8 bg-zinc-800 hover:bg-zinc-700 text-white p-3 rounded-lg shadow-lg transition-all duration-300 z-50 animate__animated animate__fadeInUp animate__faster"
//           aria-label="Voltar ao topo"
//         >
//           <i className="ri-arrow-up-s-line ri-xl"></i>
//         </a>
//       )}
//     </>
//   );
// };

// export default Footer;

