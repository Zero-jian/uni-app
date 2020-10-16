<template>
	<view class="search">
		<navBar :isSearch="true"></navBar>
		<view class="search-flex">
			<view class="search-content">
				<view class="search-button">
					<text class="search-history">搜索历史</text>
					<text class="search-clear">清空</text>
				</view>
				<view class="search-label-content">
					<view class="search-label-text" v-for="(item,index) in 10">123</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
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
			background: #999;
			.search-content {
				background: #fff;
				border: 1px solid #4CD964;
				padding: 0 10px;
				.search-button {
					display: flex;
					justify-content: space-between;
					padding: 5px 0;
					font-size: 14px;
					.search-history {
						color: #d23091;
					}
					.search-clear {
						color: #1b9e1b;
					}
				}
				.search-label-content {
					margin-top: 10px;
					display: flex;
					flex-wrap: wrap;
					.search-label-text {
						padding: 2px 3px;
						border: 1px solid red;
						padding: 2px 3px;
						border: 1px solid red;
						margin: 0 10px 10px 0;
					}
				}
			}
		}
	}
</style>
