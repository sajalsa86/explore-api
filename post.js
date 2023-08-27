const showAllPost = posts => {
    const postContainer = document.getElementById('post-container');
    for (const post of posts) {
        const article = document.createElement('article');
        article.classList.add('post');
        article.innerHTML = `
        <h3>User Id : ${post.id}</h3>
        <h2>User Title : ${post.title}</h2>
        <p>Description : ${post.body}</p>
        `;
        postContainer.appendChild(article);
    }
};

const userUrl = 'https://jsonplaceholder.typicode.com/posts';
const getAllPost = () => {
    fetch(userUrl)
        .then(res => res.json())
        .then(data => showAllPost(data))
};






