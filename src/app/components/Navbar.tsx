"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { GROUPS, treatmentsByGroup, type Section } from "@/lib/treatments";
import { SITE } from "@/lib/site";

type MenuGroup = { key: string; label: string; items: { label: string; href: string }[] };

function groupsFor(section: Section): MenuGroup[] {
  return GROUPS.filter((g) => g.section === section).map((g) => ({
    key: g.key,
    label: g.label,
    items: treatmentsByGroup(g.key).map((t) => ({ label: t.name, href: `/${t.slug}` })),
  }));
}

const MENUS: { id: string; label: string; groups: MenuGroup[] }[] = [
  { id: "estetica", label: "Estética", groups: groupsFor("estetica") },
  { id: "medicina", label: "Medicina estética", groups: groupsFor("medicina") },
];

const LINKS = [
  { href: "/eliminacion-de-tatuajes", label: "Tatuajes" },
  { href: "/sobre-nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      className={`w-3 h-3 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cerrar menús al cambiar de página
  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, [pathname]);

  // Bloquear scroll del fondo con el menú móvil abierto
  useEffect(() => {
    document.documentElement.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [mobileOpen]);

  // Escape y clic fuera cierran el megamenú
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenMenu(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, []);

  const enter = useCallback((id: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(id);
  }, []);
  const leave = useCallback(() => {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 160);
  }, []);

  const solid = scrolled || openMenu !== null || mobileOpen;
  const textTone = solid ? "text-ink" : "text-white";

  return (
    <header
      ref={navRef}
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-500 ${
        solid ? "bg-cream/95 backdrop-blur-md shadow-[0_1px_0_0_var(--color-line)]" : "bg-gradient-to-b from-black/45 to-transparent"
      }`}
    >
      <div className="container-luxe flex h-20 items-center justify-between gap-6">
        <Link href="/" aria-label="VEME Beauty, ir al inicio" className="shrink-0">
          <Logo tone={solid ? "dark" : "light"} />
        </Link>

        <nav aria-label="Principal" className={`hidden lg:flex items-center gap-9 ${textTone}`}>
          {MENUS.map((m) => {
            const open = openMenu === m.id;
            const active = m.groups.some((g) => g.items.some((i) => i.href === pathname));
            return (
              <div key={m.id} onMouseEnter={() => enter(m.id)} onMouseLeave={leave}>
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={`menu-${m.id}`}
                  onClick={() => setOpenMenu(open ? null : m.id)}
                  className={`flex items-center gap-1.5 py-2 text-[0.78rem] uppercase tracking-[0.18em] transition-colors hover:text-gold ${
                    active ? "text-gold" : ""
                  }`}
                >
                  {m.label}
                  <Chevron open={open} />
                </button>

                <div
                  id={`menu-${m.id}`}
                  className={`absolute inset-x-0 top-full border-t border-line bg-cream shadow-[0_30px_60px_-30px_rgb(0_0_0/0.35)] transition-all duration-300 ${
                    open ? "visible opacity-100 translate-y-0" : "invisible opacity-0 -translate-y-2"
                  }`}
                >
                  <div className="container-luxe grid gap-10 py-10" style={{ gridTemplateColumns: `repeat(${Math.min(m.groups.length, 5)}, minmax(0,1fr))` }}>
                    {m.groups.map((g) => (
                      <div key={g.key}>
                        <Link
                          href={`/tratamientos#${g.key}`}
                          className="block font-display text-xl text-ink hover:text-gold-deep transition-colors"
                        >
                          {g.label}
                        </Link>
                        <span className="mt-3 mb-4 block h-px w-8 bg-gold" />
                        <ul className="space-y-2.5">
                          {g.items.map((item) => (
                            <li key={item.href}>
                              <Link
                                href={item.href}
                                className={`text-sm transition-colors hover:text-gold-deep ${
                                  pathname === item.href ? "text-gold-deep font-medium" : "text-stone"
                                }`}
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
          })}
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`py-2 text-[0.78rem] uppercase tracking-[0.18em] transition-colors hover:text-gold ${
                pathname === l.href ? "text-gold" : ""
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={SITE.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden sm:inline-flex btn !min-h-0 !py-3 !px-6 ${solid ? "btn-primary" : "btn-gold"}`}
          >
            Reservar
          </a>
          <button
            type="button"
            className={`lg:hidden -mr-2 p-3 ${textTone}`}
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileOpen}
            aria-controls="menu-movil"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className="relative block h-3 w-6">
              <span className={`absolute left-0 top-0 h-px w-6 bg-current transition-transform duration-300 ${mobileOpen ? "translate-y-1.5 rotate-45" : ""}`} />
              <span className={`absolute left-0 bottom-0 h-px w-6 bg-current transition-transform duration-300 ${mobileOpen ? "-translate-y-1.5 -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {/* Menú móvil a pantalla completa */}
      <div
        id="menu-movil"
        className={`lg:hidden fixed inset-x-0 top-20 bottom-0 bg-cream transition-all duration-500 ${
          mobileOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav aria-label="Menú móvil" className="h-full overflow-y-auto px-6 pt-4 pb-32">
          {MENUS.map((m) => {
            const open = mobileSection === m.id;
            return (
              <div key={m.id} className="border-b border-line">
                <button
                  type="button"
                  className="flex w-full items-center justify-between py-5 font-display text-2xl text-ink"
                  aria-expanded={open}
                  onClick={() => setMobileSection(open ? null : m.id)}
                >
                  {m.label}
                  <Chevron open={open} />
                </button>
                <div className={`grid transition-all duration-500 ${open ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    {m.groups.map((g) => (
                      <div key={g.key} className="mb-5">
                        <p className="eyebrow mb-3">{g.label}</p>
                        <ul className="grid grid-cols-1 gap-2.5 pl-11">
                          {g.items.map((item) => (
                            <li key={item.href}>
                              <Link href={item.href} className="text-[0.95rem] text-stone">
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
          })}
          {[{ href: "/tratamientos", label: "Todos los tratamientos" }, ...LINKS].map((l) => (
            <Link key={l.href} href={l.href} className="block border-b border-line py-5 font-display text-2xl text-ink">
              {l.label}
            </Link>
          ))}
          <div className="mt-8 space-y-2 text-sm text-stone">
            {SITE.phones.map((p) => (
              <a key={p.href} href={p.href} className="block">
                {p.label}
              </a>
            ))}
            <a href={SITE.instagram.url} target="_blank" rel="noopener noreferrer" className="block">
              Instagram {SITE.instagram.handle}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
