<template>
	<view class="detail">
		<view class="detail-title">
			{{formData.title}}
		</view>
		<view class="detail-author">
			<view class="author-left">
				<view class="author-left-img">
					<image :src="formData.author.avatar" mode="aspectFill"></image>
				</view>
				<view class="author-right-text">
					<view class="author-top">
						{{formData.author.author_name}}
					</view>
					<view class="author-bottom">
						<text>{{formData.create_time}}</text>
						<text>{{formData.browse_count}} 浏览</text>
						<text>{{formData.thumbs_up_count}} 收藏</text>
					</view>
				</view>
			</view>
			<view class="author-right">
				已关注
			</view>
		</view>
		<view class="detail-content">
			<view class="detail-html">
				<u-parse :content="formData.content" :noData="noData"></u-parse>
			</view>
			<view class="detail-newComment" v-if="formData.content">
				<view class="comment-title">最新评论</view>
				<view class="comment-content" v-for="item in commentsList" :key="item.comment_id">
					<comments-box :comments="item" @reply="reply"></comments-box>
				</view>   
			</view>
		</view> 
		<view class="detail-comment">
			<view class="detail-comment-left">
				<input type="text" placeholder="谈谈你的看法" @focus="inputShow">
			</view>
			<view class="detail-comment-right">
				<view class="detail-bottom__icons-box">
					<uni-icons type="chat" size="22" color="#F07373"></uni-icons>
				</view>
				<view class="detail-bottom__icons-box">
					<uni-icons type="heart" size="22" color="#F07373"></uni-icons>
				</view>
				<view class="detail-bottom__icons-box">
					<uni-icons type="hand-thumbsup" size="22" color="#F07373"></uni-icons>
				</view>
			</view>
		</view>
		<release ref="popup" @submit="submit"></release>
	</view>
</template>
<script>
	import uParse from '@/components/gaoyia-parse/parse.vue' 
	export default {
		data() {
			return {
				formData: {},
				noData: '<p style="text-align: center; color: #666">详情加载中...</p>',
				commentsList:[],
				replyFormData: {},
			}
		},
		onLoad (query) {
			this.formData = JSON.parse(query.params);
			this.getArticle();
			this.getComments();
		},
		methods: {
			getArticle () {
				this.$api.get_detail({
					article_id: this.formData._id
				}).then(res => {
					this.formData = res.data;
				});
			},
			submit (data) {
				this.updateComment(data);
			},
			// 更新评论
			updateComment (data) {
				uni.showLoading();
				this.$api.update_comment({
					article_id: this.formData._id,
					content: data
				}).then(res => {
					uni.hideLoading();
					uni.showToast({
						title: '评论发布成功'
					})
					this.$refs.popup.close();
					this.getComments();
				}) 
			},
			// 请求评论内容
			getComments(){
				this.$api.get_comments({
					article_id: this.formData._id
				}).then(res=>{
					console.log(res);
					const {data} = res
					this.commentsList = data
				})
			},
			reply(e){
				this.replyFormData = {
					"comment_id":e.comments.comment_id,
					"is_reply": e.is_reply
				}
				if(e.comments.reply_id){
					this.replyFormData.reply_id = e.comments.reply_id
				}
				this.openComment()
			},
			inputShow () {
				this.$refs.popup.open();
			},
			// 打开评论发布窗口
			openComment(){
				this.$refs.popup.open()
			},
		},
		components: {
			uParse
		}
	}
</script>
<style lang="scss">
page {
	height: 100%;
}
.detail {
	display: flex;
	flex-direction: column;
	padding: 10px 10px 0 10px;
	.detail-title {
		font-size: 18px;
		font-weight: bold;
		color: #333;
	}
	.detail-author {
		display: flex;
		align-items: center;
		justify-content: space-between;
		.author-left {
			display: flex;
			align-items: center;
			padding: 10px 0;
			.author-left-img {
				flex-shrink: 0;
				width: 40px;
				height: 40px;
				border-radius: 50%;
				overflow: hidden;
				
				image {
					width: 100%;
					height: 100%;
				}
			}
			.author-right-text {
				margin-left: 10px;
				.author-top {
					font-size: 14px;
					color: #333;
				}
				.author-bottom {
					font-size: 12px;
					color: #999;
					text {
						margin-left: 10px;
					}
					text:first-child {
						margin: 0;
					}
				}
			}
		}
		.author-right {
			line-height: 30px;
			padding: 0 10px;
			border-radius: 5px;
			height: 30px;
			font-size: 12px;
			color: #fff;
			background-color: $uni-base-select;
		}
	}
	.detail-content {
		.detail-html {
			
		}
		.detail-newComment {
			padding: 0 0 15px 0;
			.detail-comment {
				margin-top: 30px;
				.comment-title {
					padding: 10px 15px;
					font-size: 14px;
					color: #666;
					border-bottom: 1px #f5f5ff solid;
				}
				.comment-content {
					padding: 0 15px;
					border-top: 1px #eee solid;
				}
			}
		}
		flex: 1;
		padding: 20px 0;
		overflow-x: hidden;
		overflow-y: auto;
	}
	.detail-comment {
		position: fixed;
		bottom: 0;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		height: 44px;
		border-top: 1px #f5f5f5 solid;
		background-color: #fff;
		box-sizing: border-box;
		.detail-comment-left {
			input {
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-left: 10px;
				padding: 0 10px;
				width: 100%;
				height: 30px;
				border: 1px #ddd solid;
				border-radius: 5px;
			}
		}
		.detail-comment-right {
			display: flex;
			flex-shrink: 0;
			padding: 0 10px;
			text {
				position: relative;
				display: flex;
				align-items: center;
				justify-content: center;
				width: 44px;
			}
		}
	}
}
</style>