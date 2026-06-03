# 💕 Happy Anniversary - Digital Love Story Website

A premium, cinematic anniversary website celebrating one year of love across the miles. This website serves as an invitation, memory book, and digital love story all in one.

## ✨ Features

- **Modern Glassmorphism Design** - Premium 2026-level UI/UX
- **Animated Starfield** - Beautiful twinkling stars background
- **Smooth Scroll Animations** - Every element flows beautifully
- **10 Stunning Sections** - From hero to ending
- **Music Toggle** - Background music with volume control
- **Dark/Light Theme** - Toggle between themes
- **Fully Responsive** - Perfect on mobile and desktop
- **Sound Effects** - Interactive audio feedback
- **Confetti Animations** - Celebrate special moments
- **Custom Cursor** - Heart-shaped cursor effect
- **Secret Message** - Locked section with password
- **Beautiful Typography** - Premium fonts and spacing
- **Performance Optimized** - Fast loading and smooth animations

## 📁 Project Structure

```
anniversary-website/
├── index.html          # Main HTML structure
├── styles.css          # All styling and animations
├── script.js           # Interactivity and customization
└── README.md           # This file
```

## 🚀 Quick Start

1. **Open in Browser**: Simply open `index.html` in your web browser
2. **No Server Required**: This is a static website - it works offline
3. **Customize Content**: Edit `script.js` to add your personal details (see below)
4. **Share**: Upload to any web hosting (GitHub Pages, Vercel, Netlify, etc.)

## 🎨 Customization Guide

### Edit Your Story Data

All customizable content is in `script.js` under the `ANNIVERSARY_CONFIG` object. Here's what to change:

#### 1. **Timeline Milestones** (IMPORTANT - OUR STORY)

```javascript
milestones: [
  {
    date: "June 8, 2025",
    title: "The Wine Opener Moment",
    description:
      "At my sister's bachelorette party, I reached for a wine opener and found you instead. A simple moment that changed everything.",
  },
  {
    date: "June 15, 2025",
    title: "Our First Call",
    description:
      "Hours on the phone, getting to know you, nervous laughter, endless conversation. That's when I knew.",
  },
  // Add more milestones...
];
```

**Add your milestones:**

- Date of each important moment
- Title of the event
- Description of what happened

#### 2. **Memory Photos**

```javascript
photos: [
  { src: "URL_OR_PATH", caption: "Photo description" },
  { src: "https://example.com/photo.jpg", caption: "Our sunset in Paris" },
  // Add more photos...
];
```

**Options for photos:**

- Use URLs from Unsplash, Pexels, or your own website
- Use local file paths (place images in the same folder)
- Use Base64 encoded images
- Add up to 20+ photos

#### 3. **Reasons I Love You**

```javascript
reasons: [
  {
    emoji: "😊",
    title: "Your Smile",
    description: "That smile melts my heart every single time...",
  },
  // Add more reasons...
];
```

**Add your own reasons:**

- Choose an emoji for each reason
- Add a title
- Write a heartfelt description

#### 4. **Future Dreams**

```javascript
dreams: [
  {
    emoji: "✈️",
    title: "Travel Together",
    description: "Exploring the world, one sunset at a time...",
  },
  // Add more dreams...
];
```

#### 5. **Secret Password & Message**

```javascript
secretPassword: 'wine opener',  // Change this!
secretMessage: '💕 You know what my favorite memory is...',  // Your secret message
```

**Set a password** - The user must enter this to see the secret message. In your case, "wine opener" is already set from your story!

### 3. **Modify Text Content**

#### Love Letter

Edit the letter in `index.html`:

```html
<div class="letter-text" id="letterText">
  <p>My Dearest Love,</p>
  <p>A year ago, on June 8th, 2025...</p>
  <!-- Edit this section with your letter -->
</div>
```

#### Invitation Details

Edit in `index.html`:

```html
<div class="invitation-card">
  <!-- Change date, time, and details here -->
</div>
```

### 4. **Add Your Photos**

**Option A: Use URLs**

```javascript
{ src: 'https://your-website.com/photo1.jpg', caption: 'Us in Paris' }
```

**Option B: Upload Photos Locally**

1. Create an `images` folder in the project
2. Add your photos there (jpg, png, webp)
3. Reference them:

```javascript
{ src: 'images/photo1.jpg', caption: 'Us in Paris' }
```

### 5. **Color Customization**

Change the color palette in `styles.css`:

```css
:root {
  --accent-pink: #ec4899; /* Romantic pink */
  --accent-purple: #8b5cf6; /* Deep purple */
  --accent-blue: #3b82f6; /* Soft blue */
  --accent-gold: #fbbf24; /* Gold accents */
}
```

### 6. **Change Background Music**

In `script.js`, modify the audio source:

```html
<audio id="bgMusic" loop preload="auto">
  <source src="https://your-music-url.mp3" type="audio/mpeg" />
</audio>
```

**Free music sources:**

- Pexels Music (pexels.com/music)
- Pixabay (pixabay.com/music)
- YouTube Audio Library
- Free Music Archive

### 7. **Adjust Timeline**

The timeline automatically shows in order. Add entries for:

- The day you met
- First phone call
- First virtual date
- Favorite memory
- Anniversary date

## 🎬 Sections Overview

1. **Hero** - Beautiful opening with animated title and call-to-action
2. **Love Letter** - Heartfelt message with typewriter animation
3. **Timeline** - Interactive journey through your story
4. **Gallery** - Photo memories with lightbox
5. **Reasons** - Flip cards showing why you love them
6. **Counter** - Your love by numbers (365 days, etc.)
7. **Dreams** - Future aspirations together
8. **Invitation** - Anniversary celebration details
9. **Secret** - Locked message with password (wine opener!)
10. **Ending** - Cinematic finale with floating hearts

## 🎮 Interactive Features

### Music Control (Top Right)

- Click 🔊 to toggle background music
- Or press **M** key

### Theme Toggle (Top Right)

- Click 🌙 to switch dark/light mode
- Or press **T** key

### Photo Gallery

- Click any photo to open lightbox
- Close with X or click outside

### Reason Cards

- Click cards to flip and reveal descriptions

### Secret Message

- Enter "wine opener" to unlock hidden message

### RSVP

- Click button to confirm attendance

## 📱 Mobile & Desktop

The website is fully responsive:

- **Desktop**: Optimal experience at 1920x1080+
- **Tablet**: Fully functional with touch controls
- **Mobile**: Optimized for 480px+ width

Test on different devices by:

1. Pressing F12 in browser
2. Clicking device toggle (mobile icon)
3. Selecting different screen sizes

## 🌐 Deployment

### GitHub Pages (Free)

1. Create GitHub repository
2. Upload files
3. Enable GitHub Pages in settings
4. Share the link!

### Netlify (Free)

1. Go to netlify.com
2. Drag and drop folder
3. Get instant URL

### Vercel (Free)

1. Go to vercel.com
2. Import project
3. Deploy with one click

### Traditional Hosting

1. Upload files via FTP/SFTP
2. Share the URL

## 🎵 Audio Files

The website uses free, royalty-free audio from Mixkit for:

- Background music
- Hover sounds
- Click sounds
- Success sounds

All are embedded via free CDN links and will work offline (mostly).

## 🛠️ Troubleshooting

### Photos not loading?

- Ensure URLs are correct
- Check internet connection
- Use HTTPS URLs (not HTTP)
- Try different image sources

### Music not playing?

- Check browser settings (autoplay restrictions)
- Manually click music toggle button
- Use .mp3 files for best compatibility

### Performance issues?

- Reduce number of photos
- Use compressed images
- Disable particle effects (edit CSS)
- Close other browser tabs

### Theme not saving?

- Browser local storage might be disabled
- Clear cache and cookies
- Allow local storage in privacy settings

## 📝 Tips & Tricks

1. **Make it Personal** - Add inside jokes in descriptions
2. **Use Quality Photos** - High resolution photos look better
3. **Test First** - Open in multiple browsers before sharing
4. **Add More Sections** - Edit HTML to add custom sections
5. **Change Font** - Modify font-family in CSS
6. **Adjust Timing** - Change animation-duration for speed
7. **Add Video** - Embed YouTube videos in sections
8. **Social Share** - Add share buttons if deployed online

## 💝 Sharing Your Website

### Via Link

Simply share the URL with her!

### Via Social Media

- Post link on Instagram, Facebook, WhatsApp
- Works perfectly on mobile

### QR Code

- Generate QR code from your URL
- Send as image for surprise reveal

### Email

Send as:

```
Subject: Happy Anniversary 💕
Body: Click here to see our love story: [YOUR_LINK]
```

## 🎓 Advanced Customization

### Change Animation Speed

In `styles.css`:

```css
--transition-slow: 0.5s ease; /* Change 0.5s to your preference */
```

### Add Custom Fonts

In `styles.css`:

```css
@import url("https://fonts.googleapis.com/css2?family=YOUR_FONT&display=swap");
--font-sans: "Your Font", sans-serif;
```

### Modify Colors

Every color has a CSS variable. Change them in `:root` section.

### Add More Sections

Copy an existing section HTML and modify the class names.

## 🚨 Important Notes

- ✅ Fully works offline (except remote images and music)
- ✅ All animations are GPU-accelerated (smooth performance)
- ✅ No tracking or analytics (privacy first!)
- ✅ No database required
- ✅ No backend required
- ✅ Completely free to use and modify

## 🎊 Anniversary Ideas

Before your Zoom date:

1. Share the website 2-3 hours before
2. Let her explore and click through
3. Watch her reaction on the call!
4. Have wine ready 🍷
5. Prepare a toast to another year

## 📞 Need Help?

### Common Issues:

1. Can't see images? → Check image URLs in script.js
2. Music won't play? → Click the 🔊 button first
3. Mobile looks wrong? → Check viewport settings
4. Animation too fast? → Adjust CSS animation times

### Solutions:

- Clear browser cache (Ctrl+Shift+Delete)
- Try different browser
- Check console for errors (F12 → Console tab)
- Test with sample images first

## 🎨 Color Palette Reference

Current colors (editable):

- **Primary Dark**: #0f0f1e (night sky)
- **Primary Light**: #f5f5ff (clouds)
- **Accent Pink**: #ec4899 (romantic)
- **Accent Purple**: #8b5cf6 (elegant)
- **Accent Blue**: #3b82f6 (calm)
- **Accent Gold**: #fbbf24 (luxury)

## 📊 File Sizes

- HTML: ~40 KB
- CSS: ~80 KB
- JavaScript: ~35 KB
- **Total: ~155 KB** (very lightweight)

Fast loading, even on slow connections!

## 🔐 Privacy & Security

- No data collection
- No cookies (except local theme preference)
- No backend tracking
- Works completely offline
- Your data stays on your device

## 🎁 Gift Ideas Using This Site

1. Print QR code to physical gift
2. Frame the final message
3. Create a photo book from gallery
4. Use the secret message in vows
5. Share link in anniversary announcement

---

**Made with ❤️ for you and your love story.**

_Happy Anniversary! May this website capture just a fraction of the love you share._

For any questions or custom features, feel free to modify the code - it's yours to make perfect!
"# anniversary" 
