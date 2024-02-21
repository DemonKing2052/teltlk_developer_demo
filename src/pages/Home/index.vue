<template>
	<view class="home">
		<view class="infolist" v-for="(item,index) in List">
			<image class="logo" src="@/static/Home/LOGO.png"></image>
			<view class="right">
				<view class="item">
					名称：{{item.name}}
				</view>
				<view class="item">
					创建人：{{item.founder}}
				</view>
				<view class="item">
					群号：{{item.GroupID}}
				</view>
			</view>
			<view class="btns">
				<view class="btn" @click="GroupMember(item.GroupID,item.openID)">
					加入群聊
				</view>
				<view class="btn" @click="ContactUsers(item.openID)">
					联系用户
				</view>
			</view>
		</view>
		<view class="newly" @click="newlyAdded">
			新增测试
		</view>
		<view>
			<u-popup :show="show" :closeOnClickOverlay="false" mode="center" @close="show = false" @open="show = true">
				<view class="Group">
					<view class="header">
						新增测试
					</view>
					<view class="put">
						<u-input placeholder="请输入群名称" @clear="clear" border="surround" :clearable="true" v-model="groupName"></u-input>
					</view>
					<view class="btns">
						<view class="confirm" @click="nweGroup(groupName)">
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
	import infor from './component/infor.js'
	import TeltlkModule from '@/utils/TeltlkModule.js'
	import {
		ref
	} from 'vue'
	import {
		onLoad
	} from '@dcloudio/uni-app'

	const show = ref(false)

	const List = ref()

	const groupName = ref('')

	onLoad(() => {
		List.value = infor
		console.log(List.value)
	})
	
	
	const GroupMember = (groupID,OpenID) =>{
		TeltlkModule.IsGroupMember(groupID,OpenID).then((res)=>{
			Joingroup(groupID)
		}).catch((err)=>{
			uni.showToast({
				title: "验证是否加入群聊失败"+err,
				icon: 'none'
			})
		})
	}

	const Joingroup = (GroupID) => {
		console.log(GroupID)
		TeltlkModule.JoinGroup(GroupID).then((res) => {
			console.log("加入群聊成功")
		}).catch((err) => {
			uni.showToast({
				title: "加群调用失败"+err,
				icon: 'none'
			})
		})
	}
	
	const ContactUsers = (openID) => {
		console.log(openID)
		TeltlkModule.AddFriend(openID).then((res) => {
			console.log("添加好友调用成功")
		}).catch((err) => {
			uni.showToast({
				title: "添加好友调用失败"+err,
				icon: 'none'
			})
		})
	}

	const nweGroup = (groupName) => {
		uni.showLoading({ title: '新增群聊中',mask:true});
		show.value = false
		let user = uni.getStorageSync("User")
		TeltlkModule.CreateGroup(groupName, user.openID).then((res) => {
			let group = {
				name:res.groupName,
				GroupID:res.groupID,
				founder:user.nickname,
				openID:user.openID
			}
			List.value = List.value.concat(group);
			clear()
		}).catch((err) => {
			uni.hideLoading();
			if(groupName==''){
				uni.showToast({
					title: "群名不能为空",
					icon: 'none'
				})
			}else{
				clear()
				uni.showToast({
					title: "新增群聊失败"+err,
					icon: 'none'
				})
			}
			
		})
	}
	
	const cancellation = () =>{
		groupName.value = ''
		show.value = false
	}
	
	const clear = () =>{
		uni.hideLoading();
		groupName.value = ''
	}

	const newlyAdded = () => {
		show.value = true
	}
</script>

<style scoped lang="scss">
	.home {
		width: 100vw;
		display: flex;
		flex-direction: column;
		align-items: center;

		.infolist {
			width: 720rpx;
			height: 200rpx;
			background-color: bisque;
			margin-top: 20rpx;
			border-radius: 20rpx;
			display: flex;
			align-items: center;

			.logo {
				width: 120rpx;
				height: 120rpx;
				margin: 0 20rpx;
			}

			.right {
				width: 350rpx;
				margin-right: 20rpx;

				.item {
					width: 350rpx;
					white-space: nowrap;
					/* 防止文字换行 */
					overflow: hidden;
					/* 隐藏超出部分 */
					text-overflow: ellipsis;
					/* 可选，添加省略号以指示被截断的文本 */
				}

			}

			.btns {
				height: 120rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;

				.btn {
					width: 150rpx;
					height: 50rpx;
					background-color: #ccc;
					border-radius: 20rpx;
					font-size: 24rpx;
					font-weight: 500;
					text-align: center;
					line-height: 50rpx;
				}
			}
		}

		.newly {
			position: fixed;
			bottom: 20rpx;
			width: 200rpx;
			height: 80rpx;
			border-radius: 80rpx;
			text-align: center;
			line-height: 80rpx;
			background-color: #ccc;
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