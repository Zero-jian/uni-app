<template>
	<view class="home-label">
		<view class="home-label-edit">
			<view class="label-title">
				<text class="label-my">我的标签</text>
				<text class="label-edit">编辑</text>
			</view>
			<view class="label-manage">
				<view class="label-manage-detail" v-for="(item,index) in 10">
					<view class="label-manage-text">标签{{index}}</view>
					<view class="label-manage-cancel">
						<uni-icons class="label-icon" type="clear" size="14" color="red"></uni-icons>
					</view>
				</view>
			</view>
		</view>
		<view class="home-label-commend">
			<view class="label-manage-text" v-for="(item,index) in 10">标签{{index}}</view>
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
	background: #f5f5f5;
}
.home-label {
	.home-label-edit {
		background: #fff;
		padding: 0 10px;
		.label-title {
			height: 30px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 14px;
			.label-my {
				color: #666;
			}
			.label-edit {
				color: $uni-color-success;
			}
		}
		.label-manage {
			display: flex;
			margin-top: 10px;
			flex-wrap: wrap;
			.label-manage-detail {
				border: 1px solid #666;
				color: #666;
				padding: 3px 5px;
				border-radius: 5px;
				position: relative;
				font-size: 12px;
				margin: 0 10px 10px 0;
				.label-manage-cancel {
					position: absolute;
					top: -8px;
					right: -8px;
					.label-icon {
						z-index: 99
					}
				}
			}
		}
	}
	.home-label-commend {
		background: #fff;
		margin-top: 10px;
		display: flex;
		flex-wrap: wrap;
		padding: 10px 0 0 10px;
		.label-manage-text {
			border: 1px solid #666;
			color: #666;
			padding: 3px 5px;
			border-radius: 5px;
			font-size: 12px;
			margin: 0 10px 10px 0;
		}
	}
}
</style>
