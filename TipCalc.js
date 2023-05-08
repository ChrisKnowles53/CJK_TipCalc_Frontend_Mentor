// Get the required DOM elements
const amountInput = document.querySelector(".amount");
const numberOfPeopleInput = document.querySelector(".number-of-people");
const totalPerPersonElement = document.querySelector(".total-per-person");
const tipButtons = document.querySelectorAll(".button");
const customTipInput = document.querySelector(".input");
const tipPersonElement = document.querySelector(".tip-person");

// Add an event listener to the amount input to recalculate the total per person whenever the input changes
amountInput.addEventListener("input", calculateTotalPerPerson);

// Add an event listener to the number of people input to recalculate the total per person whenever the input changes
numberOfPeopleInput.addEventListener("input", calculateTotalPerPerson);

// Function to calculate the total per person
function calculateTotalPerPerson() {
  // Get the value of the amount input and convert it to a number
  const amount = parseFloat(amountInput.value);

  // Get the value of the number of people input and convert it to a number
  const numberOfPeople = parseFloat(numberOfPeopleInput.value);

  // Calculate the total per person and round it to two decimal places
  const totalPerPerson = (amount / numberOfPeople).toFixed(2);

  // Update the text of the total per person element
  totalPerPersonElement.textContent = totalPerPerson;

}



// Add event listeners to the tip buttons to recalculate the tip per person whenever a button is clicked
tipButtons.forEach((button) => {
 button.addEventListener("click", () => {
    calculateTipPerPerson(button.textContent);
 });
});

function calculateTipPerPerson(tipButtonValue) {
  // Get the value of the amount input and convert it to a number
  const amount = parseFloat(amountInput.value);

  // Get the value of the number of people input and convert it to a number
  const numberOfPeople = parseFloat(numberOfPeopleInput.value);

  // Get the selected tip percentage
  let tipPercentage = parseFloat(tipButtonValue) / 100;

  
  // Calculate the tip amount per person and round it to two decimal places
  const tipAmount = ((amount * tipPercentage) / numberOfPeople).toFixed(2);
  
  // Update the text of the tip per person element
  tipPersonElement.textContent = tipAmount;
 }
 
// Add an event listener to the custom tip input to recalculate the tip per person whenever the input changes
customTipInput.addEventListener("input", () => {
 calculateTipPerPerson(customTipInput.value);
}
);
