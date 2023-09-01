const displayAllCountris = countris => {
    const countrisContainer = document.getElementById('countris-container');
    countris.forEach(countri => {
        //console.log(countri);
        const div = document.createElement('div');
        div.classList.add('single-countri');
        div.innerHTML = `
        <h2>Countri Name : ${countri.name.common}</h2>
        <h3>Capital Name : ${countri.capital ? countri.capital[0] : 'No Capital'}</h3>
        <button onclick="getAllCountriCode('${countri.cca2}')">Details</button>
        `;
        countrisContainer.appendChild(div);
    });
};

const getAllCountris = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        //.then(data => console.log(data))
        .then(data => displayAllCountris(data))
};
getAllCountris();
////////////////////////////////////////////////////////////////////
const displayAllCountriCode = countri => {
    // console.log(countri);
    const countriDetails = document.getElementById('countri-details');
    countriDetails.innerHTML = `
    <h2>Countri Name : ${countri.name.common}</h2>
    <h3>Capital Name : ${countri.capital ? countri.capital[0] : 'No Capital'}</h3>
    <h2>Countri code : ${countri.cca2}</h2>
    <img src="${countri.flags.png}" alt="">
    `;

};

const getAllCountriCode = code => {
    const url = `https://restcountries.com/v3.1/alpha/${code}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayAllCountriCode(data[0]))
};