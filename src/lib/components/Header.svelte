<script>
	import { siteTitle, siteDescription } from '$lib/config';
</script>

<header>
	<h1>{siteTitle}</h1>
	<p>A <s>curated</s> list of recent articles published by The Washington Post's graphics team.</p>
</header>

<style>
	header {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		margin: 1rem 0 3rem 0;
	}

	h1 {
		font-size: 2.5rem;
		margin: 1rem 0 3rem 0;
		opacity: 0.8;
	}

	p {
		font-size: 1rem;
		font-weight: 300;
		max-width: 220px;
	}
</style>
