

**1. Cursor Prompt: Project Boilerplate and Routing Structure**

```plaintext
Create a static personal website using Next.js (app router or pages), with the following file structure and routes:
- Home page at `/` with all details (bio, research, publications, teaching, service, contact)
- `/blog` for blog landing
- `/blog/posts` for post archive
- Each individual blog post at `/blog/posts/[slug]`
- External links from nav: About, X, GitHub
- Navigation must be plain text, inline, always visible at top
- No images, icons, cards, popups, widgets, floating nav, or JS interactions
- All pages: content left-aligned, max width 700px, generous whitespace, pure white background, black/gray text
- Font: clean sans-serif, base size 18px, bold headings/names
- Links: blue, underline on hover, no other styling
- Mobile: nav stacks, content remains left-aligned, font/spacing stays readable
- Only use ul/li for bullets, a for links, h1/h2 for section headings
- Use a single global CSS for all styling, minimal classes/ids
```

***

**2. Cursor Prompt: Homepage Section**

```plaintext
Build the Home page `/` for an academic/PhD personal site with:
- Header navigation at the very top, left-aligned, inline: ["Home", "About", "Blog" (internal), "X", "GitHub"]
- Below header: Large bold name ("Sabal Hero"), alternate name ("Edward") in parentheses, both on first line
- Bio paragraph below: degree, UT Austin (linked), 2-3 line professional summary, advisors/labs as in-flow text (each advisor/lab is a blue link)
- Immediately below: 1-2 line "Research Interests" (small text)
- Main body (still left-aligned): flowing narrative about career, labs, education, experiences (no lists, no breaks)
- Next section: "Publications" heading (h2), each publication as Markdown-style line: [Title as link] Venue, Year, Author list
- Then: "Teaching" (h2), bulleted list: course, term, institution
- Then: "Service" (h2), bulleted/reviewer list
- Very bottom: Contact line ("sabalhero at utexas.edu"), plain PGP key text block
- All content strictly left-aligned, no images, cards, or widgets; font and whitespace as above
```

***

**3. Cursor Prompt: Navigation and Links**

```plaintext
For all pages:
- Place a <header> as the first element, containing plain left-aligned inline text links:
  - Blog (route: `/blog`)
  - About (internal page: `/about`)
  - X (external, opens Twitter/X profile in new tab)
  - GitHub (external, opens GitHub profile in new tab)
  - Publications (external, opens Google Scholar profile in new tab)
- Use <nav> semantic tag for header, no border, no background, minimal horizontal gap, max 16px between links
- No logo, no home icon, no hamburger, never collapses or floats
- On mobile, navigation becomes vertical stacked but remains at the top
```

***

**4. Cursor Prompt: Blog Home and Archive Pages**

```plaintext
Build `/blog` page:
- Top: Short intro paragraph — research focus, affiliation, 1-2 line summary; link to contact email and PGP
- "Recent Posts" h2 heading, then plain vertical list of recent posts (`date: title` as blue clickable links to each post)
- Add "See all posts here" → link to `/blog/posts`

Build `/blog/posts` archive:
- Group posts by year (subheadings for each year), then list posts ('date: title' as blue links); no tags, summaries, authors, or categories
- Directly link to full post
- Provide direct RSS link (plain blue text)
```

***

**5. Cursor Prompt: Blog Post Page (Template)**

```plaintext
For every individual blog post (`/blog/posts/[slug]`):
- At top: Title (h1), then post date (smaller gray text)
- Body: Markdown-formatted, only text (headings, bullet lists, code if needed)
- No sidebar, no related posts, no ToC, no author info, no widgets/comments/sharing
- Consistent max-width, left-aligned
```

***

**6. Cursor Prompt: About, External, and File Links**

```plaintext
For the About link in nav:
- Link directly to `/about` (internal page), showcase professional information
- Do not restyle PDF, use only plain black/white text in file (match homepage section order: contact, education, pubs, teaching, etc.)

For all EXTERNAL nav links (X, GitHub, Publications):
- Use plain <a> tags with target="_blank" and rel="noopener noreferrer"
- Do not restyle, just link out
```

***

**7. Cursor Prompt: Pure Global CSS**

```plaintext
Design the global CSS (single file) for the minimalist style:
- body: background: #fff, color: #222, font-family: 'Inter', Arial, sans-serif; font-size: 18px, margin: 0, padding: 0
- a: color: #1976d2; text-decoration: none; transition: text-decoration .2s
- a:hover, a:focus { text-decoration: underline }
- header/nav: display: flex; gap: 16px; justify-content: flex-start; align-items: center; padding: 32px 0 32px 0; border: none; background: none
- main/wrapper: max-width: 700px; margin: 0 auto; padding: 0 16px
- h1, h2: font-weight: bold; margin-top: 32px
- ul, li: padding: 0; margin: 0 0 8px 0; list-style: disc inside
- For mobile: use media query max-width 800px; nav stacks links vertically with gap: 8px
- PGP block: mono font, smaller text
- No other effects, shadows, backgrounds, or gradients
```

***

**8. Cursor Prompt: Responsiveness and Accessibility**

```plaintext
Make the layout fully responsive:
- When screen ≤ 800px wide, reduce main max-width so content fits screen (with padding)
- Navigation links stack vertically on top, still left-aligned
- Font remains readable (min 16px base)
- No interactive or floating elements; tab ordering for links is logical from left to right, top to bottom
```

***

**How to use:**  
Feed these to Cursor's codegen (one per main section), reviewing each for your site's content/variable names. They map 1:1 to file structure, markup, and styles needed for an **exact clone** of the Sabal Hero site's UI/UX.  
**No interpolation or reformatting needed—each is a designer-level build spec.**