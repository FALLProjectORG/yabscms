<template>	
	<div id="app">
		<header v-html="marked(data.header.text)"></header>
		<main v-for="post in data.posts" :key="post.title">
			<a :href="'posts' + post.url">{{ post.title }}</a>
			<img :src="post.image">
		</main>
		<footer></footer>
	</div>
</template>

<script>
import marked from "marked"
export default {
	props: ["data"],
}
</script>

<style>
*, *::before, *::after {
	box-sizing: border-box;
}

#app {
	max-width: 400px;
	margin: 0 auto;
	line-height: 1.4;
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

h1 {
	text-align: center;
}
</style>