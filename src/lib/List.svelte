<script>
	import Article from '$lib/Article.svelte';
	import { onMount } from 'svelte';
	let articles;
	onMount(async () => {
		articles = await fetch(
			'https://raw.githubusercontent.com/LuisSevillano/post-graphics-feed/main/api/wapo_graphics_feed.json'
		).then((res) => res.json());
		console.log(articles);
	});
</script>

<section>
	{#if articles !== undefined}
		{#each articles as article}
			<Article data={article} />
		{/each}
	{/if}
</section>

<style>
	section {
		display: grid;
		grid-template-columns: auto;
		grid-gap: 30px;
		justify-content: center;
		grid-auto-flow: dense;
		row-gap: 25px;
	}

	@media (min-width: 600px) {
		section {
			grid-template-columns: repeat(auto-fill, 320px);
			row-gap: 35px;
		}
	}
</style>
