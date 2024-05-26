const loanAmountInput = document.getElementById('loan-amount');
const interestRateInput = document.getElementById('interest-rate');
const monthsToPayInput = document.getElementById('months-to-pay');
const monthlyPaymentResult = document.getElementById('monthly-payment-result');

function calculateLoan() {
  const loanAmountValue = parseFloat(loanAmountInput.value);
  const annualInterestRateValue = parseFloat(interestRateInput.value);
  const monthsToPayValue = parseInt(monthsToPayInput.value);

  if (
    isNaN(loanAmountValue) ||
    isNaN(annualInterestRateValue) ||
    isNaN(monthsToPayValue)
  ) {
    monthlyPaymentResult.innerHTML = `Monthly Payment: €0.00`;
  }

  const monthlyInterestRate = annualInterestRateValue / 12 / 100;
  const numberOfPayments = monthsToPayValue;
  const monthlyPayment =
    (loanAmountValue *
      monthlyInterestRate *
      Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
    (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
  monthlyPaymentResult.innerHTML = `Monthly Payment: ${monthlyPayment.toFixed(
    2
  )}€`;
}

window.addEventListener('load', calculateLoan);
loanAmountInput.addEventListener('input', calculateLoan);
interestRateInput.addEventListener('input', calculateLoan);
monthsToPayInput.addEventListener('input', calculateLoan);
