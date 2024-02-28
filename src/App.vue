<script>
	import manifest from './manifest.json'
	import tkBridge from './utils/tkBridge.js'
	import md5 from './utils/md5.js'

	export default {
		onLaunch: function() {

		},
		onShow: async function() {
			let appID = "TeltlkOfficialAccountdgkTest"
			const nonce = new Date().getTime();
			let secretKey = "NvhTsh7rjladfdsfaAccountNTest"
			let user = await tkBridge.Authenticate(appID,JSON.stringify(nonce), md5.hex_md5(secretKey+nonce))
			if(user.result!=0){
				uni.setStorageSync("User", user)
				uni.setStorageSync("appID", appID)
			}else{
				tkBridge.CloseOfficial(appID)
			}
		},
		onHide: function() {
			console.log('App Hide');
		}
	}
</script>

<style lang="scss">
	/* 每个页面公共样式 */
	@import "uview-plus/index.scss";
</style>