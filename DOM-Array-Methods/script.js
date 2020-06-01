const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');

let data = [];

getRandomUser();
getRandomUser();
getRandomUser();

// Fetch Randon user and money
async function getRandomUser() {
  const res = await fetch('https://randomuser.me/api');
  const data = await res.json();

  // console.log(data);
  const user = data.results[0];

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000),
  };

  addData(newUser);
}

// doubleMoney button function
function doubleMoney() {
  data = data.map((user) => {
    return { ...user, money: user.money * 2 };
  });

  updateDOM();
}

function sortByRichest() {
  data = data.sort((a, b) => b.money - a.money);

  updateDOM();
}

// Filter only Millionaires
function showMillionaires() {
  data = data.filter((user) => user.money > 1000000);

  updateDOM();
}

// calculate total wealth
function calculateWealth() {
  const wealth = data.reduce(
    (accumlator, currentUser) => (accumlator += currentUser.money),
    0
  );

  // console.log(formatMoney(wealth));

  const wealthElmt = document.createElement('div');
  wealthElmt.innerHTML = `<h3>Total Wealth: <strong>${formatMoney(
    wealth
  )}</strong></h3>`;
  main.appendChild(wealthElmt);
  // updateDOM();
}

// Add new obj to data arr
function addData(obj) {
  data.push(obj);

  updateDOM();
}

//  Update Dom
function updateDOM(providedData = data) {
  // Clear main div
  main.innerHTML = '<h2><strong>Person</strong>Wealth</h2>';

  providedData.forEach((item) => {
    // console.log(item);
    const element = document.createElement('div');

    element.classList.add('person');
    element.innerHTML = `<strong>${item.name}</strong> 
    ${formatMoney(item.money)}`;

    main.appendChild(element);
  });
}

// format number as money
function formatMoney(number) {
  return '$ ' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'); // 12,345.67
}

//event listerners
addUserBtn.addEventListener('click', getRandomUser);
doubleBtn.addEventListener('click', doubleMoney);
sortBtn.addEventListener('click', sortByRichest);
showMillionairesBtn.addEventListener('click', showMillionaires);
calculateWealthBtn.addEventListener('click', calculateWealth);
