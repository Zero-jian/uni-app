<template>
	<view class="swiper-list">
		<list-scroll @loadMore="loadMore">
			<list-card v-for="(item,index) in list" :key="index" :item="item"></list-card>
			<uni-load-more :status="status"></uni-load-more>
		</list-scroll>
	</view>
</template>
<script>
	export default {
		props: {
			list: {
				type: Array,
				default() {
					return [];
				}
			},
			status: {
				type: String,
				default: 'loading'
			}
		},
		data() {
			return {
			}
		},
		methods: {
			loadMore() {
				this.$emit('loadMore');
			}
		}
	}
</script>
<style lang="scss">
	.swiper-list {
		height: 100%;
	}
</style>
