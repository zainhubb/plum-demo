import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import postcssNested from 'postcss-nested'  
// https://vitejs.dev/config/
export default defineConfig({
  base:'./',
  plugins: [vue({
  })],
  css:{
    postcss:{
      plugins:[
        postcssNested
      ]
    }
  },
  server:{
    host:'0.0.0.0'
  }
})
