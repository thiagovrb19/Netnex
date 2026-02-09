/**
 * Ponto de entrada da aplicação Netnex.
 * Renderiza o componente raiz no elemento #root do DOM.
 */
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
