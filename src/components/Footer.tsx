/**
 * Rodapé do site Netnex.
 * Contém logotipo, links de navegação, localização da empresa
 * e botão animado para retornar ao topo da página.
 */
import { motion } from "framer-motion";
import { ArrowUp, MapPin } from "lucide-react";

const Footer = () => {
  /** Rolagem suave até o topo */
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-foreground text-background/80 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Marca e descrição */}
          <div>
            <img src="https://i.imgur.com/SczzMA8.png" alt="Netnex" className="h-8 mb-4 brightness-0 invert" />
            <p className="text-sm text-background/50 leading-relaxed">
              Agência de marketing digital focada em resultados reais para o seu negócio.
            </p>
          </div>

          {/* Links de navegação */}
          <div>
            <h4 className="font-semibold text-background mb-4">Navegação</h4>
            <div className="space-y-2">
              {["Serviços", "Portfólio", "Contato"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                  className="block text-sm text-background/50 hover:text-primary transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Localização */}
          <div>
            <h4 className="font-semibold text-background mb-4">Localização</h4>
            <div className="flex items-start gap-2 text-sm text-background/50">
              <MapPin size={16} className="mt-0.5 flex-shrink-0" />
              <span>Visconde do Rio Branco - MG</span>
            </div>
          </div>
        </div>

        {/* Barra inferior com copyright e botão voltar ao topo */}
        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-background/40">
            © {new Date().getFullYear()} Netnex. Todos os direitos reservados.
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
          >
            <ArrowUp size={18} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
