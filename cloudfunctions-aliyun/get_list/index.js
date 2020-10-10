'use strict';
// 获取数据库的引用
const db = uniCloud.database();

exports.main = async (event, context) => {
	const { name, page, pageSize } = event;
	let matchObj = {};
	
	if(name !== '全部') {
		matchObj = {
			classify:  name
		}
	}
	// 聚合查询
	const list = await db.collection('article').aggregate().match(matchObj).project({
		content: 0
	}).skip(pageSize * (page-1)).limit(pageSize).end()
	
	// 返回客户端
	return {
		code: 200,
		msg: '数据请求成功',
		data: list.data
	}
};
