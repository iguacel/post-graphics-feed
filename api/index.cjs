const fs = require('fs');
const authors = require('./authors.json');

const currentDate = new Date().toISOString();
const limit = 1; // number of articles per author

// build and encode urls
const urls = authors.map(({ slug }) =>
	encodeURI(
		`https://www.washingtonpost.com/prism/api/author-feed?_website=washpost&query={"slug":"${slug}","from":"2023","to":"${currentDate}","limit":${limit}}`
	)
);

// function to fetch author data from a URL
async function getAuthorData(url) {
	try {
		const response = await fetch(url).then((res) => res.json());
		return response.items.map((item) => {
			return {
				headline: item.headlines.basic,
				description: item.description.basic,
				url: item.canonical_url,
				credits: item.credits.by.map((d) => ({ name: d.name, slug: d.slug })),
				date: item.first_publish_date,
				img: item.additional_properties.lead_art.additional_properties.originalUrl,
				label: {
					text: item.label_display.basic.headline_prefix,
					url: item.label_display.basic.url
				}
			};
		});
	} catch (error) {
		console.error(`Error fetching author data from ${url}:`, error);
		return null;
	}
}

// Main function to get data from all authors and write the resulting JSON to a file
async function main() {
	let allArticles = [];
	for (const url of urls) {
		const authorData = await getAuthorData(url);

		if (authorData) {
			allArticles = allArticles.concat(authorData);
		}
	}

	// Sort articles by publication date in descending order
	allArticles.sort((a, b) => new Date(b.date) - new Date(a.date));

	// Compose the final JSON
	const finalJson = JSON.stringify(allArticles, null, 2);

	// Write the JSON to a file
	fs.writeFile('wapo_graphics_feed.json', finalJson, 'utf8', (err) => {
		if (err) {
			console.error('Error writing file:', err);
		} else {
			console.log('File wapo_graphics_feed.json created successfully.');
		}
	});
}

// Execute the main function
main();
