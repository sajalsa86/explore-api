const people = {
    name: 'Sajal Hossain',
    address: {
        village: 'Dighirpar',
        Post: 'Palsha',
        Thana: 'Atrai',
        Jela: 'Naogaon'
    },
    likes: ['Programming', 'Facebook', 'Youtube', 'Politics'],
    isBad: false,
    isHonest: true,
    pesa: 'Remitance officer in islami bank'
};
console.log(people);

const jsonPeople = JSON.stringify(people);
console.log(jsonPeople);

const normalObj = JSON.parse(jsonPeople);
console.log(normalObj);

