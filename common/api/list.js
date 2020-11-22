import $http from '../http.js'

export const get_label = (param) => {
	return $http({
		url: 'get_label',
		data: param
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

export const update_label = (param) => {
	return $http({
		url: 'update_label',
		data: param
	})
}

export const get_detail = (param) => {
	return $http({
		url: 'get_detail',
		data: param
	})
}

export const update_comment = param => {
	return $http({
		url: 'update_comment', 
		data: param
	})
}

export const get_comments = param => {
	return $http({
		url: 'get_comments', 
		data: param
	})
}