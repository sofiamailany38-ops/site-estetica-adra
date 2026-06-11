import { MessageCircle, Star, MapPin, Clock } from "lucide-react";

export default function App() {
  const whatsappUrl = "https://wa.me/5519991575254?text=Olá%20Adra%20Araujo,%20gostaria%20de%20agendar%20uma%20consulta%20estética.";

  const procedimentos = [
    {
      name: "Eletrolipose",
      description: "Tecnologia de correntes de baixa intensidade para a redução estratégica de gordura localizada e remodelamento corporal."
    },
    {
      name: "Limpeza de Pele",
      description: "Protocolo de renovação profunda, removendo impurezas e restaurando a luminosidade natural da sua face."
    },
    {
      name: "Harmonização Facial",
      description: "A arte de equilibrar traços e valorizar sua beleza natural com precisão e sofisticação."
    },
    {
      name: "Depilação a Laser",
      description: "A liberdade definitiva através da tecnologia de ponta, garantindo pele lisa com máximo conforto."
    }
  ];

  const avaliacoes = [
    {
      author: "Dalete Costa",
      text: "Visito a clínica Adra Araujo há anos e o padrão de excelência nunca mudou. Cada tratamento é cuidado em alto nível."
    },
    {
      author: "Adriana Moreira",
      text: "O protocolo de harmonização facial é simplesmente impecável. Sensibilidade em realçar os traços certos com naturalidade."
    },
    {
      author: "Luciana Rocha",
      text: "A limpeza de pele é excelente. Um atendimento de extremo profissionalismo e ambiente muito agradável nestes 20 anos."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#1A202C] font-sans antialiased flex flex-col justify-between selection:bg-[#D4AF37]/20 selection:text-[#1A202C]">
      
      {/* HEADER */}
      <header className="py-16 text-center px-6 border-b border-gray-200/60 max-w-4xl mx-auto w-full">
        {/* Logo centralizado */}
        <h1 className="font-serif font-light text-4xl sm:text-5xl tracking-[0.25em] text-[#1a202c] uppercase">
          ADRA ARAUJO
        </h1>
        {/* Subtítulo */}
        <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[#7FB3D5] mt-4 font-light">
          Clínica Estética Avançada • Há 20 anos elevando o autocuidado feminino.
        </p>
        
        {/* Botão CTA */}
        <div className="mt-10">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2.5 text-xs uppercase tracking-[0.2em] font-medium border border-[#D4AF37] px-8 py-3.5 transition-all duration-300 hover:bg-[#D4AF37] hover:text-white"
            id="cta-header-whatsapp"
          >
            <MessageCircle className="w-4 h-4 text-[#D4AF37] hover:text-white transition-colors" />
            <span>Agendar Consulta via WhatsApp</span>
          </a>
        </div>
      </header>

      {/* PROCEDIMENTOS (Layout Editorial) */}
      <main className="flex-grow py-20 px-6 max-w-4xl mx-auto w-full" id="procedimentos-container">
        
        <div className="text-center mb-16">
          <h2 className="font-serif font-light text-2xl sm:text-3xl tracking-widest uppercase text-[#1A202C]">
            Nossa Curadoria de Tratamentos
          </h2>
          <div className="h-[1px] w-12 bg-[#D4AF37] mx-auto mt-4" />
        </div>

        {/* Lista em coluna única, centralizada e larga */}
        <div className="space-y-1" id="procedimentos-lista">
          {procedimentos.map((proc, index) => (
            <div
              key={index}
              className="border-b border-gray-200 py-8 px-4 hover:border-[#D4AF37] transition-colors duration-300 group"
              id={`procedimento-${index}`}
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="max-w-2xl">
                  {/* Procedimento Nome */}
                  <h3 className="font-serif text-xl tracking-wider text-[#1A202C] uppercase group-hover:text-[#D4AF37] transition-colors duration-300">
                    {proc.name}
                  </h3>
                  {/* Breve explicação simples e fácil de entender */}
                  <p className="text-sm text-gray-500 font-light leading-relaxed mt-2.5">
                    {proc.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* SEÇÃO DE AVALIAÇÕES DISCRETA */}
      <section className="py-20 px-6 border-t border-gray-250/20 bg-white" id="avaliacoes-secao">
        <div className="max-w-4xl mx-auto w-full">
          
          <div className="text-center mb-12">
            <h2 className="font-serif font-light text-xl sm:text-2xl tracking-widest uppercase text-[#1A202C]">
              A Experiência Adra Araujo
            </h2>
            <div className="h-[1px] w-8 bg-[#D4AF37] mx-auto mt-3" />
          </div>

          <div className="grid md:grid-cols-3 gap-8" id="avaliacoes-grid">
            {avaliacoes.map((item, idx) => (
              <div key={idx} className="p-6 border border-gray-100 bg-[#F8FAFC]" id={`avaliacao-${idx}`}>
                <div className="flex space-x-0.5 mb-3 text-[#D4AF37]">
                  <Star className="w-3.5 h-3.5 fill-[#D4AF37] stroke-[1]" />
                  <Star className="w-3.5 h-3.5 fill-[#D4AF37] stroke-[1]" />
                  <Star className="w-3.5 h-3.5 fill-[#D4AF37] stroke-[1]" />
                  <Star className="w-3.5 h-3.5 fill-[#D4AF37] stroke-[1]" />
                  <Star className="w-3.5 h-3.5 fill-[#D4AF37] stroke-[1]" />
                </div>
                <p className="text-xs text-gray-500 font-light italic leading-relaxed">
                  "{item.text}"
                </p>
                <p className="text-xs font-serif font-medium text-[#1A202C] tracking-wide mt-4">
                  — {item.author}
                </p>
              </div>
            ))}
          </div>

          {/* Selo Discreto */}
          <div className="text-center mt-12 pt-6 border-t border-gray-100 text-xs text-gray-400 uppercase tracking-widest" id="google-rating-badge">
            4.9/5 estrelas baseada em mais de 900 avaliações
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t border-gray-200 py-16 px-6" id="contato">
        <div className="max-w-4xl mx-auto w-full flex flex-col md:flex-row justify-between items-center md:items-start gap-10 text-center md:text-left text-xs text-gray-500 font-light">
          
          {/* Horário */}
          <div className="space-y-2">
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-semibold flex items-center justify-center md:justify-start space-x-2">
              <Clock className="w-3.5 h-3.5" />
              <span>Funcionamento</span>
            </h4>
            <p>Segunda a Sexta, das 08:00 às 19:00</p>
          </div>

          {/* Endereço */}
          <div className="space-y-2">
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-semibold flex items-center justify-center md:justify-start space-x-2">
              <MapPin className="w-3.5 h-3.5" />
              <span>Nossa Sede</span>
            </h4>
            <p className="leading-relaxed">
              Av. Paulista, 1000 - Bela Vista, São Paulo - SP
            </p>
            <p className="mt-1">
              <a 
                href="https://google.com/maps?q=Av+Paulista+1000+Sao+Paulo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#D4AF37] underline tracking-widest uppercase text-[10px]"
              >
                Ver no Google Maps
              </a>
            </p>
          </div>

        </div>

        <div className="max-w-4xl mx-auto mt-12 pt-8 border-t border-gray-100 text-center text-[10px] text-gray-400 tracking-wider">
          <p>© 2026 Adra Araujo Clínica Estética. Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* BOTÃO FLUTUANTE DE WHATSAPP (Acompanhado de um ícone e com direcionamento direto) */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#D4AF37] hover:bg-[#c4a030] text-white p-3.5 rounded-full shadow-lg transition-transform hover:scale-105 inline-flex items-center justify-center focus:outline-none z-50"
        aria-label="Fale conosco no WhatsApp"
        id="whatsapp-floating-button"
      >
        <MessageCircle className="w-6 h-6 stroke-[1.5]" />
      </a>

    </div>
  );
}
