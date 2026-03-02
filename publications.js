// Minimal inline BibTeX viewer
document.addEventListener('DOMContentLoaded', function() {
    const toggles = document.querySelectorAll('.bibtex-toggle');
    const cache = {};

    toggles.forEach(function(toggle) {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            
            const bibPath = this.getAttribute('data-bib');
            const targetId = this.getAttribute('data-target');
            const viewer = document.getElementById(targetId);
            
            if (!viewer) {
                console.error('Viewer element not found for:', targetId);
                return;
            }
            
            // Toggle visibility
            if (viewer.classList.contains('show')) {
                viewer.classList.remove('show');
                this.textContent = 'Show BibTeX';
                return;
            }
            
            // Show and load if not cached
            viewer.classList.add('show');
            this.textContent = 'Hide BibTeX';
            
            if (cache[bibPath]) {
                viewer.textContent = cache[bibPath];
                return;
            }
            
            // Fetch BibTeX file
            viewer.textContent = 'Loading...';
            fetch(bibPath)
                .then(function(response) {
                    if (!response.ok) throw new Error('Cannot load BibTeX');
                    return response.text();
                })
                .then(function(text) {
                    cache[bibPath] = text;
                    viewer.textContent = text;
                })
                .catch(function(error) {
                    viewer.innerHTML = '<span class="bibtex-error">BibTeX not available.</span>';
                });
        });
    });
});
