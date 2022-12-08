import {defineConfig} from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        about: './about.html',
        // ...
        // List all files you want in your build
      }
    }
  }
})
/*import {defineConfig} from 'vite'


export default defineConfig({
	plugins: []	
})*/
