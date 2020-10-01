<template>
	<view class="card">
		<!-- 基础卡片 -->
		<view class="card-list" v-if="mode === 'base'">
			<view class="card-image">
				<image src="../../static/image/follow-active.png" mode="aspectFit"></image>
			</view>
			<view class="card-content">
				<view class="card-content-des">
					<text>uni-app</text>
				</view>
				<view class="card-content-status">
					<text class="card-label">前端</text>
					<text class="card-look">120浏览</text>
				</view>
			</view>
		</view> 
		
		<!-- 多图卡片 -->
		<view class="card-list mode-column" v-if="mode === 'column'">
			<view class="card-content">
				<view class="card-content-des">
					<text>uni-appuni-appuni-appuni-appuni-appuni-appuni-appuni-appuni-appuni-appuni-appuni-appuni-appuni-appuni-appuni-appuni-appuni-appuni-appuni-appuni-appuni-app</text>
				</view>
				<view class="card-image">
					<view class="card-list-image" v-for="(item,index) in 3" :key="index">
						<image src="../../static/image/follow-active.png" mode="aspectFit"></image>
					</view>
				</view>
				<view class="card-content-status">
					<text class="card-label">前端</text>
					<text class="card-look">120浏览</text>
				</view>
			</view>
		</view>
		
		<!-- 大图模式 -->
		<view class="card-list mode-image" v-if="mode === 'image'">
			<view class="card-content">
				<view class="card-image">
					<image src="../../static/image/follow-active.png" mode="aspectFit"></image>
				</view>
				<view class="card-content-des">
					<text>uni-appuni-appuni-appuni-appuni-appuni-appuni-appuni-appuni-appuni-appuni-appuni-appuni-appuni-appuni-appuni-appuni-appuni-appuni-appuni-appuni-appuni-app</text>
				</view>
				<view class="card-content-status">
					<text class="card-label">前端</text>
					<text class="card-look">120浏览</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			mode: {
				type: String,
				default() {
					return 'base';
				}
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.card {
	.card-list {
		display: flex;
		padding: 10px;
		margin: 10px;
		border-radius: 5px;
		box-shadow: 0 0 5px 1px rgba($color: #000000, $alpha: 0.1);
		box-sizing: border-box;
		overflow: hidden;
		.card-image {
			width: 60px;
			height: 60px;
			overflow: hidden;
			image {
				width: 100%;
				height: 100%;
			}
		}
		.card-content {
			flex:1;
			font-size: 14px;
			margin-left: 10px;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			.card-content-des {
				color: #333;
				font-weight: 400;
				line-height: 1.2;
				text {
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
				}
			}
			.card-content-status {
				display: flex;
				justify-content: space-between;
				.card-label {
					color: $uni-base-select;
					padding: 0 5px;
					margin-rig: 5px;
					border-radius: 15px;
					border: 1px $uni-base-select solid;
				}
				.card-look {
					color:#999;
				}
			}
		}
	}
	.mode-column {
		.card-image {
			display: flex;
			margin: 10px 0;
			width: 100%;
			height: 70px;
			.card-list-image {
				width: 100%;
				height: 100%;
				overflow: hidden;
				border-radius: 5px;
				margin-left: 10px;
				&:first-child {
					margin-left: 0;
				}
				image {
					width: 100%;
					height: 100%;
				}
			}
		}
	}
	.mode-image {
		.card-content {
			margin-left: 0;
			.card-image {
				width: 100%;
				height: 100px;
				.card-content-des {
					margin: 10px 0;
				}
			}
			.card-content-des {
				margin: 10px 0;
			}
		}
	}
}
</style>
