'use strict';
// 获取数据库的引用
const db = uniCloud.database();

exports.main = async (event, context) => {
	const { name } = event;
	
	// 聚合查询
	const list = await db.collection('article').aggregate().match({
		classify:  name
	}).project({
		content: 0
	}).end()
	
	// 返回客户端
	return {
		code: 200,
		msg: '数据请求成功',
		data: list.data
	}
};
