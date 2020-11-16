<template>
	<view class="detail">
		<view class="detail-title">
			我是个前端开发者，我到底要不要学习?
		</view>
		<view class="detail-author">
			<view class="author-left">
				<view class="author-left-img">
					<image src="../../static/image/follow-active.png"></image>
				</view>
				<view class="author-right-text">
					<view class="author-top">
						七个月
					</view>
					<view class="author-bottom">
						<text>2020年10月1日</text>
						<text>100浏览</text>
						<text>100收藏</text>
					</view>
				</view>
			</view>
			<view class="author-right">
				已关注
			</view>
		</view>
		<view class="detail-content">
			页面详情内容
		</view>
		<view class="detail-comment">
			<view class="detail-comment-left">
				<input type="text" placeholder="谈谈你的看法">
			</view>
			<view class="detail-comment-right">
				<view class="detail-bottom__icons-box">
					<uni-icons type="chat" size="22" color="#F07373"></uni-icons>
				</view>
				<view class="detail-bottom__icons-box">
					<uni-icons type="heart" size="22" color="#F07373"></uni-icons>
				</view>
				<view class="detail-bottom__icons-box">
					<uni-icons type="hand-thumbsup" size="22" color="#F07373"></uni-icons>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>
<style lang="scss">
page {
	height: 100%;
}
.detail {
	display: flex;
	flex-direction: column;
	padding: 10px 10px 0 10px;
	.detail-title {
		font-size: 18px;
		font-weight: bold;
		color: #333;
	}
	.detail-author {
		display: flex;
		align-items: center;
		justify-content: space-between;
		.author-left {
			display: flex;
			align-items: center;
			margin-top: 10px;
			padding: 10px 0;
			.author-left-img {
				flex-shrink: 0;
				width: 40px;
				height: 40px;
				border-radius: 50%;
				overflow: hidden;
				
				image {
					width: 100%;
					height: 100%;
				}
			}
			.author-right-text {
				margin-left: 10px;
				.author-top {
					font-size: 14px;
					color: #333;
				}
				.author-bottom {
					font-size: 12px;
					color: #999;
					text {
						margin-left: 10px;
					}
				}
			}
		}
		.author-right {
			line-height: 30px;
			padding: 0 10px;
			border-radius: 5px;
			height: 30px;
			font-size: 12px;
			color: #fff;
			background-color: $uni-base-select;
		}
	}
	.detail-content {
		flex: 1;
		overflow-x: hidden;
		overflow-y: auto;
	}
	.detail-comment {
		position: fixed;
		bottom: 0;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		height: 44px;
		border-top: 1px #f5f5f5 solid;
		background-color: #fff;
		box-sizing: border-box;
		.detail-comment-left {
			input {
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-left: 10px;
				padding: 0 10px;
				width: 100%;
				height: 30px;
				border: 1px #ddd solid;
				border-radius: 5px;
			}
		}
		.detail-comment-right {
			display: flex;
			flex-shrink: 0;
			padding: 0 10px;
			text {
				position: relative;
				display: flex;
				align-items: center;
				justify-content: center;
				width: 44px;
			}
		}
	}
}
</style>