// Get the required DOM elements
const amountInput = document.querySelector(".amount");
const numberOfPeopleInput = document.querySelector(".number-of-people");
const totalPerPersonElement = document.querySelector(".total-per-person");

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
