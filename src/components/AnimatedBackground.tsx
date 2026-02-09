/**
 * Fundo animado com orbs flutuantes.
 * Renderiza círculos translúcidos que flutuam suavemente em loop infinito,
 * criando profundidade visual sem impactar a performance (apenas transforms).
 */
import { motion } from "framer-motion";

/** Propriedades de cada orb flutuante */
interface FloatingOrbProps {
  size: number;
  x: string;
  y: string;
  delay: number;
}

/** Orb individual com animação de flutuação contínua */
const FloatingOrb = ({ size, x, y, delay }: FloatingOrbProps) => (
  <motion.div
    className="absolute rounded-full bg-primary/5"
    style={{ width: size, height: size, left: x, top: y }}
    animate={{
      y: [0, -30, 0],
      x: [0, 15, 0],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration: 8,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

/** Composição de múltiplos orbs posicionados estrategicamente */
const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <FloatingOrb size={300} x="10%" y="20%" delay={0} />
      <FloatingOrb size={200} x="70%" y="10%" delay={2} />
      <FloatingOrb size={150} x="80%" y="60%" delay={4} />
      <FloatingOrb size={250} x="20%" y="70%" delay={1} />
      <FloatingOrb size={100} x="50%" y="40%" delay={3} />
    </div>
  );
};

export default AnimatedBackground;
