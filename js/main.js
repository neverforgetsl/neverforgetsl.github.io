// Sample data structure for articles
const articles = [
    {
        id: 1,
        title: "Ragging incident at Sabaragamuwa University (2025)",
        date: "2025-05-02",
        lastModified: "2025-05-02",
        categories: ["Ragging", "News"],
        content: "An article about the ragging incident at Sabaragamuwa University in 2025 including the list of culprits."
    },
    // Add more articles here
];

// Sample categories
const categories = ["News", "Ragging", "Corruption"];

// Update copyright year
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Function to format date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

// Function to create category elements
function createCategoryElements() {
    const categoryList = document.getElementById('categoryList');
    categories.forEach(category => {
        const categoryElement = document.createElement('a');
        categoryElement.href = `categories.html#${category.toLowerCase()}`;
        categoryElement.className = 'category-item';
        categoryElement.textContent = category;
        categoryList.appendChild(categoryElement);
    });
}

// Function to create article preview
function createArticlePreview(article) {
    const articleElement = document.createElement('article');
    articleElement.className = 'article-preview';
    
    articleElement.innerHTML = `
        <h3><a href="articles/${article.id}.html">${article.title}</a></h3>
        <div class="article-meta">
            <span class="date">Published: ${formatDate(article.date)}</span>
            ${article.categories ? `
                <span class="categories">
                    ${article.categories.map(cat => 
                        `<a href="categories.html#${cat.toLowerCase()}">${cat}</a>`
                    ).join(', ')}
                </span>
            ` : ''}
        </div>
    `;
    
    return articleElement;
}

// Function to load latest articles
function loadLatestArticles() {
    const latestArticles = document.getElementById('latestArticles');
    const sortedArticles = [...articles].sort((a, b) => 
        new Date(b.date) - new Date(a.date)
    ).slice(0, 5);
    
    sortedArticles.forEach(article => {
        latestArticles.appendChild(createArticlePreview(article));
    });
}

// Function to load recent articles
function loadRecentArticles() {
    const recentArticles = document.getElementById('recentArticles');
    const sortedArticles = [...articles].sort((a, b) => 
        new Date(b.lastModified) - new Date(a.lastModified)
    ).slice(0, 5);
    
    sortedArticles.forEach(article => {
        recentArticles.appendChild(createArticlePreview(article));
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    createCategoryElements();
    loadLatestArticles();
    loadRecentArticles();
}); 