const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showBillionairesBtn = document.getElementById('show-millionaires');
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

// Add new obj to data arr
function addData(obj) {
  data.push(obj);

  updateDOM();
}

//  Update Dom
function updateDOM(providedData = data) {
  // Clear main div
  main.innerHTML = '<h2><strong>Person</strong>Wealth</h2>';

  providedData.forEach(function (item) {
    console.log(item);
  });
}
