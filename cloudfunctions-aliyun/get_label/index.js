'use strict';
// 获取数据库的引用
const db = uniCloud.database();

exports.main = async (event, context) => {
	// 查询label表里面的数据
	const label = await db.collection('label').get();
	return {
		code: 200,
		msg: "数据请求成功",
		data: label.data
	}
};
