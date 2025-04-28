<template>
	<view class="home-container">
		<!-- 顶部状态栏 -->
		<view class="status-bar">
			<view class="user-info" @tap="goToUserProfile">
				<image class="avatar" src="/static/avatar.png"></image>
				<text class="welcome">你好，{{username}}</text>
			</view>
			<view class="notification" @tap="goToNotification">
				<text class="iconfont">消息</text>
				<view class="badge" v-if="notificationCount > 0">{{notificationCount}}</view>
			</view>
		</view>
		
		
		<!-- 功能导航 -->
		<view class="nav-grid">
			<view class="nav-item" v-for="(item, index) in navList" :key="index" @tap="navigateTo(item.url)">
				<view class="nav-icon" :style="{background: `linear-gradient(135deg, ${item.bgColor} 0%, ${item.bgColor}99 100%)`}">
					<text class="iconfont">{{item.icon}}</text>
				</view>
				<text class="nav-text">{{item.name}}</text>
			</view>
		</view>
		
		<!-- 内容区域 -->
		<view class="content-section">
			<view class="section-header">
				<text class="section-title">推荐内容</text>
				<text class="more-link" @tap="navigateTo('/pages/more/more')">更多</text>
			</view>
			
			<view class="content-list">
				<view class="content-item" v-for="(item, index) in contentList" :key="index" @tap="viewContent(item)">
					<image class="content-image" :src="item.image" mode="aspectFill"></image>
					<view class="content-info">
						<text class="content-title">{{item.title}}</text>
						<text class="content-desc">{{item.description}}</text>
						<view class="content-meta">
							<text class="meta-text">{{item.views}} 浏览</text>
							<text class="meta-text">{{item.likes}} 点赞</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				username: 'admin',
				notificationCount: 3,
				bannerList: [
					{
						id: 1,
						image: '/static/banner1.jpg',
						url: '/pages/detail/detail?id=1'
					},
					{
						id: 2,
						image: '/static/banner2.jpg',
						url: '/pages/detail/detail?id=2'
					},
					{
						id: 3,
						image: '/static/banner3.jpg',
						url: '/pages/detail/detail?id=3'
					}
				],
				navList: [
					{
						name: '扫一扫',
						icon: '扫码',
						url: '/pages/scan/scan',
						bgColor: '#007AFF'
					},
					{
						name: '日报表',
						icon: '订单',
						url: '/pages/order/order',
						bgColor: '#FF9500'
					},
					{
						name: '我的收藏',
						icon: '收藏',
						url: '/pages/favorite/favorite',
						bgColor: '#FF2D55'
					},
					{
						name: '个人中心',
						icon: '我的',
						url: '/pages/profile/profile',
						bgColor: '#4CD964'
					}
				],
				contentList: [
					{
						id: 1,
						title: '如何提高工作效率',
						description: '这篇文章将介绍几种提高日常工作效率的方法...',
						image: '/static/content1.jpg',
						views: 1234,
						likes: 88
					},
					{
						id: 2,
						title: '健康饮食指南',
						description: '均衡的饮食对身体健康至关重要，本文将为您介绍...',
						image: '/static/content2.jpg',
						views: 986,
						likes: 76
					},
					{
						id: 3,
						title: '旅游攻略：春季出行',
						description: '春季是出行的好时节，这里有几个值得推荐的目的地...',
						image: '/static/content3.jpg',
						views: 1567,
						likes: 120
					}
				]
			}
		},
		onLoad() {
			// 页面加载时获取用户信息
			this.getUserInfo();
			// 获取通知数量
			this.getNotificationCount();
			// 获取轮播图数据
			this.getBannerList();
			// 获取推荐内容
			this.getContentList();
		},
		methods: {
			// 获取用户信息
			getUserInfo() {
				// 这里可以从缓存或API获取用户信息
				const userInfo = uni.getStorageSync('userInfo');
				if (userInfo) {
					this.username = userInfo.username || 'admin';
				}
			},
			
			// 获取通知数量
			getNotificationCount() {
				// 这里可以从API获取未读通知数量
				// 模拟API请求
				setTimeout(() => {
					this.notificationCount = Math.floor(Math.random() * 5);
				}, 1000);
			},
			
			// 获取轮播图数据
			getBannerList() {
				// 这里可以从API获取轮播图数据
				// 当前使用的是模拟数据
			},
			
			// 获取推荐内容
			getContentList() {
				// 这里可以从API获取推荐内容
				// 当前使用的是模拟数据
			},
			
			// 处理轮播图点击
			handleBannerClick(item) {
				uni.navigateTo({
					url: item.url
				});
			},
			
			// 页面导航
			navigateTo(url) {
				console.log('正在跳转到:', url);
				// 对于扫码页面，直接使用uni.scanCode或跳转
				if (url === '/pages/scan/scan') {
					// 直接跳转到扫码页面，系统会自动处理权限
					uni.navigateTo({
						url: url,
						fail: (err) => {
							console.error('跳转失败:', err);
							uni.showToast({
								title: '页面跳转失败',
								icon: 'none'
							});
						}
					});
				} else {
					// 其他页面正常跳转
					uni.navigateTo({
						url: url,
						fail: (err) => {
							console.error('跳转失败:', err);
							uni.showToast({
								title: '页面跳转失败',
								icon: 'none'
							});
						}
					});
				}
			},
			
			// 查看内容详情
			viewContent(item) {
				uni.navigateTo({
					url: `/pages/content/content?id=${item.id}`
				});
			},
			
			// 跳转到用户资料页
			goToUserProfile() {
				uni.navigateTo({
					url: '/pages/profile/profile'
				});
			},
			
			// 跳转到通知页面
			goToNotification() {
				uni.navigateTo({
					url: '/pages/notification/notification'
				});
			}
		}
	}
</script>

<style>
	.home-container {
		min-height: 100vh;
		background-color: #f8f8f8;
	}
	
	/* 顶部状态栏 */
	.status-bar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20rpx 30rpx;
		background-color: #ffffff;
	}
	
	.user-info {
		display: flex;
		align-items: center;
	}
	
	.avatar {
		width: 60rpx;
		height: 60rpx;
		border-radius: 50%;
		margin-right: 15rpx;
	}
	
	.welcome {
		font-size: 28rpx;
		color: #333;
	}
	
	.notification {
		position: relative;
	}
	
	.badge {
		position: absolute;
		top: -10rpx;
		right: -10rpx;
		background-color: #FF3B30;
		color: #fff;
		font-size: 20rpx;
		min-width: 30rpx;
		height: 30rpx;
		border-radius: 15rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0 6rpx;
	}
	
	/* 轮播图 */
	.banner {
		width: 100%;
		height: 300rpx;
	}
	
	.banner-image {
		width: 100%;
		height: 100%;
	}
	
	/* 功能导航 */
	.nav-grid {
		display: flex;
		flex-wrap: wrap;
		padding: 30rpx 15rpx;
		background-color: #ffffff;
		margin: 20rpx;
		border-radius: 16rpx;
		box-shadow: 0 4rpx 16rpx rgba(0, 0, 0, 0.05);
	}
	
	.nav-item {
		width: 25%;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 20rpx 0;
		transition: transform 0.2s;
	}
	
	.nav-item:active {
		transform: scale(0.95);
	}
	
	.nav-icon {
		width: 110rpx;
		height: 110rpx;
		border-radius: 22rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 16rpx;
		box-shadow: 0 6rpx 12rpx rgba(0, 0, 0, 0.1);
		position: relative;
		overflow: hidden;
	}
	
	.nav-icon::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(255, 255, 255, 0.1);
		border-radius: 22rpx;
	}
	
	.nav-text {
		font-size: 26rpx;
		color: #333;
		font-weight: 500;
	}
	
	.iconfont {
		font-size: 40rpx;
		color: #ffffff;
		font-weight: bold;
	}
	
	/* 内容区域 */
	.content-section {
		margin: 20rpx;
		background-color: #ffffff;
		border-radius: 12rpx;
		padding: 20rpx;
	}
	
	.section-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 20rpx;
	}
	
	.section-title {
		font-size: 32rpx;
		font-weight: bold;
		color: #333;
	}
	
	.more-link {
		font-size: 24rpx;
		color: #007AFF;
	}
	
	.content-list {
		
	}
	
	.content-item {
		display: flex;
		padding: 20rpx 0;
		border-bottom: 1rpx solid #f0f0f0;
	}
	
	.content-item:last-child {
		border-bottom: none;
	}
	
	.content-image {
		width: 200rpx;
		height: 150rpx;
		border-radius: 8rpx;
		margin-right: 20rpx;
	}
	
	.content-info {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	
	.content-title {
		font-size: 28rpx;
		font-weight: bold;
		color: #333;
		margin-bottom: 10rpx;
	}
	
	.content-desc {
		font-size: 24rpx;
		color: #666;
		margin-bottom: 10rpx;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}
	
	.content-meta {
		display: flex;
	}
	
	.meta-text {
		font-size: 22rpx;
		color: #999;
		margin-right: 20rpx;
	}
</style>