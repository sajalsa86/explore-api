const getAllMeals = (searchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayAllMeals(data.meals))
}

const displayAllMeals = AllMeals => {
    const mealContainer = document.getElementById('meal-container');
    mealContainer.innerHTML = ''; // Use innerHTML instead of innerText
    AllMeals.forEach(meal => {
        const mealItem = document.createElement('div');
        mealItem.classList.add('col');
        mealItem.innerHTML = `
                <div class="card">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${meal.strMeal}</h5>
                        <p class="card-text">${'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'}</p>
                    </div>
                    <!-- Button trigger modal -->
                      <button onClick="getMealDetails(${meal.idMeal})" type="button" class="btn btn-primary w-25 m-3" data-bs-toggle="modal" data-bs-target="#mealsModal">Details</button>
                </div>
            `;
        mealContainer.appendChild(mealItem);
    })
};

const searchMeals = () => {
    const searchKeword = document.getElementById('search-field').value.trim(); // Trim whitespace
    if (searchKeword !== '') { // Check for empty keyword
        getAllMeals(searchKeword);
    }
    document.getElementById('search-field').value = ''; // Clear input field
};

// Load default items
getAllMeals('fish');

// js for modal

const getMealDetails = idMeal => {
    //console.log(idMeal);
    const idUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    fetch(idUrl)
        .then(res => res.json())
        .then(data => displayMealDetails(data.meals[0]))
        //for get error messge
        .catch(error => console.log(error))
};
//or
//async await
//to know error
/* const getMealDetails2 = async (idMeal) => {
    try {
        const idUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
        const res = await fetch(idUrl);
        const data = await res.json();
        displayMealDetails(data.meals[0])
    }
    catch (error) {
        console.log(error);
    }
};
 */
const displayMealDetails = meal => {
    //console.log(meal);
    document.getElementById('mealsModalLabel').innerText = meal.strMeal;
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `
    <img class="img-fluid" src="${meal.strMealThumb}" alt="">
    <p class="mt-3 bg-success p-3 text-white">
    This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
    </p>
    `;
};