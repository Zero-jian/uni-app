import $http from '../http.js'

export const get_label = () => {
	return $http({
		url: 'get_label',
		data: {}
	})
}