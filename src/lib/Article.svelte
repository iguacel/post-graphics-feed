<script>
	export let data;
	const authorBaselineURL = 'https://www.washingtonpost.com/people/';
	const fallbackImage = './YX6JDD2TTJF4XPVHIZPHF4SVD4.jpeg';

	function formatDate(dateStr) {
		const date = new Date(dateStr);
		const options = {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		};
		return date.toLocaleDateString('en-US', options);
	}
</script>

<div class="content">
	<a href={data.url} aria-label="Link to article">
		<img
			loading="lazy"
			decoding="auto"
			src={data.img || fallbackImage}
			alt={data.description || 'Article Image'}
		/>
	</a>
	<div class="article-data">
		<h1>{data.headline}</h1>
		<p class="description">{data.description}</p>
		<p class="date">{formatDate(data.date)}</p>
		<p class="authors">
			<span>By&nbsp;</span>
			{#each data.credits as author, i}
				<span class="author-item">
					<a href="{authorBaselineURL}{author.slug}" aria-label="Link to author profile">{author.name}</a>
					{#if i < data.credits.length - 1}
						<span>,&nbsp;</span>
					{/if}
				</span>
			{/each}
		</p>
	</div>
</div>

<style>
	.content {
		padding-top: 2rem;
		border-top: 1px solid #e9e9e9;
	}

	.author-item {
		display: inline-flex;
	}
	a span {
		border-bottom: 1px solid black;
	}
	.description {
		color: #595959;
		margin: 0;
	}
	.authors,
	.date {
		margin: 0;
	}
	.authors {
		display: flex;
		flex-wrap: wrap;
		margin-top: 0.25rem;
	}
	a:hover + .article-data h1 {
		color: #505050;
	}
	a:hover img {
		transform: scale(1.01);
	}

	.article-data {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
	}
	h1 {
		font-size: 1.5rem;
		margin-top: 2.5rem;
		margin-bottom: 0.5rem;
	}
	.description,
	.date {
		font-size: 1rem;
	}

	.date {
		margin-top: 0.75rem;
		font-weight: 100;
	}
	img {
		transition: all 250ms;
		width: 100%;
	}
	a {
		text-decoration: none;
		display: block;
	}
	.content > a {
		display: flex;
		background: #ebebeb;
		align-items: center;
	}
	@media (min-width: 600px) {
		.content {
			padding-top: 0;
			border: none;
		}
		h1 {
			margin: 0.5rem 0;
			font-size: 1.25rem;
		}
		.article-data {
			height: 245px;
		}
		.content > a {
			max-height: 210px;
			overflow: hidden;
		}
	}
</style>
