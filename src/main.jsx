import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import './global.css';

let rootElement = document.getElementById('root');

createRoot(rootElement).render(
        <StrictMode>
            <App></App>
        </StrictMode>
    )
