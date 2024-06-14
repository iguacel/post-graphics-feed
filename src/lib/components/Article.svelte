<script>
	import Img from '$lib/components/Img.svelte';
	import ArticleData from '$lib/components/ArticleData.svelte';

	export let data;
</script>

<div class="content">
	<a href={data.url} aria-label="Link to article">
		<Img src={data?.img} alt={data?.description} />
	</a>

	<ArticleData {data} />
</div>


<style>
	.content {
		margin: 0 0 2em 0;
	}
</style>
