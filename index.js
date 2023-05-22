// Get the required DOM elements
const amountInput = document.querySelector(".amount");
const numberOfPeopleInput = document.querySelector(".number-of-people");
const totalPerPersonElement = document.querySelector(".total-per-person");
const tipButtons = document.querySelectorAll(".button");
const customTipInput = document.querySelector(".input");
const tipPersonElement = document.querySelector(".tip-person");

//Event Listeners
amountInput.addEventListener("input", calculateTotalPerPerson);

numberOfPeopleInput.addEventListener("input", calculateTotalPerPerson);

// this saves writing an eventlistener for each button
tipButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculateTipPerPerson(button.textContent);
    removeActiveClass();
    button.classList.add("active");
  });
});

customTipInput.addEventListener("input", () => {
  calculateTipPerPerson(customTipInput.value);
  removeActiveClass();
});

// Function to calculate the total per person
function calculateTotalPerPerson() {
  const amount = amountInput.value;
  const numberOfPeople = numberOfPeopleInput.value;

  const errorElement = document.querySelector(".error-message");

  if (numberOfPeople !== "") {
    const totalPerPerson = (amount / numberOfPeople).toFixed(2);

    // Update the text of the total per person element
    totalPerPersonElement.textContent = totalPerPerson;

    // Recalculate and update the tip amount and checks for valid tip input to avoid NaN
    const activeTipButton = document.querySelector(".button.active");
    if (activeTipButton) {
      calculateTipPerPerson(activeTipButton.textContent);
    } else if (customTipInput.value !== "") {
      calculateTipPerPerson(customTipInput.value);
    } else {
      tipPersonElement.textContent = "0.00";
    }
    errorElement.style.display = "none";
  } else {
    totalPerPersonElement.textContent = "";
    tipPersonElement.textContent = "";

   
    if (!errorElement) {
      const errorElement = document.createElement("p");
      errorElement.classList.add("error-message");
      errorElement.textContent = "Number of people cannot be empty";

      const numberOfPeopleContainer = document.querySelector(
        ".title-icon-input-container2"
      );
      numberOfPeopleContainer.appendChild(errorElement);
    } else {
      errorElement.style.display = "block";
    }
  }
}

function calculateTipPerPerson(tipButtonValue) {
  const amount = amountInput.value;
  const numberOfPeople = numberOfPeopleInput.value;

  // parseFloat to concert from 5% to 0.05
  let tipPercentage = parseFloat(tipButtonValue) / 100;

  const tipAmount = ((amount * tipPercentage) / numberOfPeople).toFixed(2);

  // Update the text of the tip per person element
  tipPersonElement.textContent = tipAmount;
}

const resetButton = document.querySelector(".reset-button");

resetButton.addEventListener("click", resetCalculator);

function resetCalculator() {
  amountInput.value = "";
  numberOfPeopleInput.value = 1;
  customTipInput.value = "";
  removeActiveClass();

  totalPerPersonElement.textContent = "0.00";
  tipPersonElement.textContent = "0.00";
}

function removeActiveClass() {
  tipButtons.forEach((button) => {
    button.classList.remove("active");
  });
}
