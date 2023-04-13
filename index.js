// About hide and appear button
const billShareBtn = document.getElementById('billShareButton');
const buttonPeopleHolder = document.getElementById('buttonPeopleHolder');
// about result text
const resultText = document.getElementById('resultText');
resultText.innerText = 'Total';

billShareBtn.onclick = () => {
  billShareBtn.style.display = 'none';
  buttonPeopleHolder.style.display = 'block';
  resultText.style.fontsize = 18;
  resultText.innerText = 'Total Per Person';
}

// amount of people
let numberPeopleHolder = document.getElementById('numberPeople');
let numberPeople = 1;
numberPeopleHolder.innerText = String(numberPeople);

// making function to get the result
const billInput = document.getElementById('billInput');
const percentageInput = document.getElementById('percentageInput');
const result = document.getElementById('result');

result.innerText = '$0.00';

const totalAmount = () => {
  percentageAmount = Number(billInput.value) * Number(percentageInput.value) / 100;
  netTotal = Number(billInput.value) + percentageAmount;
  total = netTotal / numberPeople;
  result.innerText = '$' + total.toFixed(2);
}

// increase people
const increasePeople = () => {
  numberPeople += 1;
  numberPeopleHolder.innerText = String(numberPeople);
  totalAmount();
}

// decrease people
const decreasePeople = () => {
  if (numberPeople > 1) {
    numberPeople -= 1;
    numberPeopleHolder.innerText = String(numberPeople);
    totalAmount();
  }
}