<template>
	<view class="login-container">
		<view class="logo-area">
			<!-- <image class="logo" src="/static/logo.png" mode="aspectFit"></image> -->
			<text class="title">欢迎登录</text>
		</view>
		
		<view class="form-area">
			<view class="input-group">
				<text class="input-label">用户名</text>
				<input class="input" type="text" v-model="loginForm.username" placeholder="请输入用户名" />
			</view>
			
			<view class="input-group">
				<text class="input-label">密码</text>
				<input class="input" type="password" v-model="loginForm.password" placeholder="请输入密码" />
			</view>
			
			
			
			<button class="login-btn" @tap="handleLogin">登录</button>
			
			
		</view>
		
		<view class="other-login">
			<view class="divider">
				<view class="line"></view>
				<text class="divider-text">其他登录方式</text>
				<view class="line"></view>
			</view>
			
			<view class="icon-row">
				<view class="icon-item" @tap="otherLogin('wechat')">
					<text class="iconfont">微信</text>
				</view>
				<view class="icon-item" @tap="otherLogin('qq')">
					<text class="iconfont">QQ</text>
				</view>
				<view class="icon-item" @tap="otherLogin('weibo')">
					<text class="iconfont">微博</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				loginForm: {
					username: 'admin',
					password: '123456'
				},
				rememberMe: false
			}
		},
		onLoad() {
			// 页面加载时的逻辑
		},
		methods: {
			// 处理登录
			handleLogin() {
				if (!this.loginForm.username) {
					uni.showToast({
						title: '请输入用户名',
						icon: 'none'
					});
					return;
				}
				if (!this.loginForm.password) {
					uni.showToast({
						title: '请输入密码',
						icon: 'none'
					});
					return;
				}
				
				// 这里添加登录逻辑
				console.log('登录信息:', this.loginForm);
				uni.showLoading({
					title: '登录中...'
				});
				
				// 模拟登录请求
				setTimeout(() => {
					uni.hideLoading();
					uni.showToast({
						title: '登录成功',
						icon: 'success',
						duration: 1500,
						success: () => {
							// 登录成功后跳转到home页面
							setTimeout(() => {
								uni.navigateTo({
									url: '/pages/home/home'
								});
							}, 1500);
						}
					});
				}, 1500);
			},
			
			// 忘记密码
			forgotPassword() {
				uni.showToast({
					title: '忘记密码功能开发中',
					icon: 'none'
				});
			},
			
			// 跳转到注册页面
			goToRegister() {
				uni.showToast({
					title: '注册功能开发中',
					icon: 'none'
				});
				// 实际开发中可以跳转到注册页面
				// uni.navigateTo({
				//     url: '/pages/register/register'
				// });
			},
			
			// 第三方登录
			otherLogin(type) {
				uni.showToast({
					title: `${type}登录功能开发中`,
					icon: 'none'
				});
			}
		}
	}
</script>

<style>
	.login-container {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		padding: 40rpx;
		background-color: #f8f8f8;
	}
	
	.logo-area {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 80rpx;
		margin-bottom: 60rpx;
	}
	
	.logo {
		width: 160rpx;
		height: 160rpx;
		margin-bottom: 20rpx;
	}
	
	.title {
		font-size: 36rpx;
		font-weight: bold;
		color: #333;
	}
	
	.form-area {
		background-color: #fff;
		border-radius: 16rpx;
		padding: 40rpx 30rpx;
		box-shadow: 0 4rpx 20rpx rgba(0, 0, 0, 0.05);
		margin-bottom: 40rpx;
	}
	
	.input-group {
		margin-bottom: 30rpx;
	}
	
	.input-label {
		font-size: 28rpx;
		color: #333;
		margin-bottom: 10rpx;
		display: block;
	}
	
	.input {
		width: 90%;
		height: 90rpx;
		background-color: #f5f5f5;
		border-radius: 8rpx;
		padding: 0 20rpx;
		font-size: 28rpx;
		color: #333;
	}
	
	.options-row {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 40rpx;
	}
	
	.remember-box {
		display: flex;
		align-items: center;
	}
	
	.remember-text {
		font-size: 24rpx;
		color: #666;
	}
	
	.forgot-text {
		font-size: 24rpx;
		color: #007AFF;
	}
	
	.login-btn {
		width: 100%;
		height: 90rpx;
		background-color: #007AFF;
		color: #fff;
		border-radius: 45rpx;
		font-size: 32rpx;
		font-weight: bold;
		margin-top: 40px;
		margin-bottom: 30rpx;
	}
	
	.register-row {
		display: flex;
		justify-content: center;
		font-size: 26rpx;
		color: #666;
	}
	
	.register-link {
		color: #007AFF;
		margin-left: 10rpx;
	}
	
	.other-login {
		margin-top: 60rpx;
	}
	
	.divider {
		display: flex;
		align-items: center;
		margin-bottom: 40rpx;
	}
	
	.line {
		flex: 1;
		height: 1rpx;
		background-color: #ddd;
	}
	
	.divider-text {
		padding: 0 20rpx;
		font-size: 24rpx;
		color: #999;
	}
	
	.icon-row {
		display: flex;
		justify-content: center;
	}
	
	.icon-item {
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
		background-color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 30rpx;
		box-shadow: 0 2rpx 10rpx rgba(0, 0, 0, 0.1);
	}
	
	.iconfont {
		font-size: 26rpx;
		color: #666;
	}
</style>
