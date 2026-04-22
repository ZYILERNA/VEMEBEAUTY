"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const esteticaMenu = [
  {
    label: "Tratamientos Faciales",
    items: [
      { label: "Microneedling Pen", href: "/microneedlin-pen" },
      { label: "Linfa Desintoxicación", href: "/linfa-desintoxicacion" },
      { label: "Peeling Enzimático", href: "/peeling-enzimatico" },
      { label: "Tratamiento Valmont", href: "/tratamiento-valmont" },
      { label: "Tratamiento DMK", href: "/tratamiento-dmk" },
      { label: "Biologique Recherche", href: "/tratamiento-biologique-recherche" },
      { label: "Tratamiento SkinCeuticals", href: "/tratamiento-skinceutica" },
    ],
  },
  {
    label: "Tratamientos Corporales",
    items: [
      { label: "Masaje Aromaterapia", href: "/masaje-aromaterapia" },
      { label: "Peeling Enzimático Corporal", href: "/peeling-enzimatico-corporal" },
      { label: "Body Sculptor Alqvimia", href: "/masaje-corporal-ritual-body-sculptor-alqvimia" },
    ],
  },
  {
    label: "Tratamientos Capilares",
    items: [
      { label: "Hydrafacial Head", href: "/hydrafacial-head" },
      { label: "Head Spa Aveda", href: "/head-spa-aveda" },
      { label: "Head Spa KÉRASTASE", href: "/head-spa-kerastase" },
      { label: "Head Spa Leonor Greyl", href: "/head-spa-leonor-greyl" },
      { label: "Head Spa Miriamquevedo", href: "/head-spa-miriamquevedo" },
    ],
  },
  {
    label: "Dispositivos",
    items: [
      { label: "Aquapure", href: "/aquapure" },
      { label: "Hydrafacial", href: "/hydrafacial" },
      { label: "Depilación Diodo", href: "/depilacion-diodo" },
      { label: "Criolipólisis", href: "/criolipolisis" },
      { label: "Ondas Electromagnéticas", href: "/ondas-electromagneticas" },
    ],
  },
  {
    label: "Maquillaje Permanente",
    items: [
      { label: "Micropigmentación", href: "/micropigmentacion" },
    ],
  },
];

const medicinaMenu = [
  {
    label: "Antienvejecimiento",
    items: [
      { label: "THERMAGE FLX", href: "/thermage-flx" },
      { label: "ULTRAFORMER III", href: "/ultraformer-lll" },
      { label: "FOTONA 4D PRO", href: "/fotona-4d-pro" },
      { label: "MORPHEUS8", href: "/morpheus8" },
      { label: "INMODE Forma", href: "/inmode-forma" },
      { label: "INMODE MINI FX", href: "/inmode-minifx" },
      { label: "EXILIS ULTRA 360", href: "/exilis-ultra-360" },
      { label: "BTL Facial", href: "/btl-facial" },
      { label: "BTL Corporal", href: "/btl-corporal" },
    ],
  },
  {
    label: "Otros Tratamientos",
    items: [
      { label: "PICOCARE", href: "/picocare" },
      { label: "Stellar M22", href: "/stellar-m22" },
      { label: "Toxina Botulínica", href: "/toxina-botulinica" },
      { label: "Ácido Hialurónico", href: "/rellenos-con-acido-hialuronico" },
      { label: "MESOTERAPIA", href: "/mesoterapia" },
      { label: "Luz Terapia", href: "/luz-terapia" },
      { label: "Hidroxipatita Cálcica", href: "/hidroxiapatita-calcica" },
      { label: "Inductores de Colágeno", href: "/rellenos-inductores-de-colageno" },
      { label: "Terapia con Exosomas", href: "/terapia-regenerativa-con-exosomas" },
      { label: "Peeling Químicos", href: "/peeling-quimicos" },
    ],
  },
];

function DropdownMenu({
  label,
  groups,
  align = "left",
}: {
  label: string;
  groups: { label: string; items: { label: string; href: string }[] }[];
  align?: "left" | "center" | "right";
}) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  const handleMouseEnter = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  }, []);

  const alignClass =
    align === "center"
      ? "left-1/2 -translate-x-1/2"
      : align === "right"
      ? "right-0"
      : "left-0";

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={`flex items-center gap-1 py-1 text-sm font-medium transition-colors ${
          open ? "text-[#b89b6e]" : "text-gray-700 hover:text-[#b89b6e]"
        }`}
      >
        {label}
        <svg
          className={`w-3 h-3 transition-transform duration-200 ${open ? "rotate-180 text-[#b89b6e]" : ""}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown panel */}
      <div
        className={`absolute top-full ${alignClass} mt-3 bg-white border border-gray-100 shadow-2xl rounded-xl overflow-hidden
          transition-all duration-200 origin-top
          ${open ? "opacity-100 scale-y-100 pointer-events-auto" : "opacity-0 scale-y-95 pointer-events-none"}`}
        style={{ minWidth: groups.length > 2 ? 720 : 420 }}
      >
        {/* Gold top bar */}
        <div className="h-0.5 bg-[#b89b6e] w-full" />
        <div className={`p-6 grid gap-6`} style={{ gridTemplateColumns: `repeat(${Math.min(groups.length, 3)}, 1fr)` }}>
          {groups.map((group) => (
            <div key={group.label}>
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#b89b6e] mb-3 border-b border-[#b89b6e]/20 pb-1.5">
                {group.label}
              </p>
              <ul className="space-y-1.5">
                {group.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`block text-xs py-0.5 transition-colors ${
                        pathname === item.href
                          ? "text-[#b89b6e] font-semibold"
                          : "text-gray-600 hover:text-[#b89b6e] hover:translate-x-0.5"
                      } transition-transform duration-150`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileEstetica, setMobileEstetica] = useState(false);
  const [mobileMedicina, setMobileMedicina] = useState(false);
  const pathname = usePathname();

  const navLink = (href: string, label: string) => (
    <Link
      href={href}
      className={`text-sm font-medium transition-colors ${
        pathname === href ? "text-[#b89b6e]" : "text-gray-700 hover:text-[#b89b6e]"
      }`}
    >
      {label}
    </Link>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Main bar */}
      <div className="bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100/80">
        <div className="max-w-7xl mx-auto px-5 flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/cropped-cropped-cropped-logofinal-1.png"
              alt="VEME Beauty"
              width={150}
              height={55}
              className="object-contain h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLink("/", "Inicio")}
            {navLink("/sobre-nostros", "Sobre Nosotros")}
            <DropdownMenu label="Estética" groups={esteticaMenu} align="left" />
            <DropdownMenu label="Medicina Estética" groups={medicinaMenu} align="center" />
            {navLink("/eliminscion-de-tatuajes", "Eliminación de Tatuajes")}
          </nav>

          {/* Reserva CTA */}
          <a
            href="https://widget.treatwell.es/establecimiento/veme-beauty"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-2 bg-[#b89b6e] hover:bg-[#a08558] text-white text-xs font-semibold uppercase tracking-widest px-5 py-2.5 transition-colors duration-200"
          >
            Reservar
          </a>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-gray-700 rounded-md hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(v => !v)}
            aria-label="Menú"
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-[85vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="overflow-y-auto max-h-[85vh] px-5 py-4 space-y-1 text-sm">
          <Link href="/" className="flex items-center py-3 text-gray-700 hover:text-[#b89b6e] border-b border-gray-50 transition-colors" onClick={() => setMobileOpen(false)}>
            Inicio
          </Link>
          <Link href="/sobre-nostros" className="flex items-center py-3 text-gray-700 hover:text-[#b89b6e] border-b border-gray-50 transition-colors" onClick={() => setMobileOpen(false)}>
            Sobre Nosotros
          </Link>

          {/* Estética accordion */}
          <div className="border-b border-gray-50">
            <button
              onClick={() => setMobileEstetica(v => !v)}
              className="w-full flex items-center justify-between py-3 text-gray-700 hover:text-[#b89b6e] transition-colors font-medium"
            >
              Estética
              <svg className={`w-4 h-4 transition-transform duration-200 ${mobileEstetica ? "rotate-180 text-[#b89b6e]" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${mobileEstetica ? "max-h-[600px] pb-3" : "max-h-0"}`}>
              {esteticaMenu.map((group) => (
                <div key={group.label} className="pl-3 mb-4">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#b89b6e] mb-2">{group.label}</p>
                  <ul className="space-y-2">
                    {group.items.map((item) => (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          className="text-xs text-gray-500 hover:text-[#b89b6e] transition-colors block"
                          onClick={() => setMobileOpen(false)}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Medicina accordion */}
          <div className="border-b border-gray-50">
            <button
              onClick={() => setMobileMedicina(v => !v)}
              className="w-full flex items-center justify-between py-3 text-gray-700 hover:text-[#b89b6e] transition-colors font-medium"
            >
              Medicina Estética
              <svg className={`w-4 h-4 transition-transform duration-200 ${mobileMedicina ? "rotate-180 text-[#b89b6e]" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${mobileMedicina ? "max-h-[600px] pb-3" : "max-h-0"}`}>
              {medicinaMenu.map((group) => (
                <div key={group.label} className="pl-3 mb-4">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#b89b6e] mb-2">{group.label}</p>
                  <ul className="space-y-2">
                    {group.items.map((item) => (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          className="text-xs text-gray-500 hover:text-[#b89b6e] transition-colors block"
                          onClick={() => setMobileOpen(false)}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <Link href="/eliminscion-de-tatuajes" className="flex items-center py-3 text-gray-700 hover:text-[#b89b6e] border-b border-gray-50 transition-colors" onClick={() => setMobileOpen(false)}>
            Eliminación de Tatuajes
          </Link>

          <a
            href="https://widget.treatwell.es/establecimiento/veme-beauty"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center justify-center bg-[#b89b6e] hover:bg-[#a08558] text-white font-semibold uppercase tracking-widest text-xs px-6 py-3 transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Reservar cita
          </a>
        </div>
      </div>
    </header>
  );
}
