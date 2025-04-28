<template>
	<view class="scan-container">
		<view class="header">
			<text class="title">扫一扫</text>
		</view>
		
		<view class="scan-btn-container" v-if="!scanResult">
			<button class="scan-btn" @tap="startScan">开始扫码</button>
		</view>
		
		<view class="result-container" v-if="scanResult">
			<view class="result-title">扫描结果</view>
			<view class="result-content">{{scanResult}}</view>
			<button class="scan-again-btn" @tap="resetScan">再次扫描</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scanResult: '' // 扫描结果
			}
		},
		methods: {
			// 开始扫描
			startScan() {
				uni.scanCode({
					scanType: ['qrCode', 'barCode', 'datamatrix', 'pdf417'],
					success: (res) => {
						this.scanResult = res.result;
						uni.vibrateLong(); // 震动提示
					},
					fail: (err) => {
						console.error('扫码失败：', err);
						uni.showToast({
							title: '扫码失败',
							icon: 'none'
						});
					}
				});
			},
			
			// 重置扫描
			resetScan() {
				this.scanResult = '';
			}
		}
	}
</script>

<style>
	.scan-container {
		padding: 40rpx;
		min-height: 100vh;
		background-color: #f8f8f8;
	}
	
	.header {
		text-align: center;
		margin-bottom: 60rpx;
		padding-top: 40rpx;
	}
	
	.title {
		font-size: 36rpx;
		font-weight: bold;
		color: #333;
	}
	
	.scan-btn-container {
		display: flex;
		justify-content: center;
		margin-top: 100rpx;
	}
	
	.scan-btn {
		width: 80%;
		height: 90rpx;
		background-color: #07C160;
		color: #fff;
		border-radius: 45rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.result-container {
		margin-top: 60rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	
	.result-title {
		font-size: 36rpx;
		font-weight: bold;
		margin-bottom: 40rpx;
	}
	
	.result-content {
		width: 100%;
		background-color: #fff;
		padding: 30rpx;
		border-radius: 8rpx;
		margin-bottom: 60rpx;
		word-break: break-all;
		font-size: 28rpx;
		box-shadow: 0 2rpx 10rpx rgba(0, 0, 0, 0.1);
	}
	
	.scan-again-btn {
		width: 80%;
		height: 90rpx;
		background-color: #07C160;
		color: #fff;
		border-radius: 45rpx;
	}
</style>