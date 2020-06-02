// LAZY LOADING IMAGES
const images = document.querySelectorAll('[data-srcset]');

const imageObserverOptions = {
	threshold: 0,
	rootMargin: '500px 0px 500px 0px',
};
const imageObserver = new IntersectionObserver((entries, imageObserver) => {
	entries.forEach((entry) => {
		if (!entry.isIntersecting) {
			return;
		} else {
			preloadImage(entry.target);
			imageObserver.unobserve(entry.target);
		}
	});
}, imageObserverOptions);

images.forEach((image) => {
	imageObserver.observe(image);
});

function preloadImage(img) {
	const source_set = img.getAttribute('data-srcset');
	const source = img.getAttribute('data-src');
	if (!source_set || !source) {
		return;
	}
	img.srcset = source_set;
	img.src = source;
}
