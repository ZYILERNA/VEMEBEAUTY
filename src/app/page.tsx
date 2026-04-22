import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main id="content">
        <HeroSection />

        {/* Services Section */}
        <section className="py-24 px-4 bg-white">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-[#b89b6e] mb-3">Lo que ofrecemos</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-16" style={{ fontFamily: "Georgia, serif" }}>
              NUESTROS SERVICIOS
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Facial */}
              <div className="group flex flex-col items-center p-8 border border-gray-100 hover:border-[#b89b6e] hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-full bg-[#f5ede4]">
                  <svg className="w-8 h-8 text-[#b89b6e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3" style={{ fontFamily: "Georgia, serif" }}>
                  Tratamientos Faciales
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Microneedling, peelings enzimáticos, tratamientos con marcas premium como Valmont, DMK y Biologique Recherche.
                </p>
              </div>

              {/* Laser */}
              <div className="group flex flex-col items-center p-8 border border-gray-100 hover:border-[#b89b6e] hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-full bg-[#f5ede4]">
                  <svg className="w-8 h-8 text-[#b89b6e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3" style={{ fontFamily: "Georgia, serif" }}>
                  Depilación Láser
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Tecnología de diodo de última generación para una depilación permanente segura y efectiva para todo tipo de piel.
                </p>
              </div>

              {/* Corporal */}
              <div className="group flex flex-col items-center p-8 border border-gray-100 hover:border-[#b89b6e] hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-full bg-[#f5ede4]">
                  <svg className="w-8 h-8 text-[#b89b6e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3" style={{ fontFamily: "Georgia, serif" }}>
                  Cuidado Corporales
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Masajes, criolipólisis, ondas electromagnéticas y tratamientos reductores para moldear y cuidar tu cuerpo.
                </p>
              </div>
            </div>

            {/* Cuidado Estético label */}
            <div className="mt-16 inline-block border-t border-b border-[#b89b6e] px-12 py-3">
              <p className="text-[#b89b6e] uppercase tracking-[0.3em] text-sm font-medium">Cuidado Estético</p>
            </div>
          </div>
        </section>

        {/* CTA / Booking strip */}
        <section className="bg-[#f5ede4] py-16 px-4 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-[#b89b6e] mb-3">Tu belleza, nuestra pasión</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6" style={{ fontFamily: "Georgia, serif" }}>
            ¿Lista para tu próxima cita?
          </h2>
          <a
            href="https://widget.treatwell.es/establecimiento/veme-beauty"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#b89b6e] hover:bg-[#a08558] text-white font-semibold uppercase tracking-widest text-sm px-10 py-4 transition-colors duration-300"
          >
            Reserva ahora
          </a>
        </section>

        {/* Map / Location */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left">
              <p className="text-xs uppercase tracking-[0.4em] text-[#b89b6e] mb-3">Encuéntranos</p>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4" style={{ fontFamily: "Georgia, serif" }}>
                Ubicación
              </h2>
              <p className="text-gray-500 mb-2">C/ de Trafalgar, 78</p>
              <p className="text-gray-500 mb-6">Ciutat Vella, 08003 Barcelona</p>
              <div className="flex flex-col gap-2 text-sm text-gray-600 mb-6">
                <a href="tel:+34685710000" className="hover:text-[#b89b6e] transition-colors">+34 685 710 000</a>
                <a href="tel:+34932310745" className="hover:text-[#b89b6e] transition-colors">+34 932 310 745</a>
              </div>
              <a
                href="https://www.google.com/maps?q=C/+de+Trafalgar,+78+Ciutat+Vella+08003+Barcelona"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-[#b89b6e] text-[#b89b6e] hover:bg-[#b89b6e] hover:text-white font-semibold uppercase tracking-widest text-xs px-8 py-3 transition-colors duration-300"
              >
                Ver en Google Maps
              </a>
            </div>
            <div className="flex-1 w-full h-72 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.4!2d2.179471!3d41.390742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDIzJzI2LjciTiAywrAxMCc0Ni4xIkU!5e0!3m2!1ses!2ses!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="VEME Beauty location"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
