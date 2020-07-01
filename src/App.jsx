import React, { useState, useEffect } from 'react'

function App() {
  const [currencyDetails, setCurrencyDetails] = useState({})
  const [currencyPrice, setCurrencyPrice] = useState({})

  const baseCurrency = `The currency is converted to: ${currencyDetails.base}`

  const LoadCurrencyFromApi = () => {
    const url = 'https://api.ratesapi.io/api/latest?base=USD'
    fetch(url)
      .then((response) => response.json())
      .then((apiData) => {
        setCurrencyDetails(apiData)
        setCurrencyPrice(apiData.rates)
      })
  }

  useEffect(LoadCurrencyFromApi, [])

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
            {currencyPrice.GBP}
          </li>
          <li class="list-group-item">{currencyPrice.GBP}</li>
          <li class="list-group-item">"IDR": 14265.0</li>
          <li class="list-group-item">"ILS": 3.4557142857</li>
          <li class="list-group-item">"DKK": 6.6542857143</li>
        </ul>
      </div>
    </div>
  )
}

export default App
