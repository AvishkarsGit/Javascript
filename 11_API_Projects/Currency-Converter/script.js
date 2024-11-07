let BASE_URL = "https://v6.exchangerate-api.com/v6/fffffbb1221e4779300c80ce/latest/USD";
const from = document.querySelector('#fromSelect');
const to = document.querySelector('#toSelect');
let msg = document.querySelector('.msg');
let convertBtn = document.querySelector('#btn');
let amtVal = document.querySelector('form input');


function createDropDown(element) {
    for (currency in countryList) {
        let option = document.createElement('option');
        option.value = currency;
        option.text = currency;
        element.add(option)
    }
}

createDropDown(from);
createDropDown(to)

//setting default values
from.value = 'USD';
to.value = 'INR';

let convertCurrency = async () => {
    const amount = amtVal.value;

    if (amount < 1) {
        alert('amount must be greater than 0')
    }
    else {

        let fromCurrency = from.value;
        let toCurrency = to.value;
        
        let response = await fetch(BASE_URL);
        let data = await response.json();
        let fromRate = data.conversion_rates[fromCurrency];
        let toRate = data.conversion_rates[toCurrency];
        const finalAmt = (amount / fromRate) * toRate;
    
        msg.innerText = `${amount} ${fromCurrency} = ${finalAmt} ${toCurrency}`
        msg.innerHTML = `${amount} <b>${fromCurrency}</b> = ${finalAmt} <b>${toCurrency}</b>`;
    }
    
}


convertBtn.addEventListener('click',convertCurrency);
window.addEventListener('load',convertCurrency);