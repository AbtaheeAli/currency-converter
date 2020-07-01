import React, { useState } from 'react'

function App() {
  const [currencyDetails, setCurrencyDetails] = useState({
    base: 'USD',
    rates: {
      GBP: 0.8074107143,
      HKD: 7.7507142857,
      IDR: 14265.0,
      ILS: 3.4557142857,
      DKK: 6.6542857143,
      INR: 75.5553571429,
      CHF: 0.9482142857,
      MXN: 22.946875,
      CZK: 23.8125,
      SGD: 1.3955357143,
      THB: 30.9901785714,
      HRK: 6.7540178571,
      EUR: 0.8928571429,
      MYR: 4.2865178571,
      NOK: 9.6192857143,
      CNY: 7.0670535714,
      BGN: 1.74625,
      PHP: 49.8133928571,
      PLN: 3.980625,
      ZAR: 17.2263392857,
      CAD: 1.3586607143,
      ISK: 138.9285714286,
      BRL: 5.4428571429,
      RON: 4.3183928571,
      NZD: 1.5501785714,
      TRY: 6.8550892857,
      JPY: 107.4196428571,
      RUB: 71.1422321429,
      KRW: 1203.4285714286,
      USD: 1.0,
      AUD: 1.4525,
      HUF: 316.5178571429,
      SEK: 9.371875,
    },
    date: '2020-07-01',
  })

  const baseCurrency = `The currency is converted to: ${currencyDetails.base}`
  return (
    <div className="container">
      <div class="jumbotron">
        <h1 class="display-4">Currency Converter</h1>
        <h4>{baseCurrency}</h4>
        <p class="lead">{currencyDetails.date}</p>
      </div>
      <div>
        <h4>Currency (USD):</h4>
        <ul class="list-group">
          <li class="list-group-item">
            <h4>GBP</h4>
            {currencyDetails.rates.GBP}
          </li>
          <li class="list-group-item">"HKD": 7.7507142857</li>
          <li class="list-group-item">"IDR": 14265.0</li>
          <li class="list-group-item">"ILS": 3.4557142857</li>
          <li class="list-group-item">"DKK": 6.6542857143</li>
        </ul>
      </div>
    </div>
  )
}

export default App
