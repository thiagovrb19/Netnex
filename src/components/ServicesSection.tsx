/**
 * Seção de serviços oferecidos pela Netnex.
 * Lista minimalista com ícones de check, animação de entrada escalonada
 * e efeito de underline expansivo no hover de cada item.
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

/** Catálogo de serviços da agência */
const services = [
  {
    title: "Gestão de Redes Sociais",
    description: "Criação de conteúdo estratégico e gerenciamento completo das suas redes sociais.",
  },
  {
    title: "Tráfego Pago",
    description: "Campanhas otimizadas no Google Ads e Meta Ads para maximizar seu ROI.",
  },
  {
    title: "Criação de Sites",
    description: "Desenvolvimento de sites modernos, responsivos e otimizados para conversão.",
  },
  {
    title: "Identidade Visual",
    description: "Design de marca profissional que comunica os valores do seu negócio.",
  },
  {
    title: "Produção de Vídeos",
    description: "Vídeos criativos e envolventes para engajar seu público.",
  },
  {
    title: "SEO & Otimização",
    description: "Estratégias para posicionar seu site nas primeiras páginas do Google.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="servicos" className="py-24 md:py-32 grain" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-5xl font-bold text-center mb-4"
          >
            Nossos <span className="text-gradient">Serviços</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            custom={1}
            className="text-muted-foreground text-center max-w-xl mx-auto mb-16"
          >
            Soluções completas para impulsionar a presença digital da sua marca.
          </motion.p>

          <div className="max-w-3xl mx-auto space-y-1">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                custom={i + 2}
                className="group flex items-start gap-4 p-5 rounded-xl transition-all duration-300 hover:bg-secondary hover:scale-[1.02] cursor-default"
              >
                <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check size={14} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                    <span className="block h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full mt-0.5" />
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
