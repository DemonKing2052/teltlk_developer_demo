import {
	defineConfig
} from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
 
export default defineConfig({
	 alias: {
	    'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
	  },
	plugins: [
		uni()
	],
	// server: {
	// 	proxy: {
	// 		'/pi': {
	// 			target: 'https://dev.api.circle.teltlk.com/pi', // 目标服务  
	// 			changeOrigin: true,
	// 			rewrite: path => path.replace(/^\/pi/, ''),
	// 		}
	// 	}
	// }
})

