const store = new Vuex.Store({
	state: {
		posts: [],
		config: {}
	},
	mutations: {
		removePost(state, payload) {
			state.posts.filter(item => item != id)
		},
		addPost(state, payload){
			state.posts.push( item )
		}
	}
})