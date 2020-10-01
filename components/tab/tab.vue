<template>
	<view class="tab">
		<scroll-view class="tab-scroll-x" scroll-x>
			<view class="tab-scroll">
				<view class="tab-scroll-label" v-for="(item,index) in 15" :key="index">{{item}}内容</view>
			</view>
		</scroll-view>
		<view class="tab-icons">
			<uni-icons type="gear" size="26" color="#666"></uni-icons>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.tab {
	display: flex;
	.tab-scroll-x {
		flex: 1;
		overflow: hidden;
		box-sizing: border-box;
		.tab-scroll {
			display: flex;
			.tab-scroll-label {
				height: 100%;
				height: 45px;
				flex-wrap: nowrap;
				flex-shrink: 0;
				text-align: center;
				line-height: 45px;
				box-sizing: border-box;
				padding: 0 10px;
				font-size: 14px;
				color: #333;
			} 
		}
	}
	.tab-icons {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 45px;
		position: relative;
		&::after {
			content: '';
			position: absolute;
			top: 12px;
			bottom: 12px;
			left: 0;
			width: 1px;
			background: #ddd;
		}
	}
}
</style>
