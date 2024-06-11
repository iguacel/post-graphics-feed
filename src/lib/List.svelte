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

<div>
	{#if articles !== undefined}
		{#each articles as article}
			<Article data={article} />
		{/each}
	{/if}
</div>

<style>
	div {
		display: grid;
		grid-template-columns: repeat(auto-fill, 320px);
		grid-gap: 30px;
		justify-content: center;
		grid-auto-flow: dense;
		row-gap: 25px;
	}
</style>
