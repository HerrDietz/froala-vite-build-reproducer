import {defineConfig} from 'vite';


/**
 * @type {import('vite').UserConfig}
 */
export default defineConfig({
  build: {
    lib: {
      entry: 'src/main.js',
      name: 'reproducer',
      fileName: 'reproducer'
    }
  }
});
