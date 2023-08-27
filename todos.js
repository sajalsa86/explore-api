const displayTodos = todos => {
    const todoContainer = document.getElementById('todos-container');
    for (const todo of todos) {
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todoPost');
        todoDiv.innerHTML = `
        <h3>Id: ${todo.id}</h3>
        <h2>Title: ${todo.title}</h2>
        <p>completed: ${todo.completed}</p>
        `;
        todoContainer.appendChild(todoDiv);
    }
};

const todosUrl = 'https://jsonplaceholder.typicode.com/todos';
const getTodos = () => {
    fetch(todosUrl)
        .then(res => res.json())
        .then(data => displayTodos(data))
};

document.getElementById('todos-btn').addEventListener('click', function () {
    getTodos();
});
