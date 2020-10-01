<template>
	<view class="scroll">
		<scroll-view class="scroll-y" scroll-y>
			<view class="scroll-list">
				<slot></slot>
			</view>
		</scroll-view>
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
.scroll {
	flex: 1; 
	display: flex;
	flex-direction: column;
	border: 1px solid blue;
	overflow: hidden;
	.scroll-y {
		height: 100%;
	}
}
</style>
