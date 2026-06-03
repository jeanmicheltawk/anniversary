# 🚀 SETUP GUIDE - Quick Start in 5 Minutes

## Step 1: Open the Website (30 seconds)

Simply open `index.html` in your web browser. That's it! No installation needed.

## Step 2: View Your Story (2 minutes)

Explore all 10 sections:

- Click "Open Our Story" button
- Scroll through the timeline
- View the gallery
- Click reason cards to flip them
- Check the invitation details
- Try the secret message (password: "wine opener")

## Step 3: Customize Your Content (2-3 minutes)

### Option A: Easy Way (Copy & Paste)

1. Open `script.js` in a text editor (Notepad, VS Code, etc.)
2. Find the line: `const ANNIVERSARY_CONFIG = {`
3. Replace the content inside following the examples
4. Save the file (Ctrl+S)
5. Refresh browser to see changes

### Option B: Replace Everything

**Timeline:** Find this section and update:

```javascript
milestones: [
  {
    date: "June 8, 2025",
    title: "The Wine Opener Moment",
    description: "At my sister's bachelorette party...",
  },
  // Add your milestones here
];
```

**Photos:** Replace the entire array:

```javascript
photos: [
  { src: "URL_HERE", caption: "Your caption" },
  // Add all your photos
];
```

**Reasons:** Update each reason:

```javascript
reasons: [
  { emoji: "😊", title: "Title", description: "Your description" },
  // Add more
];
```

**Dreams:** Update future plans:

```javascript
dreams: [
  { emoji: "✈️", title: "Travel", description: "Description" },
  // Add more
];
```

**Secret Message:**

```javascript
secretPassword: 'wine opener',  // Keep this or change it
secretMessage: 'Your hidden message here...',
```

## Step 4: Personalize Text (Optional)

### Love Letter

1. Open `index.html` in text editor
2. Find `<div class="letter-text" id="letterText">`
3. Edit the paragraphs between the `<p>` tags
4. Save and refresh

### Invitation Card

1. Find `<section class="invitation" id="invitationSection">`
2. Edit the date, time, and details
3. Customize the invitation message

## Step 5: Add Your Photos (Important!)

### Method 1: Use URLs (Easiest)

1. Find your photos on:
   - Instagram (get image URL by right-click)
   - Your cloud storage (Google Photos, OneDrive)
   - Free sites (Unsplash, Pexels, Pixabay)
2. Copy image URL
3. Paste in `photos` array:

```javascript
{ src: 'https://your-image-url.jpg', caption: 'Our memory' }
```

### Method 2: Upload Local Photos

1. Create `images` folder next to `index.html`
2. Add your photos there (photo1.jpg, photo2.jpg, etc.)
3. Reference in script:

```javascript
{ src: 'images/photo1.jpg', caption: 'Us in Paris' }
```

### Method 3: Mix Both

```javascript
photos: [
  { src: "images/local-photo.jpg", caption: "Local" },
  { src: "https://external-url.jpg", caption: "External" },
];
```

## Editing Checklist

- [ ] Replace timeline with your milestones
- [ ] Add your photos (at least 6-8 for great gallery)
- [ ] Update reasons you love them (feel-good part!)
- [ ] Add future dreams together
- [ ] Keep or change the secret password
- [ ] Update the love letter (make it personal!)
- [ ] Customize invitation date/time
- [ ] Test in browser (Ctrl+Shift+R to hard refresh)

## Testing Your Changes

1. Make a change in `script.js`
2. Save the file (Ctrl+S)
3. Go to browser
4. Refresh page (F5 or Ctrl+R)
5. Look for your changes
6. If not visible, try hard refresh (Ctrl+Shift+R)

**Note:** On Windows, you might need to use Notepad++ or VS Code instead of plain Notepad for better compatibility.

## Common Changes Quick Reference

### Change Pink Color

Find: `--accent-pink: #ec4899;`
Change to: `--accent-pink: #ff1493;` (or any hex color)

### Make Text Larger

Find: `font-size: 1rem;`
Change to: `font-size: 1.2rem;` (or larger)

### Speed Up Animations

Find: `--transition-slow: 0.5s ease;`
Change to: `--transition-slow: 0.3s ease;`

### Turn Off Music by Default

Find: `musicPlaying = false;` in script.js (or add this line)

### Add More Timeline Items

Copy one milestone block and paste below it:

```javascript
{
    date: 'YOUR_DATE',
    title: 'YOUR_TITLE',
    description: 'YOUR_DESCRIPTION'
},
```

## Sharing Your Website

### Free Hosting Options

**GitHub Pages (Best for tech-savvy)**

1. Create GitHub account
2. Create new repository
3. Upload index.html, styles.css, script.js
4. Enable GitHub Pages in settings
5. Share the URL

**Netlify Drop (Easiest)**

1. Go to netlify.com
2. Drag and drop your folder
3. Get instant URL to share
4. Works immediately!

**Vercel**

1. Go to vercel.com
2. Connect your GitHub or upload files
3. Deploy with one click

### Share Via

- Text/WhatsApp: Send URL
- Email: "Check our anniversary story: [link]"
- Social Media: Post the link
- QR Code: Generate from your URL

## Before You Share

✅ **Checklist:**

- [ ] Tested all links work
- [ ] Photos load properly
- [ ] All text is personalized
- [ ] Secret password is set correctly
- [ ] Tested on mobile (open DevTools)
- [ ] Tested in different browser
- [ ] No broken images (missing alt images)
- [ ] Music/sounds are working (optional)

## Troubleshooting

**Images not showing?**
→ Check the URL is correct and accessible
→ Try a different image source

**Text changes not appearing?**
→ Hard refresh browser (Ctrl+Shift+R on Windows)
→ Clear browser cache

**Website looks broken on mobile?**
→ Open DevTools (F12)
→ Click mobile icon to test
→ Check all sections are responsive

**Music not playing?**
→ Click the sound button 🔊 to enable
→ Check browser permissions

**Can't edit files?**
→ Open with Notepad, VS Code, or Sublime Text
→ Not Microsoft Word! (it adds formatting)
→ Make sure to save as plain text

## Pro Tips

💡 **Make it Extra Special:**

- Add 15-20 photos for full gallery
- Include personal inside jokes in descriptions
- Use high-quality images
- Record a secret audio message (advanced)
- Add a custom ending note

💡 **Easy Personalization:**

- Use emojis in titles and descriptions
- Add specific dates and times
- Include song lyrics or quotes
- Reference special places you've been

💡 **Mobile Friendly:**

- Test scrolling works smoothly
- Check touch interactions
- Ensure text is readable
- Test on landscape orientation

## Final Step: Share & Celebrate!

1. Share the link 2-3 hours before your Zoom call
2. Give her time to explore
3. Ask what her favorite section was
4. Celebrate together! 🎉

---

**You're all set! This website is your personal love story. Make it yours. 💕**

Need more help? Check the README.md file for detailed documentation.
