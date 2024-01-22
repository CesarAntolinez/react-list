import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

const projectRootDir = resolve(__dirname);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  baseUrl: '.',
  resolve: {
    alias: [
      { find: '@', replacement: resolve(projectRootDir, 'src') },
      { find: '@assets', replacement: resolve(projectRootDir, 'src/assets') },
    ]
  }
})
