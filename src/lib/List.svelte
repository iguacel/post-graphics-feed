<script>
	import Article from '$lib/Article.svelte';
	import Skeleton from '$lib/Skeleton.svelte';
	import { onMount } from 'svelte';
	let articles;
	onMount(async () => {
		articles = await fetch(
			'https://raw.githubusercontent.com/LuisSevillano/post-graphics-feed/main/api/wapo_graphics_feed.json'
		).then((res) => res.json());
	});
</script>

<section>
	{#if articles !== undefined}
		{#each articles as article}
			<Article data={article} />
		{/each}
	{:else}
		<Skeleton />
	{/if}
</section>

<style>
	section {
		display: grid;
		grid-template-columns: auto;
		grid-gap: 40px;
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
