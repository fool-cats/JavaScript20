const container = document.querySelector('.container');
// put all seats in the list or array
const seat = document.querySelectorAll('.row .seat:not(.occupied)');

const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

// const can't be changed
let ticketPrice = +movieSelect.value;  // string to number   or paseInt()

// console.log(ticketPrice)

// we can use this ti add eventlistener

// seat.forEach

// better way to add eventlistener

function updateSelectedCount(params) {
    // use direct child element to count
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    // console.log(selectedSeats); 
    const selectedSeatsLength = selectedSeats.length;
    count.innerText = selectedSeatsLength;
    total.innerText = selectedSeatsLength * ticketPrice
}


// movie selected eventlistener
movieSelect.addEventListener('change', function(event){
    ticketPrice = +event.target.value;
    updateSelectedCount();
})

// seat eventlistener
container.addEventListener('click', function(event) {
    // console.log(event.target);  the target of the click event is the element that was clicked

    // Using if to avoid click other element will cause clicked
    if (event.target.classList.contains('seat') && !event.target.classList.contains('occupied')){
        // console.log(event.target);
        // we don't use add but use toggle
        event.target.classList.toggle('selected')

        // put the counter in the eventlistener

        updateSelectedCount();
    }
})


