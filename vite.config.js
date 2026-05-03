import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  root: '.',
  publicDir: false,

  plugins: [
    // Copy imag/ folder to dist/imag/ during production build
    viteStaticCopy({
      targets: [
        { src: 'imag', dest: '.' },
        { src: 'footer.html', dest: '.' },
        { src: 'accessibility.js', dest: '.' },
        { src: 'accessibility.css', dest: '.' }
      ]
    })
  ],

  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main:     'index.html',
        login:    'login.html',
        register: 'register.html',
        profile:  'profile.html',
        order:    'formularz_zamowienia_pizza.html',
        privacy:  'polityka-prywatnosci.html',
        terms:    'regulamin.html',
      }
    }
  },

  server: {
    port: 5173,
    open: true
  }
})
