<template>	
	<div id="app">
		<h1>My Todo App!</h1>
		<p> {{ data }} </p>
		<header>
			{data.header.text}
		</header>
	</div>
</template>

<script>
export default {
	props: ["data"]
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