# 🎯 CUSTOMIZATION INDEX - Find What to Edit

## Quick Navigation

### 🖋️ Text Content

| Item                | Location       | What to Change      | Example                          |
| ------------------- | -------------- | ------------------- | -------------------------------- |
| Love Letter         | `index.html`   | Entire letter text  | "My Dearest Love, A year ago..." |
| Section Titles      | Auto-generated | Edit in HTML        | "Our Timeline", "Our Memories"   |
| Invitation Date     | `index.html`   | Date and time       | June 8, 19:00                    |
| Timeline Milestones | `script.js`    | 6 milestone entries | Dates, titles, descriptions      |
| Reason Cards        | `script.js`    | 6 reason entries    | Emoji, title, description        |
| Dream Cards         | `script.js`    | 6 dream entries     | Emoji, title, description        |
| Secret Password     | `script.js`    | One password string | "wine opener"                    |
| Secret Message      | `script.js`    | Locked message text | Your hidden love note            |

---

### 📸 Images & Photos

| Item           | Location     | What to Change             | Method              |
| -------------- | ------------ | -------------------------- | ------------------- |
| Gallery Photos | `script.js`  | Photo URLs & captions      | URLs or local files |
| Background     | `styles.css` | Gradient & animation       | Color codes         |
| Emojis         | `script.js`  | Icon for each reason/dream | Any emoji           |

---

### 🎨 Styling

| Item                | Location            | File         | Change What           |
| ------------------- | ------------------- | ------------ | --------------------- |
| Primary Colors      | `:root`             | `styles.css` | `--accent-pink`, etc. |
| Text Size           | `section-header h2` | `styles.css` | `font-size` value     |
| Animation Speed     | `--transition-*`    | `styles.css` | Duration (e.g., 0.5s) |
| Background Gradient | `body`              | `styles.css` | `background` property |
| Font Family         | `--font-sans`       | `styles.css` | Font name             |
| Spacing             | `--spacing-*`       | `styles.css` | Size values           |

---

### 🎵 Audio

| Item             | Location     | Change What    | Where     |
| ---------------- | ------------ | -------------- | --------- |
| Background Music | `index.html` | `<source src=` | Audio URL |
| Hover Sound      | `index.html` | `<source src=` | Audio URL |
| Click Sound      | `index.html` | `<source src=` | Audio URL |
| Success Sound    | `index.html` | `<source src=` | Audio URL |

---

### ⚙️ Settings

| Item            | Location     | Change What       | Value             |
| --------------- | ------------ | ----------------- | ----------------- |
| Music Default   | `script.js`  | `musicPlaying =`  | `true` or `false` |
| Theme Default   | `script.js`  | `darkMode =`      | `true` or `false` |
| Auto-play Music | `index.html` | Remove `preload=` | For privacy       |

---

## Detailed Edit Locations

### File 1: `script.js` - Main Configuration

**Lines to find and edit:**

```javascript
// SECTION 1: Anniversary Date (around line 10)
anniversaryDate: new Date("2025-06-08");

// SECTION 2: Timeline (around line 13)
milestones: [
  { date: "...", title: "...", description: "..." },
  // Edit these 6 items
];

// SECTION 3: Photos (around line 37)
photos: [
  { src: "...", caption: "..." },
  // Edit/add your photos
];

// SECTION 4: Reasons (around line 57)
reasons: [
  { emoji: "...", title: "...", description: "..." },
  // Edit these 6 reasons
];

// SECTION 5: Dreams (around line 73)
dreams: [
  { emoji: "...", title: "...", description: "..." },
  // Edit these 6 dreams
];

// SECTION 6: Secret (around line 89)
secretPassword: "wine opener";
secretMessage: "...";
```

---

### File 2: `index.html` - Text Content

**Sections to find and edit:**

```html
<!-- SECTION 1: Hero Title (around line 75) -->
<h1 class="hero-title">Happy First Anniversary ❤️</h1>
<p class="hero-subtitle">A year of love, laughter, patience, and memories.</p>

<!-- SECTION 2: Love Letter (around line 130) -->
<div class="letter-text" id="letterText">
  <p>My Dearest Love,</p>
  <!-- EDIT ALL THE PARAGRAPHS HERE -->
</div>

<!-- SECTION 3: Invitation Details (around line 260) -->
<div class="detail-item">
  <p class="detail-value">June 8, 2026</p>
  <input type="time" id="invitationTime" value="19:00" />
</div>

<!-- SECTION 4: Secret Message Setup (around line 290) -->
<p class="hint">Hint: Think about where you found me at the party...</p>
<!-- EDIT THE HINT TOO -->
```

---

### File 3: `styles.css` - Design

**Key sections to customize:**

```css
/* Line 12-22: Color Variables */
:root {
  --accent-pink: #ec4899; /* EDIT THESE COLORS */
  --accent-purple: #8b5cf6;
  --accent-blue: #3b82f6;
  --accent-gold: #fbbf24;
}

/* Line 150-153: Hero Title Size */
.hero-title {
  font-size: 5rem; /* CHANGE THIS NUMBER */
}

/* Line 40-49: Animation Speeds */
:root {
  --transition-fast: 0.2s ease;
  --transition-slow: 0.5s ease; /* CHANGE THESE */
}

/* Line 200+: Each section styling */
.section {
  background: linear-gradient(...); /* CHANGE COLORS */
}
```

---

## Edit Priority (Start Here)

### Must Edit (Important!)

1. ✅ Timeline milestones (your story!)
2. ✅ Secret password (keep it!)
3. ✅ Love letter (personal touch!)
4. ✅ Reasons (why you love them)

### Should Edit (Personalization)

5. ⭐ Photo gallery
6. ⭐ Dreams together
7. ⭐ Invitation time
8. ⭐ Secret message

### Can Edit (Optional)

9. 💡 Colors
10. 💡 Fonts
11. 💡 Animation speed
12. 💡 Background music

---

## Edit Workflow

### Step 1: Open Files

```
Open these in your text editor:
- script.js (main content)
- index.html (text)
- styles.css (colors & design)
```

### Step 2: Find & Replace

**Timeline - Find:**

```javascript
milestones: [
    {
        date: 'June 8, 2025',
        title: 'The Wine Opener Moment',
```

**Timeline - Replace with:**

```javascript
milestones: [
    {
        date: 'YOUR_DATE',
        title: 'YOUR_TITLE',
```

### Step 3: Verify

1. Save file (Ctrl+S)
2. Refresh browser (F5)
3. Check your changes appear
4. Repeat for other sections

---

## Common Edits Reference

### Change These Exact Lines:

**In script.js:**

```javascript
// Line 13: Change date
anniversaryDate: new Date('2025-06-08'),

// Line 17: Edit milestone 1
{
    date: 'June 8, 2025',  // ← CHANGE
    title: 'The Wine Opener Moment',  // ← CHANGE
    description: 'At my sister\'s bachelorette party...'  // ← CHANGE
},

// Line 41: Add first photo
{ src: 'https://images.unsplash.com/...', caption: 'Edit me' },  // ← CHANGE

// Line 62: Edit first reason
{ emoji: '😊', title: 'Your Smile', description: '...' },  // ← CHANGE

// Line 88: Edit first dream
{ emoji: '✈️', title: 'Travel Together', description: '...' },  // ← CHANGE

// Line 99: Set password
secretPassword: 'wine opener',  // ← KEEP OR CHANGE

// Line 100: Set secret message
secretMessage: 'You know what my favorite memory is...',  // ← CHANGE
```

**In index.html:**

```html
<!-- Line 75: Hero title -->
<h1 class="hero-title">Happy First Anniversary ❤️</h1>
<!-- ← CHANGE -->

<!-- Line 135-145: Love letter paragraphs -->
<p>My Dearest Love,</p>
<!-- ← CHANGE ALL PARAGRAPHS -->

<!-- Line 265: Invitation time -->
<input type="time" id="invitationTime" value="19:00" />
<!-- ← CHANGE TIME -->

<!-- Line 292: Secret hint -->
<p class="hint">Hint: Think about where you found me...</p>
<!-- ← CHANGE HINT -->
```

**In styles.css:**

```css
/* Line 16: Pink color */
--accent-pink: #ec4899; /* ← CHANGE COLOR CODE */

/* Line 18: Purple color */
--accent-purple: #8b5cf6; /* ← CHANGE COLOR CODE */

/* Line 155: Title size */
.hero-title {
  font-size: 5rem; /* ← CHANGE THIS NUMBER */
}
```

---

## Find Everything Easily

### Search in Text Editor:

```
Find "wine opener" → Shows where password is
Find "Paris" → Shows all photo/text references
Find "--accent-pink" → Shows color definitions
Find "milestones:" → Shows timeline section
Find "reasons:" → Shows reasons section
Find "dreams:" → Shows dreams section
```

---

## Backup Before Editing

**Safety Tips:**

1. Copy entire `script.js` to `script-backup.js`
2. Make changes to original
3. If something breaks, restore from backup
4. Test changes in browser before final

---

## Quick Copy-Paste Blocks

### Add a New Timeline Milestone:

```javascript
{
    date: 'YOUR_DATE',
    title: 'YOUR_TITLE',
    description: 'Your description here.'
},
```

### Add a New Photo:

```javascript
{ src: 'https://your-image-url.jpg', caption: 'Your caption' },
```

### Add a New Reason:

```javascript
{ emoji: '🎉', title: 'Your Title', description: 'Your description.' },
```

### Add a New Dream:

```javascript
{ emoji: '🌟', title: 'Your Dream', description: 'Your description.' },
```

---

## Validation Checklist

After editing, verify:

- [ ] All `{` have matching `}`
- [ ] All `[` have matching `]`
- [ ] All quotes are paired: `"text"`
- [ ] Commas after each item (except last)
- [ ] No `//` in middle of lines without reason
- [ ] Browser shows no errors (F12 → Console)
- [ ] All your text appears correctly
- [ ] Photos load in gallery
- [ ] Secret message unlocks

---

## If Something Breaks

1. **Check Console**: F12 → Console tab
2. **Look for Red Errors**: They point to the problem
3. **Count Brackets**: Make sure `{}` and `[]` match
4. **Restore Backup**: Replace with backup copy
5. **Try Original**: Use clean copy to verify structure
6. **Compare**: Diff your changes to find issues

---

## Final Review Checklist

Before sharing, check:

- ✅ All text is personalized
- ✅ Photos look great
- ✅ No broken images
- ✅ Secret password works
- ✅ Timeline makes sense
- ✅ Reasons are heartfelt
- ✅ Dreams are inspiring
- ✅ Mobile view works
- ✅ All links function
- ✅ Animations are smooth

---

**You've got this! Make it yours. 💕**

For detailed help on each section, see:

- README.md - Full documentation
- QUICK_START.md - Step-by-step guide
- PHOTOS_GUIDE.md - Image tips
