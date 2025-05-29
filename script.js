// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        // Check if targetId is just "#" which usually means "top of the page"
        // or if it's a valid ID selector like "#sectionId"
        if (targetId.length > 1) { // Ensures it's not just "#"
            const targetElement = document.getElementById(targetId.substring(1)); // Remove # for getElementById

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        } else if (targetId === '#') { // Handle href="#" for scrolling to top
             window.scrollTo({
                top: 0,
                behavior: 'smooth'
             });
        }
    });
});

// Content toggle for "Flagship Event" highlighted activities
document.querySelectorAll('.event-highlights-list h4').forEach(h4 => {
    h4.addEventListener('click', () => {
        // The .event-details div is the next sibling of the h4
        const detailsDiv = h4.nextElementSibling;

        if (detailsDiv && detailsDiv.classList.contains('event-details')) {
            if (detailsDiv.style.display === 'none' || detailsDiv.style.display === '') {
                detailsDiv.style.display = 'block';
            } else {
                detailsDiv.style.display = 'none';
            }
        }
    });
});
