'use strict';
// 获取数据库的引用
const db = uniCloud.database();
const $ = db.command.aggregate;

exports.main = async (event, context) => {
	
	const { user_id, type } = event;
	let matchObj = {};
	if (type !== 'all') {
		matchObj = { current: true };
	}
	let userInfo = await db.collection('user').doc(user_id).get();
	userInfo = userInfo.data[0];
	
	// 查询label表里面的数据
	let label = await db.collection('label')
	.aggregate()
	.addFields({
		current: $.in(['$_id', $.ifNull([userInfo.label_ids,[]])])
	})
	.match(matchObj)
	.end();
	return {
		code: 200,
		msg: "数据请求成功",
		data: label.data
	}
};
