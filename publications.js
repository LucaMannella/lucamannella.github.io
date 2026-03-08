// Minimal inline BibTeX viewer
document.addEventListener('DOMContentLoaded', function() {
    const toggles = document.querySelectorAll('.bibtex-toggle');
    const cache = {};

    // Filter function: remove abstract and keywords fields from display
    function filterBibTeX(text) {
        const lines = text.split('\n');
        const result = [];
        let skipping = false;
        let braceCount = 0;
        let inQuotedField = false;
        
        for (const line of lines) {
            const trimmed = line.trim().toLowerCase();
            
            // Check if starting a field to skip (abstract, keyword, keywords)
            if (!skipping) {
                const startsFiltered = trimmed.startsWith('abstract') || 
                                       trimmed.startsWith('keyword');
                const hasEquals = line.indexOf('=') > -1;
                
                if (startsFiltered && hasEquals) {
                    skipping = true;
                    braceCount = 0;
                    inQuotedField = false;
                    
                    // Determine delimiter type
                    const afterEquals = line.substring(line.indexOf('=') + 1).trim();
                    if (afterEquals.startsWith('{')) {
                        // Count braces on this line
                        for (const char of line) {
                            if (char === '{') braceCount++;
                            else if (char === '}') braceCount--;
                        }
                        if (braceCount === 0) skipping = false;
                    } else if (afterEquals.startsWith('"')) {
                        inQuotedField = true;
                        // Check for closing quote on same line
                        let escaped = false;
                        let quoteCount = 0;
                        for (let i = line.indexOf('=') + 1; i < line.length; i++) {
                            if (line[i] === '\\' && !escaped) {
                                escaped = true;
                            } else if (line[i] === '"' && !escaped) {
                                quoteCount++;
                            } else {
                                escaped = false;
                            }
                        }
                        if (quoteCount >= 2) skipping = false;
                    }
                    continue;
                }
            }
            
            if (skipping) {
                if (inQuotedField) {
                    // Look for unescaped closing quote
                    let escaped = false;
                    for (const char of line) {
                        if (char === '\\' && !escaped) {
                            escaped = true;
                        } else if (char === '"' && !escaped) {
                            skipping = false;
                            inQuotedField = false;
                            break;
                        } else {
                            escaped = false;
                        }
                    }
                } else {
                    // Count braces
                    for (const char of line) {
                        if (char === '{') braceCount++;
                        else if (char === '}') braceCount--;
                    }
                    if (braceCount === 0) skipping = false;
                }
                continue;
            }
            
            result.push(line);
        }
        
        // Collapse multiple consecutive blank lines
        const normalized = [];
        let lastWasBlank = false;
        for (const line of result) {
            const isBlank = line.trim() === '';
            if (isBlank && lastWasBlank) continue;
            normalized.push(line);
            lastWasBlank = isBlank;
        }
        
        return normalized.join('\n');
    }

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
                    const filtered = filterBibTeX(text);
                    cache[bibPath] = filtered;
                    viewer.textContent = filtered;
                })
                .catch(function(error) {
                    viewer.innerHTML = '<span class="bibtex-error">BibTeX not available.</span>';
                });
        });
    });
});
