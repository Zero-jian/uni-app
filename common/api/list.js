import $http from '../http.js'

export const get_label = () => {
	return $http({
		url: 'get_label',
		data: {}
	})
}

export const get_list = (param) => {
	return $http({
		url: 'get_list',
		data: param
	})
}

export const update_like = (param) => {
	return $http({
		url: 'update_like',
		data: param
	})
}

export const get_search = (param) => {
	return $http({
		url: 'get_search',
		data: param
	})
}