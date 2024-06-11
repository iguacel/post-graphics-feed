<script>
	import Article from '$lib/Article.svelte';
	import { onMount } from 'svelte';
	let articles;
	onMount(async () => {
		articles = await fetch(
			'https://static.observableusercontent.com/files/67d533c2a7c4b8cf6eedfae1af4cad1246c29faa0bc4616063344dcae6eb3bd1b7a92af81fc1393e31a7fb30dc758dd12d06fb96e758590434aff3c1e3805f21?response-content-disposition=attachment%3Bfilename*%3DUTF-8%27%27authors_data.json'
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
