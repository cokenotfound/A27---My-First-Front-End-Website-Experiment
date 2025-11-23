
const hamburger= document.querySelector("#toggle-btn")
hamburger.addEventListener("click",function(){
    document.querySelector("#sidebar").classList.toggle("expand");
});

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const description = document.querySelector('.Description');

    window.addEventListener('scroll', () => {
        // Get the top position of the description relative to the viewport
        const descriptionTop = description.getBoundingClientRect().top;

        // Check if the header height overlaps with the description
        if (descriptionTop <= header.offsetHeight) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Back-to-Top Button Functionality
document.addEventListener('DOMContentLoaded', () => {
    const backToTopButton = document.getElementById('back-to-top');

    // Show the button when scrolling down
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) { // Adjust threshold as needed
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // Smooth scroll to the top on click
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scrolling
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const description = document.querySelector('.Description');

    // Create the text element for the header
    const headerTextElement = document.createElement('div');
    headerTextElement.style.fontSize = '24px';
    headerTextElement.style.fontWeight = 'bold';
    headerTextElement.style.textAlign = 'center';
    headerTextElement.style.padding = '10px';
    headerTextElement.textContent = 'WELCOME USER!';

    headerTextElement.style.background = 'linear-gradient(45deg, darkgreen, white)';
    headerTextElement.style.webkitBackgroundClip = 'text';
    headerTextElement.style.webkitTextFillColor = 'transparent';

    window.addEventListener('scroll', () => {
        const descriptionTop = description.getBoundingClientRect().top;

        if (descriptionTop <= header.offsetHeight) {
            header.classList.add('scrolled');
            if (!header.contains(headerTextElement)) {
                header.appendChild(headerTextElement);
            }
        } else {
            header.classList.remove('scrolled');
            if (header.contains(headerTextElement)) {
                header.removeChild(headerTextElement);
            }
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const searchContainer = document.querySelector('.search-container');
    const searchInput = document.querySelector('.search-input');

    // Searchable items
    const searchableItems = ['Home', 'Shop', 'Login', 'About Us', 'Contact Us', 'Products', 'Services'];

    // Create a dropdown for search results
    const resultsDropdown = document.createElement('div');
    resultsDropdown.classList.add('search-results');
    document.body.appendChild(resultsDropdown);

    // Position the dropdown
    const positionDropdown = () => {
        const rect = searchContainer.getBoundingClientRect();
        resultsDropdown.style.top = `${rect.bottom + window.scrollY}px`;
        resultsDropdown.style.left = `${rect.left + window.scrollX}px`;
        resultsDropdown.style.width = `${rect.width}px`;
    };

    // Render search results
    const renderResults = (query) => {
        resultsDropdown.innerHTML = ''; // Clear previous results
        resultsDropdown.style.display = 'none'; // Hide by default

        if (query) {
            const filteredItems = searchableItems.filter((item) =>
                item.toLowerCase().includes(query.toLowerCase())
            );

            if (filteredItems.length > 0) {
                resultsDropdown.style.display = 'block'; // Show dropdown
                filteredItems.forEach((item) => {
                    const resultItem = document.createElement('div');
                    resultItem.textContent = item;
                    resultItem.classList.add('search-result-item');
                    resultsDropdown.appendChild(resultItem);

                    // Click event for result items
                    resultItem.addEventListener('click', () => {
                        alert(`You selected: ${item}`);
                        searchInput.value = '';
                        resultsDropdown.innerHTML = ''; // Clear results
                        resultsDropdown.style.display = 'none';
                    });
                });
            } else {
                const noResults = document.createElement('div');
                noResults.textContent = 'No results found';
                noResults.classList.add('search-result-item');
                resultsDropdown.appendChild(noResults);
                resultsDropdown.style.display = 'block'; // Show even if no results
            }
        }
    };

    // Handle input events
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.trim();
        renderResults(query);
        positionDropdown();
    });

    // Reposition dropdown on window resize
    window.addEventListener('resize', positionDropdown);

    // Hide dropdown on blur
    searchInput.addEventListener('blur', () => {
        setTimeout(() => {
            resultsDropdown.style.display = 'none';
        }, 200); // Allow time for clicks
    });

    // Show dropdown on focus
    searchInput.addEventListener('focus', () => {
        if (searchInput.value.trim()) {
            renderResults(searchInput.value.trim());
            positionDropdown();
        }
    });

    // Close dropdown on Escape key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            searchInput.value = '';
            resultsDropdown.innerHTML = '';
            resultsDropdown.style.display = 'none';
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');

    // Create the clock element
    const clock = document.createElement('div');
    clock.classList.add('live-clock');
    header.appendChild(clock);

    // Function to update the clock
    const updateClock = () => {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        clock.textContent = `${hours}:${minutes}:${seconds}`;
    };

    // Update the clock every second
    setInterval(updateClock, 1000);
    updateClock(); // Initial call to display the time immediately
});
