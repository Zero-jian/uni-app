export default function $http(options) {
	const {url, data} = options;
	const dataObj = {
		user_id: '5f730be87b1bc7000180a184',
		...data
	}
	return new Promise((resolve, reject) => {
		uniCloud.callFunction({
			name: url,
			data: dataObj
		}).then(res => {
			const {result} = res
			if(result.code === 200) {
				resolve(result)
			} else {
				reject(result)
			}
		}).catch(err => {
			reject(err)
		})
	})
}