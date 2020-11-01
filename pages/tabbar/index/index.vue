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
			this.bindEvent();
			this.getLabel();
		},
		methods: { 
			// 获取标签数据
			getLabel() {
				this.$api.get_label().then((res) => {
					let data = res.data;
					this.tabList = data.filter(item => item.current);
					this.tabList.unshift({ name: '全部' });
				})
			},
			// 点击标签
			tab(item) {
				this.activeIndex = item.index;
			},
			// 轮播图切换
			change(current) {
				this.tabIndex = current;
				this.activeIndex = current;
			},
			bindEvent() {
				uni.$on('labelChange', res => {
					this.tabList = [];
					this.tabIndex = 0;
					this.activeIndex = 0;
					this.getLabel();
				})
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
