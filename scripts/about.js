const SLIDES = document.querySelectorAll(".about-slide");

const faderOptions = {
    threshold: 0,
};

const slidesObserver = new IntersectionObserver(function (
    entries,
    slidesObserver
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
        entry.target.classList.add("fade-in");
        slidesObserver.unobserve(entry.target);
    });
},
faderOptions);

SLIDES.forEach(slide => {
    slidesObserver.observe(slide);
});
