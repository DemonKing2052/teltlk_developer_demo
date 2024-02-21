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
	 define: {
		 __VUE_I18N_FULL_INSTALL__: true,
		  __VUE_I18N_LEGACY_API__: true, 
		  __INTLIFY_PROD_DEVTOOLS__: false,
		  }
})

