# lucamannella.github.io

Personal website of Luca Mannella, hosted on GitHub Pages.

**View the website:** https://lucamannella.github.io

## 📁 Project Structure

```
├── index.html           # Home page
├── publications.html    # Publications and thesis
├── cv.html             # Curriculum Vitae
├── contact.html        # Contact information
├── style.css           # Shared stylesheet
└── README.md           # This file
```

## 📄 Pages

### `index.html` (Home)
- Professional introduction and current role
- Research interests (Cybersecurity, IoT, HCI, Automotive security)
- Preview of selected publications with links
- Navigation to other sections

### `publications.html`
- **Journal Articles** section with 3 peer-reviewed journal publications
- **Conference Proceedings** section with 10 conference papers
- **Theses** section with Ph.D. dissertation (2024) and M.Sc. thesis (2018)
- Each publication includes:
  - Full author list (user's name in bold)
  - Complete title and venue information
  - Publication year
  - DOI links for all publications
  - PoliTO IRIS institutional handle links (11583/*)
  - PDF links where applicable (e.g., CEUR-WS proceedings)
- Thesis entries include links to institutional repository pages and direct PDF downloads

### `cv.html`
- **Current Position** (2020–present): Researcher/Postdoctoral Researcher and Teaching Assistant at Politecnico di Torino
  - Research Activity: Member of SMILIES research group, automotive cybersecurity (COLTRANE-V, SOCMATI)
  - Teaching Activity: "Applicazioni Web I"/"Web Application I" (since 2021), "Algorithms and Programming" (since 2024)
- **Previous Positions**: Detailed work history in reverse chronological order
  - IEEE-Eta Kappa Nu Mu Nu Chapter (2017–2025): HR roles and tutoring
  - LINKS Foundation (2018–2020): IoT & Pervasive Technologies Researcher
  - JEToP (2016–2018): Marketing and Communication roles
  - Teaching Assistant Student at Politecnico (2015–2017)
  - TAKE OFF SRL (2013–2014): Android Developer internship
- **Education**: Ph.D., M.Sc., B.Sc. in Computer Engineering (Politecnico di Torino)
  - Includes thesis links for both Ph.D. (institutional repository + PDF) and M.Sc. (web thesis + PDF)
- **Research Interests**: Listed with focus areas
- **Links**: Extensive linking to institutions (Politecnico, DAUIN, SMILIES), courses, projects, organizations (IEEE-HKN, LINKS, JEToP)
- Download CV button (placeholder link)

### `contact.html`
- Institutional email: luca.mannella@polito.it
- Department affiliation: Politecnico di Torino, DAUIN
- ORCID: 0000-0001-5738-9094
- Links to Google Scholar, GitHub, LinkedIn (placeholders)
- SMILIES research group affiliation

## 🎨 Design

### `style.css`
- **Aesthetic**: Clean, academic, professional
- **Colors**: Neutral palette (grays, whites, minimal blue for links)
- **Typography**: System fonts for performance
- **Layout**: Centered content with 900px max-width
- **Responsive**: Adapts to 768px and 480px breakpoints
- **Features**:
  - Sticky top navigation with hover effects
  - Publication cards with subtle styling
  - Contact cards with structured layout
  - Button styling for CV download
  - No animations or decorative clutter

## 🛠️ Technical Details

- **Pure HTML & CSS**: No frameworks, no JavaScript
- **Semantic HTML5**: Proper use of `header`, `nav`, `main`, `section`, `footer`
- **Relative links**: All links use relative paths for GitHub Pages compatibility
- **Responsive design**: Mobile-friendly with CSS media queries
- **Fast loading**: System fonts, minimal external dependencies

## 📝 Development Notes

- All pages share the same navigation bar for consistency
- Publication list is easy to update and extend
- CSS classes are semantic and reusable across pages
- No build process required; deploy directly

## 🚀 Deployment

The site deploys automatically to GitHub Pages when changes are pushed:
1. Update files in the repository
2. Commit and push changes
3. Site updates at https://lucamannella.github.io within seconds
