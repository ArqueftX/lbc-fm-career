import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Si ton repo s'appelle "lbc-fm-career", laisse './'
// Si différent, remplace './' par '/nom-du-repo/'
export default defineConfig({
  plugins: [react()],
  base: './',
})
