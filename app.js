
const userUrl = 'https://jsonplaceholder.typicode.com/users';
const showUsers = () => {
    fetch(userUrl)
        .then(res => res.json())
        .then(data => collectuser(data))
}

const collectuser = data => {
    const ul = document.getElementById('userItem');
    for (const user of data) {
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
}