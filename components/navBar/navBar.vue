<template>
	<view class="navBar">
		<view class="navBar-fixed">
			<view class="navBar-search">
				<view class="navBar-search-icon"></view>
				<view class="navBar-search-text">uni-app/vue/react</view>
			</view>
		</view>
		<view class="navBar-block"></view>
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
.navBar {
	.navBar-fixed {
		background: $uni-base-select;
		padding: 0 15px;
		height: 45px;
		display: flex;
		align-items: center;
		justify-content: center;
		position: fixed;
		top: 0px;
		left: 0px;
		right: 0px;
		.navBar-search {
			width: 100%;
			height: 30px;
			display: flex;
			align-items: center;
			padding: 0 15px;
			background: #ffffff;
			border-radius: 20px;
			box-sizing: border-box;
			.navBar-search-icon {
				width: 10px;
				height: 10px;
				border: 1px solid $uni-base-select;
			}
			.navBar-search-text {
				
			}
		}
	}
	.navBar-block {
		height: 45px;
	}
}
</style>
