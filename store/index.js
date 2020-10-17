import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		history_lists: uni.getStorageSync('__history') || [],
	},
	mutations: {
		SET_HISTORY_LISTS(state, value) {
			state.history_lists = value;
		},
		CLEAR_HISTORY_LISTS(state, value) {
			state.history_lists = [];
		}
	},
	actions: {
		set_history_lists({commit, state}, value) {
			let list = state.history_lists;
			if (!list.includes(value)) {
				list.unshift(value);
			}
			uni.setStorageSync('__history', list);
			commit('SET_HISTORY_LISTS', list);
		},
		clear_history_lists({commit}) {
			uni.removeStorageSync('__history');
			commit('CLEAR_HISTORY_LISTS');
		}
	}
});

export default store;