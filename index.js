const select = document.querySelectorAll(select);
const input = document.querySelectorAll(input);
const API_URL = "http://api.exchangeratesapi.io/v1/latest?access_key=5501a8fc65c96ccaa4137c500f418459";
let html = '';

async function currency(){
const res = await fetch(API_URL);
const data = await res.json();
const arrKeys = Object.keys(data.rates);
arrKeys.map(item =>{
    return html += <option value=${item}>${item}</option>
});
 console.log(html)
}