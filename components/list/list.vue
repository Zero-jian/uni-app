<template>
	<view class="list">
		<swiper class="swiper" @change="change" :current="activeIndex">
			<swiper-item class="swiper-item" v-for="(item,index) in tab" :key="index">
				<list-item :list="listObject[index]" :status="status[index]" @loadMore="loadMore"></list-item>
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
				list: [],
				listObject: {},
				status: [],
				loadStatus: [],
				pageStatus: {}
			};
		},
		methods: {
			change(e) {
				const { current } = e.detail
				this.$emit('change', current);
				if(!this.listObject[current] || this.listObject[current].length === 0) {
					this.getList(current)
				}
			},
			getList(num) { 
				this.status[num] = 'loading';
				if(!this.pageStatus[num]) {
					this.pageStatus[num] = {
						pageSize: 5,
						page: 1
					}
				}
				const name = this.tab[num].name;
				const {pageSize, page} = this.pageStatus[num];
				this.$api.get_list({ 
					name,
					page: page,
					pageSize: pageSize,
				}).then(res => {
					const len = res.data.length;
					if(len < pageSize) {
						this.loadStatus[num] = false;
						this.status[num] = 'noMore';
					}
					this.pageStatus[num] = {
						pageSize: 5,
						page: page + 1
					}
					let oldListObject = this.listObject[num];
					let newListObject = [];
					if(oldListObject) {
						newListObject = [...oldListObject, ...res.data]
					}  else {
						newListObject = [...res.data];
					}
					this.$set(this.listObject, num, newListObject)
				})
			},
			loadMore() {
				if(this.loadStatus[this.activeIndex] !== false) {
					this.getList(this.activeIndex);
				}
			}
		},
		watch: {
			tab(newVal, oldVal) {
				if(newVal.length === 0) return;
				this.listObject = {};
				this.pageStatus = {};
				this.getList(this.activeIndex);
			}
		}
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
