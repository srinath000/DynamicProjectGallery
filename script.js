document.addEventListener("DOMContentLoaded", function() {
    fetch('projects.json')
        .then(response => response.json())
        .then(data => {
            const navbar = document.getElementById('navbar');
            const mainContent = document.getElementById('main-content');

            // Populate the navbar
            data.forEach((project, index) => {
                const link = document.createElement('a');
                link.href = "#";
                link.innerText = project.title;
                link.addEventListener('click', () => {
                    mainContent.innerHTML = project.content;
                });
                navbar.appendChild(link);
            });
        })
        .catch(error => console.error('Error fetching the JSON:', error));
});