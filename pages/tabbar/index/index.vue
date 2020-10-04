<template>
	<view class="home">
		<navBar></navBar>
		<tab :list="tabList" :tabIndex="tabIndex" @tab="tab"></tab>
		<view class="swiper">
			<list :tab="tabList" :activeIndex="activeIndex" @change="change"></list>
		</view>
	</view>
</template> 

<script>
	export default {
		data() {
			return {
				tabList: [],
				tabIndex: 0,
				activeIndex: 0,
			}
		},
		onLoad() {
			this.getLabel();
		},
		methods: { 
			// 获取标签数据
			getLabel() {
				this.$api.get_label().then((res) => {
					this.tabList = res.data;
				})
			},
			// 点击标签
			tab(item) {
				this.activeIndex = item.index;
			},
			// 轮播图切换
			change(current) {
				this.tabIndex = current;
			}
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
		display: flex;
		.home {
			display: flex;
			flex-direction: column;
			height: 100%;
			flex: 1;
			.swiper {
				flex: 1;
				overflow: hidden;
			}
		}
	}
</style>
