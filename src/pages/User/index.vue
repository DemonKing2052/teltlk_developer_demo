<template>
	<view class="setup">
		<view class="infoList">
			<view class="content">
				<view class="text">头像</view>
				<u-avatar :src="userInfo.faceURL" size="80rpx"
					default-url="../../static/User/defultUser.png"></u-avatar>
			</view>
			<view class="content">
				<view class="text">昵称</view>
				<view class="information">{{userInfo.nickname}}</view>
			</view>
			<view class="content">
				<view class="text">手机号</view>
				<view class="information">{{userInfo.phoneNumber}}</view>
			</view>
			<view class="content" style="border: none;">
				<view class="text">会员等级</view>
				<view class="information">{{upgrade}}</view>
			</view>
		</view>
		<!-- <view class="leveUp" @click="generateOrder">会员升级</view> -->
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	import {
		onLoad,
		onShow
	} from '@dcloudio/uni-app'
	import user from './component/user.js'
	import TeltlkModule from '@/utils/TeltlkModule.js'
	import {
		createOrder
	} from "@/request/https.js"

	const userInfo = ref()
	const upgrade = ref('普通用户')

	onLoad(() => {
		userInfo.value = uni.getStorageSync("User")
		if (userInfo.value == "") {
			userInfo.value = user
		}
	})
	
	// const generateOrder = () => {
	// 	createOrder("1", 2002, "会员升级").then((res) => {
	// 		goDoPay(res.data.order_id, res.data.pay_call_back_url)
	// 	}).catch((err) => {
	// 		uni.showToast({
	// 			title: "订单生成失败" + err,
	// 			icon: 'none'
	// 		})
	// 	})
	// }

	
	// const goDoPay = (orderID, callbackUrl) => {
	// 	let appID = "TeltlkOfficialAccountdgkTest"
	// 	TeltlkModule.DoPay(appID, orderID, 2002,"1", callbackUrl).then((res) => {
	// 		if (res.result > 0) {
	// 			uni.showToast({
	// 				title: "升级会员成功",
	// 				icon: 'none'
	// 			})
	// 			upgrade.value = "会员用户"
	// 		}else{
	// 			uni.showToast({
	// 				title: "订单支付失败" + res.result,
	// 				icon: 'none'
	// 			})
	// 		}
	// 	}).catch((err) => {
	// 		uni.showToast({
	// 			title: "订单支付失败" + err,
	// 			icon: 'none'
	// 		})
	// 	})
	// }
</script>

<style scoped lang="scss">
	.setup {
		height: 100vh;
		width: 100vw;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #F5F6F7;

		.infoList {
			border-radius: 20rpx;
			background-color: #FFF;
			margin-top: 24rpx;

			.content {
				width: 614rpx;
				padding: 40rpx 0;
				margin: 0 40rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				border-bottom: 1rpx solid #F5F6F7;

				.text {
					font-size: 28rpx;
					color: #303133;
				}

				.information {
					font-size: 28rpx;
					color: #909399;
				}

				.copy {
					font-size: 28rpx;
					color: #5794F7;
					margin-left: 24rpx;
					text-decoration: underline;
				}

				.copy:active {
					color: blue;
				}
			}
		}

		.infoList:active {
			background-color: #F5F6F7;
		}

		.Logout {
			margin-top: 50rpx;
			width: 614rpx;
			height: 80rpx;
			background-color: #F39800;
			border-radius: 50rpx;
			text-align: center;
			line-height: 80rpx;
			color: #fff;
		}

		.totest {
			margin-top: 20rpx;
			width: 614rpx;
			height: 80rpx;
			background-color: #F39800;
			border-radius: 50rpx;
			text-align: center;
			line-height: 80rpx;
			color: #fff;
		}

		.leveUp {
			width: 200rpx;
			height: 80rpx;
			border-radius: 80rpx;
			text-align: center;
			line-height: 80rpx;
			margin-top: 20rpx;
			background-color: #ccc;
		}
	}
</style>