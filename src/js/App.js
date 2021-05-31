const select = document.querySelectorAll('select');
const input = document.querySelectorAll('input');
const API_URL = "http://api.exchangeratesapi.io/v1/latest?access_key=356e02988919324a9c44ee79dae7e38b";
let html = '';

async function currency(){
    const res = await fetch(API_URL);
    const data = await res.json();
    const arrayData = Object.keys(data.rates);
    const rates = data.rates;
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