'use strict';
// 获取数据库的引用
const db = uniCloud.database();
const $ = db.command.aggregate;

exports.main = async (event, context) => {
	const { name, page, pageSize, user_id } = event;
	let matchObj = {};
	
	if(name !== '全部') {
		matchObj = {
			classify:  name
		}
	}
	
	// 查询用户信息
	const userInfo = await db.collection('user').doc(user_id).get();
	const article_likes_ids = userInfo.data[0].article_likes_ids;
	
	// 聚合查询
	const list = await db.collection('article').aggregate()
	.addFields({
		is_like:$.in(['$_id',article_likes_ids])
	})
	.match(matchObj)
	.project({
		content: 0
	}).skip(pageSize * (page-1)).limit(pageSize).end()
	
	// 返回客户端
	return {
		code: 200,
		msg: '数据请求成功',
		data: list.data
	}
};
