<template>
	<view class="home-label">
		<view class="home-label-edit">
			<view class="label-title">
				<text class="label-my">我的标签</text>
				<text class="label-edit" @click="editLabel">{{is_edit ? '完成' : '编辑'}}</text>
			</view>
			<view class="label-manage">
				<template v-if="!loading">
					<view class="label-manage-detail" v-for="(item,index) in editList">
						<view class="label-manage-text">{{item.name}}</view>
						<view class="label-manage-cancel" @click="delLabel(index)">
							<uni-icons v-if="is_edit" class="label-icon" type="clear" size="14" color="red"></uni-icons>
						</view>
					</view>
				</template>
				<uni-load-more v-if="loading" status="loading" iconType="snow"></uni-load-more>
				<view class="no-data" v-if="!loading && editList.length === 0">
					当前暂无数据
				</view>
			</view>
		</view>
		<view class="home-label-edit home-label-bottom">
			<view class="label-title">
				<text class="label-my">推荐标签</text>
			</view>
			<view class="label-manage">
				<template v-if="!loading">
					<view class="label-manage-detail" v-for="(item,index) in list" @click="addLabel(index)">
						<view class="label-manage-text">{{item.name}}</view>
					</view>
				</template>
				<uni-load-more v-if="loading" status="loading" iconType="snow"></uni-load-more>
				<view class="no-data" v-if="!loading && list.length === 0">
					当前暂无数据
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				is_edit: false,
				editList: [], // 我的标签
				list: [], // 推荐标签
				loading: false,
			}
		},
		onLoad() {
			this.getLabel();
		},
		methods: {
			editLabel() {
				if (this.is_edit) {
					this.is_edit = false;
					this.setUpdateLabel()
				} else {
					this.is_edit = true;
				}
			},
			getLabel() {
				this.loading = true;
				this.$api.get_label({type: 'all'}).then(res => {
					const { data } = res;
					this.editList = data.filter(item => item.current);
					this.list = data.filter(item => !item.current);
					this.loading = false;
				})
			},
			delLabel(index) {
				if (this.is_edit) {
					this.list.push(this.editList[index])
					this.editList.splice(index, 1);
				}
			},
			addLabel(index) {
				if (this.is_edit) {
					this.editList.push(this.list[index]);
					this.list.splice(index, 1);
				}
			},
			setUpdateLabel() {
				const newArr = [];
				this.editList.forEach(item => newArr.push(item._id))
				uni.showLoading();
				this.$api.update_label({ label: newArr }).then(res => {
					uni.hideLoading();
					uni.showToast({
						title: '编辑成功',
						icon: 'none'
					})
					this.getLabel()
					uni.$emit('labelChange', this.editList);
				})
			}
		}
	}
</script>

<style lang="scss">
page {
	background: #f5f5f5;
}
.home-label {
	.home-label-edit {
		background: #fff;
		padding: 0 10px;
		.label-title {
			height: 30px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 14px;
			.label-my {
				color: #666;
			}
			.label-edit {
				color: $uni-color-success;
			}
		}
		.label-manage {
			display: flex;
			margin-top: 10px;
			flex-wrap: wrap;
			.label-manage-detail {
				border: 1px solid #666;
				color: #666;
				padding: 3px 5px;
				border-radius: 5px;
				position: relative;
				font-size: 12px;
				margin: 0 10px 10px 0;
				.label-manage-cancel {
					position: absolute;
					top: -8px;
					right: -8px;
					.label-icon {
						z-index: 99
					}
				}
			}
			.no-data {
				color: #666;
				font-size: 14px;
				text-align: center;
				width: 100%;
				padding: 10px 0 15px 0;
			}
		}
	}
	.home-label-bottom {
		margin-top: 10px;
	}
}
</style>
