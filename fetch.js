/*
 fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json)) 
    
    */
const url = 'https://jsonplaceholder.typicode.com/todos/1';
const loadData = () => {
    fetch(url)
        .then(response => response.json())
        .then(json => console.log(json))
};

const usersUrl = 'https://jsonplaceholder.typicode.com/users';

const loadUsers = () => {
    fetch(usersUrl)
        .then(res => res.json())
        .then(data => displayUsers(data))
};

const displayUsers = data1 => {
    const getCity = data1[0].address.city;
    console.log(getCity);
}


