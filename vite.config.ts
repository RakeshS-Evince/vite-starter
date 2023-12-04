import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteTsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  // depending on your application, base can also be "/"
  base: '',
  plugins: [react(), viteTsconfigPaths()],
  server: {
    hmr: { overlay: false },
    // this ensures that the browser opens upon server start
    open: true,
    // this sets a default port to 3000 //replaced to match CI/CD port 1505  
    port: 1505,
  },
})