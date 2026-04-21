import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
    base: "/",
    plugins: [react(), tailwindcss()],
    server: {
        port: 3001,
        host: true,
        allowedHosts: ["simplysent.ngrok-free.dev"],
        proxy: {
            "/curate": "http://localhost:8080",
            "/create-checkout-session": "http://localhost:8080",
        },
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
});
