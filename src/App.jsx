// App.jsx
import DataImage from "./data";
import { listTools, listProyek } from "./data";
import { useTheme } from "./ThemeContext"; // Importe o hook do tema

function App() {
  const { theme, toggleTheme } = useTheme(); // Use o hook para pegar o tema e a função de troca

  return (
    // Div principal que controla as cores de fundo e texto do site
    <div className="bg-white dark:bg-zinc-900 text-zinc-800 dark:text-gray-300 transition-colors duration-300">
      <div className="hero grid md:grid-cols-2 item-center pt-10 xl:gap-0 gap-6 grid-cols-1 md:grid-cols-1">
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          
          {/* BOTÃO DE TROCA DE TEMA */}
          <div className="absolute top-8 right-8">
            <button onClick={toggleTheme} className="bg-gray-200 dark:bg-zinc-800 p-3 rounded-full shadow-md">
              {theme === 'light' ? 
                <i className="ri-moon-fill text-xl"></i> : 
                <i className="ri-sun-fill text-xl text-yellow-300"></i>
              }
            </button>
          </div>
          
          <div className="flex items-center gap-4 mb-6 bg-gray-100 dark:bg-zinc-800 w-fit p-6 rounded-2xl">
            <img
              src={DataImage.HeroImage2}
              alt="Hero Image"
              className="w-10 rounded-md"
              loading="lazy"
            />
            <q className="text-zinc-800 dark:text-white">
              Código que não apenas funciona, mas que escala com o seu negócio
            </q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6 text-zinc-900 dark:text-white">
            Olá, Sou Albert Freitas
          </h1>
          <p className="text-base/loose mb-6 text-gray-600 dark:text-gray-400">
            Sou um Desenvolvedor Full Stack especializado em criar soluções
            digitais de ponta a ponta. Com foco em back-end, construo APIs
            robustas e escaláveis com Node.js, e no front-end, desenvolvo
            interfaces dinâmicas e de alta performance com React.
          </p>

          <div className="flex items-center flex-wrap sm:gap-4 gap-2 mb-6">
            <a
              href="/curriculo-albert-freitas.pdf"
              download="CV_Albert_Freitas.pdf"
              className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600 transition-colors flex items-center gap-2 text-white"
            >
              Download CV <i className="ri-download-2-line ri-lg"></i>
            </a>
            <a
              href="#contatos"
              className="bg-violet-700 text-white p-4 rounded-2xl hover:bg-violet-600 transition-colors flex items-center gap-2"
            >
              Falar comigo <i className="ri-chat-3-line ri-lg"></i>
            </a>
            <a
              href="#projetos"
              className="bg-gray-200 dark:bg-zinc-700 text-zinc-900 dark:text-white p-4 rounded-2xl hover:bg-gray-300 dark:hover:bg-zinc-600 transition-colors flex items-center gap-2"
            >
              Meus Projetos <i className="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>
        <img
          src={DataImage.HeroImage}
          alt="Hero Image"
          className="w-[500px] md:ml-auto animate__animated animate__fadeInUp animate__delay-4s"
          loading="lazy"
        />
      </div>

      <div className="sobre mt-32 py-10" id="sobre">
        <div
          className="xl:w-2/ lg:w-3/4 w-full mx-auto p-7 bg-gray-100 dark:bg-zinc-800 rounded-lg text-zinc-800 dark:text-gray-300"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <p className="text-base/loose md-10">
            Sou Albert Freitas, Desenvolvedor Full Stack e graduando em Ciência
            e Tecnologia pela UFMA...
            {/* Restante do texto */}
          </p>
          <div className="flex item-center justify-between mt-6">
            <div className="flex item-center gap-6">
              <div>
                <h1 className="text-4xl md-1 text-zinc-900 dark:text-white">
                  10 <span className="text-violet-600 dark:text-violet-500">+</span>
                </h1>
                <p>Projetos Concluidos</p>
              </div>
              <div>
                <h1 className="text-4xl md-1 text-zinc-900 dark:text-white">
                  2 <span className="text-violet-600 dark:text-violet-500">+</span>
                </h1>
                <p>Anos de Experiência</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Restante do seu código... Lembre-se de ajustar as cores com 'dark:' como nos exemplos acima */}

    </div>
  );
}

export default App;

// import DataImage from "./data";
// import { listTools, listProyek } from "./data";

// function App() {
//   return (
//     <>
//       <div className="hero grid md:grid-cols-2 item-center pt-10 xl:gap-0 gap-6 grid-cols-1 md:grid-cols-1">
//         <div className="animate__animated animate__fadeInUp animate__delay-3s">
//           <div className="flex items-center gap-4 mb-6 bg-zinc-800 w-fit p-6 rounded-2xl">
//             <img
//               // imagem de perfil//
//               src={DataImage.HeroImage2}
//               alt="Hero Image"
//               className="w-10 rounded-md"
//               loading="lazy"
//             />
//             <q>
//               Código que não apenas funciona, mas que escala com o seu negócio
//             </q>
//             {/* //uma frase que reflete a dedicação e o esforço investidos na criação de um código de qualidade.// */}
//           </div>
//           <h1 className="text-5xl/tight font-bold mb-6">
//             Olá, Sou Albert Freitas
//           </h1>
//           <p className="text-base/loose mb-6 opacity-50">
//             Sou um Desenvolvedor Full Stack especializado em criar soluções
//             digitais de ponta a ponta. Com foco em back-end, construo APIs
//             robustas e escaláveis com Node.js, e no front-end, desenvolvo
//             interfaces dinâmicas e de alta performance com React.
//           </p>
//           {/* breve resumo sobre mim e minhas áreas de interesse.*/}

//           {/* BOTÕES ATUALIZADOS */}
//           <div className="flex items-center flex-wrap sm:gap-4 gap-2 mb-6">
//             <a
//               href="/curriculo-albert-freitas.pdf"
//               download="CV_Albert_Freitas.pdf"
//               className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600 transition-colors flex items-center gap-2"
//             >
//               Download CV <i className="ri-download-2-line ri-lg"></i>
//             </a>
//             {/* BOTÃO "FALAR COMIGO" CORRIGIDO */}
//             <a
//               href="#contatos"
//               className="bg-violet-700 text-white  p-4 rounded-2xl hover:bg-violet-600 transition-colors flex items-center gap-2"
//             >
//               Falar comigo <i className="ri-chat-3-line ri-lg"></i>
//             </a>
//             <a
//               href="#projetos"
//               className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600 transition-colors flex items-center gap-2"
//             >
//               Meus Projetos <i className="ri-arrow-down-line ri-lg"></i>
//             </a>
//           </div>
//         </div>
//         <img
//           // foto principal
//           src={DataImage.HeroImage}
//           alt="Hero Image"
//           className="w-[500px] md:ml-auto animate__animated animate__fadeInUp animate__delay-4s"
//           loading="lazy"
//         />
//       </div>

//       {/* O restante do seu código continua igual... */}
//       <div className="sobre mt-32 py-10" id="sobre">
//         <div
//           className="xl:w-2/ lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg"
//           data-aos="fade-up"
//           data-aos-duration="1000"
//           data-aos-once="true"
//         >
//           <p className="text-base/loose md-10">
//             Sou Albert Freitas, Desenvolvedor Full Stack e graduando em Ciência
//             e Tecnologia pela UFMA, com experiência dedicada à criação de
//             soluções digitais robustas e eficientes. Com proficiência em
//             JavaScript, minha expertise se estende desde o back-end, onde
//             construo APIs escaláveis com Node.js, até o front-end, onde
//             desenvolvo interfaces dinâmicas e reativas com React. Sou movido
//             pela busca por desafios inovadores, sempre com o objetivo de
//             entregar código de alta qualidade e uma experiência de usuário
//             impecável.
//           </p>
//           <div className="flex item-center justify-between">
//             <div className="flex item-center gap-6">
//               <div>
//                 <h1 className="text-4xl md-1">
//                   10 <span className="text-violet-500">+</span>
//                 </h1>
//                 <p>Projetos Concluidos</p>
//               </div>
//               <div>
//                 <h1 className="text-4xl md-1">
//                   2 <span className="text-violet-500">+</span>
//                 </h1>
//                 <p>Anos de Experiência</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="tools mt-32">
//           <h1
//             className="text-4xl/snug font-bold mb-4"
//             data-aos="fade-up"
//             data-aos-duration="1000"
//             data-aos-once="true"
//           >
//             Ferramentas Usadas
//           </h1>
//           <p
//             className="xl:w-2/5 lg:w-2/4 md:w-2/4 sm:w-3/4 w-full text-base/loose opacity-50"
//             data-aos="fade-up"
//             data-aos-duration="1000"
//             data-aos-delay="300"
//           >
//             Aqui estão algumas ferramentas que costumo usar para criar sites ou
//             fazer design.{" "}
//           </p>
//           <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
//             {listTools.map((tool) => (
//               <div
//                 className="flex item-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group"
//                 key={tool.id}
//                 data-aos="fade-up"
//                 data-aos-duration="1000"
//                 data-aos-delay={tool.dad}
//                 data-aos-once="true"
//               >
//                 <img
//                   src={tool.gambar}
//                   alt="Tools Image"
//                   className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"
//                 />
//                 <div>
//                   <h4 className="font-bold">{tool.nama}</h4>
//                   <p className="opacity-50">{tool.ket}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
      
//       <div className="projetos mt-32 py-10" id="projetos">
//         <h1
//           className="text-center text-4xl font-bold mb-2"
//           data-aos="fade-up"
//           data-aos-duration="1000"
//           data-aos-once="true"
//         >
//           Projetos
//         </h1>
//         <p
//           className="text-base/loose text-center opacity-50"
//           data-aos="fade-up"
//           data-aos-duration="1000"
//           data-aos-delay="300"
//           data-aos-once="true"
//         >
//           Aqui estão alguns projetos que criei.
//         </p>
//         <div className="projetos-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
//           {listProyek.map((proyek) => (
//             <div
//               key={proyek.id}
//               className="p-4 bg-zinc-800 rounded-md"
//               data-aos="fade-up"
//               data-aos-duration="1000"
//               data-aos-delay={proyek.dad}
//               data-aos-once="true"
//             >
//               <img src={proyek.gambar} alt="Projeto Image" loading="lazy" />
//               <div>
//                 <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
//                 <p className="text-sm/loose md-4 ">{proyek.desk}</p>
//                 <div className="flex flex-wrap gap-2">
//                   {proyek.tools.map((tool, index) => (
//                     <p
//                       className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold"
//                       key={index}
//                     >
//                       {tool}
//                     </p>
//                   ))}
//                 </div>
//                 <div className="mt-8 text-center ">
//                   <a
//                     href={proyek.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="bg-violet-700 p-3 rounded-lg blcok border border-zinc-600 hover:bg-violet-600"
//                   >
//                     Link Projeto
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
      
//       <div className="contatos my-32 sm:p-10 p-0" id="contatos">
//         <h1
//           className="text-4xl font-bold mb-2 text-center"
//           data-aos="fade-up"
//           data-aos-duration="1000"
//           data-aos-once="true"
//         >
//           Contato
//         </h1>
//         <p
//           className="text-base/loose text-center mb-10 opacity-50"
//           data-aos="fade-up"
//           data-aos-duration="1000"
//           data-aos-delay="300"
//           data-aos-once="true"
//         >
//           Vamos nos conectar comigo!
//         </p>
//         <form
//           action="https://formsubmit.co/freitasalbert4@gmail.com"
//           method="POST"
//           className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md"
//           autoComplete="off"
//           data-aos="fade-up"
//           data-aos-duration="1000"
//           data-aos-delay="500"
//           data-aos-once="true"
//         >
//           <div className="flex flex-col gap-6">
//             <div className="flex flex-col gap-2">
//               <label className="font-semibold">Nome completo</label>
//               <input
//                 type="text"
//                 name="nome"
//                 placeholder="Nome Completo..."
//                 className="border border-zinc-500 p-2 rounded-md"
//                 required
//               />
//             </div>

//             <div className="flex flex-col gap-2">
//               <label className="font-semibold">E-mail</label>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email Completo..."
//                 className="border border-zinc-500 p-2 rounded-md"
//                 required
//               />
//             </div>

//             <div className="flex flex-col gap-2">
//               <label className="font-semibold">Sua Mensagem</label>
//               <textarea
//                 name="mensagem"
//                 id="mensagem"
//                 cols="45"
//                 rows="7"
//                 placeholder="Sua Mensagem..."
//                 className="border border-zinc-500 p-2 rounded-md"
//                 required
//               ></textarea>
//             </div>

//             <div className="text-center ">
//               <button
//                 type="submit"
//                 className="bg-violet-700 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-violet-600"
//               >
//                 Enviar Mensagem
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// }

// export default App;

