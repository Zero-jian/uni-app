<template>
	<view class="home">
		<navBar></navBar>
		<tab :list="tabList" @tab="tab"></tab>
		<list-scroll>
			<list-card mode="base"></list-card>
			<list-card mode="image"></list-card>
			<list-card mode="column"></list-card>
		</list-scroll>
	</view>
</template> 

<script>
	export default {
		data() {
			return {
				tabList: []
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
			tab(item, index) {
				console.log(item,index)
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
		}
	}
</style>
