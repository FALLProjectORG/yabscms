import Vue from 'vue'
import App from "./app";
import DB from "./db.js"

Vue.config.devtools = true
new Vue({
	el: '#app',
	components: { App },
	template: '<App/>',
})