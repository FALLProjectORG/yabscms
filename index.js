import Vue from 'vue'
import App from './app'
import marked from 'marked'
import router from './router'
if (process.env.NODE_ENV === 'production') {
	require('./serviceworker')
}

Vue.mixin({
	methods: {
		marked: function (input) {
			return marked(input);
		}
	}
});
Vue.config.devtools = true
new Vue({
	el: '#app',
	components: { App },
	data:{
		header:{
			text:"# YABS CMS"
		},
		header: {
			text: "# YABS CMS"
		},
		posts: [
			{
				title: "hello",
				url: "first",
				image: "//via.placeholder.com/320",
				content: ""
			},
			{
				title: "Two Wooo",
				url: "two",
				image: "//via.placeholder.com/320",
				content: "this is post #2. test test test test yasss"
			}
		]
	},
	template: '<App :data="$data"/>',
	router
})
