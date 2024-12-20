import { resolve } from 'path';
import { defineConfig } from 'vite';
import tailwindcss from 'tailwindcss';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        postDetail: resolve(__dirname, 'post-detail.html'),
        addEditPost: resolve(__dirname, 'add-edit-post.html'),
      },
    },
  },
  css: {
    preprocessorOptions: {
      css: {
        additionalData: '@tailwind base;\n@tailwind components;\n@tailwind utilities;',
      },
    },
  },
});
