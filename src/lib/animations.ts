/**
 * Variantes de animação reutilizáveis do Framer Motion.
 *
 * Todas as animações utilizam apenas propriedades de transform e opacity
 * para manter a performance em 60fps. São ativadas via scroll (useInView).
 */
import { Variants } from "framer-motion";

/** Aparece de baixo para cima com fade. Aceita índice customizado para atraso escalonado. */
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

/** Container que revela filhos de forma escalonada (stagger). */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

/** Aparece com zoom-in suave partindo de 80% do tamanho original. */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

/** Desliza da esquerda para a posição original com fade. */
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};
