<script>
	import List from '$lib/List.svelte';
	import About from '$lib/About.svelte';
	import { siteTitle, siteDescription } from '$lib/config';
</script>

<main>
	<header>
		<h1>{siteTitle}</h1>
		<h3>{siteDescription}</h3>
	</header>
	<List />
	<About />
</main>

<style>
	header {
		padding: 1rem 0;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		position: relative;
		margin-bottom: 2rem;
	}
	@media (min-width: 830px) {
		header {
			width: auto;
		}
	}
	h1,
	h3 {
		display: block;
		width: 100%;
		max-width: 50rem;
		margin: 0 auto;
	}
	h3 {
		font-weight: lighter;
	}
	main::before {
		content: '';
		background-repeat: no-repeat;
		overflow: visible;
		width: 250px;
		height: 100px;
		position: absolute;
		right: 0px;
		top: 0px;
		z-index: -1;
	}
	div {
		border-top: 1px solid rgb(200, 200, 200);
		margin-top: 2rem;
	}
</style>
