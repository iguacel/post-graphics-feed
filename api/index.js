import fs from 'fs';
import fetch from 'node-fetch';
import authors from './authors.json' assert { type: 'json' };

const currentDate = new Date().toISOString();
const limit = 10; // number of articles per author
const outputFile = 'api/wapo_graphics_feed.json';

// Build and encode URLs
const urls = authors.map(({ slug }) =>
	encodeURI(
		`https://www.washingtonpost.com/prism/api/author-feed?_website=washpost&query={"slug":"${slug}","from":"2014","to":"${currentDate}","limit":${limit}}`
	)
);

// Function to fetch author data from a URL
async function getAuthorData(url) {
	try {
		const response = await fetch(url);
		if (!response.ok) throw new Error(`Failed to fetch data from ${url}`);
		const data = await response.json();
		return data.items.map((item) => ({
			id: item._id,
			headline: item.headlines.basic,
			description: item.description.basic,
			url: item.canonical_url,
			credits: item.credits.by.map((d) => ({ name: d.name, slug: d.slug })),
			date: item.first_publish_date,
			img: item.additional_properties.lead_art?.additional_properties?.thumbnailResizeUrl ||
				item.additional_properties.lead_art?.additional_properties?.originalUrl ||
				item.additional_properties.lead_art?.url,
			label: {
				text: item.label_display?.basic?.headline_prefix,
				url: item.label_display?.basic?.url
			}
		}));
	} catch (error) {
		console.error(`Error fetching author data from ${url}:`, error);
		return [];
	}
}

// Function to read existing JSON file if it exists
function readExistingJson(filePath) {
	try {
		if (fs.existsSync(filePath)) {
			const data = fs.readFileSync(filePath, 'utf8');
			return JSON.parse(data);
		}
	} catch (error) {
		console.error(`Error reading existing JSON file: ${error}`);
	}
	return [];
}

// Function to remove duplicates based on the 'id' property and sort by date
function removeDuplicatesAndSort(articles) {
	const uniqueArticles = Array.from(new Set(articles.map((article) => article.id)))
		.map((id) => articles.find((article) => article.id === id));
	return uniqueArticles.sort((a, b) => new Date(b.date) - new Date(a.date));
}

// Function to write JSON to file if there are new articles
function writeJsonToFile(filePath, data, existingDataLength) {
	if (data.length > existingDataLength) {
		fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8', (err) => {
			if (err) {
				console.error('Error writing file:', err);
			} else {
				console.log(`File ${filePath} created successfully.`);
			}
		});
	} else {
		console.log('No new articles to update.');
	}
}

// Main function to get data from all authors, merge and sort articles, and write the resulting JSON to a file
async function main() {
	const existingArticles = readExistingJson(outputFile);
	let allArticles = [...existingArticles];

	const authorDataPromises = urls.map(getAuthorData);
	const authorDataArrays = await Promise.all(authorDataPromises);
	allArticles = allArticles.concat(...authorDataArrays);

	const uniqueArticles = removeDuplicatesAndSort(allArticles);

	writeJsonToFile(outputFile, uniqueArticles, existingArticles.length);
}

// Execute the main function
main();
