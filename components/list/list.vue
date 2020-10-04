<template>
	<view class="list">
		<swiper class="swiper" @change="change" :current="activeIndex">
			<swiper-item class="swiper-item" v-for="(item,index) in tab" :key="index">
				<list-item></list-item>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import listItem from './list-item.vue'
	export default {
		props: {
			tab: {
				type: Array,
				default()  {
					return [];
				}
			},
			activeIndex: {
				type: Number,
				default: 0
			}
		},
		components: {
			listItem
		},
		data() {
			return {
				
			};
		},
		methods: {
			change(e) {
				const { current } = e.detail;
				this.$emit('change', current);
			}
		},
	}
</script>
<style lang="scss">
.list {
	height: 100%;
	.swiper {
		height: 100%;
		.swiper-item {
			overflow-y: auto;
		}
	}
}
</style>
