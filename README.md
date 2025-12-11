# AD Group - Oil & Gas Services Website

A modern, professional website for AD Group oil services company featuring comprehensive service offerings, project showcases, and a fully responsive design.

## 🌟 Features

### Modern UI/UX
- **Gradient backgrounds** with animated effects
- **Smooth animations** and transitions throughout
- **Glassmorphism effects** for modern aesthetics
- **Parallax scrolling** on hero section
- **Animated counters** for statistics
- **Scroll-triggered animations** for elements
- **Interactive hover effects** on all interactive elements

### Fully Responsive
- Mobile-first design approach
- Hamburger menu for mobile devices
- Optimized layouts for tablets and desktops
- Touch-friendly interface

### Comprehensive Sections
1. **Hero Section** - Eye-catching landing with company stats
2. **About Section** - Company information and mission
3. **Services Section** - 9 comprehensive service categories:
   - Drilling Services
   - Well Completion
   - Well Intervention
   - Production Services
   - Equipment Rental
   - Inspection Services
   - Engineering & Consulting
   - Maintenance Services
   - Logistics & Supply Chain

4. **Projects Section** - Featured project showcases
5. **HSE Section** - Health, Safety & Environment commitment
6. **Contact Section** - Contact form and company information
7. **Footer** - Complete site navigation and links

### Interactive Features
- Smooth scroll navigation
- Active section highlighting in navbar
- Mobile-friendly hamburger menu
- Form validation with user feedback
- Toast notifications for form submissions
- Keyboard navigation support
- Accessibility features

## 🚀 Getting Started

### Quick Start
Simply open `index.html` in any modern web browser:

1. **Double-click** `index.html` file
2. Or **right-click** and select "Open with" → Choose your browser
3. Or **drag and drop** the file into an open browser window

### Local Development
For local development with live reload, you can use any local server:

#### Using Python (if installed):
```bash
# Python 3
python -m http.server 8000

# Then open: http://localhost:8000
```

#### Using Node.js (if installed):
```bash
# Install live-server globally
npm install -g live-server

# Run from project directory
live-server
```

#### Using VS Code:
- Install "Live Server" extension
- Right-click on `index.html`
- Select "Open with Live Server"

## 📁 File Structure

```
ad-group-website/
│
├── index.html          # Main HTML file
├── styles.css          # All styles and animations
├── script.js           # Interactive functionality
└── README.md          # This file
```

## 🎨 Customization Guide

### Colors
Edit CSS variables in `styles.css` (lines 4-18):
```css
:root {
    --primary-color: #0066cc;      /* Main brand color */
    --secondary-color: #ff6b35;    /* Secondary color */
    --accent-color: #f7931e;       /* Accent color */
    /* ... more colors */
}
```

### Company Information
Update in `index.html`:
- **Company name**: Line 19-20 (logo section)
- **Contact info**: Lines 380-407 (contact section)
- **Statistics**: Lines 56-68 (hero stats)
- **Projects**: Lines 265-316 (projects section)

### Services
Modify service cards in `index.html` (lines 144-251):
- Add/remove services
- Update service descriptions
- Change service icons (using emoji or replace with icon library)

### Images
Replace gradient placeholders with real images:
1. Add your images to an `images/` folder
2. Update image placeholders in HTML:
   - About section (line 125)
   - Project cards (lines 267, 284, 301)

Example:
```html
<!-- Replace this: -->
<div class="image-placeholder">
    <div class="image-overlay"></div>
</div>

<!-- With this: -->
<img src="images/your-image.jpg" alt="Description">
```

## 📧 Contact Form Integration

The contact form currently displays notifications client-side. To integrate with a backend:

### Option 1: Email Service (Formspree, EmailJS)
```javascript
// In script.js, replace the form submission handler (line 155-194)
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    
    try {
        const response = await fetch('YOUR_FORM_ENDPOINT', {
            method: 'POST',
            body: formData
        });
        
        if (response.ok) {
            showNotification('Message sent successfully!', 'success');
            contactForm.reset();
        }
    } catch (error) {
        showNotification('Failed to send message.', 'error');
    }
});
```

### Option 2: PHP Backend
Create `contact.php`:
```php
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    // Send email or save to database
    
    echo json_encode(['success' => true]);
}
?>
```

## 🌐 Deployment

### GitHub Pages (Free)
1. Create a GitHub repository
2. Upload all files
3. Go to Settings → Pages
4. Select source branch (main)
5. Your site will be live at: `https://username.github.io/repository-name`

### Netlify (Free)
1. Create account at netlify.com
2. Drag and drop the folder
3. Site is live immediately with custom domain support

### Traditional Web Hosting
1. Upload all files via FTP to your hosting provider
2. Ensure `index.html` is in the root directory
3. Access via your domain

## 🔧 Browser Support

- Chrome (recommended) - Latest 2 versions
- Firefox - Latest 2 versions
- Safari - Latest 2 versions
- Edge - Latest 2 versions
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ⚡ Performance Tips

1. **Add images carefully**: Optimize images before adding (use WebP format)
2. **Lazy loading**: Add `loading="lazy"` to images
3. **Minification**: Minify CSS/JS for production
4. **CDN**: Use CDN for fonts and libraries in production

## 🎯 SEO Optimization

Already included:
- Meta descriptions
- Semantic HTML5
- Proper heading hierarchy
- Alt text support (add when adding images)

To improve:
1. Add Open Graph tags for social sharing
2. Add structured data (JSON-LD)
3. Create sitemap.xml
4. Add robots.txt

## 📄 License

This website template is provided as-is for AD Group. 

## 🆘 Support & Customization

For additional features or customization:
- Add a blog section
- Integrate CMS (WordPress, Contentful)
- Add animations library (GSAP, AOS)
- Implement analytics (Google Analytics)
- Add live chat widget
- Create additional pages (Services detail pages, About team, Careers, etc.)

## 🔄 Version History

**v1.0.0** - Initial release
- Complete responsive website
- 9 service categories
- Contact form with validation
- Modern animations and effects
- Full mobile support

---

**Built with ❤️ for AD Group**
