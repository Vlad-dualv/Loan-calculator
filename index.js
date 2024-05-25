const loanAmountInput = document.getElementById('loan-amount');
const interestRateInput = document.getElementById('interest-rate');
const monthsToPayInput = document.getElementById('months-to-pay');
const monthlyPaymentResult = document.getElementById('monthly-payment-result');

function calculateLoan() {
  const loanAmountValue = loanAmountInput.value;
  const interestRateValue = interestRateInput.value;
  const monthsToPayValue = monthsToPayInput.value;
  const interest =
    (loanAmountValue * (interestRateValue * 0.01)) / monthsToPayValue;
  const monthlyPayment = (
    loanAmountValue / monthsToPayValue +
    interest
  ).toFixed(2);
  monthlyPaymentResult.innerHTML = `Monthly Payment: ${monthlyPayment}€`;
}

window.addEventListener('load', calculateLoan);
loanAmountInput.addEventListener('input', calculateLoan);
interestRateInput.addEventListener('input', calculateLoan);
monthsToPayInput.addEventListener('input', calculateLoan);
