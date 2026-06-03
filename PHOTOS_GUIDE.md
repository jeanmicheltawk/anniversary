# 📸 PHOTO GUIDE & CONFIGURATION

## Current Photo Setup

The website comes with beautiful placeholder photos from Unsplash. You can:

1. Use these as-is (they're romantic by default)
2. Replace them with your own photos
3. Mix placeholder and personal photos

## How to Add Your Photos

### Option 1: Using Unsplash URLs (Recommended for Quick Setup)

Unsplash has beautiful photos of:

- Sunsets
- Couples
- Travel destinations
- Romantic moments
- Nature and camping

**Example:**

```javascript
{ src: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=400&fit=crop', caption: 'Our first photo' },
```

**Get Unsplash photos:**

1. Go to unsplash.com
2. Search for: "sunset", "couple", "travel", "camping", "wrangler", "wine"
3. Right-click image → Copy Image Link
4. Replace URL in photos array

### Option 2: Upload Your Own Photos

**Setup:**

1. Create `images` folder in your project folder
2. Add photos: `images/photo1.jpg`, `images/photo2.jpg`, etc.
3. Reference in script:

```javascript
photos: [
  { src: "images/paris-sunset.jpg", caption: "Us in Paris at sunset" },
  { src: "images/camping.jpg", caption: "Camping in Bavaria" },
  { src: "images/wrangler.jpg", caption: "Road trip in your Wrangler" },
  // Add more
];
```

### Option 3: Free Photo Sites

**Pexels** - pexels.com

- Free high-quality images
- No attribution needed
- Right-click for direct URL

**Pixabay** - pixabay.com

- Thousands of free photos
- Great for specific searches
- Copy image URL directly

**Unsplash** - unsplash.com

- Premium quality photos
- Easy URL sharing
- Creative commons license

## Your Story in Photos

### Recommended Photos to Include:

**Section 1: You Together**

- Photo from first meeting
- Recent couple photo
- Candid moment

**Section 2: Locations**

- Paris (if visited)
- Bavaria (if visited)
- Local favorite spot
- Sunset you've watched

**Section 3: Activities**

- Camping
- Road trip in Wrangler
- Wine tasting
- Travel adventures

**Section 4: Moments**

- You smiling (for "Reasons" section)
- Together time
- Special occasions
- Candid laughs

**Section 5: Details**

- Wine glass (wine opener reference!)
- Sunset
- Travel memorabilia
- Inside joke moments

## Photo Tips for Best Results

### Aspect Ratio

- Keep photos square (1:1 ratio) for gallery
- Unsplash URL parameters: `?w=400&h=400&fit=crop`

### Size & Quality

- Use high-resolution photos (1000x1000px or larger)
- Optimized JPG files load faster
- Unsplash URLs are pre-optimized

### Captions

- Make captions meaningful
- Reference your inside jokes
- Include dates or locations
- Keep 1-5 words ideally

### Variety

- Mix close-ups and wide shots
- Include both posed and candid
- Mix different locations
- Show different seasons/times

## Complete Photo Configuration Example

```javascript
photos: [
  // First meeting & early days
  { src: "images/first-meeting.jpg", caption: "The wine opener moment" },
  {
    src: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=400&fit=crop",
    caption: "Your smile",
  },

  // Travel - Paris
  { src: "images/paris-eiffel.jpg", caption: "Paris together" },
  {
    src: "https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?w=400&h=400&fit=crop",
    caption: "Sunset in Paris",
  },

  // Travel - Bavaria
  { src: "images/bavaria.jpg", caption: "Bavaria mountains" },
  { src: "images/camping.jpg", caption: "Camping under stars" },

  // Adventures
  { src: "images/wrangler-trip.jpg", caption: "Wrangler adventures" },
  {
    src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400&h=400&fit=crop",
    caption: "Road trip memories",
  },

  // Details & Moments
  { src: "images/sunset.jpg", caption: "Sunset watching" },
  { src: "images/wine-together.jpg", caption: "Wine and you" },
  { src: "images/laughing.jpg", caption: "Your laugh" },
  {
    src: "https://images.unsplash.com/photo-1483389127117-b6a2102724ae?w=400&h=400&fit=crop",
    caption: "Celebrating us",
  },
];
```

## Photo Organization by Theme

### Your Story

- First photo together
- Recent couples photos
- Special occasion photos

### Locations You've Visited

- Paris
- Germany/Bavaria
- Road trip stops
- Sunset spots

### Activities You Love

- Camping
- Driving Wrangler
- Wine together
- Traveling

### Details

- Wine glass
- Sunset
- Specific moments
- Inside jokes

## Making the Gallery Special

### Ideas:

1. **Chronological**: Arrange by date (oldest → newest)
2. **Emotional Arc**: Happy → Romantic → Adventurous
3. **Story Arc**: Beginning → Development → Current
4. **Themed**: Group by location or activity

### Caption Ideas:

- "June 8, 2025 - The beginning"
- "Our first sunset together"
- "Paris, the City of Love... and us"
- "You, me, your Wrangler"
- "Camping under a million stars"
- "Wine, laughter, and you"
- "This is us"
- "My favorite adventure is you"

## Testing Photos

1. Add 3-5 photos first
2. Test gallery loading
3. Check lightbox (click photos)
4. Verify captions appear
5. Check mobile view (F12)
6. Add more photos gradually

## Troubleshooting Photos

**Photo won't load?**

- Check URL is correct
- Verify site allows image hotlinking
- Try different image source
- Use HTTPS URLs (not HTTP)

**Photo quality looks bad?**

- Use larger original image
- Ensure good lighting in original
- Compress file (not too much)
- Try different crop/size

**Gallery looks empty?**

- Hard refresh browser (Ctrl+Shift+R)
- Check console for errors (F12)
- Verify src paths are correct
- Test with Unsplash URL first

**Photos don't fit the grid?**

- Unsplash URLs are pre-sized
- Use `?w=400&h=400&fit=crop` parameter
- Ensure aspect ratio is square

## Advanced: Optimizing Photos

### Using Unsplash for Optimization

```javascript
// Base Unsplash URL with optimization parameters
src: "https://images.unsplash.com/[PHOTO_ID]?w=600&q=80&fit=crop";
// w=600 - width in pixels
// q=80 - quality (0-100, higher = better quality but larger file)
// fit=crop - auto crop to dimensions
```

### For Your Own Hosted Photos

```javascript
src: "images/optimized-photo.jpg";
// Keep photos under 500KB each
// Use JPG format (better compression)
// Resize to 600x600px or larger
```

## Your Unique Story

Use these photos to tell YOUR story:

- Show your journey
- Capture your love
- Include the details that matter
- Make it personal, not generic

**Remember:** Even simple phone photos of important moments are perfect!
The story behind the photo is what makes it special. 💕

---

**Photo Count Recommendation:**

- Minimum: 8 photos (fills gallery nicely)
- Recommended: 12-15 photos (diverse coverage)
- Maximum: 20+ photos (truly comprehensive)

Happy memories! 📸💕
