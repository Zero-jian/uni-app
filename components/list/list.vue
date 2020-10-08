<template>
	<view class="list">
		<swiper class="swiper" @change="change" :current="activeIndex">
			<swiper-item class="swiper-item" v-for="(item,index) in tab" :key="index">
				<list-item :list="listObject[index]"></list-item>
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
			};
		},
		methods: {
			change(e) {
				const { current } = e.detail;
				this.getList(current)
				this.$emit('change', current);
			},
			getList(num) { 
				const name = this.tab[num].name
				this.$api.get_list({ name }).then(res => {
					this.$set(this.listObject, num, res.data)
				})
			}
		},
		watch: {
			tab(newVal, oldVal) {
				if(newVal.length === 0) return;
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
