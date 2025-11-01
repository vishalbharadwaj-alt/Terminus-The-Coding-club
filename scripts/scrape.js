const scrape = require('website-scraper').default;
const path = require('path');
const PuppeteerPlugin = require('website-scraper-puppeteer').default;

(async () => {
	const url = 'https://terminus-the-coding-club.mystrikingly.com/';
	const outDir = path.join(__dirname, '..', 'public');
	await scrape({
		urls: [url],
		directory: outDir,
		request: {
			headers: {
				'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36'
			}
		},
		sources: [
			{ selector: 'img', attr: 'src' },
			{ selector: 'link[rel="stylesheet"]', attr: 'href' },
			{ selector: 'script', attr: 'src' },
			{ selector: 'a', attr: 'href' }
		],
		recursive: true,
		maxDepth: 3,
		requestConcurrency: 3,
		prettifyUrls: true,
		plugins: [
			new PuppeteerPlugin({
				launchOptions: { headless: true },
				gotoFunction: async ({ page, url }) => {
					await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });
				},
				scrollToBottom: { timeout: 10000, viewportN: 10 },
				blockNavigation: true
			})
		]
	});
	console.log('Scrape complete:', outDir);
})().catch((error) => { console.error(error); process.exit(1); });
