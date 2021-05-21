import React, {useEffect, useState} from 'react';
import './App.css';
import CurrencyRow from './CurrencyRow'

const BASE_URL = 'http://api.exchangeratesapi.io/v1/latest?access_key=5501a8fc65c96ccaa4137c500f418459'

function App() {
 const [currencyOptions, setCurrencyOptions] = useState([])
 console.log(currencyOptions)
  useEffect(() => {
    fetch(BASE_URL)
    .then(res => res.json())
    .then(data => {
      setCurrencyOptions([data.base, ...Object.keys(data.rates)])
    })
  }, [])
  
  return (
    <>
      <h1>Convert</h1>
      <CurrencyRow
       currencyOptions={currencyOptions}
      />
      <div className="equals">=</div>
      <CurrencyRow
       currencyOptions={currencyOptions}
      />
    </>
  );
}

export default App;