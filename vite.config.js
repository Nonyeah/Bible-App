import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/// <reference types="vitest/config" />
export default defineConfig({
  plugins: [react()],
  base: "/Bible-App/",
   test: {
    globals: true,
    environment: "jsdom", 
  },
  setupFiles: "./src/setup.jsx"
})
