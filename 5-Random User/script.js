
// DOM element that we want to use
const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');

// Array to store the random user information
// In javascript, we normally use array to store something like user objects
let data = [];

// generate 3 random user at the beginning 
getRandomUser();
getRandomUser();
getRandomUser();




// fetch and process data function



// fetch random user information

async function getRandomUser() {

    // Using fetch
    // fetch(`https://randomuser.me/api/`)
    // .then(res => res.json())
    // .then(data => {
    //     console.log(data);
    // })
 
    // better way 

    const res = await fetch('https://randomuser.me/api');

    const data = await res.json();
    console.log(data);

    // get user information, because user information 
    //store in the results array and index 0
    const user = data.results[0];

    const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random() * 1000000)
      };

    //   add the objects to data array
      addData(newUser);
}

// add objects to data array

function addData(object) {
    data.push(object);
    // once we add the object to the data array, we should update display
    // we don't provide params, so it will keep the default params
    updataDom();
}

// updata DOM display
// use the default data params if not provided
function updataDom(params = data) {
    // clear data,we wanna replace the content not keep adding data
    main.innerHTML =  '<h2><strong>Person</strong> Wealth</h2>';
    params.forEach(item => {
        const element = document.createElement('div');
        element.classList.add('person');
        element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(item.money)}`;

        // we must append the child element to the 
        main.appendChild(element);
        // updataDom();
    });
}

// Using regular expression to format the money
// https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-strings

function formatMoney(number) {
    // number like 12345 will be converted to 12,345
    return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}




// button function


// double money button

function doubleMoney() {
    data = data.map(item => {
        return {...item, money: item.money * 2};
    })
    updataDom();
}

// sort() function
function sortByRichest() {
    // descending order if we use b-a
    data.sort((a,b) => {
        // we must add semicolons at the end of arrow function
        return b.money-a.money;
    })

    updataDom();
}

// filter() method
function showMillionaires(){
    data = data.filter(item => {
        return item.money > 1000000;
    })

    updataDom();
}

// reduce() method : the total number

function calculateWealth() {
    const wealth = data.reduce((acc, user) =>{
        return acc += user.money;
    },0);

    const WealthElements = document.createElement('div');
    WealthElements.innerHTML = `<h3>Total Wealth: ${formatMoney(wealth)} <h3>`;
    main.appendChild(WealthElements);
}


// Event listeners
addUserBtn.addEventListener('click', getRandomUser);
doubleBtn.addEventListener('click', doubleMoney);
sortBtn.addEventListener('click', sortByRichest);
showMillionairesBtn.addEventListener('click', showMillionaires);
calculateWealthBtn.addEventListener('click', calculateWealth);

