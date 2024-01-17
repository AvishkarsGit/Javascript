const form = document.querySelector('form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#result');
    results.style.marginTop = '10px';
    results.style.color = 'green';
    results.style.fontWeight = 'bold';
    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = 'please give valid height';
    }
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = 'please give valid weight';
    }
    else {
        let bmi = (weight/((height*height)/1000)).toFixed(2);
        if(bmi < 18.6){
            results.innerHTML = `You are in under weight i.e. ${bmi}`;
        }
        else if(bmi >= 18.6 || bmi <= 24.9){
            results.innerHTML = `You are in normal weight i.e. ${bmi}`;
        }
        else{
            results.innerHTML = `You are in over weight i.e. ${bmi}`;
        }
    }
    
})