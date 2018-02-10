<template lang="pug">
	.yabs-post--preview
		router-link(:to="{ name:\"posts\", params:{ post: post.url } }")
		h1.yabs-post__title--preview {{ post.title }}
		p.yabs-post__preview--preview(:v-html="marked(post.content)") 
</template>
<script>
	export default {
		name:"post",
		props: ["post"]
	}
</script>
<style lang="sass">
	.yabs-post--preview
		width: 500px
		height: 250px
		border: 1px solid black
	.yabs-post__title--preview
		// width: 100%
		top: 0
		margin: 5px
</style>
