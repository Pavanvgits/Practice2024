// Select DOM elements

const chitForm = document.getElementById('chitForm');

const totalPeople = document.getElementById('numPeople');

const defaultDeductionAmount = document.getElementById('devudiPata');

const lossAmount = document.getElementById('lossAmount');

const totalAmount = document.getElementById('totalAmount');

const output = document.getElementById('output');

chitForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Getting UserInputVales

  const ttlAmt = parseFloat(totalAmount.value);
  const ttlPpl = parseInt(totalPeople.value);
  const dfDdtAmt = parseFloat(defaultDeductionAmount.value);
  const lsAmt = parseFloat(lossAmount.value);

  //  Validation Checks

  if (isNaN(ttlPpl) || ttlPpl <= 0) {
    output.innerHTML =
      '<span class="error">Please enter a valid number of people (at least 1).</span>';
    return;
  }

  if (isNaN(dfDdtAmt) || dfDdtAmt <= 0) {
    output.innerHTML =
      '<span class="error">Please enter a valid number of Deductable Amount (at least 1).</span>';
    return;
  }

  if (isNaN(lsAmt) || lsAmt <= 0) {
    output.innerHTML =
      '<span class="error">Please enter a valid number of Loss Amount (at least 1).</span>';
    return;
  }

  if (isNaN(ttlAmt) || ttlAmt <= 0) {
    output.innerHTML =
      '<span class="error">Please enter a valid total amount greater than 0.</span>';
    return;
  }

  // Calculation Logic

  const remainingAmount = ttlAmt - (lsAmt - dfDdtAmt);
  const perPerson = remainingAmount / ttlPpl;

  // Show result
  let message = `<strong>Each person pays:</strong><br>
  <div class="rainbow-text">₹${perPerson.toFixed(2)}</div>`;

  // output.innerHTML = message;

    // Show result in popup instead of page
  document.getElementById('popupMessage').innerHTML = message;
  document.getElementById('popup').style.display = 'block';

  // Close popup on clicking X
  document.getElementById('closePopup').onclick = () => {
    document.getElementById('popup').style.display = 'none';
  };

});

