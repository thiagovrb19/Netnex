/**
 * Utilitários gerais da aplicação.
 * cn() combina classes do Tailwind de forma segura, resolvendo conflitos.
 */
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
