let posts = [
    {
        title: "Welcome to Modern Blogger",
        content: "Start creating amazing blog posts with our modern platform. Share your ideas with the world!",
        image: "https://files.oaiusercontent.com/file-PV5qtsxintsUysyid4zD24?se=2025-03-22T14%3A52%3A46Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Db099067e-9e65-4ba9-b4df-55fb1f39ed44.webp&sig=NB%2BmV9DSbfKQclXx86rmRYn7tKuZUM4EqWW5b5xkfgI%3D"
    }
];

// Rest of the code remains exactly the same as previous version
function displayPosts() {
    const blogContainer = document.getElementById('blogContainer');
    blogContainer.innerHTML = posts.map((post, index) => `
        <div class="blog-card">
            ${post.image ? `
            <div class="blog-image-container">
                <img src="${post.image}" class="blog-image" alt="${post.title}">
            </div>` : ''}
            <h2 class="blog-title">${post.title}</h2>
            <p class="blog-excerpt">${post.content.substring(0, 100)}...</p>
            <button class="read-more" onclick="viewPost(${index})">Read More</button>
        </div>
    `).join('');
}


// Rest of the JavaScript code remains unchanged

// Modal functions
function openModal() {
    document.getElementById('createModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('createModal').style.display = 'none';
}

// Create new post
function createPost(event) {
    event.preventDefault();
    const newPost = {
        title: document.getElementById('postTitle').value,
        content: document.getElementById('postContent').value,
        image: document.getElementById('postImage').value
    };
    
    posts.push(newPost);
    displayPosts();
    closeModal();
    event.target.reset();
}

// View single post
function viewPost(index) {
    const post = posts[index];
    const blogContainer = document.getElementById('blogContainer');
    blogContainer.innerHTML = `
        <div class="single-post">
            <div class="blog-card">
                ${post.image ? `
                <div class="blog-image-container">
                    <img src="${post.image}" class="blog-image" alt="${post.title}">
                </div>` : ''}
                <h2 class="blog-title">${post.title}</h2>
                <div class="full-content">${post.content}</div>
                <button class="read-more back-button" onclick="displayPosts()">Back to Posts</button>
            </div>
        </div>
    `;
    
    // Scroll to top for better visibility
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('createModal');
    if (event.target == modal) {
        closeModal();
    }
}

// Initial display
displayPosts();