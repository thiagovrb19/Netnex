/**
 * Seção hero (topo) da landing page.
 * Exibe logo com efeito de brilho metálico, título com revelação
 * letra a letra escalonada e botão CTA com animação de brilho.
 */
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AnimatedBackground from "./AnimatedBackground";
import { staggerContainer, fadeInUp } from "@/lib/animations";

/** Texto principal do hero, animado palavra por palavra */
const heading = "Transformamos ideias em crescimento real";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grain">
      <AnimatedBackground />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 container mx-auto px-6 text-center"
      >
        {/* Logo central com brilho metálico */}
        <motion.div variants={fadeInUp} className="mb-10 flex justify-center">
          <div className="relative inline-block">
            <img
              src="https://i.imgur.com/SczzMA8.png"
              alt="Netnex"
              className="h-24 md:h-32 w-auto"
            />
            <div className="absolute inset-0 metallic-shine rounded-lg" />
          </div>
        </motion.div>

        {/* Título com revelação escalonada letra a letra */}
        <motion.h1
          variants={fadeInUp}
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6"
        >
          {heading.split(" ").map((word, wi) => (
            <span key={wi} className="inline-block mr-3">
              {word.split("").map((letter, li) => (
                <motion.span
                  key={`${wi}-${li}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.5 + wi * 0.15 + li * 0.03,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={wi >= 3 ? "text-gradient" : "text-foreground"}
                >
                  {letter}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          custom={2}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-light"
        >
          Agência de marketing digital focada em resultados que transformam o seu negócio.
        </motion.p>

        {/* Botão de chamada para ação */}
        <motion.div variants={fadeInUp} custom={3}>
          <a
            href="#contato"
            className="group relative inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg overflow-hidden transition-transform hover:scale-105"
          >
            <span className="relative z-10">Solicitar Orçamento</span>
            <ArrowRight className="relative z-10 transition-transform group-hover:translate-x-1" size={20} />
            <div className="absolute inset-0 metallic-shine" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
