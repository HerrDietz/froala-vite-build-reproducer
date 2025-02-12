import {defineConfig} from 'vite';


/**
 * @type {import('vite').UserConfig}
 */
export default defineConfig({
  build: {
    lib: {
      entry: 'src/main.ts',
      name: 'reproducer',
      fileName: 'reproducer'
    }
  }
});
