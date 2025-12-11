# Quick Editing Guide for AD Group Website

## 🎨 Common Edits You'll Want to Make

### 1. Change Company Name
**File**: `index.html`
**Line**: 19-20

```html
<span class="logo-text">AD GROUP</span>
<span class="logo-tagline">Oil & Gas Excellence</span>
```

### 2. Update Contact Information
**File**: `index.html`
**Lines**: 380-407

```html
<h4>Office Address</h4>
<p>Energy Tower, Level 24<br>Oil & Gas District<br>Houston, TX 77002</p>

<h4>Phone</h4>
<p>+1 (555) 123-4567<br>+1 (555) 123-4568</p>

<h4>Email</h4>
<p>info@adgroup-oil.com<br>sales@adgroup-oil.com</p>
```

### 3. Change Colors
**File**: `styles.css`
**Lines**: 5-9

```css
--primary-color: #D4AF37;    /* Gold - change to your brand color */
--accent-color: #FF8C42;     /* Orange - change to your accent */
--dark-bg: #0D1117;          /* Dark navy - change background */
```

### 4. Update Hero Text
**File**: `index.html`
**Lines**: 45-51

```html
<span class="hero-title-main">Powering the Future</span>
<span class="hero-title-sub">Energy Solutions & Excellence</span>
<p class="hero-description">
    Leading provider of comprehensive oil & gas services...
</p>
```

### 5. Change Statistics
**File**: `index.html`
**Lines**: 57-67

```html
<div class="stat-number" data-count="500">0</div>  <!-- Change 500 to your number -->
<div class="stat-label">Projects Completed</div>

<div class="stat-number" data-count="25">0</div>   <!-- Change 25 to years -->
<div class="stat-label">Years Experience</div>

<div class="stat-number" data-count="98">0</div>   <!-- Change 98 to percentage -->
<div class="stat-label">Client Satisfaction</div>
```

### 6. Add Your Own Images

#### Replace About Section Image
**File**: `index.html`
**Line**: 125

```html
<!-- Current: -->
<img src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80" alt="Oil rig operations" class="about-img">

<!-- Replace with your image: -->
<img src="images/your-photo.jpg" alt="Your description" class="about-img">
```

First, create an `images` folder:
1. Open `ad-group-website` folder
2. Create new folder named `images`
3. Put your photos there
4. Reference them as `images/photo-name.jpg`

#### Replace Project Images
**File**: `index.html`
**Lines**: 267, 285, 303

```html
<!-- Project 1 -->
<img src="images/project1.jpg" alt="Your project">

<!-- Project 2 -->
<img src="images/project2.jpg" alt="Your project">

<!-- Project 3 -->
<img src="images/project3.jpg" alt="Your project">
```

### 7. Edit Services
**File**: `index.html`
**Lines**: 144-251

Each service card looks like this:
```html
<div class="service-card">
    <div class="service-icon">🔧</div>  <!-- Change emoji -->
    <h3>Drilling Services</h3>           <!-- Change title -->
    <p>Description here...</p>            <!-- Change description -->
    <ul class="service-list">
        <li>Service item 1</li>          <!-- Change items -->
        <li>Service item 2</li>
        <li>Service item 3</li>
        <li>Service item 4</li>
    </ul>
</div>
```

### 8. Update Projects
**File**: `index.html`
**Lines**: 272-315

```html
<div class="project-content">
    <h3>Deep Water Exploration</h3>  <!-- Change project name -->
    <p>Project description...</p>     <!-- Change description -->
    <div class="project-stats">
        <span class="project-stat">12 Wells</span>      <!-- Change stats -->
        <span class="project-stat">6 Months</span>
        <span class="project-stat">$50M Value</span>
    </div>
</div>
```

### 9. Change Font
**File**: `index.html`
**Line**: 11

```html
<!-- Current font: Poppins -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">

<!-- Popular alternatives: -->

<!-- Montserrat (Modern) -->
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">

<!-- Roboto (Clean) -->
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet">

<!-- Open Sans (Professional) -->
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap" rel="stylesheet">
```

Then update **styles.css** line 51:
```css
font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
/* Change 'Poppins' to 'Montserrat' or your chosen font */
```

### 10. Connect Contact Form to Email

**File**: `script.js`
**Lines**: 155-194

#### Option A: Use Formspree (Easiest)
1. Go to https://formspree.io
2. Sign up (free)
3. Create a new form
4. Copy your endpoint URL
5. Replace the form submission code:

```javascript
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    
    try {
        const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            showNotification('Thank you! We\'ll get back to you soon.', 'success');
            contactForm.reset();
        } else {
            showNotification('Oops! There was a problem.', 'error');
        }
    } catch (error) {
        showNotification('Failed to send message.', 'error');
    }
});
```

#### Option B: Use EmailJS
1. Go to https://www.emailjs.com
2. Sign up (free)
3. Follow setup wizard
4. Get your service ID, template ID, and public key
5. Add EmailJS script to `index.html` before closing `</body>`:

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
<script type="text/javascript">
    (function(){
        emailjs.init("YOUR_PUBLIC_KEY");
    })();
</script>
```

Then update form handler in `script.js`:

```javascript
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', contactForm)
        .then(() => {
            showNotification('Message sent successfully!', 'success');
            contactForm.reset();
        }, (error) => {
            showNotification('Failed to send message.', 'error');
        });
});
```

## 🛠️ Editing Tools

### Free Code Editors:
1. **VS Code** (Best) - https://code.visualstudio.com
2. **Notepad++** - https://notepad-plus-plus.org
3. **Sublime Text** - https://www.sublimetext.com
4. **Atom** - https://atom.io

### VS Code Setup:
1. Download and install VS Code
2. Open VS Code
3. File → Open Folder → Select `ad-group-website`
4. Install extensions:
   - Live Server (for live preview)
   - HTML CSS Support
   - Auto Rename Tag

### Using Live Server in VS Code:
1. Install "Live Server" extension
2. Right-click on `index.html`
3. Select "Open with Live Server"
4. Browser opens automatically
5. **Changes appear instantly** when you save!

## 💾 Backing Up Your Changes

Before making major edits:
1. Copy the entire `ad-group-website` folder
2. Rename it to `ad-group-website-backup`
3. Now edit the original
4. If something breaks, restore from backup

## 🎨 Quick Color Changes

Want different colors? Here are some professional palettes:

### Blue Professional
```css
--primary-color: #0066CC;
--accent-color: #00A8E8;
```

### Green Energy
```css
--primary-color: #10B981;
--accent-color: #34D399;
```

### Red Power
```css
--primary-color: #DC2626;
--accent-color: #F87171;
```

### Purple Luxury
```css
--primary-color: #7C3AED;
--accent-color: #A78BFA;
```

## 📝 Testing Your Changes

After editing:
1. Save all files (Ctrl + S)
2. Refresh browser (F5 or Ctrl + R)
3. Check on mobile (browser dev tools F12 → Toggle device toolbar)
4. Test all links and buttons
5. Fill out contact form to test

## ⚠️ Common Mistakes to Avoid

1. **Missing closing tags** - Every `<div>` needs `</div>`
2. **Typos in file paths** - `images/photo.jpg` not `image/photo.jpg`
3. **Forgetting quotes** - `src="image.jpg"` not `src=image.jpg`
4. **Wrong colors** - Use `#` before hex colors: `#D4AF37`
5. **Breaking CSS** - Missing semicolons `;` at end of lines

## 🆘 If Something Breaks

1. **Undo your last change** (Ctrl + Z)
2. **Check browser console** (F12 → Console tab) for errors
3. **Restore from backup** if you made one
4. **Re-download original** if needed

## 📱 Preview on Different Devices

In Chrome/Edge:
1. Press **F12** (opens DevTools)
2. Click **Toggle Device Toolbar** icon (or Ctrl + Shift + M)
3. Select device (iPhone, iPad, etc.)
4. See how site looks on mobile/tablet

---

**Pro Tip**: Make small changes and test frequently. Don't change 10 things at once!
