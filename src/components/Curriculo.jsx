import { Download } from "lucide-react";

function Curriculo() {
  return (
    <>
      <div className="text-center">
        <h1 className="font-aoboshi lg:text-[250%]  text-[27px] bg-clip-text text-transparent inline-block animate-fade-right" style={{
          backgroundImage: "linear-gradient(to right, #F9E400 7%, #BBA400 72%, #787800 100%)"
        }}>
          Confira meu currículo!
        </h1>
      </div>

      <div className="mt-5 ml-20 lg:ml-13  animate-fade-up">
        <a
          href="/curriculo_andre_lucca.pdf"
          download
          className="inline-flex lg:w-80 lg:h-30 items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 via-red-500 to-orange-400 text-white font-semibold rounded-full shadow-md hover:scale-105 transition-transform"
        >
          <Download size={20} />
          Baixar
        </a>
      </div>
    </>
  );
}

export default Curriculo;