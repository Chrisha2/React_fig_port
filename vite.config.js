import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import  camelCase  from 'lodash/camelCase';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css : {
    modules:{
      localsconvention: camelCase,
    },
  },
})
