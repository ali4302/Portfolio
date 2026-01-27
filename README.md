# Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, JavaScript, and React components.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean and professional design with smooth animations
- **Interactive Components**: Dynamic navigation, skill progress bars, and smooth scrolling
- **React Integration**: Includes React components for statistics, testimonials, blog, and skills filter
- **Dark Mode**: Toggle between light and dark themes
- **Contact Form**: Functional contact form for visitor inquiries
- **Projects Showcase**: Grid layout to display your projects with links
- **Skills Section**: Animated skill bars showing your proficiency levels
- **Social Media Links**: Quick access to your social profiles

## Technologies Used

- HTML5
- CSS3 (with CSS Variables and Animations)
- JavaScript (ES6+)
- React 18
- Font Awesome Icons

## Project Structure

```
Portfolio/
├── index.html              # Main HTML file
├── css/
│   └── style.css          # Main stylesheet
├── js/
│   ├── script.js          # Vanilla JavaScript functionality
│   └── react-components.js # React components
├── images/                 # Image assets (to be added)
│   └── profile.jpg        # Your profile picture
├── files/                  # Downloadable files
│   └── resume.pdf         # Your resume
├── package.json           # Project configuration
└── README.md              # This file
```

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Node.js and npm (optional, for live-server)

### Installation

1. **Clone or download this repository**

2. **Open the project folder**
   ```bash
   cd Portfolio
   ```

3. **Install dependencies (optional for development server)**
   ```bash
   npm install
   ```

4. **Start the development server (optional)**
   ```bash
   npm start
   ```
   This will open the portfolio in your browser at http://localhost:3000
   
   Or simply open `index.html` directly in your web browser

## Customization

### Update Personal Information

1. **Edit `index.html`**:
   - Replace "Your Name" with your actual name
   - Update social media links
   - Add your contact information
   - Modify the about section text

2. **Update Projects**:
   - Edit the `projects` array in `js/script.js`
   - Add your project details, images, and links

3. **Update Skills**:
   - Modify skill levels in the HTML or React components
   - Add or remove skills as needed

4. **Add Your Images**:
   - Add your profile picture to `images/profile.jpg`
   - Add project images
   - Update image paths in the code

5. **Add Your Resume**:
   - Place your resume PDF in `files/resume.pdf`

### Customize Colors

Edit the CSS variables in `css/style.css`:

```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --accent-color: #f093fb;
    /* ... other colors */
}
```

## Features Overview

### Sections

1. **Hero Section**: Eye-catching introduction with call-to-action buttons
2. **About Section**: Tell your story and showcase your background
3. **Skills Section**: Display your technical skills with progress bars
4. **Projects Section**: Showcase your work with images and links
5. **Statistics Counter**: Show impressive numbers (React component)
6. **Testimonials Carousel**: Display client feedback (React component)
7. **Blog Posts**: Share your latest articles (React component)
8. **Contact Section**: Let visitors reach out to you
9. **Footer**: Additional links and copyright information

### Interactive Features

- Smooth scrolling navigation
- Mobile-responsive hamburger menu
- Animated skill progress bars
- Scroll-to-top button
- Dark mode toggle
- Form validation
- Intersection Observer animations
- Typing effect on hero subtitle

## React Components

The portfolio includes several React components:

- **StatisticsCounter**: Animated counter displaying achievements
- **TestimonialsCarousel**: Rotating testimonials from clients
- **BlogPosts**: Grid of your latest blog posts
- **SkillsFilter**: Filterable skills list by category

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

### Deploy to GitHub Pages

1. Create a GitHub repository
2. Push your code to the repository
3. Go to Settings > Pages
4. Select your branch and save

### Deploy to Netlify

1. Sign up for Netlify
2. Drag and drop your portfolio folder
3. Your site is live!

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts

## Performance Tips

- Optimize images before adding them
- Use WebP format for better compression
- Minify CSS and JavaScript for production
- Enable caching on your hosting provider
- Use a CDN for external libraries

## License

This project is open source and available under the MIT License.

## Contact

Feel free to reach out if you have any questions or suggestions!

- Email: your.email@example.com
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- GitHub: [Your GitHub](https://github.com/yourusername)

## Acknowledgments

- Font Awesome for icons
- React for component framework
- Inspiration from modern portfolio designs

---

**Note**: Remember to replace all placeholder content with your actual information before deploying!
