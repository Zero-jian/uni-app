<template>
	<view class="content">
		<navBar></navBar>
		<tab :list="tabList"></tab>
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
			}
		}
	}
</script>

<style>

</style>
