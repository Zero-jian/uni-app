<template>
	<view class="navBar">
		<view class="navBar-fixed">
			<view :style="{height: `${statusBarHeight}px`}"></view>
			<view class="navBar-content" :class="{'navBar-isSearch': isSearch}" :style="{height: `${navBarHeight}px`,width: `${searchWidth}px`}">
				<view class="navBar-search-back" v-if="isSearch">
					<uni-icons class="icons" type="back" size="22" color="#fff" @click="back"></uni-icons>
				</view>
				<view class="navBar-search" :style="{height: `${searchHeight}px`}">
					<view class="navBar-search-icon">
						<uni-icons type="search" size="16" color="#999"></uni-icons>
					</view>
					<view class="navBar-search-text" @click.stop="search">
						<text class="navBar-search-label" v-if="!isSearch">uni-app/vue/react</text>
						<input type="text" v-model="searchVal" placeholder="请输入需要搜索的内容" @input="changeSearch" v-else>
					</view>
				</view>
			</view>
		</view> 
		<view :style="{height: `${statusBarHeight + navBarHeight}px`}"></view>
	</view>
</template>

<script>
	export default {
		props: {
			isSearch: {
				type: Boolean,
				default: false
			},
			text: {
				type: [String, Number],
				default: ''
			}
		},
		data() {
			return { 
				statusBarHeight: 20,
				navBarHeight: 45,
				searchHeight: 32,
				searchWidth: 375,
				searchVal: '',
			};
		},
		created() {
			this.computedSearch()
		},
		methods: {
			computedSearch() {
				// 获取系统信息 => 获取状态栏高度动态设置
				const barHeight = this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight;
				
				// H5/app/mp-alipay不支持该API
				// #ifndef H5 || APP-PLUS || MP-ALIPAY	
				// 获取胶囊位置
				const {bottom, top, height, left} = uni.getMenuButtonBoundingClientRect()
				// 搜索框高度
				this.navBarHeight = (bottom - barHeight) + (top - barHeight) * 2
				// 搜索框高度
				this.searchHeight = height;
				this.searchWidth = left;
				// #endif
			},
			search() {
				if (this.isSearch) return;
				uni.navigateTo({
					url: "/pages/home-search/home-search"
				})
			},
			changeSearch() {
				this.$emit('changeSearch', this.searchVal);
			},
			back() {
				uni.switchTab({
					url: '/pages/tabbar/index/index'
				})
			}
		},
		watch: {
			text(newVal) {
				this.searchVal = newVal;
			}
		}
	}
</script>
<style lang="scss">
.navBar {
	.navBar-fixed {
		background: $uni-base-select;
		position: fixed;
		top: 0px;
		left: 0px;
		right: 0px;
		.navBar-content {
			display: flex;
			align-items: center;
			padding: 0 15px;
			box-sizing: border-box;
			.navBar-search {
				width: 100%;
				display: flex;
				align-items: center;
				padding: 0 15px;
				background: #ffffff;
				border-radius: 20px;
				box-sizing: border-box;
				.navBar-search-icon {
					margin-right: 5px;
				}
				.navBar-search-text {
					
				}
			}
			&.navBar-isSearch {
				padding-left: 0;
				.navBar-search {
					border-radius: 5px;
				}
			}
			.navBar-search-back {
				padding: 0 5px;
			}
		}
	}
}
</style>
