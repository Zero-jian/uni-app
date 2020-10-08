<template>
	<view class="swiper-list">
		<list-scroll>
			<list-card v-for="(item,index) in list" :key="index" :item="item"></list-card>
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
			}
		},
		data() {
			return {
				
			}
		},
	}
</script>
<style lang="scss">
	
</style>
