import Vue from 'vue'
import App from './app'
import DB from './db.js'
import marked from 'marked'

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
		posts: [
			{
				title: "hello",
				url: "first",
				image: "//via.placeholder.com/320"
			}
		]
	},
	template: '<App :data="$data"/>',
})
