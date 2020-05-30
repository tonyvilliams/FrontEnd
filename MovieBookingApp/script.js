// To select one at a time
const contianer = document.querySelector('.container');
// To select several
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelected = document.getElementById('movie');

// use the parseInt or + to convert the string to number
let ticketPrice = +movieSelected.value;

// functions to update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');

  // Copy select seates into arr
  // map through array
  // return a new array of indexes
  const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));
  console.log(seatsIndex);

  // Store the details in localstorage
  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
  // console.log(selectedSeats);
  // console.log(selectedSeatsCount);
}

// Event listerner for Movie selection
movieSelected.addEventListener('change', (e) => {
  ticketPrice = +e.target.value;
  console.log(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});

// Event Listerner for seats
contianer.addEventListener('click', (e) => {
  // console.log(e.target);
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    // console.log(e.target);
    e.target.classList.toggle('selected');

    updateSelectedCount();
  }
});
