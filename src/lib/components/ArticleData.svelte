<script>
	import { formatDate, formatAuthors } from '../../utils/utils';
	export let data;
</script>

<div class="article-data">
	<a href={data.url} aria-label="Link to article">

        <p class="date">{formatDate(data.date)}</p>
		<h3 class="headline">{data.headline}</h3>
		<p class="description">{data.description}</p>
	</a>

	{#if data.credits && data.credits.length > 0}
		<p class="authors">
			By {@html formatAuthors(data.credits)}
		</p>
	{/if}
</div>

<style>
    .date {
        margin: 0.5em 0 0.5em 0;
		font-size: 80%;
	}

	.headline {
		font-size: 1.5rem;
        margin: 0.5em 0 0.5em 0;
	}

	.description {
		font-size: 90%;
	}
	
	.authors {
		font-size: 80%;
		margin: 1em 0 0 0;
		opacity: 0.7;
	}
</style>
