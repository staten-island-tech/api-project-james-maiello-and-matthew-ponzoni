const select = document.querySelectorAll('select');
const input = document.querySelectorAll('input');
const API_URL = "http://api.exchangeratesapi.io/v1/latest?access_key=356e02988919324a9c44ee79dae7e38b";
let html = '';

async function currency(){
    const res = await fetch(API_URL);
    const data = await res.json();
    console.log(data.rates)
    const arrayData = Object.keys(data.rates);
    console.log(arrayData)
    arrayData.map(item =>{
        return html += `<option value=${item}>${item}</option>`;
    });

};

currency();