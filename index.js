import Vue from 'vue'
import App from './app'
import router from './router'
import marked3 from 'marked3' 

if (process.env.NODE_ENV === 'production') {
	require('./serviceworker')
}

Vue.prototype.$md = (input) => {
	return marked3(input)
}

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
				image: "//via.placeholder.com/320",
				content: "### yass This is some placeholder text. Take one for the team and read this aloud. I feel bad for the person who follows these directrions. YASS "
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
