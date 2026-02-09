/**
 * Seção de portfólio com grade de projetos.
 * Inclui filtros animados por categoria e cards com efeito 3D
 * (rotação em perspectiva) ao passar o mouse.
 */
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ShoppingBag, Monitor, Video, Palette, BarChart3, Globe } from "lucide-react";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";

/** Categorias disponíveis para filtragem */
const filters = ["Todos", "Landing Pages", "Vídeos", "Identidade Visual"];

/** Projetos do portfólio com ícone representativo e categoria */
const projects = [
  { title: "E-commerce Fashion", category: "Landing Pages", icon: ShoppingBag, color: "bg-primary/10 text-primary" },
  { title: "Dashboard SaaS", category: "Landing Pages", icon: Monitor, color: "bg-blue-500/10 text-blue-500" },
  { title: "Campanha Viral", category: "Vídeos", icon: Video, color: "bg-amber-500/10 text-amber-500" },
  { title: "Rebranding Tech", category: "Identidade Visual", icon: Palette, color: "bg-emerald-500/10 text-emerald-500" },
  { title: "Funil de Vendas", category: "Landing Pages", icon: BarChart3, color: "bg-violet-500/10 text-violet-500" },
  { title: "Site Institucional", category: "Landing Pages", icon: Globe, color: "bg-primary/10 text-primary" },
];

const PortfolioSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState("Todos");

  /** Filtra projetos pela categoria selecionada */
  const filtered = active === "Todos" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-secondary/50 grain" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={staggerContainer}>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-center mb-4">
            Nosso <span className="text-gradient">Portfólio</span>
          </motion.h2>
          <motion.p variants={fadeInUp} custom={1} className="text-muted-foreground text-center max-w-xl mx-auto mb-10">
            Projetos que geram resultados reais para nossos clientes.
          </motion.p>

          {/* Filtros por categoria */}
          <motion.div variants={fadeInUp} custom={2} className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  active === f
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : "bg-background text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {f}
              </button>
            ))}
          </motion.div>

          {/* Grade de projetos com efeito 3D */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {filtered.map((project) => (
              <motion.div
                key={project.title}
                layout
                variants={scaleIn}
                whileHover={{ rotateY: 8, rotateX: 5, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200 }}
                style={{ perspective: 1000 }}
                className="bg-background rounded-2xl p-8 shadow-sm border border-border hover:shadow-xl hover:border-primary/20 transition-shadow duration-300 cursor-pointer group"
              >
                <div className={`w-14 h-14 rounded-xl ${project.color} flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110`}>
                  <project.icon size={24} />
                </div>
                <h3 className="font-semibold text-lg mb-1">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.category}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
