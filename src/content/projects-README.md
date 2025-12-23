# Projects Content Directory

This directory contains all project content written in Markdown format.

## Quick Start

### Adding a New Project

1. **Copy the template:**
   ```bash
   cp src/content/projects-template.md src/content/projects/your-project-name.md
   ```

2. **Edit the frontmatter** (the section between `---` at the top):
   - Set `title`, `description`, `category`
   - Add `technologies` array
   - Set `image` path (place images in `/public/projects/`)
   - Add optional fields: `github`, `video`, `website`, `links`, `images`

3. **Write your content** using Markdown:
   - Use `##` for main headings
   - Use `###` for subheadings
   - Add images, videos, code blocks, lists, etc.

4. **Save the file** - your project will automatically appear on the website!

## Frontmatter Fields

### Required Fields
- `title`: Project name
- `description`: Short description (2-3 sentences)
- `category`: One of: `"Low-Level Control"`, `"RL Algorithm"`, `"Perception"`
- `technologies`: Array of technology names
- `image`: Path to main project image (e.g., `"/projects/image.jpg"`)

### Optional Fields
- `github`: Single URL string OR array of repository objects
- `video`: URL to video demo
- `website`: URL to project website
- `links`: Array of custom links
- `images`: Array of image paths for gallery

## Markdown Tips

### Headings
```markdown
## Main Section
### Subsection
```

### Lists
```markdown
- Bullet point
- Another point

1. Numbered item
2. Another item
```

### Code Blocks
\`\`\`python
def hello():
    print("Hello!")
\`\`\`

### Videos (HTML)
```html
<div style="text-align: center;">
    <video width="80%" controls>
        <source src="/projects/video.mp4" type="video/mp4">
    </video>
    <p>Caption</p>
</div>
```

### Images
```markdown
![Alt text](/projects/image.jpg)
```

## File Naming

- Use lowercase letters
- Use hyphens for spaces: `my-project.md`
- The filename becomes the URL: `my-project.md` → `/projects/my-project/`

## Example

See existing projects like `omni-wbr.md` or `where-to-learn.md` for examples.
