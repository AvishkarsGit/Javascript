let rsInput = document.querySelector("#rs-input");
let annualRate = document.querySelector("#rate-input");
let periodUnit = document.querySelector("#period-select-input");
let periodValue = document.querySelector("#period-value-input");
let interest = document.querySelector("#interest");
let principleAmount = document.querySelector("#principle-amt");
let totalValue = document.querySelector("#total-value");
let calculateBtn = document.querySelector("#calculate-btn");
let charInstance = null;

let totalInterestEarned = 0;
let totalAmount;

let principleAmt,interestRat,optionValue,duration;


checkInputs()


// handle click
calculateBtn.addEventListener("click",checkInputs);



// pie chart code
function pieChart(totalInterest, principleAmt) {
  const ctx = document.getElementById("pie-chart");
  if (charInstance) {
    charInstance.destroy();
  }
  charInstance  = new Chart(ctx, {
    type: "pie",
    data: {
      labels: ["Interest", "Principle"],
      datasets: [
        {
          data: [`${totalInterest}`, `${principleAmt}`],
          borderWidth: 1,
          backgroundColor: ["rgba(0, 50, 115, .5)", "rgb(74, 223, 147)"],
        },
      ],
    },
    options: {},
  });
}

//calculate total
function calculateTotal(principleAmt,interestRate,time) {
  totalInterestEarned = (principleAmt * interestRate * time) / 100;
  totalInterestEarned = Math.round(totalInterestEarned);
  totalAmount = totalInterestEarned + principleAmt;
  
  interest.innerText = `₹${totalInterestEarned}`;
  principleAmount.innerText = `₹${principleAmt}`;
  totalValue.innerText = `₹${totalAmount}`;

}

function checkInputs() {
   principleAmt = parseFloat(rsInput.value);
   interestRate = parseFloat(annualRate.value);
   optionValue = periodUnit.value;
   duration = parseInt(periodValue.value);
  let time;
   if (principleAmt <= 0 || interestRate <= 0 || duration <= 0) {
     alert("enter fields properly");
   } else {
     if (optionValue === "Days") {

       time = duration / 365;

     } else if (optionValue === "Weeks") {

       time = duration / 52;

     } else if (optionValue === "Months") {

       time = duration / 12;

     } else {

       time = duration;

     }
   }
  calculateTotal(principleAmt, interestRate, time);
  pieChart(totalInterestEarned,principleAmt)
}

  
