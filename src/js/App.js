const select = document.querySelectorAll('select');
const input = document.querySelectorAll('input');
const API_URL = "https://v6.exchangerate-api.com/v6/e08feb7c3788e65ce1b92f76/latest/USD";
let html = '';

async function currency(){
    const res = await fetch(API_URL);
    const data = await res.json();
    const arrayData = Object.keys(data.conversion_rates);
    const rates = data.conversion_rates;
    console.log(arrayData)
    console.log(rates)
    arrayData.map(item =>{
        return html += `<option value=${item}>${item}</option>`;
    });
    for(let i=0; i<select.length; i++){
        select[i].innerHTML = html;
    };

    input[0].addEventListener('keyup', ()=>{
        input[1].value = input[0].value * rates[select[1].value] / rates[select[0].value];
    });
    
    input[1].addEventListener('keyup', ()=>{
        input[0].value = input[1].value * rates[select[0].value] / rates[select[1].value];
    });
    
    select[0].addEventListener('change', ()=>{
        input[1].value = input[0].value * rates[select[1].value] / rates[select[0].value];
    });
    
    select[1].addEventListener('change', ()=>{
        input[0].value = input[1].value * rates[select[0].value] / rates[select[1].value];
    });

};

currency();