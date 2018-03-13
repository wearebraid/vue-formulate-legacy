import Vue from 'vue'
import Vuex from 'vuex'
import formulate from 'vue-formulate'
import {formulateState, formulateGetters, formulateMutations} from 'vue-formulate'

Vue.use(Vuex)

Vue.use(formulate)

const state = {
	count: 0,
	...formulateState(),
};

const getters = {
	...formulateGetters(),
};

const mutations = {
	add (state, payload) {
		// If we get a payload, add it to count
		// Else, just add one to count
		payload ? (state.count += payload) : state.count++
	},
	subtract (state, payload) {
		payload ? (state.count -= payload) : state.count--
	},
    ...formulateMutations(),
};

const actions = {
	addThreeAsync({ commit }) {
		setTimeout(() => commit('add', 3), 3000)
	}
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});

