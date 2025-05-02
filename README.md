# Knowledge Base

A simple, static HTML-based knowledge base website that makes it easy to create and manage articles.

## Features

- Clean, modern design
- Category-based organization
- Latest articles section
- Recently updated articles section
- Responsive layout
- No server-side dependencies
- Easy to deploy on GitHub Pages

## Structure

```
.
├── index.html              # Homepage
├── css/
│   └── style.css          # Main stylesheet
├── js/
│   └── main.js            # JavaScript for dynamic content
└── articles/              # Article pages
    └── 1.html            # Sample article
```

## Adding New Articles

1. Create a new HTML file in the `articles` directory
2. Copy the structure from an existing article
3. Add your content using HTML
4. Update the `articles` array in `js/main.js` with your article's metadata:

```javascript
const articles = [
    {
        id: 2,  // Unique ID
        title: "Your Article Title",
        date: "2024-03-21",
        lastModified: "2024-03-21",
        categories: ["Category1", "Category2"],
        content: "Your article content"
    },
    // ... other articles
];
```

## Adding New Categories

1. Add the category name to the `categories` array in `js/main.js`:

```javascript
const categories = ["Guide", "Documentation", "YourNewCategory"];
```

## Deployment

This site is ready to be deployed on GitHub Pages:

1. Push your code to a GitHub repository
2. Go to repository settings
3. Under "GitHub Pages", select the main branch as the source
4. Your site will be available at `https://yourusername.github.io/repository-name`

## Customization

- Edit `css/style.css` to customize the site's appearance
- Modify `js/main.js` to change how content is loaded and displayed
- Update the navigation in `index.html` to add new sections