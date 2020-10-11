'use strict';
// 获取数据库的引用
const db = uniCloud.database();
const dbCmd = db.command;

exports.main = async (event, context) => {
	
	const { user_id, article_id } = event;
	
	const userInfo = await db.collection('user').doc(user_id).get();
	const article_id_ids = userInfo.data[0].article_likes_ids;
	let dbCmdFuns = null;
	let msg = '';
	
	if(article_id_ids.includes(article_id)) {
		dbCmdFuns = dbCmd.pull(article_id);
		msg = '取消收藏成功';
	} else {
		dbCmdFuns = dbCmd.addToSet(article_id);
		msg = "收藏成功";
	}
	await db.collection('user').doc(user_id).update({
		article_likes_ids: dbCmdFuns
	})
	
	// 返回客户端
	return {
		code: 200,
		msg: msg,
		data: userInfo
	}
};
