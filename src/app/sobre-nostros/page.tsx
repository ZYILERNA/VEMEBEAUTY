import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

export const metadata = { title: "Sobre Nosotros · VEME Beauty" };

export default function SobreNosotros() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-20 min-h-[50vh] flex items-end bg-[#1a1a1a] overflow-hidden">
        <video
          src="/videos/SobreNosotros.mp4"
          autoPlay muted loop playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative z-10 max-w-5xl mx-auto px-6 pb-14 w-full">
          <p className="text-xs uppercase tracking-[0.4em] text-[#b89b6e] mb-3">Quiénes somos</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white" style={{ fontFamily: "Georgia, serif" }}>
            Sobre Nosotros
          </h1>
        </div>
      </section>

      <main>
        {/* Intro */}
        <section className="max-w-4xl mx-auto px-6 py-20">
          <p className="text-xs uppercase tracking-[0.4em] text-[#b89b6e] mb-4">Nuestra historia</p>
          <h2 className="text-3xl font-bold text-gray-800 mb-8" style={{ fontFamily: "Georgia, serif" }}>
            Un centro de excelencia en el corazón de Barcelona
          </h2>
          <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
            <p>
              VEME Beauty nació con una misión clara: ofrecer los tratamientos estéticos y de medicina estética más avanzados del mercado en un entorno exclusivo, cálido y profesional.
            </p>
            <p>
              Ubicados en el barrio de Ciutat Vella de Barcelona, nuestro equipo de especialistas combina años de experiencia clínica con la tecnología más innovadora para ofrecerte resultados reales y duraderos.
            </p>
            <p>
              Trabajamos con las marcas más prestigiosas del sector — Valmont, DMK, Biologique Recherche, Aveda, KÉRASTASE, Leonor Greyl y Miriamquevedo — garantizando la máxima calidad en cada tratamiento.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="bg-[#faf7f4] py-20">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-xs uppercase tracking-[0.4em] text-[#b89b6e] mb-3 text-center">Lo que nos define</p>
            <h2 className="text-3xl font-bold text-gray-800 mb-14 text-center" style={{ fontFamily: "Georgia, serif" }}>
              Nuestros valores
            </h2>
            <div className="grid md:grid-cols-3 gap-10">
              {[
                { icon: "✦", title: "Excelencia", text: "Seleccionamos únicamente los dispositivos y productos con mayor evidencia científica y resultados probados." },
                { icon: "✦", title: "Personalización", text: "Cada cliente es único. Diseñamos protocolos a medida para cada tipo de piel, necesidad y objetivo." },
                { icon: "✦", title: "Confianza", text: "Transparencia total en cada recomendación. Tu salud y bienestar son siempre nuestra prioridad." },
              ].map((v) => (
                <div key={v.title} className="text-center">
                  <p className="text-[#b89b6e] text-2xl mb-4">{v.icon}</p>
                  <h3 className="text-lg font-bold text-gray-800 mb-3" style={{ fontFamily: "Georgia, serif" }}>{v.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Luis */}
        <section className="max-w-4xl mx-auto px-6 py-20">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center" style={{ fontFamily: "Georgia, serif" }}>
            Conoce a nuestro equipo
          </h2>
          <video src="/videos/LuisPresentacion.mp4" controls playsInline className="w-full rounded-lg shadow-xl" />
        </section>

        {/* Brands */}
        <section className="bg-[#faf7f4] py-16">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-center text-xs uppercase tracking-[0.4em] text-[#b89b6e] mb-10">Marcas con las que trabajamos</p>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-6 items-center">
              {[
                { src: "/images/valmont-300x300.png", alt: "Valmont" },
                { src: "/images/dmk-300x300.png", alt: "DMK" },
                { src: "/images/biologiq-300x300.png", alt: "Biologique Recherche" },
                { src: "/images/skin-300x300.png", alt: "SkinCeuticals" },
                { src: "/images/aveda-300x300.png", alt: "Aveda" },
                { src: "/images/kerastase-300x300.png", alt: "Kérastase" },
                { src: "/images/leonor-300x300.png", alt: "Leonor Greyl" },
                { src: "/images/miriam-300x300.png", alt: "Miriamquevedo" },
                { src: "/images/helena-300x300.png", alt: "Helena Rubinstein" },
                { src: "/images/evidens-300x300.png", alt: "Evidens" },
                { src: "/images/natura-300x300.png", alt: "Natura Bissé" },
              ].map((b) => (
                <div key={b.alt} className="flex items-center justify-center p-3">
                  <Image src={b.src} alt={b.alt} width={80} height={80} className="object-contain grayscale hover:grayscale-0 transition-all duration-300" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 text-center">
          <a
            href="https://widget.treatwell.es/establecimiento/veme-beauty"
            target="_blank" rel="noopener noreferrer"
            className="inline-block bg-[#b89b6e] hover:bg-[#a08558] text-white font-semibold uppercase tracking-widest text-sm px-10 py-4 transition-colors duration-300"
          >
            Reserva tu cita
          </a>
        </section>
      </main>

      <Footer />
    </>
  );
}
