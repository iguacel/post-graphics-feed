<script>
	import List from '$lib/List.svelte';
	import About from '$lib/About.svelte';
	import Header from '$lib/components/Header.svelte';
</script>

<main>
	<Header/>
	<List />
	<About />
</main>

<style>
	main {
		margin: 0 auto;
		color: var(--c-fg);
		padding: 1em;
		max-width: 1200px;
	}

</style>
