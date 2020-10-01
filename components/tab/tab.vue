<template>
	<view class="tab">
		<scroll-view class="tab-scroll-x" scroll-x>
			<view class="tab-scroll">
				<view class="tab-scroll-label" :class="{active: activeIndex == index}" v-for="(item,index) in list" :key="index" @click="getTab(item,index)">{{item.name}}</view>
			</view>
		</scroll-view>
		<view class="tab-icons">
			<uni-icons type="gear" size="26" color="#666"></uni-icons>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			list: {
				type: Array,
				default() {
					return [];
				}
			},
		},
		data() {
			return {
				activeIndex: 0,
			};
		},
		methods: {
			getTab(item,index) {
				this.activeIndex = index;
				this.$emit('tab', {
					data: item,
					index
				})
			} 
		}
	}
</script>

<style lang="scss">
.tab {
	display: flex;
	.tab-scroll-x {
		flex: 1;
		overflow: hidden;
		box-sizing: border-box;
		.tab-scroll {
			display: flex;
			.tab-scroll-label {
				height: 100%;
				height: 45px;
				flex-wrap: nowrap;
				flex-shrink: 0;
				text-align: center;
				line-height: 45px;
				box-sizing: border-box;
				padding: 0 10px;
				font-size: 14px;
				color: #333;
				&.active {
					color: $uni-base-select;
				}
			}
		}
	}
	.tab-icons {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 45px;
		position: relative;
		&::after {
			content: '';
			position: absolute;
			top: 12px;
			bottom: 12px;
			left: 0;
			width: 1px;
			background: #ddd;
		}
	}
}
</style>
