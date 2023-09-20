let chosenData = JSON.parse(sessionStorage.session);

let ticketTitle = document.querySelector('.ticket__title')
let ticketChairs = document.querySelector('.ticket__chairs');
let ticketHall = document.querySelector('.ticket__hall');
let ticketStart = document.querySelector('.ticket__start');
let ticketCost = document.querySelector('.ticket__cost');
let buttonAcception = document.querySelector('.acceptin-button');

let date = new Date(chosenData.timestamp * 1000);
let dateString = date.toLocaleString().slice(0, -3)

ticketTitle.innerHTML = chosenData.filmName;
ticketHall.innerHTML = chosenData.hallName.split('Зал').join('');
ticketStart.innerHTML = dateString;


let ticketChairsArr = [];
let cost = 0;
let arr = chosenData.selectedPlaces;
for (let i = 0; i < arr.length; i++) {
	ticketChairsArr.push(`${arr[i].row}/${arr[i].place}`);
	if (arr[i].type === 'standart') {
		cost += +chosenData.priceStandart;
	} else {
		cost += +chosenData.priceVip;
	}
}
ticketChairs.textContent = ticketChairsArr.join(', ')
ticketCost.textContent = cost;