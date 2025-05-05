document.addEventListener("DOMContentLoaded", function() {
    fetch('projects.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const navbar = document.getElementById('navbar');
            const mainContent = document.getElementById('main-content');

            // Add the home page link first
            const homeLink = document.createElement('a');
            homeLink.href = "#";
            homeLink.innerText = "Home";
            homeLink.classList.add("home-button"); // Optional class for styling home
            homeLink.addEventListener('click', () => {
                mainContent.innerHTML = `<h2>Welcome to My Gallery</h2><p>Select a project from the menu to view details.</p>`;
            });
            navbar.appendChild(homeLink);

            data.forEach((project, index) => {
                const link = document.createElement('a');
                link.href = "#";
                link.innerText = project.title;
                link.classList.add(`color-${index}`);
                link.addEventListener('click', () => {
                    fetch(project.contentPath)
                        .then(response => {
                            if (!response.ok) {
                                throw new Error(`HTTP error! status: ${response.status}`);
                            }
                            return response.text();
                        })
                        .then(html => {
                            mainContent.innerHTML = html;
                        })
                        .catch(error => {
                            mainContent.innerHTML = `<p>Error loading content: ${error}</p>`;
                        });
                });
                navbar.appendChild(link);
            });
        })
        .catch(error => console.error('Error fetching the JSON:', error));
});