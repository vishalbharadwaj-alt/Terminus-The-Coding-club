// Mobile nav toggle
(function () {
	const toggle = document.getElementById('nav-toggle');
	const nav = document.getElementById('site-nav');
	if (toggle && nav) {
		toggle.addEventListener('click', () => {
			nav.classList.toggle('open');
		});
	}
})();

// Smooth scroll for same-page links (kept for any in-page anchors)
document.addEventListener('click', (e) => {
	const target = e.target;
	if (!(target instanceof Element)) return;
	if (target.matches('a[href^="#"]')) {
		e.preventDefault();
		const id = target.getAttribute('href').slice(1);
		const el = document.getElementById(id);
		if (el) {
			window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' });
		}
	}
});

// Current year in footer
const y = document.getElementById('year');
if (y) y.textContent = String(new Date().getFullYear());

// Apply background photos based on data-photo keys
(function () {
	const keyToUrl = {
		'coding-team': 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1600&auto=format&fit=crop',
		'event-crowd': 'https://images.unsplash.com/photo-1515165562835-c3b8c8f97313?q=80&w=1600&auto=format&fit=crop',
		'workspace': 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop',
		'projects': 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop'
	};

	const heroPhotos = document.querySelectorAll('.hero-photo');
	heroPhotos.forEach((el) => {
		const k = el.getAttribute('data-photo');
		const url = k && keyToUrl[k];
		if (url) {
			el.style.setProperty('--hero-photo-url', `url("${url}")`);
			const before = document.createElement('style');
			before.textContent = `.hero-photo::before{background-image:url("${url}")}`;
			document.head.appendChild(before);
		}
	});

	const sectionPhotos = document.querySelectorAll('.section-photo');
	sectionPhotos.forEach((el) => {
		const k = el.getAttribute('data-photo');
		const url = k && keyToUrl[k];
		if (url) {
			const styleEl = document.createElement('style');
			const uniqueClass = `photo-${Math.random().toString(36).slice(2,8)}`;
			el.classList.add(uniqueClass);
			styleEl.textContent = `.${uniqueClass}::before{background-image:url("${url}")}`;
			document.head.appendChild(styleEl);
		}
	});

	// Page-wide background (body.page-photo[data-photo="key"]) 
	const bodyEl = document.body;
	if (bodyEl.classList.contains('page-photo')) {
		const k = bodyEl.getAttribute('data-photo');
		const url = k && keyToUrl[k];
		if (url) {
			const styleEl = document.createElement('style');
			styleEl.textContent = `body.page-photo::before{background-image:url("${url}")}`;
			document.head.appendChild(styleEl);
		}
	}
})();

// Mark active nav link based on pathname
(function () {
	const path = location.pathname.split('/').pop() || 'index.html';
	document.querySelectorAll('#site-nav a').forEach((a) => {
		const href = a.getAttribute('href');
		if (href && href.endsWith(path)) {
			a.classList.add('active');
		}
	});
})();

