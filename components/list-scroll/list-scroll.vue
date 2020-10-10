<template>
	<view class="scroll">
		<scroll-view class="scroll-y" scroll-y @scrolltolower="loadMore">
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
		},
		methods: {
			loadMore() {
				this.$emit('loadMore');
			}
		}
	}
</script>
<style lang="scss">
.scroll {
	flex: 1; 
	display: flex;
	flex-direction: column;
	overflow: hidden;
	height: 100%;
	.scroll-y {
		height: 100%;
	}
}
</style>
