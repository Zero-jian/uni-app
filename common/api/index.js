// 批量导出api
const requireApi = require.context(
	// api目录相对路径
	'.',
	// 是否查询子目录
	false,
	// 查询文件后缀
	/.js$/
)

const module = {}
requireApi.keys().forEach((key, index) => {
	if(key === './index.js') return;
	Object.assign(module, requireApi(key))
})
export default module;