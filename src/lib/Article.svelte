<script>
	export let data;
	console.log(data);
	const authorBaselineURL = 'https://www.washingtonpost.com/people/';
	// const defIMG = './YX6JDD2TTJF4XPVHIZPHF4SVD4.jpeg';

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

<!-- <img loading="lazy" decoding="auto" src={data.img} alt={data.description} /> -->
<div class="content">
	<a href={data.url}>
		<img loading="lazy" decoding="auto" src={data.img} alt={data.description} />
	</a>
	<div class="article-data">
		<h1 class="">{data.headline}</h1>
		<p class="flexible description">{data.description}</p>
		<p class="date">{formatDate(data.date)}</p>
		<p class="authors">
			<span>By&nbsp;</span>
			{#if data.credits.length > 1}
				{#each data.credits.filter((d, i) => i < data.credits.length - 1) as author, i}
					<span class="author-item">
						<a href="{authorBaselineURL}{author.slug}"><span>{author.name}</span></a>
						{#if i < data.credits.length - 1}
							<span>,&nbsp;</span>
						{/if}
					</span>
				{/each}
				<a href={data.credits[data.credits.length - 1].slug}
					><span>{data.credits[data.credits.length - 1].name}</span></a
				>
			{:else}
				{#each data.credits as author}
					<a href="{authorBaselineURL}{author.slug}"><span>{author.name}</span></a>
				{/each}
			{/if}
		</p>
	</div>
</div>

<style>
	.content {
		padding-top: 2rem;
		border-top: 1px solid rgb(233, 233, 233);
	}
	@media (min-width: 600px) {
		.content {
			padding-top: 0;
			border: none;
		}
	}

	.author-item {
		display: flex;
	}
	a span {
		border-bottom: 1px solid black;
	}
	.description {
		color: rgb(89, 89, 89);
		margin: 0;
	}
	.authors,
	.date {
		margin: 0;
	}
	.authors {
		display: flex;
		flex-wrap: wrap;
		height: 40px;
		margin-top: 0.25rem;
	}
	a:hover + div h1 {
		color: rgb(80, 80, 80);
	}
	a:hover img {
		transform: scale(1.01);
	}

	.flexible {
		flex-grow: 1;
	}

	.article-data {
		height: 220px;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
	}
	h1 {
		font-size: 1.2rem;
		margin: 0.5rem 0;
		height: 85px;
	}
	.description,
	.date {
		font-size: 1rem;
	}

	.date {
		margin-top: 0.75rem;
		color: #595959;
		font-size: 1rem;
		font-weight: 100;
	}
	img {
		transition: all 250ms;
		width: 100%;
	}
	a {
		text-decoration: none;
	}
</style>
