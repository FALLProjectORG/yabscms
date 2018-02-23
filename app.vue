<template lang="pug">	
	#app
		header(v-html="$md(data.header.text)")
		main.yabs-home
			post(v-for="post in data.posts" :key="post.title" :post="post")
		footer
</template>

<script>
	import post from "@/postPreview.vue"
	export default {
		props: ["data"],
		components: { post },
	}
</script>

<style lang="sass">
	*, *::before, *::after 
		box-sizing: border-box;
	#app
		margin: 0
		line-height: 1.4
		font-family: 'Avenir', Helvetica, Arial, sans-serif
		-webkit-font-smoothing: antialiased
		-moz-osx-font-smoothing: grayscale
	h1 
		text-align: center;
	main
		display: grid
		grid-template-columns: 500px 500px
		grid-gap: 10px
		// padding: 50px
		justify-content: center
</style>