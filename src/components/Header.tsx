/**
 * Cabeçalho fixo do site.
 * Inicia transparente e aplica efeito glassmorphism ao rolar a página.
 * Inclui navegação responsiva com menu mobile animado.
 */
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

/** Itens do menu de navegação */
const navItems = [
  { label: "Serviços", href: "#servicos" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Contato", href: "#contato" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  /** Detecta rolagem para ativar o glassmorphism */
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo com efeito 3D no hover */}
        <motion.a
          href="#"
          whileHover={{ scale: 1.05, rotateY: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="relative z-10"
        >
          <img
            src="https://i.imgur.com/SczzMA8.png"
            alt="Netnex"
            className="h-10 w-auto"
          />
        </motion.a>

        {/* Navegação desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative text-sm font-medium text-foreground/80 hover:text-primary transition-colors group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Botão hambúrguer (mobile) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden relative z-10 text-foreground"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu mobile expansível */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass border-t border-border"
        >
          <nav className="flex flex-col items-center gap-6 py-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
