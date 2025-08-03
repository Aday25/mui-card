import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

const repoName = 'mui-card';

export default defineConfig({
  base: `/${repoName}/`, 
  plugins: [react()],
})