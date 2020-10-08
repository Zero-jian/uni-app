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