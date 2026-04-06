// Smooth scrolling code stollen
// Source - https://stackoverflow.com/a/7717572
// Posted by Joseph Silber, modified by community. See post 'Timeline' for change history
// Retrieved 2026-04-05, License - CC BY-SA 3.0

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
