<template>
	<view class="card-content-icons" @click.stop="likeTap">
		<uni-icons size="20" color="#f07373" :type="like ?  'heart-filled' : 'heart'"></uni-icons>
	</view>
</template>

<script>
	export default {
		props: {
			item: {
				type: Object,
				default() {
					return {}
				}
			}
		},
		data() {
			return {
				like: this.item.is_like,
			};
		},
		methods: {
			likeTap() {
				uni.showLoading();
				this.$api.update_like({
					user_id: '5f730be87b1bc7000180a184',
					article_id: this.item._id
				}).then(res => {
					uni.hideLoading();
					uni.showToast({
						title: this.like ? '取消收藏' : '收藏成功',
						icon: 'none'
					})
					this.like = !this.like;
				}).catch(err => {
					uni.hideLoading();
				})
			},
			
		}
	}
</script>
<style lang="scss">
.card-content-icons {
	width: 20px;
	height: 20px;
}
</style>
