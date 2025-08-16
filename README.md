# natoshi.exe — Link in Bio

A high-tech, cyberpunk-styled link-in-bio page built with vanilla HTML, CSS, and JavaScript. Features glassmorphism effects, theme switching, and smooth animations.

![Preview](assets/og-image.png)

## ✨ Features

- **3 Themes**: Noir (black/charcoal), Dusk (blue-gray, default), Vapor (dark purple)
- **4 Accent Colors**: Cyan, Magenta, Lima, Amber
- **Glassmorphism Effects**: Backdrop blur, neon borders, hover animations
- **Parallax Background**: Radial glow that follows mouse movement
- **Responsive Design**: Works perfectly on mobile and desktop
- **Accessibility**: Keyboard navigation, screen reader support
- **Performance**: Lazy loading, optimized animations, no external dependencies

## 🚀 Quick Start

### 1. Clone or Download
```bash
git clone https://github.com/yourusername/natoshi-exe.git
cd natoshi-exe
```

### 2. Customize Content
Edit `index.html` to update:
- Title and bio text
- Social media links
- Profile information

### 3. Replace Assets
- **Logo**: Replace `/assets/logo.png` with your own logo (64x64px recommended)
- **Gallery Images**: Add your photos to `/assets/gallery-1.jpg`, `/assets/gallery-2.jpg`, `/assets/gallery-3.jpg`
- **OG Image**: Update `/assets/og-image.png` for social media previews

### 4. Deploy to GitHub Pages

1. **Create Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` / `/ (root)`
   - Save

3. **Your site will be available at**: `https://yourusername.github.io/your-repo-name`

## 🎨 Customization

### Changing Themes and Colors

The design system uses CSS custom properties. Edit `styles/main.css`:

```css
:root {
  /* Themes */
  --theme-noir-bg: #0a0a0a;
  --theme-dusk-bg: #0f1419;    /* Default */
  --theme-vapor-bg: #1a0f2e;
  
  /* Accents */
  --accent-cyan: #00ffe1;      /* Default */
  --accent-magenta: #ff4bd8;
  --accent-lima: #b4ff39;
  --accent-amber: #ffc24b;
}
```

### Adding New Themes

1. Add theme variables to `:root`
2. Create theme class in CSS
3. Update JavaScript theme array in `scripts/app.js`

### Modifying Animations

Key animations are defined in `styles/main.css`:

```css
@keyframes glitch {
  0%, 100% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  /* ... */
}

@keyframes gradient-shift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
```

## 📱 Content Structure

### Main Content (`index.html`)
```html
<!-- Profile Section -->
<div class="profile">
  <h1 class="title">natoshi.exe</h1>
  <div class="bio">
    <p>somewhere between git, bpm and iso.</p>
    <p>i make music. sometimes. shoot photos. also sometimes. kinda.</p>
  </div>
</div>

<!-- Social Links -->
<nav class="links">
  <a href="https://instagram.com/your-handle" class="link-card">
    <!-- Instagram icon and text -->
  </a>
  <!-- More links... -->
</nav>
```

### Social Media Links
Update these URLs in `index.html`:
- Instagram: `https://www.instagram.com/natoshi.exe`
- TikTok: `https://www.tiktok.com/@natoshi.raw`
- YouTube: `https://www.youtube.com/@natoshi.404`

## 🔧 Technical Details

### File Structure
```
natoshi-exe/
├── index.html              # Main page
├── 404.html               # Error page
├── styles/
│   └── main.css           # All styles
├── scripts/
│   └── app.js             # All JavaScript
├── assets/
│   ├── logo.png           # Your logo
│   ├── og-image.png       # Social preview image
│   ├── icons/             # SVG icons
│   └── gallery-*.jpg      # Gallery images
├── README.md
└── LICENSE
```

### Browser Support
- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

### Performance Features
- **Lazy Loading**: Gallery images load on scroll
- **Optimized Animations**: Respects `prefers-reduced-motion`
- **No External Dependencies**: Everything is self-contained
- **Minimal Bundle**: Under 50KB total

## 🎯 Accessibility

- **Keyboard Navigation**: All interactive elements are keyboard accessible
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **Focus Indicators**: Visible focus states for all interactive elements
- **Color Contrast**: AA compliant contrast ratios
- **Reduced Motion**: Respects user's motion preferences

## 🔍 SEO & Social Media

### Meta Tags
The page includes comprehensive meta tags for:
- Open Graph (Facebook, LinkedIn)
- Twitter Cards
- Search engines
- Mobile optimization

### Social Preview
Update `/assets/og-image.png` (1200x630px recommended) for social media previews.

## 🛠️ Development

### Local Development
1. Clone the repository
2. Open `index.html` in a browser
3. Or use a local server:
   ```bash
   python -m http.server 8000
   # or
   npx serve .
   ```

### Building for Production
No build step required! The project is ready to deploy as-is.

### Custom Domain
To use a custom domain with GitHub Pages:
1. Add a `CNAME` file to the root with your domain
2. Configure DNS settings
3. Update GitHub Pages settings

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

If you have questions or need help:
- Open an issue on GitHub
- Check the documentation above
- Review the code comments

---

**Built with ❤️ by natoshi**

*This project is designed to be a starting point for your own link-in-bio page. Feel free to customize it to match your brand and style!*
