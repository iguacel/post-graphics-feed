export const authorBaselineURL = 'https://www.washingtonpost.com/people/';

export function formatDate(dateStr) {
    const date = new Date(dateStr);
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    return date.toLocaleDateString('en-US', options);
}

export function formatAuthors(authors) {
    if (!authors || authors.length === 0) {
        return 'Unknown';
    }
    if (authors.length === 1) {
        const author = authors[0];
        return `<a href="${authorBaselineURL}${author.slug}" aria-label="Link to author profile">${author.name}</a>`;
    }
    return authors.map(author => `<a href="${authorBaselineURL}${author.slug}" aria-label="Link to author profile">${author.name}</a>`).join(', ');
}
