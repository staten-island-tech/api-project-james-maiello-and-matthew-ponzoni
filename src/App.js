import React from 'react';
import './App.css';
import CurrencyRow from './CurrencyRow';

function App() {
  return (
    <>
    <h1>Currency Conversions</h1>
    <CurrencyRow />
    <div className="equalsign">=</div>
    <CurrencyRow />
    </>
  );
}

export default App;
