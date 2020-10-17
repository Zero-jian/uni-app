<template>
	<view class="search">
		<navBar :isSearch="true" @changeSearch="change" :text="searchText"></navBar>
		<view class="search-flex" v-if="is_history">
			<view class="search-content">
				<view class="search-button">
					<text class="search-history">搜索历史</text>
					<text class="search-clear" @click="clearHistory">清空</text>
				</view>
				<view class="search-label-content" v-if="history_lists.length">
					<view class="search-label-text" v-for="(item,index) in history_lists" @click="searchHistory(item)">{{item}}</view>
				</view>
			</view>
			<view class="no-data">
				<text>没有搜索历史</text>
			</view>
		</view>
		<view class="search-article" v-else>
			<uni-load-more style="margin-top: 20px;" v-if="loading" status="loading" iconType="snow"></uni-load-more>
			<view class="search-article-item" v-if="article.length">
				<list-scroll>
					<list-card v-for="(item,index) in article" :key="index" :item="item" @articleDetail="listDetail"></list-card>
				</list-scroll>
			</view>
			<view class="search-article-no" v-if="!article.length && !loading">
				没有搜索相关数据
			</view>
		</view>
	</view>
</template>
<script>
	import { mapState } from 'vuex'
	export default {
		data() {
			return {
				article: [],
				is_history: true,
				loading: false,
				searchText: '',
			}
		},
		methods: {
			change(value) {
				this.searchText = value;
				if (!value) {
					clearTimeout(this.timer);
					this.mark = false;
					this.getSearch(value);
					return;
				}
				if(!this.mark) {
					this.mark = true;
					this.timer = setTimeout(() => {
						this.mark = false;
						this.getSearch(value);
					}, 1000);
				}
			},
			getSearch(value) {
				this.loading = true;
				if (!value) {
					this.article = [];
					this.is_history = true;
					return;
				}
				this.is_history = false;
				this.$api.get_search({ 
					value,
				}).then(res => {
					this.loading = false;
					this.article = res.data;
				}).catch(err => {
					this.loading = false;
				})
			},
			listDetail() {
				this.$store.dispatch('set_history_lists', this.searchText);
			},
			searchHistory(item) {
				this.searchText = item;
				this.getSearch(this.searchText);
			},
			clearHistory() {
				this.$store.dispatch('clear_history_lists');
				uni.showToast({
					title: '清空完成'
				})
			}
		},
		computed: {
			...mapState(['history_lists'])
		}
	}
</script>
<style lang="scss">
	page {
		height: 100%;
	}
	.search {
		height: 100%;
		display: flex;
		flex-direction: column;
		.search-flex {
			flex: 1;
			background: #f5f5f5;
			.search-content {
				background: #fff;
				padding-bottom: 20px;
				box-shadow: -3px 5px 10px #fff;
				padding: 0 10px;
				.search-button {
					display: flex;
					justify-content: space-between;
					padding: 10px 0;
					font-size: 14px;
					.search-history {
						color: $uni-base-select;
					}
					.search-clear {
						color: #30b33a;
					}
				}
				.search-label-content {
					margin-top: 10px;
					display: flex;
					flex-wrap: wrap;
					.search-label-text {
						margin: 0 10px 10px 0;
						color: #666;
						border: 1px solid #666;
						border-radius: 5px;
						padding: 2px 10px;
					}
				}
			}
			.no-data {
				height: 100px;
				line-height: 100px;
				text-align: center;
				width: 100%;
				font-size: 12px;
				color: #666;
				background: #fff;
			}
		}
		.search-article {
			overflow: hidden;
			flex: 1;
			.search-article-no {
				height: 100%;
				text-align: center;
				margin-top: 100px;
				font-size: 14px;
				color: #999;
			}
		}
	}
</style>
