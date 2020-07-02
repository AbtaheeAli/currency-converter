import React, { useState, useEffect } from 'react'

function App() {
  const [currencyDetails, setCurrencyDetails] = useState({})
  const [currencyPrice, setCurrencyPrice] = useState({})
  const [currencyValue, setCurrencyValue] = useState(1)

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

  const handleChangeCurrencyValue = (event) => {
    if (event === '') {
      setCurrencyValue(1)
    } else {
      setCurrencyValue(event)
    }
  }

  useEffect(LoadCurrencyFromApi, [])

  return (
    <body>
      <div className="container">
        <header>
          <div className="jumbotron">
            <h1 className="display-4">Currency Converter</h1>
            <h4>{baseCurrency}</h4>
            <p className="lead">{currencyDetails.date}</p>
          </div>
        </header>
        <div className="inputBox">
          <article>
            <strong>
              Base Currency Value: {currencyValue}-{currencyDetails.base}
            </strong>
          </article>
          <input
            className="inputBox"
            onChange={(event) => handleChangeCurrencyValue(event.target.value)}
          ></input>
        </div>
        <main>
          <div className="currencyList">
            <ul className="list-group ">
              <li className="table list-group-item">
                <h4>GBP</h4>
                {currencyPrice.GBP * currencyValue}
              </li>
              <li className="table list-group-item">
                <h4>HKD</h4>
                {currencyPrice.HKD * currencyValue}
              </li>
              <li className="table list-group-item">
                <h4>IDR</h4>
                {currencyPrice.IDR * currencyValue}
              </li>
              <li className="table list-group-item">
                <h4>ILS</h4>
                {currencyPrice.ILS * currencyValue}
              </li>
              <li className="table list-group-item">
                <h4>DKK</h4>
                {currencyPrice.DKK * currencyValue}
              </li>
              <li className="table list-group-item">
                <h4>INR</h4>
                {currencyPrice.INR * currencyValue}
              </li>
              <li className="table list-group-item">
                <h4>CHF</h4>
                {currencyPrice.CHF * currencyValue}
              </li>
              <li className="table list-group-item">
                <h4>MXN</h4>
                {currencyPrice.MXN * currencyValue}
              </li>
              <li className="table list-group-item">
                <h4>CZK</h4>
                {currencyPrice.CZK}
              </li>
              <li className="table list-group-item">
                <h4>SGD</h4>
                {currencyPrice.SGD}
              </li>
              <li className="table list-group-item">
                <h4>THB</h4>
                {currencyPrice.THB}
              </li>
              <li className="table list-group-item">
                <h4>HRK</h4>
                {currencyPrice.HRK}
              </li>
              <li className="table list-group-item">
                <h4>EUR</h4>
                {currencyPrice.EUR}
              </li>
              <li className="table list-group-item">
                <h4>MYR</h4>
                {currencyPrice.MYR}
              </li>
              <li className="table list-group-item">
                <h4>NOK</h4>
                {currencyPrice.NOK}
              </li>
              <li className="table list-group-item">
                <h4>CNY</h4>
                {currencyPrice.CNY}
              </li>
              <li className="table list-group-item">
                <h4>BGN</h4>
                {currencyPrice.BGN}
              </li>
              <li className="table list-group-item">
                <h4>PHP</h4>
                {currencyPrice.PHP}
              </li>
              <li className="table list-group-item">
                <h4>PLN</h4>
                {currencyPrice.PLN}
              </li>
              <li className="table list-group-item">
                <h4>ZAR</h4>
                {currencyPrice.ZAR}
              </li>
              <li className="table list-group-item">
                <h4>CAD</h4>
                {currencyPrice.CAD}
              </li>
              <li className="table list-group-item">
                <h4>ISK</h4>
                {currencyPrice.ISK}
              </li>
              <li className="table list-group-item">
                <h4>BRL</h4>
                {currencyPrice.BRL}
              </li>
              <li className="table list-group-item">
                <h4>RON</h4>
                {currencyPrice.RON}
              </li>
              <li className="table list-group-item">
                <h4>NZD</h4>
                {currencyPrice.NZD}
              </li>
              <li className="table list-group-item">
                <h4>TRY</h4>
                {currencyPrice.TRY}
              </li>
              <li className="table list-group-item">
                <h4>JPY</h4>
                {currencyPrice.JPY}
              </li>
              <li className="table list-group-item">
                <h4>RUB</h4>
                {currencyPrice.RUB}
              </li>
              <li className="table list-group-item">
                <h4>KRW</h4>
                {currencyPrice.KRW}
              </li>
              <li className="table list-group-item">
                <h4>USD</h4>
                {currencyPrice.USD}
              </li>
              <li className="table list-group-item">
                <h4>AUD</h4>
                {currencyPrice.AUD}
              </li>
              <li className="table list-group-item">
                <h4>HUF</h4>
                {currencyPrice.HUF}
              </li>
              <li className="table list-group-item">
                <h4>SEK</h4>
                {currencyPrice.SEK}
              </li>
            </ul>
          </div>
        </main>
      </div>
    </body>
  )
}

export default App
