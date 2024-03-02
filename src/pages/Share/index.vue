<template>
	<view class="Share">
		<view class="content">
			<view class="title">
				{{List.title}}
			</view>
			<view class="founder">
				<view class="name">
					{{List.sourceName}}
				</view>
				<view class="time">
					{{List.Time}}
				</view>
			</view>
			<image class="Promotional" :src="List.backgroundImg"></image>
			<view class="label">
				<view class="num">
					1
				</view>
			</view>
			<view class="main">
				<p class="mainbody">
					{{List.main}}
				</p>
			</view>
			<view class="footer">
				<view class="btn" @click="show = true">
					<image src="../../static/Article/Reward.png" class="icon"></image>
					<view class="text">打赏</view>
				</view>
				<view class="btn" @click="SharingArticles()">
					<image src="../../static/Article/Share.png" class="icon"></image>
					<view class="text">分享</view>
				</view>
			</view>
			<view class="bar"></view>
		</view>
		<view>
			<u-popup :show="show" :closeOnClickOverlay="false" mode="center" @close="show = false" @open="show = true">
				<view class="Group">
					<view class="header">
						打赏
					</view>
					<view class="put">
						<u-input placeholder="请输入打赏金额" type="number" :focus="true" @clear="clear" border="surround" :clearable="true"
							v-model="money"></u-input>
					</view>
					<view class="btns">
						<view class="confirm" @click="RewardingArticles(money)">
							确认
						</view>
						<view class="cancellation" @click="cancellation">
							取消
						</view>
					</view>

				</view>
			</u-popup>
		</view>
	</view>
</template>

<script setup>
	import article from './component/article.js'
	import {
		createOrder
	} from "@/request/https.js"
	import {
		ref
	} from 'vue'
	import {
		onLoad
	} from '@dcloudio/uni-app'
	import tkBridge from '@/utils/tkBridge.js'

	const List = ref({})
	const show = ref(false)
	const money = ref('')

	onLoad(() => {
		List.value = article
		console.log(List.value)
	})

	const SharingArticles = () => {
		let Sharing = List.value
		tkBridge.UserSharing(Sharing.title, Sharing.desc, Sharing.snapIcon, Sharing.sourceName, Sharing.sourceIcon)
			.then((res) => {
				
			}).catch((err) => {
				uni.showToast({
					title: "分享失败" + err,
					icon: 'none'
				})
			})
	}

	const RewardingArticles = (money) => {
		show.value = false
		createOrder(money, 2002, "打赏").then((res) => {
			goDoPay(res.data.order_id, res.data.pay_call_back_url,money)
		}).catch((err) => {
			uni.showToast({
				title: "订单生成失败" + err,
				icon: 'none'
			})
		})
	}



	const goDoPay = (orderID, callbackUrl,money) => {
		let appID = "TeltlkOfficialAccountdgkTest"
		tkBridge.DoPay(appID, orderID, 2002, money, callbackUrl).then((res) => {
			clear()
			if (res.result > 0) {
				uni.showToast({
					title: "打赏成功",
					icon: 'none'
				})
			} else {
				uni.showToast({
					title: "打赏失败" + res.result,
					icon: 'none'
				})
			}
		}).catch((err) => {
			clear()
			uni.showToast({
				title: "打赏失败" + err,
				icon: 'none'
			})
		})
	}

	const clear = () => {
		money.value = ''
		show.value = false
	}
	
	const cancellation = () =>{
		money.value = ''
		show.value = false
	}
</script>

<style scoped lang="scss">
	.Share {
		width: 100vw;

		.content {
			width: 710rpx;
			margin: 30rpx 20rpx;

			.title {
				font-size: 50rpx;
				font-weight: 500;
			}

			.founder {
				width: 100%;
				display: flex;
				align-items: center;
				margin-top: 10rpx;

				.name {
					display: flex;
					align-items: center;
					color: #F39800;
					margin-right: 30rpx;
				}

				.time {
					color: #909399;
				}
			}

			.Promotional {
				width: 100%;
				border-radius: 20rpx;
				margin-top: 30rpx;
			}

			.label {
				width: 100%;
				display: flex;
				justify-content: center;

				.num {
					margin: 20rpx;
					padding: 10rpx 18rpx;
					background-color: #F39800;
					color: #FFFFFF;
					font-size: 36rpx;
					font-weight: 500;
					border-radius: 15rpx;
				}
			}

			.main {
				padding: 20rpx 40rpx;
				border: 2rpx solid #F39800;
				border-radius: 20rpx;
				margin-top: 20rpx;

				.mainbody {
					text-indent: 36px;
					line-height: 60rpx;
					font-weight: 500;
				}
			}

			.footer {
				margin: 100rpx 0;
				width: 100%;
				display: flex;
				justify-content: space-around;

				.btn {
					width: 120rpx;
					height: 120rpx;
					border: 2rpx solid #F39800;
					border-radius: 50%;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;

					.text {
						font-size: 26rpx;
						font-weight: 500;
					}

					.icon {
						width: 40rpx;
						height: 40rpx;
					}
				}

				.btn:active {
					background-color: #F9E9D0;
					color: #FFFFFF;
				}
			}

			.bar {
				width: 100%;
				height: 10rpx;
			}
		}
		.Group{
			width: 600rpx;
			height: 350rpx;
			display: flex;
			flex-direction: column;
			align-items: center;
			.header{
				margin: 20rpx 0;
				font-size: 36rpx;
				font-weight: 500;
			}
			.put{
				margin-top: 30rpx;
				width: 500rpx;
				height: 100rpx;
			}
			.btns{
				margin-top: 50rpx;
				width: 500rpx;
				display: flex;
				justify-content: space-between;
				.confirm{
					width: 150rpx;
					height: 50rpx;
					border-radius: 50rpx;
					background-color: #F39800;
					color: #FFFFFF;
					font-size: 26rpx;
					text-align: center;
					line-height: 50rpx;
				}
				.cancellation{
					width: 150rpx;
					height: 50rpx;
					border-radius: 50rpx;
					background-color: rgba(243,152,0,0.2);
					color: #F39800;
					font-size: 26rpx;
					text-align: center;
					line-height: 50rpx;
				}
			}
		}
	}
</style>