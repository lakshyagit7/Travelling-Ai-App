
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelector('.nav-links');

// Create hamburger menu toggle
const hamburger = document.createElement('div');
hamburger.classList.add('hamburger');
hamburger.innerHTML = `
    <span></span>
    <span></span>
    <span></span>
`;
navbar.appendChild(hamburger);


hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('open');
});

// 2. Smooth Scroll to Sections
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 3. Search Bar Functionality
const searchInput = document.querySelector('.search-bar input');
const cards = document.querySelectorAll('.recommendations .card');

searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    cards.forEach(card => {
        const placeName = card.querySelector('h3').textContent.toLowerCase();
        if (placeName.includes(query)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});
